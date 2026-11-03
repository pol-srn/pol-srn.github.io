const REGLAGES_FEU = {
  chargement: {
    largeur: 88,
    hauteur: 100,
    centreX: 44,
    baseY: 92,
    cendreRayon: 26,
    cendreHauteur: 8,
    hauteurFlamme: 46,
    demiLargeur: 17,
    langues: [
      { decalage: 0, hauteur: 1, largeur: 1, phase: 0 },
      { decalage: -7, hauteur: 0.68, largeur: 0.7, phase: 1.9 },
      { decalage: 7, hauteur: 0.74, largeur: 0.7, phase: 3.7 }
    ],
    balancement: 2.6,
    vitesse: 2.4,
    epee: { sommet: 12, inclinaison: 0.06, largeurLame: 3 },
    os: [[24, 90, 15, 84], [62, 91, 72, 86], [30, 93, 40, 89]],
    crane: [58, 86],
    palette: ["#5a1c14", "#9a3a1e", "#d0642a", "#f0a040", "#ffd27a", "#fff0c8"],
    braises: 0.15,
    fumeeEteint: 0.7,
    fumeeAllume: 0.15,
    etincellesAllumage: 26
  },
  hero: {
    largeur: 120,
    hauteur: 206,
    centreX: 60,
    baseY: 196,
    cendreRayon: 40,
    cendreHauteur: 12,
    hauteurFlamme: 74,
    demiLargeur: 26,
    langues: [
      { decalage: 0, hauteur: 1, largeur: 0.9, phase: 0 },
      { decalage: -11, hauteur: 0.78, largeur: 0.7, phase: 1.3 },
      { decalage: 11, hauteur: 0.82, largeur: 0.7, phase: 2.6 },
      { decalage: -19, hauteur: 0.5, largeur: 0.5, phase: 4.1 },
      { decalage: 19, hauteur: 0.46, largeur: 0.5, phase: 5.2 }
    ],
    balancement: 3.4,
    vitesse: 3.1,
    epee: { sommet: 10, inclinaison: 0.065, largeurLame: 4 },
    os: [[30, 194, 16, 184], [86, 195, 104, 188], [44, 198, 58, 192], [76, 199, 66, 191]],
    crane: [92, 187],
    palette: ["#4e1610", "#8e2a18", "#c8481e", "#ea7a2c", "#ffb84a", "#ffe6a8"],
    braises: 0.35,
    fumeeEteint: 0.5,
    fumeeAllume: 0.12,
    etincellesAllumage: 30
  }
};

const IMAGES_PAR_SECONDE_FEU = 12;

const COULEURS_FEU = {
  fumee: ["#6e7e90", "#4e5e72", "#36424f"],
  cendre: ["#2c2c32", "#3a3a42", "#4a4a52", "#5c5c64"],
  cendreChaude: ["#4a3028", "#6a4030"],
  os: ["#d8ccb2", "#a89c84", "#6e6454"],
  orbite: "#16100e",
  epeeSombre: "#2a1610",
  epeeMoyen: "#5a3420",
  epeeClair: "#8e5a36",
  epeeReflet: "#c87a44",
  epeeBraise: "#e0602a",
  etincelle: ["#fff1c0", "#ffd24a", "#e0602a"]
};

function creerFeu(canvas, reglages) {
  const contexte = canvas.getContext("2d");
  const etat = {
    actif: false,
    mode: "eteint",
    allumage: 0,
    intensite: 1,
    image: 0,
    derniere: 0,
    fumees: [],
    etincelles: []
  };

  const hachage = (a, b) => {
    let n = Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263);
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };

  const pixel = (x, y, couleur) => {
    contexte.fillStyle = couleur;
    contexte.fillRect(Math.round(x), Math.round(y), 1, 1);
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

  const ajouterFumee = (x, y) => {
    etat.fumees.push({ x, y, vx: (Math.random() - 0.5) * 0.3, vy: -0.4 - Math.random() * 0.35, age: 0, vie: 28 + Math.random() * 18, phase: Math.random() * 6 });
  };

  const sommetCendre = () => reglages.baseY - reglages.cendreHauteur;

  const mettreAJour = () => {
    const hauteur = hauteurFlamme();
    const taux = etat.mode === "eteint" ? reglages.fumeeEteint : reglages.fumeeAllume;
    if (Math.random() < taux) {
      ajouterFumee(reglages.centreX + (Math.random() - 0.5) * 6, sommetCendre() - 2 - reglages.hauteurFlamme * hauteur * 0.9);
    }
    if (etat.mode !== "eteint" && Math.random() < reglages.braises * hauteur) {
      etat.etincelles.push({ x: reglages.centreX + (Math.random() - 0.5) * reglages.demiLargeur, y: sommetCendre() - 6, vx: (Math.random() - 0.5) * 0.5, vy: -0.8 - Math.random() * 0.8, age: 0, vie: 20 + Math.random() * 18, flottante: true });
    }
    etat.fumees.forEach((p) => {
      p.age++;
      p.x += p.vx + Math.sin(p.age * 0.3 + p.phase) * 0.35;
      p.y += p.vy;
    });
    etat.etincelles.forEach((p) => {
      p.age++;
      p.x += p.vx + (p.flottante ? Math.sin(p.age * 0.45) * 0.3 : 0);
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

  const axeEpee = (y) => reglages.centreX + (reglages.baseY - y) * reglages.epee.inclinaison;

  const dessinerEpee = (hauteur) => {
    const { sommet, largeurLame } = reglages.epee;
    const bas = reglages.baseY - 3;
    const ax = (y) => Math.round(axeEpee(y));
    for (let a = 0; a < 16; a++) {
      const angle = (a / 16) * Math.PI * 2;
      pixel(ax(sommet + 2) + Math.cos(angle) * 2.2, sommet + 2 + Math.sin(angle) * 2.2, a < 6 ? COULEURS_FEU.epeeClair : COULEURS_FEU.epeeMoyen);
    }
    const debutPoignee = sommet + 5;
    const garde = debutPoignee + 9;
    for (let y = debutPoignee; y < garde; y++) {
      pixel(ax(y), y, y % 2 === 0 ? COULEURS_FEU.epeeMoyen : COULEURS_FEU.epeeSombre);
    }
    for (let dx = -5; dx <= 5; dx++) {
      const chute = Math.abs(dx) > 3 ? 1 : 0;
      pixel(ax(garde) + dx, garde + chute, Math.abs(dx) < 4 ? COULEURS_FEU.epeeClair : COULEURS_FEU.epeeMoyen);
      pixel(ax(garde) + dx, garde + 1 + chute, COULEURS_FEU.epeeSombre);
    }
    for (let y = garde + 2; y <= bas; y++) {
      const centre = ax(y);
      const torsade = y < garde + 14;
      const chaleur = hauteur > 0 ? Math.max(0, (y - (bas - reglages.hauteurFlamme * 0.8)) / (reglages.hauteurFlamme * 0.8)) : 0;
      for (let k = 0; k < largeurLame; k++) {
        const x = centre - Math.floor(largeurLame / 2) + k;
        let couleur = k === 0 ? COULEURS_FEU.epeeClair : k === largeurLame - 1 ? COULEURS_FEU.epeeSombre : COULEURS_FEU.epeeMoyen;
        if (torsade && (y + k) % 4 < 2) {
          couleur = k === 0 ? COULEURS_FEU.epeeMoyen : COULEURS_FEU.epeeClair;
        }
        if (chaleur > 0 && hachage(x * 5 + y, etat.image) < chaleur * 0.6 * hauteur) {
          couleur = chaleur > 0.6 ? COULEURS_FEU.epeeBraise : COULEURS_FEU.epeeReflet;
        }
        pixel(x, y, couleur);
      }
    }
  };

  const dessinerFlammes = (hauteur) => {
    if (hauteur <= 0) {
      return;
    }
    const temps = etat.image / IMAGES_PAR_SECONDE_FEU;
    const base = sommetCendre() + 2;
    const couverture = new Map();
    reglages.langues.forEach((langue) => {
      const h = reglages.hauteurFlamme * hauteur * langue.hauteur * (0.82 + 0.18 * Math.sin(temps * reglages.vitesse * 1.3 + langue.phase));
      const largeur = reglages.demiLargeur * langue.largeur * Math.min(1.1, 0.4 + hauteur * 0.6);
      for (let k = 0; k < h; k++) {
        const v = k / h;
        const centre = reglages.centreX + langue.decalage * (1 - v * 0.5) + Math.sin(temps * reglages.vitesse + langue.phase + v * 3.2) * reglages.balancement * v * 1.6;
        const demi = largeur * Math.pow(1 - v, 0.75) * (v < 0.15 ? 0.75 + v * 1.6 : 1);
        for (let x = Math.floor(centre - demi); x <= Math.ceil(centre + demi); x++) {
          const r = Math.abs(x - centre) / Math.max(demi, 0.5);
          if (r > 1) {
            continue;
          }
          const chaleur = (1 - v) * 0.7 + (1 - r) * 0.5 - v * 0.25;
          const cle = `${x},${base - k}`;
          couverture.set(cle, Math.max(couverture.get(cle) || 0, chaleur));
        }
      }
    });
    couverture.forEach((chaleur, cle) => {
      const [x, y] = cle.split(",").map(Number);
      const niveau = chaleur > 1.02 ? 5 : chaleur > 0.85 ? 4 : chaleur > 0.62 ? 3 : chaleur > 0.4 ? 2 : chaleur > 0.18 ? 1 : 0;
      pixel(x, y, reglages.palette[niveau]);
    });
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

  const dessiner = () => {
    contexte.clearRect(0, 0, reglages.largeur, reglages.hauteur);
    const hauteur = hauteurFlamme();
    dessinerEpee(hauteur);
    dessinerCendre(hauteur);
    dessinerOs();
    dessinerFlammes(hauteur);
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
        etat.etincelles.push({ x: reglages.centreX + (Math.random() - 0.5) * 8, y: sommetCendre() - 3, vx: (Math.random() - 0.5) * 2.4, vy: -1.4 - Math.random() * 2.4, age: 0, vie: 12 + Math.random() * 12 });
      }
      for (let i = 0; i < 8; i++) {
        ajouterFumee(reglages.centreX + (Math.random() - 0.5) * 10, sommetCendre() - 4);
      }
      gsap.to(etat, { allumage: 1, duration: duree, ease: "none", onComplete: () => { etat.mode = "allume"; } });
    },
    embraser(duree) {
      gsap.to(etat, { intensite: 1.4, duration: duree, ease: "power2.in" });
    }
  };
}
