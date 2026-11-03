const FEU = {
  largeur: 64,
  hauteur: 72,
  imagesParSeconde: 12,
  centreX: 32,
  baseY: 59,
  hauteurFlamme: 40,
  demiLargeur: 14,
  fumeeEteint: 0.6,
  fumeeAllume: 0.2,
  etincellesAllumage: 24,
  braisesAllume: 0.25,
  dureeAllumage: 0.9
};

const PALETTE_FEU = {
  flammes: ["#86261a", "#b23c1e", "#e0602a", "#f59a2c", "#ffd24a", "#fff1c0"],
  fumee: ["#6e7e90", "#4e5e72", "#36424f"],
  bucheSombre: "#3a2416",
  bucheMoyen: "#5e3a22",
  bucheClair: "#82552f",
  bucheCoeur: "#b08458",
  bucheReflet: "#c86a2a",
  braiseSombre: "#5a1a10",
  braiseVive: "#a8321e",
  cendre: ["#26262c", "#34343c", "#44444c"],
  pierre: ["#262e38", "#3a4450", "#56626e", "#76828e"],
  etincelle: ["#fff1c0", "#ffd24a", "#e0602a"]
};

const feuChargement = {
  contexte: null,
  actif: false,
  mode: "eteint",
  allumage: 0,
  intensite: 1,
  image: 0,
  derniereImage: 0,
  fumees: [],
  etincelles: [],

  demarrer(canvas) {
    this.contexte = canvas.getContext("2d");
    this.actif = true;
    requestAnimationFrame((temps) => this.boucle(temps));
  },

  arreter() {
    this.actif = false;
  },

  allumer() {
    this.mode = "allumage";
    for (let i = 0; i < FEU.etincellesAllumage; i++) {
      this.etincelles.push({
        x: FEU.centreX + (Math.random() - 0.5) * 6,
        y: FEU.baseY - 4,
        vx: (Math.random() - 0.5) * 2.4,
        vy: -1.5 - Math.random() * 2.5,
        age: 0,
        vie: 12 + Math.random() * 12
      });
    }
    for (let i = 0; i < 8; i++) {
      this.ajouterFumee(FEU.centreX + (Math.random() - 0.5) * 10, FEU.baseY - 6);
    }
    gsap.to(this, { allumage: 1, duration: FEU.dureeAllumage, ease: "none", onComplete: () => { this.mode = "allume"; } });
  },

  embraser(duree) {
    gsap.to(this, { intensite: 1.45, duration: duree, ease: "power2.in" });
  },

  boucle(temps) {
    if (!this.actif) {
      return;
    }
    if (temps - this.derniereImage >= 1000 / FEU.imagesParSeconde) {
      this.derniereImage = temps;
      this.image++;
      this.mettreAJour();
      this.dessiner();
    }
    requestAnimationFrame((suivant) => this.boucle(suivant));
  },

  hachage(a, b) {
    let n = Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263);
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  },

  hauteurActuelle() {
    if (this.mode === "eteint") {
      return 0;
    }
    if (this.mode === "allume") {
      return this.intensite;
    }
    const t = this.allumage;
    if (t < 0.35) {
      return (t / 0.35) * 1.35;
    }
    if (t < 0.6) {
      return 1.35 - ((t - 0.35) / 0.25) * 0.45;
    }
    return 0.9 + ((t - 0.6) / 0.4) * 0.1;
  },

  ajouterFumee(x, y) {
    this.fumees.push({ x, y, vx: (Math.random() - 0.5) * 0.3, vy: -0.45 - Math.random() * 0.35, age: 0, vie: 26 + Math.random() * 16, phase: Math.random() * 6 });
  },

  mettreAJour() {
    const hauteur = this.hauteurActuelle();
    const tauxFumee = this.mode === "eteint" ? FEU.fumeeEteint : FEU.fumeeAllume;
    if (Math.random() < tauxFumee) {
      const sommet = FEU.baseY - 5 - FEU.hauteurFlamme * hauteur;
      this.ajouterFumee(FEU.centreX + (Math.random() - 0.5) * 4, sommet);
    }
    if (this.mode !== "eteint" && Math.random() < FEU.braisesAllume * hauteur) {
      this.etincelles.push({ x: FEU.centreX + (Math.random() - 0.5) * 16, y: FEU.baseY - 10, vx: (Math.random() - 0.5) * 0.6, vy: -0.9 - Math.random() * 0.8, age: 0, vie: 18 + Math.random() * 14, flottante: true });
    }
    this.fumees.forEach((p) => {
      p.age++;
      p.x += p.vx + Math.sin(p.age * 0.35 + p.phase) * 0.35;
      p.y += p.vy;
    });
    this.etincelles.forEach((p) => {
      p.age++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.flottante ? 0 : 0.14;
      if (p.flottante) {
        p.x += Math.sin(p.age * 0.5) * 0.3;
      }
    });
    this.fumees = this.fumees.filter((p) => p.age < p.vie);
    this.etincelles = this.etincelles.filter((p) => p.age < p.vie);
  },

  pixel(x, y, couleur) {
    this.contexte.fillStyle = couleur;
    this.contexte.fillRect(Math.round(x), Math.round(y), 1, 1);
  },

  dessiner() {
    this.contexte.clearRect(0, 0, FEU.largeur, FEU.hauteur);
    const hauteur = this.hauteurActuelle();
    this.dessinerCendre();
    this.dessinerPierres(false);
    this.dessinerBuche(18, 64, 36, 44, hauteur);
    this.dessinerBuche(46, 64, 28, 44, hauteur);
    this.dessinerFlammes(hauteur);
    this.dessinerBuche(13, 62, 51, 59, hauteur);
    this.dessinerPierres(true);
    this.dessinerBraises(hauteur);
    this.dessinerFumees();
    this.dessinerEtincelles();
  },

  dessinerCendre() {
    for (let x = -19; x <= 19; x++) {
      const epaisseur = Math.round(3 * Math.sqrt(1 - (x / 20) ** 2));
      for (let y = 0; y < epaisseur; y++) {
        const teinte = PALETTE_FEU.cendre[Math.floor(this.hachage(x + 100, y) * 3)];
        this.pixel(FEU.centreX + x, 63 - y, teinte);
      }
    }
  },

  dessinerPierres(devant) {
    const nombre = 11;
    for (let i = 0; i < nombre; i++) {
      const angle = (i / nombre) * Math.PI * 2;
      const cx = FEU.centreX + Math.cos(angle) * 22;
      const cy = 63 + Math.sin(angle) * 4.5;
      if ((Math.sin(angle) > 0) !== devant) {
        continue;
      }
      for (let dx = -2; dx <= 2; dx++) {
        for (let dy = -2; dy <= 1; dy++) {
          if (Math.abs(dx) === 2 && dy === -2) {
            continue;
          }
          const niveau = dy === -2 ? 3 : dy === -1 ? 2 : dx === 2 ? 0 : 1;
          this.pixel(cx + dx, cy + dy, PALETTE_FEU.pierre[niveau]);
        }
      }
    }
  },

  dessinerBuche(x0, y0, x1, y1, hauteur) {
    const pas = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
    for (let i = 0; i <= pas; i++) {
      const x = x0 + ((x1 - x0) * i) / pas;
      const y = y0 + ((y1 - y0) * i) / pas;
      for (let k = 0; k < 3; k++) {
        let couleur = k === 0 ? PALETTE_FEU.bucheClair : k === 1 ? PALETTE_FEU.bucheMoyen : PALETTE_FEU.bucheSombre;
        if (k === 0 && hauteur > 0 && this.hachage(i, this.image) < 0.5 * Math.min(1, hauteur)) {
          couleur = PALETTE_FEU.bucheReflet;
        }
        if (i === 0 || i === pas) {
          couleur = k === 1 ? PALETTE_FEU.bucheCoeur : PALETTE_FEU.bucheClair;
        }
        this.pixel(x, y + k, couleur);
        this.pixel(x + 1, y + k, couleur);
      }
    }
  },

  dessinerFlammes(hauteur) {
    if (hauteur <= 0) {
      return;
    }
    const demiLargeur = Math.round(FEU.demiLargeur * Math.min(1.15, 0.45 + hauteur * 0.55));
    for (let x = -demiLargeur; x <= demiLargeur; x++) {
      const distance = Math.abs(x) / demiLargeur;
      const bruit = (this.hachage(x + 40, this.image) * 2 + this.hachage(x + 39, this.image) + this.hachage(x + 41, this.image)) / 4;
      const colonne = FEU.hauteurFlamme * hauteur * (1 - distance ** 1.5) * (0.6 + 0.55 * bruit);
      for (let k = 0; k < colonne; k++) {
        const v = k / colonne;
        if (v > 0.7 && this.hachage(x * 7 + k, this.image * 3) < 0.2) {
          continue;
        }
        const chaleur = (1 - v) * 0.75 + (1 - distance) * 0.45 - v * 0.2;
        const niveau = v > 0.9 ? 0 : chaleur > 1 ? 5 : chaleur > 0.82 ? 4 : chaleur > 0.62 ? 3 : chaleur > 0.42 ? 2 : 1;
        this.pixel(FEU.centreX + x, FEU.baseY - k, PALETTE_FEU.flammes[niveau]);
      }
      if (bruit > 0.78 && distance < 0.7) {
        this.pixel(FEU.centreX + x, FEU.baseY - colonne - 2, PALETTE_FEU.flammes[1]);
      }
    }
  },

  dessinerBraises(hauteur) {
    const positions = [[29, 61], [31, 62], [34, 61], [36, 62], [32, 60]];
    positions.forEach(([x, y], i) => {
      const vive = (this.image + i) % 3 === 0 || hauteur > 0;
      this.pixel(x, y, vive ? PALETTE_FEU.braiseVive : PALETTE_FEU.braiseSombre);
    });
  },

  dessinerFumees() {
    this.fumees.forEach((p) => {
      const vie = p.age / p.vie;
      if (this.hachage(p.x * 3, p.age) < vie * 0.55) {
        return;
      }
      const couleur = PALETTE_FEU.fumee[vie < 0.35 ? 0 : vie < 0.7 ? 1 : 2];
      this.pixel(p.x, p.y, couleur);
      if (vie > 0.3 && vie < 0.8) {
        this.pixel(p.x + 1, p.y, couleur);
      }
    });
  },

  dessinerEtincelles() {
    this.etincelles.forEach((p) => {
      const vie = p.age / p.vie;
      this.pixel(p.x, p.y, PALETTE_FEU.etincelle[vie < 0.3 ? 0 : vie < 0.7 ? 1 : 2]);
    });
  }
};
