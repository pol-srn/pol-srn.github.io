const CHARGEMENT = {
  dureeMinimale: 2.8,
  delaiChute: 0.15,
  dureeChute: 1.6,
  hauteurApparition: 16,
  pointImpact: 0.8,
  courbeChute: "power2.in",
  entreeSeparation: 0.06,
  finSeparation: 0.92,
  ecartEtincelles: 26,
  toursEtincelles: 3,
  dureeAllumage: 0.9,
  opaciteLueur: 0.75,
  dureeApparitionLueur: 0.8,
  dureeRemplissage: 0.3,
  dureeEmbrasement: 0.6,
  agrandissementLueur: 3,
  dureeEclat: 0.5,
  rayonEclatDepart: "150vmax",
  rayonEclatFin: "9vmax",
  dureeResserrement: 1.1,
  dureeFonduSimple: 0.4
};

const DECOR = {
  nombreEtoiles: 190,
  partBrillante: 0.4,
  partScintillante: 0.7,
  partEclat: 0.08,
  hauteurCiel: 55,
  filante: {
    delaiMin: 3,
    delaiMax: 8,
    duree: 0.9,
    angleMin: 16,
    angleMax: 30,
    distance: 0.2,
    gaucheMin: 38,
    gaucheMax: 68,
    hautMin: 12,
    hautMax: 32
  },
  derivBrumeLoin: 1.2,
  dureeBrumeLoin: 26,
  derivBrumeProche: 2,
  dureeBrumeProche: 17,
  parallaxe: {
    ".hero__calque--ciel, .hero__etoiles": 10,
    ".hero__calque--montagne": 8,
    ".hero__calque--brume-loin": 6,
    ".hero__calque--foret-loin": 4,
    ".hero__calque--brume-proche": 3,
    ".hero__calque--foret-proche": 2
  }
};

const NAVIGATION = {
  seuilRepli: "top -12%",
  pasDeploye: "1rem",
  pasReplie: "3.75rem",
  dureeRepli: 0.8,
  debutZone: "top 55%",
  dureeApparitionAnnonce: 0.35,
  pauseAnnonce: 0.25,
  dureeGlissement: 0.7
};

const APPARITION = {
  decalage: 24,
  duree: 0.6,
  ecart: 0.08,
  courbe: "power3.out"
};

const AJUSTEMENT = {
  delaiRedimensionnement: 150,
  largeurReference: 1520
};

const TRANSITION = {
  duree: 2.2,
  courbe: "power2.inOut",
  repos: 700,
  seuilTactile: 30,
  grille: { largeur: 816, hauteur: 452 },
  arrivee: { x: 376.75, y: 126, largeur: 109.525, hauteur: 60.645 },
  luneArrivee: { x: 1344, y: 215, rayon: 112 },
  detourage: {
    marge: 230,
    fonduBas: 0.22,
    fonduCotes: 0.06,
    pointe: { gauche: 893, droite: 993, hauteur: 216, pixel: 6, couleurs: ["#0b1a29", "#23415c", "#3e677e"] }
  },
  calques: [
    { cible: ".hero__calque--ciel", profondeur: 0.45, plan: "fond", etoiles: true },
    { cible: ".hero__calque--montagne", profondeur: 1, plan: "fond" },
    { cible: ".hero__calque--brume-loin", profondeur: 1.04, plan: "devant", fondu: [0.55, 0.85] },
    { cible: ".hero__calque--foret-loin", profondeur: 1.08, plan: "devant", fondu: [0.5, 0.82] },
    { cible: ".hero__calque--brume-proche", profondeur: 1.15, plan: "devant", fondu: [0.45, 0.8] },
    { cible: ".hero__calque--foret-proche", profondeur: 1.35, plan: "devant", fondu: [0.3, 0.65] },
    { cible: ".hero__calque--arcade", profondeur: 1.3, plan: "devant", fondu: [0.55, 0.8] },
    { cible: ".hero__feu", profondeur: 1.3, plan: "devant", fondu: [0.25, 0.55] }
  ],
  html: [
    { cible: ".hero__contenu", profondeur: 1.3, fondu: [0, 0.45] },
    { cible: ".hero__halo", profondeur: 1.3, fondu: [0, 0.35] },
    { cible: ".hero__lune", profondeur: 1, fondu: [0.2, 0.5] },
    { cible: ".hero__vignette", profondeur: 1, fondu: [0, 0.5] }
  ],
  revelation: [0.04, 0.3],
  cielArrivee: [0.72, 0.95],
  bordsNets: [0.97, 1],
  bordAdouci: 0.14,
  dureeVoile: 0.3,
  dureeVoileDecor: 0.8,
  touchesBas: ["ArrowDown", "PageDown", " "],
  touchesHaut: ["ArrowUp", "PageUp", "Home"]
};

const ONGLETS = {
  dureeFondu: 0.3,
  courbeFondu: "power1.out",
  or: {
    entree: 0.45,
    sortie: 0.6,
    ondulation: 4,
    largeur: 152,
    hauteur: 192,
    debordement: 16,
    vagues: [{ amplitude: 9, frequence: 0.09 }, { amplitude: 4, frequence: 0.21 }],
    pincement: 10,
    halo: 7,
    couleurs: { coeur: [255, 247, 214], clair: [255, 233, 160], vif: [245, 204, 90], or: [224, 168, 46], ride: [199, 146, 42], halo: [184, 134, 11] }
  },
  touches: { precedent: ["ArrowUp", "ArrowLeft"], suivant: ["ArrowDown", "ArrowRight"], premier: ["Home"], dernier: ["End"] }
};

const SELECTEURS = {
  chargement: ".chargement",
  chargementFeu: ".chargement__feu",
  chargementCanvas: ".chargement__canvas",
  chargementLueur: ".chargement__lueur",
  chargementEtincelle: ".chargement__etincelle",
  chargementJauge: ".chargement__jauge",
  chargementRemplissage: ".chargement__remplissage",
  chargementScene: ".chargement__scene",
  chargementEclat: ".chargement__eclat",
  hero: ".hero",
  heroScene: ".hero__scene",
  heroCamera: ".hero__camera",
  heroFeu: ".hero__feu",
  zoneApropos: "#a-propos",
  decorApropos: ".apropos__decor",
  lienApropos: "a[href='#a-propos']",
  lienAccueil: "a[href='#accueil']",
  tablist: "[role='tablist']",
  halo: ".hero__halo",
  etoiles: ".hero__etoiles",
  brumeLoin: ".hero__calque--brume-loin",
  brumeProche: ".hero__calque--brume-proche",
  chemin: ".chemin",
  etape: ".chemin__etape",
  lien: ".chemin__lien",
  nom: ".chemin__nom",
  feu: ".chemin__feu",
  etincelle: ".chemin__etincelle",
  annonce: ".annonce",
  annonceVoile: ".annonce__voile",
  annonceContenu: ".annonce__contenu",
  annonceTitre: ".annonce__titre",
  annonceFilet: ".annonce__filet",
  annonceSousTitre: ".annonce__sous-titre",
  zone: ".zone",
  zoneTitre: ".zone__titre",
  onglets: ".classes",
  onglet: ".classes__choix",
  portrait: ".apropos__portrait",
  orPortrait: ".apropos__or",
  panneau: ".apropos__panneau",
  equipement: ".equipement",
  caseObjet: ".equipement__case",
  detailObjet: ".equipement__detail",
  ajustable: ".apropos",
  contenuZone: ".zone__texte, .apropos__classes, .apropos__identite, .apropos__panneau:not([hidden])"
};

const CLASSES = {
  chargementActif: "chargement-actif",
  lienActif: "chemin__lien--actif",
  etapeParcourue: "chemin__etape--parcourue",
  cheminDeploye: "chemin--deploye",
  etoile: "hero__etoile",
  etoileScintille: "hero__etoile--scintille",
  etoileBrillante: "hero__etoile--brillante",
  etoileEclat: "hero__etoile--eclat",
  filante: "hero__filante",
  heroPassage: "hero--passage"
};

const MEDIAS = {
  ordinateur: "(min-width: 48rem)",
  ajustement: "(min-width: 64rem)",
  mouvement: "(prefers-reduced-motion: no-preference)"
};

gsap.registerPlugin(ScrollTrigger);

const mouvementAutorise = window.matchMedia(MEDIAS.mouvement).matches;
const hero = document.querySelector(SELECTEURS.hero);
const chemin = document.querySelector(SELECTEURS.chemin);
const etapes = [...document.querySelectorAll(SELECTEURS.etape)];
const liens = [...document.querySelectorAll(SELECTEURS.lien)];
const etincelle = document.querySelector(SELECTEURS.etincelle);
const sections = liens.map((lien) => document.querySelector(lien.getAttribute("href")));
const annonce = document.querySelector(SELECTEURS.annonce);
const annonceTitre = document.querySelector(SELECTEURS.annonceTitre);
const zonesDecouvertes = new Set();
const feuHero = creerFeu(document.querySelector(SELECTEURS.heroFeu), REGLAGES_FEU.hero);
let indexActif = 0;
let enTransition = false;
let reposJusqua = 0;
let derivesBrume = [];
let zoneDifferee = null;
let animationAnnonce = null;
let animationPortrait = null;
let titreEnAttente = null;
let prochaineFilante = null;

function activerEtape(index) {
  indexActif = index;
  liens.forEach((lien, i) => {
    lien.classList.toggle(CLASSES.lienActif, i === index);
    if (i === index) {
      lien.setAttribute("aria-current", "location");
    } else {
      lien.removeAttribute("aria-current");
    }
    etapes[i].classList.toggle(CLASSES.etapeParcourue, i < index);
  });
}

function suivreChargement(surProgression) {
  const images = [...document.images];
  const total = images.length + 1;
  let charges = 0;
  const avancer = () => {
    charges++;
    surProgression(charges / total);
  };
  const attentes = images.map((image) => {
    if (image.complete) {
      avancer();
      return Promise.resolve();
    }
    return new Promise((fin) => {
      image.addEventListener("load", () => { avancer(); fin(); }, { once: true });
      image.addEventListener("error", () => { avancer(); fin(); }, { once: true });
    });
  });
  attentes.push(document.fonts.ready.then(avancer));
  return Promise.all(attentes);
}

function terminerChargement(ecran) {
  ecran.remove();
  document.documentElement.classList.remove(CLASSES.chargementActif);
  ajusterContenus();
  ScrollTrigger.refresh();
}

function faireTomberEtincelles(feu, quandArrivee) {
  const [premiere, seconde] = document.querySelectorAll(SELECTEURS.chargementEtincelle);
  const courbe = gsap.parseEase(CHARGEMENT.courbeChute);
  const chute = { progression: 0 };
  const depart = () => -CHARGEMENT.hauteurApparition - feu.getBoundingClientRect().top;
  const arrivee = () => feu.offsetHeight * CHARGEMENT.pointImpact;
  return gsap.timeline({ delay: CHARGEMENT.delaiChute })
    .set([premiere, seconde], { opacity: 1, y: depart(), x: 0 })
    .to(chute, {
      progression: 1,
      duration: CHARGEMENT.dureeChute,
      ease: "none",
      onUpdate: () => {
        const p = chute.progression;
        const y = depart() + (arrivee() - depart()) * courbe(p);
        const haut = feu.getBoundingClientRect().top;
        const entree = window.innerHeight * CHARGEMENT.entreeSeparation;
        const s = gsap.utils.clamp(0, 1, (haut + y - entree) / ((haut + arrivee() - entree) * CHARGEMENT.finSeparation));
        const ecart = CHARGEMENT.ecartEtincelles * Math.sin(Math.PI * s);
        const angle = s * Math.PI * 2 * CHARGEMENT.toursEtincelles;
        const profondeur = Math.cos(angle);
        gsap.set(premiere, { y, x: ecart * Math.sin(angle), scale: 1 + 0.35 * profondeur, opacity: 0.75 + 0.25 * profondeur });
        gsap.set(seconde, { y, x: -ecart * Math.sin(angle), scale: 1 - 0.35 * profondeur, opacity: 0.75 - 0.25 * profondeur });
      }
    })
    .set([premiere, seconde], { opacity: 0 })
    .add(quandArrivee);
}

function lancerChargement() {
  const ecran = document.querySelector(SELECTEURS.chargement);
  if (!ecran) {
    return;
  }
  const jauge = document.querySelector(SELECTEURS.chargementJauge);
  const remplissage = document.querySelector(SELECTEURS.chargementRemplissage);
  const feuElement = document.querySelector(SELECTEURS.chargementFeu);
  const feuChargement = creerFeu(document.querySelector(SELECTEURS.chargementCanvas), REGLAGES_FEU.chargement);
  const minuteur = { progression: 0 };
  let progressionReelle = 0;

  const afficherProgression = () => {
    const valeur = Math.min(minuteur.progression, progressionReelle);
    gsap.set(remplissage, { scaleX: valeur });
    jauge.style.setProperty("--progression", valeur);
  };

  if (!mouvementAutorise) {
    feuChargement.figer("allume");
    minuteur.progression = 1;
    suivreChargement((valeur) => {
      progressionReelle = valeur;
      afficherProgression();
    }).then(() => {
      gsap.to(ecran, { autoAlpha: 0, duration: CHARGEMENT.dureeFonduSimple, onComplete: () => terminerChargement(ecran) });
    });
    return;
  }

  feuChargement.demarrer("eteint");

  const attenteTemps = gsap.to(minuteur, { progression: 1, duration: CHARGEMENT.dureeMinimale, ease: "none", onUpdate: afficherProgression }).then();

  const attenteAllumage = faireTomberEtincelles(feuElement, () => {
    feuChargement.allumer(CHARGEMENT.dureeAllumage);
    gsap.to(SELECTEURS.chargementLueur, { opacity: CHARGEMENT.opaciteLueur, duration: CHARGEMENT.dureeApparitionLueur, ease: "power2.out", onComplete: () => {
      gsap.to(SELECTEURS.chargementLueur, { scale: () => gsap.utils.random(0.95, 1.05), opacity: () => gsap.utils.random(0.62, 0.82), duration: () => gsap.utils.random(0.15, 0.3), repeat: -1, repeatRefresh: true, ease: "sine.inOut" });
    } });
  }).then();

  const attenteFichiers = suivreChargement((valeur) => {
    progressionReelle = valeur;
    afficherProgression();
  });

  const embraser = () => {
    gsap.killTweensOf(SELECTEURS.chargementLueur);
    feuChargement.embraser(CHARGEMENT.dureeEmbrasement);
    const eclat = document.querySelector(SELECTEURS.chargementEclat);
    gsap.set(eclat, { "--eclat-rayon": CHARGEMENT.rayonEclatDepart });
    gsap.timeline({ onComplete: () => terminerChargement(ecran) })
      .to(SELECTEURS.chargementLueur, { scale: CHARGEMENT.agrandissementLueur, opacity: 1, duration: CHARGEMENT.dureeEmbrasement, ease: "power2.in" })
      .to(eclat, { opacity: 1, duration: CHARGEMENT.dureeEclat, ease: "power2.in" }, 0)
      .add(() => {
        const zone = document.querySelector(SELECTEURS.heroFeu).getBoundingClientRect();
        gsap.set(eclat, { "--eclat-x": `${zone.left + zone.width / 2}px`, "--eclat-y": `${zone.top + zone.height * 0.8}px` });
        gsap.set(SELECTEURS.chargementScene, { autoAlpha: 0 });
        gsap.set(ecran, { backgroundColor: "transparent" });
        feuChargement.arreter();
      })
      .to(eclat, { "--eclat-rayon": CHARGEMENT.rayonEclatFin, duration: CHARGEMENT.dureeResserrement, ease: "power2.inOut" })
      .to(eclat, { opacity: 0, duration: CHARGEMENT.dureeResserrement * 0.45, ease: "power1.in" }, `-=${CHARGEMENT.dureeResserrement * 0.45}`);
  };

  Promise.all([attenteTemps, attenteFichiers, attenteAllumage]).then(() => {
    const reste = 1 - gsap.getProperty(remplissage, "scaleX");
    gsap.to(remplissage, { scaleX: 1, duration: CHARGEMENT.dureeRemplissage * reste, ease: "power1.out", onComplete: embraser });
    jauge.style.setProperty("--progression", 1);
  });
}

function creerEtoiles() {
  const conteneur = document.querySelector(SELECTEURS.etoiles);
  for (let i = 0; i < DECOR.nombreEtoiles; i++) {
    const etoile = document.createElement("span");
    etoile.className = CLASSES.etoile;
    etoile.style.setProperty("--x", `${(Math.random() * 100).toFixed(2)}%`);
    etoile.style.setProperty("--y", `${(1 + Math.random() * DECOR.hauteurCiel).toFixed(2)}%`);
    const eclat = Math.random() < DECOR.partEclat;
    const brillante = eclat || Math.random() < DECOR.partBrillante;
    etoile.classList.toggle(CLASSES.etoileBrillante, brillante);
    etoile.classList.toggle(CLASSES.etoileEclat, eclat);
    etoile.style.setProperty("--eclat", ((brillante ? 0.9 : 0.65) + Math.random() * 0.1).toFixed(2));
    if (eclat || Math.random() < DECOR.partScintillante) {
      etoile.classList.add(CLASSES.etoileScintille);
      etoile.style.setProperty("--duree", `${(eclat ? 2.4 + Math.random() * 2 : 1.2 + Math.random() * 1.8).toFixed(2)}s`);
      etoile.style.setProperty("--delai", `${(-Math.random() * 4).toFixed(2)}s`);
    }
    conteneur.append(etoile);
  }
}

function lancerEtoileFilante() {
  const { filante: reglages } = DECOR;
  const conteneur = document.querySelector(SELECTEURS.etoiles);
  const filante = document.createElement("span");
  const angle = gsap.utils.random(reglages.angleMin, reglages.angleMax);
  const sens = Math.random() < 0.5 ? 1 : -1;
  const distance = conteneur.offsetWidth * reglages.distance;
  const radians = (angle * Math.PI) / 180;
  filante.className = CLASSES.filante;
  filante.style.setProperty("--x", `${gsap.utils.random(reglages.gaucheMin, reglages.gaucheMax).toFixed(2)}%`);
  filante.style.setProperty("--y", `${gsap.utils.random(reglages.hautMin, reglages.hautMax).toFixed(2)}%`);
  conteneur.append(filante);
  gsap.set(filante, { xPercent: -100, yPercent: -50, rotation: sens > 0 ? angle : 180 - angle });
  gsap.timeline({ onComplete: () => filante.remove() })
    .to(filante, { x: sens * distance * Math.cos(radians), y: distance * Math.sin(radians), duration: reglages.duree, ease: "power1.in" })
    .fromTo(filante, { opacity: 0 }, { opacity: 1, duration: reglages.duree * 0.2, ease: "none" }, 0)
    .to(filante, { opacity: 0, duration: reglages.duree * 0.35, ease: "power1.in" }, reglages.duree * 0.65);
  programmerEtoileFilante(gsap.utils.random(reglages.delaiMin, reglages.delaiMax));
}

function programmerEtoileFilante(delai) {
  prochaineFilante?.kill();
  prochaineFilante = gsap.delayedCall(delai, lancerEtoileFilante);
}

function animerDecor() {
  Object.entries(DECOR.parallaxe).forEach(([cible, decalage]) => {
    gsap.to(cible, { yPercent: decalage, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
  });
  derivesBrume = [
    gsap.fromTo(SELECTEURS.brumeLoin, { xPercent: -DECOR.derivBrumeLoin, scale: 1.03 }, { xPercent: DECOR.derivBrumeLoin, scale: 1.03, duration: DECOR.dureeBrumeLoin, ease: "sine.inOut", repeat: -1, yoyo: true }),
    gsap.fromTo(SELECTEURS.brumeProche, { xPercent: DECOR.derivBrumeProche, scale: 1.05, opacity: 0.85 }, { xPercent: -DECOR.derivBrumeProche, scale: 1.05, opacity: 1, duration: DECOR.dureeBrumeProche, ease: "sine.inOut", repeat: -1, yoyo: true })
  ];
  gsap.to(SELECTEURS.halo, { opacity: () => gsap.utils.random(0.6, 1), duration: () => gsap.utils.random(0.12, 0.35), ease: "sine.inOut", repeat: -1, repeatRefresh: true });
}

function suivreSections(avecEtincelle) {
  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onToggle: (etat) => {
        if (etat.isActive) {
          activerEtape(index);
        }
      }
    });
    if (!avecEtincelle || index === sections.length - 1) {
      return;
    }
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      onUpdate: (etat) => {
        const pas = etapes[1].offsetTop - etapes[0].offsetTop;
        const trajet = pas - etapes[0].querySelector(SELECTEURS.feu).offsetHeight - etincelle.offsetHeight - 2;
        gsap.set(etincelle, { y: index * pas + etat.progress * trajet, opacity: etat.progress > 0.02 && etat.progress < 0.98 ? 1 : 0 });
      }
    });
  });
}

function transformerNavigation(avecMouvement) {
  const noms = [...chemin.querySelectorAll(SELECTEURS.nom)];
  let animationChemin = null;
  const replier = () => {
    const autres = noms.filter((nom, i) => i !== indexActif);
    if (!avecMouvement) {
      chemin.classList.remove(CLASSES.cheminDeploye);
      return;
    }
    animationChemin?.kill();
    animationChemin = gsap.timeline({ onComplete: () => {
      chemin.classList.remove(CLASSES.cheminDeploye);
      chemin.style.removeProperty("--pas-chemin-deploye");
      gsap.set(noms, { clearProps: "all" });
    } })
      .to(autres, { autoAlpha: 0, x: 8, duration: NAVIGATION.dureeRepli * 0.5, stagger: 0.04, ease: "power2.in" })
      .to(chemin, { "--pas-chemin-deploye": NAVIGATION.pasReplie, duration: NAVIGATION.dureeRepli, ease: "power3.inOut" }, "<0.1");
  };
  const deployer = () => {
    const replie = !chemin.classList.contains(CLASSES.cheminDeploye);
    chemin.classList.add(CLASSES.cheminDeploye);
    if (!avecMouvement) {
      return;
    }
    animationChemin?.kill();
    const autres = noms.filter((nom, i) => i !== indexActif);
    if (replie) {
      gsap.set(chemin, { "--pas-chemin-deploye": NAVIGATION.pasReplie });
      gsap.set(autres, { autoAlpha: 0, x: 8 });
    }
    animationChemin = gsap.timeline({ onComplete: () => {
      chemin.style.removeProperty("--pas-chemin-deploye");
      gsap.set(noms, { clearProps: "all" });
    } })
      .to(chemin, { "--pas-chemin-deploye": NAVIGATION.pasDeploye, duration: NAVIGATION.dureeRepli, ease: "power3.inOut" })
      .to(noms, { autoAlpha: 1, x: 0, duration: NAVIGATION.dureeRepli * 0.5, stagger: 0.04, ease: "power2.out" }, "-=0.3");
  };
  ScrollTrigger.create({ trigger: hero, start: NAVIGATION.seuilRepli, onEnter: replier, onLeaveBack: deployer });
}

// Accueil -> À propos : une seule image continue. Le décor du hero est redessiné sur sa grille de pixels
// (816×452), l'image d'arrivée se révèle en haute résolution à l'emplacement du château, une seule lune glisse.
function lisser(debut, fin, valeur) {
  const t = gsap.utils.clamp(0, 1, (valeur - debut) / (fin - debut));
  return t * t * (3 - 2 * t);
}

function creerToile(largeur, hauteur) {
  const toile = document.createElement("canvas");
  toile.width = largeur;
  toile.height = hauteur;
  return toile;
}

function chargerImage(source) {
  return new Promise((resoudre, rejeter) => {
    const image = new Image();
    image.onload = () => resoudre(image);
    image.onerror = rejeter;
    image.src = source;
  });
}

async function preparerRessources(decor) {
  const { grille, luneArrivee, detourage } = TRANSITION;
  const arrivee = await chargerImage(getComputedStyle(decor).backgroundImage.match(/url\("?(.*?)"?\)/)[1]);
  const largeurA = arrivee.naturalWidth, hauteurA = arrivee.naturalHeight;
  const arriveeNette = creerToile(largeurA, hauteurA);
  const contexteNette = arriveeNette.getContext("2d");
  contexteNette.drawImage(arrivee, 0, 0);
  const pixelsA = contexteNette.getImageData(0, 0, largeurA, hauteurA);

  // Pendant le zoom, le ciel de l'image est retiré : on garde le château, le rocher et la lune
  // (déjà réduits au même endroit dans le hero), avec la pointe de la flèche au-dessus de l'image
  // et un rocher qui se fond dans la montagne du hero.
  const { marge, pointe, fonduBas, fonduCotes } = detourage;
  const arriveeDetouree = creerToile(largeurA, hauteurA + marge);
  const contexteDetouree = arriveeDetouree.getContext("2d");
  const pixelsD = contexteDetouree.createImageData(largeurA, hauteurA + marge);
  for (let y = 0; y < hauteurA; y++) {
    for (let x = 0; x < largeurA; x++) {
      const i = (y * largeurA + x) * 4;
      const [r, v, b] = pixelsA.data.subarray(i, i + 3);
      const etoile = r > 150 && v > 150 && b > 150 && Math.hypot(x - luneArrivee.x, y - luneArrivee.y) > luneArrivee.rayon + 4;
      const ciel = etoile || (r <= 6 && b >= v + 12) || (x < 520 && y > 700 && r <= 30 && b >= v + 12);
      if (ciel) continue;
      const fondu = lisser(0, 1, (1 - y / hauteurA) / fonduBas) * lisser(0, 1, Math.min(x, largeurA - x) / largeurA / fonduCotes);
      const j = ((y + marge) * largeurA + x) * 4;
      pixelsD.data.set(pixelsA.data.subarray(i, i + 3), j);
      pixelsD.data[j + 3] = Math.round(255 * fondu);
    }
  }
  contexteDetouree.putImageData(pixelsD, 0, 0);
  const milieu = (pointe.gauche + pointe.droite) / 2;
  for (let y = 0; y < pointe.hauteur; y += pointe.pixel) {
    const demi = (pointe.droite - pointe.gauche) / 2 * (y + pointe.pixel) / pointe.hauteur;
    for (let x = Math.round((milieu - demi) / pointe.pixel) * pointe.pixel; x < milieu + demi; x += pointe.pixel) {
      const bordDroit = x + pointe.pixel >= milieu + demi;
      contexteDetouree.fillStyle = bordDroit ? pointe.couleurs[2] : x >= milieu ? pointe.couleurs[1] : pointe.couleurs[0];
      contexteDetouree.fillRect(x, marge - pointe.hauteur + y, pointe.pixel, pointe.pixel);
    }
  }

  // Le ciel complet de l'image arrive en fondu à la fin, bords adoucis.
  const arriveeAdoucie = creerToile(largeurA, hauteurA);
  const pixelsAdoucis = new ImageData(new Uint8ClampedArray(pixelsA.data), largeurA, hauteurA);
  for (let y = 0; y < hauteurA; y++) {
    for (let x = 0; x < largeurA; x++) {
      const bord = Math.min(x / largeurA, 1 - x / largeurA, y / hauteurA, 1 - y / hauteurA) / TRANSITION.bordAdouci;
      pixelsAdoucis.data[(y * largeurA + x) * 4 + 3] = Math.round(255 * lisser(0, 1, bord));
    }
  }
  arriveeAdoucie.getContext("2d").putImageData(pixelsAdoucis, 0, 0);

  return {
    arriveeNette, arriveeDetouree, arriveeAdoucie, largeurA, hauteurA,
    fond: creerToile(grille.largeur, grille.hauteur),
    devant: creerToile(grille.largeur, grille.hauteur)
  };
}

function preparerCamera(ressources, apropos) {
  const { grille, arrivee } = TRANSITION;
  const scene = document.querySelector(SELECTEURS.heroScene).getBoundingClientRect();
  const toile = document.querySelector(SELECTEURS.heroCamera);
  const ratio = window.devicePixelRatio || 1;
  toile.width = Math.round(scene.width * ratio);
  toile.height = Math.round(scene.height * ratio);
  const pas = scene.width / grille.largeur;
  const versGrille = (element) => {
    const b = element.getBoundingClientRect();
    return { x: (b.left - scene.left) / pas, y: (b.top - scene.top) / pas, largeur: b.width / pas, hauteur: b.height / pas };
  };
  const calques = TRANSITION.calques.map((reglage) => {
    const element = document.querySelector(reglage.cible);
    return { ...reglage, ...versGrille(element), source: element };
  });
  const etoiles = [...document.querySelectorAll(`.${CLASSES.etoile}`)].map((etoile) => {
    const style = getComputedStyle(etoile);
    return { ...versGrille(etoile), couleur: style.backgroundColor, opacite: parseFloat(style.opacity) };
  });
  const echelle = Math.max(apropos.clientWidth / ressources.largeurA, apropos.clientHeight / ressources.hauteurA);
  const final = {
    x: ((apropos.clientWidth - ressources.largeurA * echelle) / 2 - scene.left) / pas,
    y: -scene.top / pas,
    largeur: ressources.largeurA * echelle / pas
  };
  const zoomFinal = final.largeur / arrivee.largeur;
  const focale = { x: (final.x - arrivee.x * zoomFinal) / (1 - zoomFinal), y: (final.y - arrivee.y * zoomFinal) / (1 - zoomFinal) };
  const html = TRANSITION.html.map((reglage) => {
    const element = document.querySelector(reglage.cible);
    const b = element.getBoundingClientRect();
    gsap.set(element, { transformOrigin: `${scene.left + focale.x * pas - b.left}px ${scene.top + focale.y * pas - b.top}px` });
    return { ...reglage, element };
  });
  return { ressources, contexte: toile.getContext("2d"), largeur: toile.width, hauteur: toile.height, echelleToile: toile.width / grille.largeur, calques, etoiles, html, zoomFinal, focale };
}

function dessinerCamera(camera, avancee) {
  const { ressources, contexte, focale, echelleToile } = camera;
  const { grille, arrivee } = TRANSITION;
  const zoom = Math.exp(Math.log(camera.zoomFinal) * avancee);
  const placer = (objet, z) => ({ x: focale.x + (objet.x - focale.x) * z, y: focale.y + (objet.y - focale.y) * z, largeur: objet.largeur * z, hauteur: objet.hauteur * z });
  const plans = { fond: ressources.fond.getContext("2d"), devant: ressources.devant.getContext("2d") };
  Object.values(plans).forEach((plan) => {
    plan.clearRect(0, 0, grille.largeur, grille.hauteur);
    plan.imageSmoothingEnabled = avancee > 0;
  });
  camera.calques.forEach((calque) => {
    const z = zoom ** calque.profondeur;
    const zone = placer(calque, z);
    const plan = plans[calque.plan];
    plan.globalAlpha = calque.fondu ? 1 - lisser(calque.fondu[0], calque.fondu[1], avancee) : 1;
    plan.drawImage(calque.source, zone.x, zone.y, zone.largeur, zone.hauteur);
    if (calque.etoiles) {
      camera.etoiles.forEach((etoile) => {
        const point = placer(etoile, z);
        plan.globalAlpha = etoile.opacite;
        plan.fillStyle = etoile.couleur;
        plan.fillRect(Math.round(point.x), Math.round(point.y), etoile.largeur, etoile.largeur);
      });
    }
  });
  plans.fond.globalAlpha = 1;
  plans.devant.globalAlpha = 1;

  contexte.clearRect(0, 0, camera.largeur, camera.hauteur);
  contexte.imageSmoothingEnabled = false;
  contexte.drawImage(ressources.fond, 0, 0, camera.largeur, camera.hauteur);

  const image = placer(arrivee, zoom);
  const enToile = { x: image.x * echelleToile, y: image.y * echelleToile, largeur: image.largeur * echelleToile, hauteur: image.hauteur * echelleToile };
  const revelee = lisser(TRANSITION.revelation[0], TRANSITION.revelation[1], avancee);
  const nette = lisser(TRANSITION.bordsNets[0], TRANSITION.bordsNets[1], avancee);
  const lisseImage = enToile.largeur < ressources.largeurA * 0.98;
  const marge = TRANSITION.detourage.marge * enToile.largeur / ressources.largeurA;
  // ordre : ciel de l'arrivée (fondu de fin), château et lune détourés, puis image nette à la toute fin
  contexte.imageSmoothingEnabled = lisseImage;
  contexte.globalAlpha = lisser(TRANSITION.cielArrivee[0], TRANSITION.cielArrivee[1], avancee);
  contexte.drawImage(ressources.arriveeAdoucie, enToile.x, enToile.y, enToile.largeur, enToile.hauteur);
  contexte.globalAlpha = revelee;
  contexte.drawImage(ressources.arriveeDetouree, enToile.x, enToile.y - marge, enToile.largeur, enToile.hauteur + marge);
  contexte.globalAlpha = nette;
  contexte.drawImage(ressources.arriveeNette, enToile.x, enToile.y, enToile.largeur, enToile.hauteur);

  contexte.globalAlpha = 1;
  contexte.imageSmoothingEnabled = false;
  contexte.drawImage(ressources.devant, 0, 0, camera.largeur, camera.hauteur);

  camera.html.forEach(({ element, profondeur, fondu }) => {
    gsap.set(element, { scale: zoom ** profondeur, opacity: 1 - lisser(fondu[0], fondu[1], avancee) });
  });
}

function entrerDansCamera(ressources, apropos, avancee) {
  derivesBrume.forEach((derive) => derive.pause());
  const camera = preparerCamera(ressources, apropos);
  dessinerCamera(camera, avancee);
  hero.classList.add(CLASSES.heroPassage);
  return camera;
}

function sortirDeCamera(camera) {
  camera.html.forEach(({ element }) => gsap.set(element, { clearProps: "transform,transformOrigin,opacity" }));
  hero.classList.remove(CLASSES.heroPassage);
  derivesBrume.forEach((derive) => derive.resume());
}

function allerA(section) {
  window.scrollTo({ top: section.offsetTop, behavior: "instant" });
  ScrollTrigger.update();
}

function terminerTransition() {
  enTransition = false;
  reposJusqua = performance.now() + TRANSITION.repos;
  if (zoneDifferee && !zonesDecouvertes.has(zoneDifferee.id)) {
    zonesDecouvertes.add(zoneDifferee.id);
    annoncerZone(zoneDifferee);
  }
  zoneDifferee = null;
}

function descendre(ressources, apropos, decor) {
  enTransition = true;
  const dejaVue = zonesDecouvertes.has(apropos.id);
  const camera = entrerDansCamera(ressources, apropos, 0);
  const etat = { avancee: 0 };
  gsap.timeline()
    .to(etat, { avancee: 1, duration: TRANSITION.duree, ease: TRANSITION.courbe, onUpdate: () => dessinerCamera(camera, etat.avancee) })
    .add(() => {
      gsap.set([decor, SELECTEURS.ajustable], { "--voile-decor": 0 });
      if (dejaVue) {
        gsap.set(SELECTEURS.ajustable, { autoAlpha: 0 });
      }
      allerA(apropos);
      sortirDeCamera(camera);
      gsap.to([decor, SELECTEURS.ajustable], { "--voile-decor": 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out" });
      if (dejaVue) {
        gsap.to(SELECTEURS.ajustable, { autoAlpha: 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out", clearProps: "opacity,visibility" });
      }
      terminerTransition();
    });
}

function remonter(ressources, apropos, decor) {
  enTransition = true;
  gsap.timeline()
    .to(SELECTEURS.ajustable, { autoAlpha: 0, duration: TRANSITION.dureeVoile, ease: "power1.in" })
    .to([decor, SELECTEURS.ajustable], { "--voile-decor": 0, duration: TRANSITION.dureeVoile, ease: "power1.in" }, "<")
    .add(() => {
      allerA(hero);
      const camera = entrerDansCamera(ressources, apropos, 1);
      gsap.set(SELECTEURS.ajustable, { clearProps: "opacity,visibility" });
      gsap.set([decor, SELECTEURS.ajustable], { "--voile-decor": 1 });
      const etat = { avancee: 1 };
      gsap.to(etat, {
        avancee: 0,
        duration: TRANSITION.duree,
        ease: TRANSITION.courbe,
        onUpdate: () => dessinerCamera(camera, etat.avancee),
        onComplete: () => {
          sortirDeCamera(camera);
          terminerTransition();
        }
      });
    });
}


function activerPassage() {
  const apropos = document.querySelector(SELECTEURS.zoneApropos);
  const decor = document.querySelector(SELECTEURS.decorApropos);
  let ressources = null;
  preparerRessources(decor).then((pretes) => { ressources = pretes; });
  const surHero = () => window.scrollY < hero.offsetTop + 8;
  const enHautApropos = () => Math.abs(window.scrollY - apropos.offsetTop) < 8;
  let departTactile = null;
  const bloque = () => enTransition || performance.now() < reposJusqua;
  const tenter = (versLeBas, evenement) => {
    if (document.documentElement.classList.contains(CLASSES.chargementActif)) {
      return false;
    }
    if (bloque() || (!ressources && concerne(versLeBas))) {
      evenement.preventDefault();
      return true;
    }
    if (versLeBas && surHero()) {
      evenement.preventDefault();
      descendre(ressources, apropos, decor);
      return true;
    }
    if (!versLeBas && enHautApropos()) {
      evenement.preventDefault();
      remonter(ressources, apropos, decor);
      return true;
    }
    return false;
  };
  const concerne = (versLeBas) => (versLeBas ? surHero() : enHautApropos());
  const surMolette = (evenement) => {
    if (evenement.deltaY !== 0) {
      tenter(evenement.deltaY > 0, evenement);
    }
  };
  const surDebutTactile = (evenement) => {
    departTactile = evenement.touches[0].clientY;
  };
  const surMouvementTactile = (evenement) => {
    if (departTactile === null) {
      return;
    }
    const ecart = departTactile - evenement.touches[0].clientY;
    if (bloque() || concerne(ecart > 0)) {
      evenement.preventDefault();
    }
    if (Math.abs(ecart) > TRANSITION.seuilTactile && tenter(ecart > 0, evenement)) {
      departTactile = null;
    }
  };
  const surTouche = (evenement) => {
    const cible = evenement.target;
    if (cible.closest(SELECTEURS.tablist) || (evenement.key === " " && cible.closest("button, a"))) {
      return;
    }
    if (TRANSITION.touchesBas.includes(evenement.key)) {
      tenter(true, evenement);
    } else if (TRANSITION.touchesHaut.includes(evenement.key)) {
      tenter(false, evenement);
    }
  };
  const surClic = (evenement) => {
    const lien = evenement.target.closest(`${SELECTEURS.lienApropos}, ${SELECTEURS.lienAccueil}`);
    if (lien) {
      tenter(lien.matches(SELECTEURS.lienApropos), evenement);
    }
  };
  window.addEventListener("wheel", surMolette, { passive: false });
  window.addEventListener("touchstart", surDebutTactile, { passive: true });
  window.addEventListener("touchmove", surMouvementTactile, { passive: false });
  window.addEventListener("keydown", surTouche);
  document.addEventListener("click", surClic);
  return () => {
    window.removeEventListener("wheel", surMolette);
    window.removeEventListener("touchstart", surDebutTactile);
    window.removeEventListener("touchmove", surMouvementTactile);
    window.removeEventListener("keydown", surTouche);
    document.removeEventListener("click", surClic);
  };
}

function reveler(titre) {
  if (!titre) {
    return;
  }
  gsap.set(titre, { opacity: 1 });
  const contenu = titre.closest(SELECTEURS.zone).querySelectorAll(SELECTEURS.contenuZone);
  gsap.to(contenu, { autoAlpha: 1, y: 0, duration: APPARITION.duree, stagger: APPARITION.ecart, ease: APPARITION.courbe, overwrite: true, clearProps: "transform" });
}

function annoncerZone(zone) {
  const titreZone = zone.querySelector(SELECTEURS.zoneTitre);
  if (animationAnnonce) {
    animationAnnonce.kill();
    reveler(titreEnAttente);
  }
  titreEnAttente = titreZone;
  annonceTitre.textContent = titreZone.textContent;
  gsap.set(annonceTitre, { x: 0, y: 0, scale: 1 });
  animationAnnonce = gsap.timeline()
    .set(annonce, { autoAlpha: 1 })
    .fromTo(SELECTEURS.annonceVoile, { opacity: 0 }, { opacity: 1, duration: NAVIGATION.dureeApparitionAnnonce, ease: "power2.out" })
    .fromTo(SELECTEURS.annonceContenu, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: NAVIGATION.dureeApparitionAnnonce, ease: "power3.out" }, "<0.1")
    .fromTo([SELECTEURS.annonceFilet, SELECTEURS.annonceSousTitre], { opacity: 0 }, { opacity: 1, duration: NAVIGATION.dureeApparitionAnnonce }, "<")
    .fromTo(SELECTEURS.annonceFilet, { scaleX: 0 }, { scaleX: 1, duration: NAVIGATION.dureeApparitionAnnonce * 1.4, ease: "power3.out" }, "<")
    .add(() => {
      const depart = annonceTitre.getBoundingClientRect();
      const titre = titreZone.getBoundingClientRect();
      const hautZone = zone.getBoundingClientRect().top;
      const cible = { left: titre.left, top: titre.top - hautZone, height: titre.height };
      gsap.timeline({ onComplete: () => {
        reveler(titreZone);
        titreEnAttente = null;
        gsap.set(annonce, { autoAlpha: 0 });
        gsap.set(annonceTitre, { x: 0, y: 0, scale: 1 });
      } })
        .to(annonceTitre, { x: cible.left - depart.left, y: cible.top - depart.top, scale: cible.height / depart.height, duration: NAVIGATION.dureeGlissement, ease: "power3.inOut" })
        .to([SELECTEURS.annonceVoile, SELECTEURS.annonceFilet, SELECTEURS.annonceSousTitre], { opacity: 0, duration: NAVIGATION.dureeGlissement * 0.7, ease: "power2.inOut" }, "<");
    }, `+=${NAVIGATION.pauseAnnonce}`);
}

function annoncerLesZones() {
  document.querySelectorAll(SELECTEURS.zone).forEach((zone) => {
    if (!zonesDecouvertes.has(zone.id)) {
      gsap.set(zone.querySelector(SELECTEURS.zoneTitre), { opacity: 0 });
      gsap.set(zone.querySelectorAll(SELECTEURS.contenuZone), { autoAlpha: 0, y: APPARITION.decalage });
    }
    ScrollTrigger.create({
      trigger: zone,
      start: NAVIGATION.debutZone,
      onEnter: () => {
        if (enTransition) {
          zoneDifferee = zone;
          return;
        }
        if (!zonesDecouvertes.has(zone.id)) {
          zonesDecouvertes.add(zone.id);
          annoncerZone(zone);
        }
      }
    });
  });
}

// Or liquide en pixel art : deux masses descendent du haut et montent du bas avec des fronts
// ondulants ; leur bord est le plus lumineux, un halo tramé les entoure.
function dessinerOr(contexte, avancee, phase) {
  const { largeur, hauteur, debordement, vagues, pincement, halo, couleurs } = ONGLETS.or;
  const trame = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
  const image = contexte.createImageData(largeur, hauteur);
  const profondeur = avancee * (hauteur / 2 + debordement);
  const poser = (i, couleur) => {
    image.data.set(couleur, i);
    image.data[i + 3] = 255;
  };
  for (let x = 0; x < largeur; x++) {
    const ecartCentre = Math.abs(x - largeur / 2) / (largeur / 2);
    const onde = (decalage) => vagues.reduce((somme, vague, n) => somme + vague.amplitude * Math.sin(x * vague.frequence + phase * (n + 1) + decalage), 0);
    const frontHaut = profondeur + onde(0) * avancee + pincement * ecartCentre * ecartCentre * avancee;
    const frontBas = profondeur + onde(2.1) * avancee + pincement * ecartCentre * ecartCentre * avancee;
    for (let y = 0; y < hauteur; y++) {
      const dedans = Math.max(frontHaut - y, frontBas - (hauteur - 1 - y));
      const i = (y * largeur + x) * 4;
      if (dedans >= 0) {
        if (dedans < 2) poser(i, couleurs.coeur);
        else if (dedans < 5) poser(i, couleurs.clair);
        else if (dedans < 10) poser(i, couleurs.vif);
        else poser(i, Math.floor(dedans + phase * 3) % 14 < 3 ? couleurs.ride : couleurs.or);
      } else if (-dedans < halo && avancee > 0) {
        const intensite = 1 - -dedans / halo;
        if (trame[y & 3][x & 3] / 16 < intensite * 0.85) poser(i, -dedans < 2 ? couleurs.or : couleurs.halo);
      }
    }
  }
  contexte.putImageData(image, 0, 0);
}

function activerOnglet(boutons, bouton, portrait, avecFocus) {
  boutons.forEach((autre) => {
    const actif = autre === bouton;
    autre.setAttribute("aria-selected", actif);
    autre.tabIndex = actif ? 0 : -1;
    document.getElementById(autre.getAttribute("aria-controls")).hidden = !actif;
  });
  if (avecFocus) {
    bouton.focus();
  }
  const changerPortrait = () => {
    portrait.src = bouton.dataset.portrait;
    portrait.alt = bouton.dataset.alt;
  };
  if (!mouvementAutorise) {
    changerPortrait();
    return;
  }
  const panneau = document.getElementById(bouton.getAttribute("aria-controls"));
  gsap.fromTo(panneau, { opacity: 0 }, { opacity: 1, duration: ONGLETS.dureeFondu, ease: ONGLETS.courbeFondu });
  // de l'or liquide coule du haut et du bas, recouvre le portrait, qui change, puis se retire
  const { or } = ONGLETS;
  const toile = portrait.parentElement.querySelector(SELECTEURS.orPortrait);
  const contexte = toile.getContext("2d");
  const etat = { avancee: 0, phase: Math.random() * Math.PI * 2 };
  const dessiner = () => dessinerOr(contexte, etat.avancee, etat.phase);
  animationPortrait?.progress(1).kill();
  animationPortrait = gsap.timeline()
    .set(toile, { autoAlpha: 1 })
    .to(etat, { phase: `+=${or.ondulation}`, duration: or.entree + or.sortie, ease: "none" }, 0)
    .to(etat, { avancee: 1, duration: or.entree, ease: "power2.in", onUpdate: dessiner }, 0)
    .add(changerPortrait, or.entree)
    .to(etat, { avancee: 0, duration: or.sortie, ease: "power2.out", onUpdate: dessiner }, or.entree)
    .set(toile, { autoAlpha: 0 }, or.entree + or.sortie);
}

function initialiserOnglets() {
  const liste = document.querySelector(SELECTEURS.onglets);
  if (!liste) {
    return;
  }
  const boutons = [...liste.querySelectorAll(SELECTEURS.onglet)];
  const portrait = document.querySelector(SELECTEURS.portrait);
  boutons.forEach((bouton) => {
    new Image().src = bouton.dataset.portrait;
    bouton.addEventListener("click", () => {
      if (bouton.getAttribute("aria-selected") !== "true") {
        activerOnglet(boutons, bouton, portrait, false);
      }
    });
  });
  liste.addEventListener("keydown", (evenement) => {
    const courant = boutons.indexOf(document.activeElement);
    const positions = {
      precedent: (courant - 1 + boutons.length) % boutons.length,
      suivant: (courant + 1) % boutons.length,
      premier: 0,
      dernier: boutons.length - 1
    };
    const action = Object.keys(ONGLETS.touches).find((nom) => ONGLETS.touches[nom].includes(evenement.key));
    if (courant < 0 || !action) {
      return;
    }
    evenement.preventDefault();
    activerOnglet(boutons, boutons[positions[action]], portrait, true);
  });
}

function choisirObjet(cases, choisie, detail) {
  cases.forEach((uneCase) => uneCase.setAttribute("aria-pressed", uneCase === choisie));
  const nom = document.createElement("strong");
  nom.textContent = choisie.dataset.nom;
  detail.replaceChildren(nom, ` · ${choisie.dataset.description}`);
}

function initialiserObjets() {
  document.querySelectorAll(SELECTEURS.equipement).forEach((equipement) => {
    const cases = [...equipement.querySelectorAll(SELECTEURS.caseObjet)];
    const detail = equipement.querySelector(SELECTEURS.detailObjet);
    cases.forEach((uneCase) => {
      ["click", "focus", "mouseenter"].forEach((type) => {
        uneCase.addEventListener(type, () => choisirObjet(cases, uneCase, detail));
      });
    });
  });
}

function ajusterContenus() {
  document.querySelectorAll(SELECTEURS.ajustable).forEach((bloc) => {
    bloc.style.setProperty("--echelle", 1);
    bloc.style.removeProperty("--hauteur-panneau");
    if (!window.matchMedia(MEDIAS.ajustement).matches) {
      return;
    }
    const panneaux = [...bloc.querySelectorAll(SELECTEURS.panneau)];
    const masques = panneaux.map((panneau) => panneau.hidden);
    let hauteurPanneau = 0;
    panneaux.forEach((panneau) => {
      panneaux.forEach((autre) => { autre.hidden = autre !== panneau; });
      hauteurPanneau = Math.max(hauteurPanneau, panneau.offsetHeight);
    });
    bloc.style.setProperty("--hauteur-panneau", `${hauteurPanneau}px`);
    panneaux.forEach((panneau, i) => { panneau.hidden = masques[i]; });
    const echelleLargeur = document.documentElement.clientWidth / AJUSTEMENT.largeurReference;
    const bordure = parseFloat(getComputedStyle(bloc.closest(SELECTEURS.zone)).borderTopWidth);
    const echelleHauteur = (window.innerHeight - bordure) / bloc.offsetHeight;
    bloc.style.setProperty("--echelle", (Math.floor(Math.min(echelleLargeur, echelleHauteur) * 1000) / 1000).toString());
  });
}

function suivreRedimensionnement() {
  let minuteur = null;
  window.addEventListener("resize", () => {
    clearTimeout(minuteur);
    minuteur = setTimeout(() => {
      ajusterContenus();
      ScrollTrigger.refresh();
    }, AJUSTEMENT.delaiRedimensionnement);
  });
}

creerEtoiles();
initialiserOnglets();
initialiserObjets();
ajusterContenus();
document.fonts.ready.then(ajusterContenus);
suivreRedimensionnement();
if (mouvementAutorise) {
  feuHero.demarrer("allume");
} else {
  feuHero.figer("allume");
}
lancerChargement();

const medias = gsap.matchMedia();

medias.add(MEDIAS, (contexte) => {
  const { ordinateur, mouvement } = contexte.conditions;
  suivreSections(ordinateur && mouvement);
  if (ordinateur) {
    transformerNavigation(mouvement);
  } else {
    chemin.classList.remove(CLASSES.cheminDeploye);
  }
  let arreterPassage = null;
  if (mouvement) {
    animerDecor();
    programmerEtoileFilante(DECOR.filante.delaiMin);
    annoncerLesZones();
    arreterPassage = activerPassage();
  }
  return () => {
    arreterPassage?.();
    prochaineFilante?.kill();
    chemin.classList.add(CLASSES.cheminDeploye);
    document.querySelectorAll(SELECTEURS.zoneTitre).forEach((titre) => gsap.set(titre, { clearProps: "opacity" }));
    gsap.set(document.querySelectorAll(SELECTEURS.contenuZone), { clearProps: "opacity,visibility,transform" });
  };
});
