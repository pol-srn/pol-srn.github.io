const REGLAGES_FEU = {
  chargement: {
    largeur: 88,
    hauteur: 100,
    centreX: 44,
    baseY: 92,
    cendreRayon: 26,
    cendreHauteur: 8,
    baseFlamme: 87,
    hauteurFlamme: 44,
    demiLargeur: 15,
    lobes: [
      { decalage: 0, hauteur: 1, largeur: 0.72 },
      { decalage: -9, hauteur: 0.74, largeur: 0.55 },
      { decalage: 9, hauteur: 0.82, largeur: 0.55 },
      { decalage: -15, hauteur: 0.44, largeur: 0.42 },
      { decalage: 15, hauteur: 0.4, largeur: 0.42 }
    ],
    mouvement: { ondulation: 4.2, montee: 16, decoupe: 1.3, frequence: 0.22, contraste: 2.3 },
    epee: { sommet: 34, inclinaison: 0 },
    os: [[24, 90, 15, 84], [62, 91, 72, 86], [30, 93, 40, 89]],
    crane: [58, 86],
    braises: 0.2,
    fumeeEteint: 0.7,
    fumeeAllume: 0.15,
    etincellesAllumage: 26
  },
  hero: {
    largeur: 120,
    hauteur: 206,
    centreX: 60,
    baseY: 172,
    hauteurFlamme: 92,
    demiLargeur: 40,
    calques: { arriere: 0, flamme: 1, avant: 2 },
    mouvement: { ondulation: 4.2, montee: 22, decoupe: 1.1, frequence: 0.16, contraste: 1 },
    braises: 0.45,
    fumeeEteint: 0.5,
    fumeeAllume: 0.1,
    etincellesAllumage: 30
  }
};

const IMAGES_PAR_SECONDE_FEU = 15;

const PALETTE_FLAMME = [
  [0.1, "#8a0c06"],
  [0.22, "#c01408"],
  [0.33, "#e03214"],
  [0.46, "#f0601e"],
  [0.58, "#f8862c"],
  [0.72, "#fcb444"],
  [0.88, "#ffe48c"]
];

const COULEURS_FEU = {
  fumee: ["#6e7e90", "#4e5e72", "#36424f"],
  cendre: ["#2c2c32", "#3a3a42", "#4a4a52", "#5c5c64"],
  cendreChaude: ["#4a3028", "#6a4030"],
  os: ["#d8ccb2", "#a89c84", "#6e6454"],
  orbite: "#16100e",
  acierSombre: "#1e232c",
  acierMoyen: "#4c5562",
  acierClair: "#8e98a6",
  acierReflet: "#c9d0d8",
  poignee: "#2a1c16",
  acierChaud: "#c0502a",
  etincelle: ["#fff1c0", "#ffd24a", "#e0602a"]
};

function creerFeu(canvas, reglages) {
  const contexte = canvas.getContext("2d");
  const { largeur: L, hauteur: H } = reglages;
  const baseFlamme = reglages.baseFlamme ?? reglages.baseY;
  const tampon = document.createElement("canvas");
  tampon.width = L;
  tampon.height = H;
  const contexteTampon = tampon.getContext("2d");
  const imageFlamme = contexteTampon.createImageData(L, H);
  const palette = PALETTE_FLAMME.map(([seuil, couleur]) => [seuil, parseInt(couleur.slice(1, 3), 16), parseInt(couleur.slice(3, 5), 16), parseInt(couleur.slice(5, 7), 16)]);
  const etat = {
    actif: false,
    pret: !reglages.calques,
    mode: "eteint",
    allumage: 0,
    intensite: 1,
    image: 0,
    derniere: 0,
    fumees: [],
    etincelles: [],
    champ: new Float32Array(L * H),
    cadre: { x0: 0, x1: L - 1, y0: 0, y1: H - 1 },
    sprite: null
  };

  const hachage = (a, b) => {
    let n = Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263);
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };

  const bruit = (x, y) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const fx = x - xi;
    const fy = y - yi;
    const sx = fx * fx * (3 - 2 * fx);
    const sy = fy * fy * (3 - 2 * fy);
    const a = hachage(xi, yi);
    const b = hachage(xi + 1, yi);
    const c = hachage(xi, yi + 1);
    const d = hachage(xi + 1, yi + 1);
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
  };

  const pixel = (x, y, couleur) => {
    contexte.fillStyle = couleur;
    contexte.fillRect(Math.round(x), Math.round(y), 1, 1);
  };

  const lisser = (champ) => {
    const copie = new Float32Array(champ.length);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < L; x++) {
        let somme = 0;
        let nombre = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < L && ny < H) {
              somme += champ[ny * L + nx];
              nombre++;
            }
          }
        }
        copie[y * L + x] = somme / nombre;
      }
    }
    return copie;
  };

  const encadrer = () => {
    let x0 = L;
    let x1 = 0;
    let y0 = H;
    let y1 = 0;
    etat.champ.forEach((valeur, i) => {
      if (valeur > 0.02) {
        const x = i % L;
        const y = Math.floor(i / L);
        x0 = Math.min(x0, x);
        x1 = Math.max(x1, x);
        y0 = Math.min(y0, y);
        y1 = Math.max(y1, y);
      }
    });
    const marge = Math.ceil(reglages.mouvement.ondulation) + 3;
    etat.cadre = { x0: Math.max(0, x0 - marge), x1: Math.min(L - 1, x1 + marge), y0: Math.max(0, y0 - Math.round(reglages.hauteurFlamme * 0.5)), y1: Math.min(H - 1, y1 + 2) };
  };

  const construireChampLobes = () => {
    reglages.lobes.forEach((lobe) => {
      const haut = reglages.hauteurFlamme * lobe.hauteur;
      for (let y = 0; y < H; y++) {
        const v = (baseFlamme - y) / haut;
        if (v < 0 || v > 1) {
          continue;
        }
        const centre = reglages.centreX + lobe.decalage * (1 - v * 0.45);
        const demi = reglages.demiLargeur * lobe.largeur * Math.pow(1 - v, 0.65) * (v < 0.12 ? 0.75 + v * 2 : 1);
        for (let x = 0; x < L; x++) {
          const u = Math.abs(x - centre) / Math.max(demi, 0.5);
          if (u > 1) {
            continue;
          }
          const valeur = Math.pow(1 - u, 1.1) * Math.pow(1 - v, 1.1) * 0.95 * Math.sqrt(lobe.hauteur);
          const i = y * L + x;
          etat.champ[i] = Math.max(etat.champ[i], valeur);
        }
      }
    });
    etat.champ = lisser(lisser(etat.champ));
    encadrer();
  };

  const construireChampImage = (image) => {
    const lecture = document.createElement("canvas");
    lecture.width = L;
    lecture.height = H;
    const contexteLecture = lecture.getContext("2d");
    contexteLecture.drawImage(image, reglages.calques.flamme * L, 0, L, H, 0, 0, L, H);
    const { data } = contexteLecture.getImageData(0, 0, L, H);
    for (let i = 0; i < L * H; i++) {
      if (data[i * 4 + 3] < 128) {
        continue;
      }
      const luminance = 0.3 * data[i * 4] + 0.59 * data[i * 4 + 1] + 0.11 * data[i * 4 + 2];
      etat.champ[i] = 0.15 + 0.85 * Math.min(1, Math.max(0, (luminance - 50) / 190));
    }
    const lisse = lisser(etat.champ);
    etat.champ = etat.champ.map((valeur, i) => Math.max(lisse[i], valeur * 0.85));
    encadrer();
  };

  const echantillonner = (x, y) => {
    if (x < 0 || y < 0 || x >= L - 1 || y >= H - 1) {
      return 0;
    }
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const fx = x - xi;
    const fy = y - yi;
    const i = yi * L + xi;
    const haut = etat.champ[i] + (etat.champ[i + 1] - etat.champ[i]) * fx;
    const bas = etat.champ[i + L] + (etat.champ[i + L + 1] - etat.champ[i + L]) * fx;
    return haut + (bas - haut) * fy;
  };

  const hauteurFlamme = () => {
    if (etat.mode === "eteint") {
      return 0;
    }
    if (etat.mode === "allume") {
      return etat.intensite;
    }
    const t = etat.allumage;
    if (t < 0.35) {
      return (t / 0.35) * 1.3;
    }
    if (t < 0.6) {
      return 1.3 - ((t - 0.35) / 0.25) * 0.4;
    }
    return 0.9 + ((t - 0.6) / 0.4) * 0.1;
  };

  const sommetFoyer = () => reglages.baseY - (reglages.cendreHauteur || 0);

  const ajouterFumee = (x, y) => {
    etat.fumees.push({ x, y, vx: (Math.random() - 0.5) * 0.3, vy: -0.4 - Math.random() * 0.35, age: 0, vie: 28 + Math.random() * 18, phase: Math.random() * 6 });
  };

  const mettreAJour = () => {
    const hauteur = hauteurFlamme();
    const taux = etat.mode === "eteint" ? reglages.fumeeEteint : reglages.fumeeAllume;
    if (Math.random() < taux) {
      ajouterFumee(reglages.centreX + (Math.random() - 0.5) * 6, sommetFoyer() - 2 - reglages.hauteurFlamme * Math.max(hauteur, 0.15) * 0.9);
    }
    if (etat.mode !== "eteint" && Math.random() < reglages.braises * hauteur) {
      etat.etincelles.push({ x: reglages.centreX + (Math.random() - 0.5) * reglages.demiLargeur, y: sommetFoyer() - reglages.hauteurFlamme * 0.3, vx: (Math.random() - 0.5) * 0.5, vy: -0.7 - Math.random() * 0.8, age: 0, vie: 22 + Math.random() * 22, flottante: true, phase: Math.random() * 6 });
    }
    etat.fumees.forEach((p) => {
      p.age++;
      p.x += p.vx + Math.sin(p.age * 0.3 + p.phase) * 0.35;
      p.y += p.vy;
    });
    etat.etincelles.forEach((p) => {
      p.age++;
      p.x += p.vx + (p.flottante ? Math.sin(p.age * 0.35 + p.phase) * 0.35 : 0);
      p.y += p.vy;
      p.vy += p.flottante ? 0 : 0.14;
    });
    etat.fumees = etat.fumees.filter((p) => p.age < p.vie);
    etat.etincelles = etat.etincelles.filter((p) => p.age < p.vie);
  };

  const dessinerCendre = (hauteur) => {
    const r = reglages.cendreRayon;
    for (let dx = -r; dx <= r; dx++) {
      const sommet = Math.round(reglages.cendreHauteur * Math.sqrt(Math.max(0, 1 - (dx / r) ** 2)));
      for (let k = 0; k <= sommet; k++) {
        const proche = 1 - Math.abs(dx) / r;
        let niveau = k === sommet ? 3 : k > sommet - 2 ? 2 : hachage(dx + 300, k) < 0.5 ? 1 : 0;
        if (hachage(dx * 3, k * 5) < 0.12) {
          niveau = Math.max(0, niveau - 1);
        }
        let couleur = COULEURS_FEU.cendre[niveau];
        if (hauteur > 0 && k > sommet - 3 && proche > 0.4 && hachage(dx, k + etat.image) < 0.35 * hauteur) {
          couleur = COULEURS_FEU.cendreChaude[hachage(dx, k) < 0.5 ? 0 : 1];
        }
        pixel(reglages.centreX + dx, reglages.baseY - k, couleur);
      }
    }
  };

  const dessinerOs = () => {
    reglages.os.forEach(([x0, y0, x1, y1]) => {
      const pas = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
      for (let i = 0; i <= pas; i++) {
        const x = x0 + ((x1 - x0) * i) / pas;
        const y = y0 + ((y1 - y0) * i) / pas;
        pixel(x, y, COULEURS_FEU.os[1]);
        pixel(x, y - 1, COULEURS_FEU.os[0]);
        if (i === 0 || i === pas) {
          pixel(x - 1, y - 1, COULEURS_FEU.os[0]);
          pixel(x + 1, y, COULEURS_FEU.os[2]);
        }
      }
    });
    const [cx, cy] = reglages.crane;
    const crane = [".xxx.", "xxxxx", "xoxox", ".xxx.", ".x.x."];
    crane.forEach((ligne, y) => [...ligne].forEach((c, x) => {
      if (c !== ".") {
        pixel(cx + x, cy + y, c === "o" ? COULEURS_FEU.orbite : y === 0 ? COULEURS_FEU.os[0] : COULEURS_FEU.os[1]);
      }
    }));
  };

  const dessinerEpee = (hauteur) => {
    const { sommet, inclinaison } = reglages.epee;
    const bas = reglages.baseY - 3;
    const ax = (y) => Math.round(reglages.centreX + (reglages.baseY - y) * inclinaison);
    const anneau = [[0, -2], [1, -2], [-1, -1], [2, -1], [-1, 0], [2, 0], [0, 1], [1, 1]];
    anneau.forEach(([dx, dy], i) => pixel(ax(sommet) + dx, sommet + dy, i < 3 ? COULEURS_FEU.acierClair : COULEURS_FEU.acierMoyen));
    const garde = sommet + 8;
    for (let y = sommet + 2; y < garde; y++) {
      pixel(ax(y), y, y % 2 === 0 ? COULEURS_FEU.poignee : COULEURS_FEU.acierSombre);
      pixel(ax(y) + 1, y, COULEURS_FEU.acierSombre);
    }
    for (let dx = -4; dx <= 5; dx++) {
      const pointe = dx === -4 || dx === 5 ? 1 : 0;
      pixel(ax(garde) + dx, garde + pointe, dx < 1 ? COULEURS_FEU.acierClair : COULEURS_FEU.acierMoyen);
      pixel(ax(garde) + dx, garde + 1 + pointe, COULEURS_FEU.acierSombre);
    }
    for (let y = garde + 2; y <= bas; y++) {
      const x = ax(y) - 1;
      const chaleur = hauteur > 0 ? Math.max(0, (y - (bas - reglages.hauteurFlamme * 0.5)) / (reglages.hauteurFlamme * 0.5)) : 0;
      const couleurs = [COULEURS_FEU.acierReflet, COULEURS_FEU.acierClair, COULEURS_FEU.acierMoyen, COULEURS_FEU.acierSombre];
      couleurs.forEach((couleur, k) => {
        const chauffe = chaleur > 0 && hachage(x * 5 + k + y, etat.image) < chaleur * 0.5 * hauteur;
        pixel(x + k, y, chauffe ? COULEURS_FEU.acierChaud : couleur);
      });
    }
  };

  const dessinerFlammes = (hauteur) => {
    if (hauteur <= 0) {
      return;
    }
    const { ondulation, montee, decoupe, frequence, contraste } = reglages.mouvement;
    const temps = etat.image / IMAGES_PAR_SECONDE_FEU;
    const { x0, x1, y0, y1 } = etat.cadre;
    const etirement = Math.max(hauteur, 0.05);
    const ouverture = Math.min(1, 0.55 + 0.45 * hauteur);
    const souffle = 0.94 + 0.12 * bruit(temps * 1.7, 7.3);
    const donnees = imageFlamme.data;
    donnees.fill(0);
    for (let y = y0; y <= y1; y++) {
      const v = Math.max(0, (baseFlamme - y) / reglages.hauteurFlamme);
      for (let x = x0; x <= x1; x++) {
        const dx = (bruit(x * 0.09, y * 0.06 + temps * 1.4) - 0.5) * ondulation * (0.3 + v * 1.4);
        const dy = (bruit(x * 0.07 + 31, y * 0.05 + temps * 1.1) - 0.5) * ondulation * 0.8;
        const sx = reglages.centreX + (x + dx - reglages.centreX) / ouverture;
        const sy = baseFlamme - (baseFlamme - (y + dy)) / etirement;
        const base = echantillonner(sx, sy);
        if (base <= 0.03) {
          continue;
        }
        const grain = 0.65 * bruit(x * frequence * 1.6, (y + temps * montee) * frequence * 0.6) + 0.35 * bruit(x * frequence * 3.4 + 17, (y + temps * montee * 1.5) * frequence * 1.3);
        const relief = Math.min(1, Math.max(0, (grain - 0.5) * contraste + 0.5));
        const chaleur = base * souffle * (1 - decoupe * 0.5 + decoupe * relief) - v * 0.06;
        let niveau = -1;
        for (let k = palette.length - 1; k >= 0; k--) {
          if (chaleur >= palette[k][0]) {
            niveau = k;
            break;
          }
        }
        if (niveau < 0) {
          continue;
        }
        const i = (y * L + x) * 4;
        donnees[i] = palette[niveau][1];
        donnees[i + 1] = palette[niveau][2];
        donnees[i + 2] = palette[niveau][3];
        donnees[i + 3] = 255;
      }
    }
    contexteTampon.putImageData(imageFlamme, 0, 0);
    contexte.drawImage(tampon, 0, 0);
  };

  const dessinerParticules = () => {
    etat.fumees.forEach((p) => {
      const vie = p.age / p.vie;
      if (hachage(p.x * 3, p.age) < vie * 0.55) {
        return;
      }
      const couleur = COULEURS_FEU.fumee[vie < 0.35 ? 0 : vie < 0.7 ? 1 : 2];
      pixel(p.x, p.y, couleur);
      if (vie > 0.3 && vie < 0.8) {
        pixel(p.x + 1, p.y, couleur);
      }
    });
    etat.etincelles.forEach((p) => {
      const vie = p.age / p.vie;
      pixel(p.x, p.y, COULEURS_FEU.etincelle[vie < 0.3 ? 0 : vie < 0.7 ? 1 : 2]);
    });
  };

  const dessinerCalque = (rang) => {
    contexte.drawImage(etat.sprite, rang * L, 0, L, H, 0, 0, L, H);
  };

  const dessiner = () => {
    if (!etat.pret) {
      return;
    }
    contexte.clearRect(0, 0, L, H);
    const hauteur = hauteurFlamme();
    if (reglages.calques) {
      dessinerCalque(reglages.calques.arriere);
      dessinerFlammes(hauteur);
      dessinerCalque(reglages.calques.avant);
    } else {
      dessinerEpee(hauteur);
      dessinerCendre(hauteur);
      dessinerOs();
      dessinerFlammes(hauteur);
    }
    dessinerParticules();
  };

  const boucle = (temps) => {
    if (!etat.actif) {
      return;
    }
    if (temps - etat.derniere >= 1000 / IMAGES_PAR_SECONDE_FEU) {
      etat.derniere = temps;
      etat.image++;
      mettreAJour();
      dessiner();
    }
    requestAnimationFrame(boucle);
  };

  if (reglages.calques) {
    const image = new Image();
    image.addEventListener("load", () => {
      etat.sprite = image;
      construireChampImage(image);
      etat.pret = true;
      dessiner();
    });
    image.src = canvas.dataset.sprite;
  } else {
    construireChampLobes();
  }

  return {
    demarrer(mode = "eteint") {
      etat.mode = mode;
      etat.actif = true;
      requestAnimationFrame(boucle);
    },
    figer(mode = "allume") {
      etat.mode = mode;
      dessiner();
    },
    arreter() {
      etat.actif = false;
    },
    allumer(duree) {
      etat.mode = "allumage";
      for (let i = 0; i < reglages.etincellesAllumage; i++) {
        etat.etincelles.push({ x: reglages.centreX + (Math.random() - 0.5) * 8, y: sommetFoyer() - 3, vx: (Math.random() - 0.5) * 2.4, vy: -1.4 - Math.random() * 2.4, age: 0, vie: 12 + Math.random() * 12 });
      }
      for (let i = 0; i < 8; i++) {
        ajouterFumee(reglages.centreX + (Math.random() - 0.5) * 10, sommetFoyer() - 4);
      }
      gsap.to(etat, { allumage: 1, duration: duree, ease: "none", onComplete: () => { etat.mode = "allume"; } });
    },
    embraser(duree) {
      gsap.to(etat, { intensite: 1.4, duration: duree, ease: "power2.in" });
    }
  };
}
