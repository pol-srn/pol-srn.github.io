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

// Décor vivant du hero, en pixels de la grille 816 × 452 : lucioles dans la forêt, braises qui
// montent du feu, lueur de la lanterne posée au sol, chauves-souris qui passent devant la lune.
const VIE = {
  imagesParSeconde: 12,
  lucioles: { nombre: 16, x: [250, 612], y: [240, 392], couleur: [214, 240, 138] },
  braises: { probabilite: 0.35, x: 432, ecart: 12, y: 318, vie: [40, 80], couleurs: [[255, 241, 192], [255, 210, 74], [224, 96, 42]] },
  lanterne: { x: 359, y: 418, rayon: 10, couleur: [255, 200, 110], opacite: 0.45 },
  chauvesSouris: { attente: [6, 13], vitesse: 9, y: [128, 150], couleur: [3, 4, 8], ailes: [["k.....k", "kk.k.kk", "..kkk.."], ["..kkk..", "kkkkkkk", "k.....k"]] }
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
  courbe: "power1.inOut",
  repos: 700,
  // une transition déjà vue se rejoue plus vite ; un clic ou Échap la fait défiler en accéléré
  accelerationRevue: 1.4,
  accelerationSaut: 10,
  touchesSaut: ["Escape"],
  seuilTactile: 30,
  grille: { largeur: 816, hauteur: 452 },
  arrivee: { x: 376.75, y: 126, largeur: 109.59, hauteur: 60.645 },
  luneArrivee: { x: 1346, y: 211, rayon: 112 },
  detourage: {
    marge: 230,
    // le ciel prolongé autour de l'image est pris sur sa partie gauche, vide jusqu'en bas
    cielGauche: 500,
    fonduBas: 0.12,
    fonduCotes: 0.06,
    pointe: { gauche: 897, droite: 989, hauteur: 216, pixel: 6, couleurs: ["#0b1a29", "#23415c", "#3e677e"] }
  },
  calques: [
    { cible: ".hero__calque--ciel", profondeur: 0.45, plan: "fond", etoiles: [0.4, 0.75] },
    { cible: ".hero__calque--montagne", profondeur: 1, plan: "fond" },
    { cible: ".hero__calque--nuit", profondeur: 1, plan: "fond", fondu: [0.1, 0.3] },
    { cible: ".hero__calque--brume-loin", profondeur: 1.04, plan: "devant", fondu: [0.35, 0.65] },
    { cible: ".hero__calque--foret-loin", profondeur: 1.08, plan: "devant", fondu: [0.4, 0.7] },
    { cible: ".hero__calque--brume-proche", profondeur: 1.15, plan: "devant", fondu: [0.3, 0.6] },
    { cible: ".hero__calque--foret-proche", profondeur: 1.7, plan: "devant", fondu: [0.5, 0.7] },
    { cible: ".hero__calque--arcade", profondeur: 1.5, plan: "devant", fondu: [0.55, 0.75] },
    { cible: ".hero__calque--objets", profondeur: 1.4, plan: "devant", fondu: [0.06, 0.2] },
    { cible: ".hero__calque--vie", profondeur: 1.3, plan: "devant", fondu: [0.04, 0.16] },
    { cible: ".hero__feu", profondeur: 1.3, plan: "devant", fondu: [0.06, 0.16] }
  ],
  html: [
    { cible: ".hero__contenu", profondeur: 1.3, fondu: [0, 0.05] },
    { cible: ".hero__halo", profondeur: 1.3, fondu: [0.04, 0.18] },
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

const PROJETS = {
  // pièce élargie à droite (1856 px) pour que la carte soit au centre de l'image
  image: { largeur: 1856, hauteur: 933 },
  carte: { x: 603, y: 218, largeur: 649, hauteur: 385 },
  // gauche = (1 - largeurCarte) / 2 : la carte est centrée dans l'écran
  cadrage: { gauche: 0.25, largeurCarte: 0.5, centreY: 0.53 },
  // bougies de la pièce : flammes redessinées et animées par-dessus la peinture (px de l'image :
  // milieu, pied de la flamme, largeur et hauteur), une case = 4 px comme les pixels peints
  bougies: {
    cellule: 4,
    imagesParSeconde: 10,
    flammes: [
      { x: 650, pied: 74, largeur: 14, hauteur: 30 },
      { x: 718, pied: 48, largeur: 16, hauteur: 36 },
      { x: 859, pied: 48, largeur: 16, hauteur: 36 },
      { x: 929, pied: 80, largeur: 14, hauteur: 32 },
      { x: 433, pied: 562, largeur: 14, hauteur: 32 },
      { x: 479, pied: 531, largeur: 16, hauteur: 38 },
      { x: 527, pied: 556, largeur: 14, hauteur: 34 },
      { x: 1506, pied: 560, largeur: 16, hauteur: 46 }
    ],
    couleurs: { coeur: [255, 250, 228], vive: [255, 222, 128], bord: [246, 150, 48], pointe: [200, 88, 26] },
    halo: { rayon: 11, opacite: 0.32, couleur: [255, 190, 96], paliers: 3 }
  },
  // changement de catégorie (IUT / perso) : durée d'effacement d'un parchemin et écart entre deux
  categories: { duree: 0.22, decalage: 0.06 },
  passage: {
    // fenêtre allumée du château (px de l'image du fond de l'À propos) : zone où chercher la vitre,
    // et rectangle intérieur de l'ouverture, que la caméra vise et qui finit par couvrir l'écran
    vitre: { gauche: 956, droite: 984, haut: 243, bas: 296 },
    ouverture: { gauche: 958, droite: 983, haut: 256, bas: 295 },
    // la pièce couvre toujours ce qu'on voit d'elle, avec cette marge pour qu'aucun bord ne se voie
    marge: 1.04,
    // part de l'avancée où l'on franchit la fenêtre (son ouverture couvre alors l'écran) : avant,
    // approche de la façade ; après, la caméra se pose dans la pièce
    franchie: 0.6,
    // profondeur maximale de la pièce derrière la fenêtre (en part de la distance de départ de la caméra)
    profondeurMax: 0.25,
    // courbe de temps : accélération comme avant jusqu'à ce moment (part de la durée), puis
    // ralentissement long et doux jusqu'à l'arrêt dans la pièce
    bascule: 0.45,
    // couleur peinte sous la pièce (jamais de transparence pendant le passage)
    fond: "#0a1020",
    // la vitre allumée s'efface au début de l'approche (part de l'approche) et laisse voir la pièce
    fonduVitre: [0.04, 0.3],
    dureeVoile: 0.3,
    dureeZoom: 3.6
  }
};

const ONGLETS = {
  dureeFondu: 0.3,
  courbeFondu: "power1.out",
  // changement de skin : le cadre du portrait se retourne comme une carte de sélection de personnage,
  // l'ancien skin s'assombrit en tournant, le nouveau apparaît au dos
  retournement: {
    duree: 0.6,
    perspective: 900,
    ombre: 0.45
  },
  // carte du portrait sous la souris : inclinaison (degrés), recul (px), légère avancée, petite
  // secousse à l'arrivée selon la vitesse de la souris, puis retour en place avec un rebond
  carte: {
    inclinaison: 12,
    recul: 6,
    zoom: 1.03,
    perspective: 800,
    suivi: 0.4,
    secousse: { force: 0.25, maximum: 5 },
    retour: { duree: 1.2, courbe: "elastic.out(1, 0.35)" }
  },
  touches: { precedent: ["ArrowUp", "ArrowLeft"], suivant: ["ArrowDown", "ArrowRight"], premier: ["Home"], dernier: ["End"] }
};

// trame de Bayer 4×4 : ordre d'apparition des pixels pour les dissolutions et les lueurs
const BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];

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
  heroNuit: ".hero__calque--nuit",
  heroVie: ".hero__calque--vie",
  zoneApropos: ".zone--apropos",
  decorApropos: ".apropos__decor",
  zoneProjets: ".zone--projets",
  decorProjets: ".projets__decor",
  carteProjets: ".projets__carte",
  contenuProjets: ".projets",
  passageProjets: ".passage",
  affiche: ".affiche",
  afficheDeroule: ".affiche__deroule",
  categories: ".projets__onglets",
  categorie: ".projets__categorie",
  categoriePrecedente: ".projets__fleche--precedente",
  categorieSuivante: ".projets__fleche--suivante",
  bougies: ".projets__bougies",
  dossier: ".dossier",
  dossierOuvert: "dialog.dossier[open]",
  ouvrirDossier: "[data-dossier]",
  dossierCadre: ".dossier__cadre",
  dossierFermer: ".dossier__fermer",
  dossierImage: ".dossier__image",
  dossierVideo: ".dossier__video",
  dossierLegende: ".dossier__legende",
  dossierTitre: ".dossier__titre",
  dossierMiniature: ".dossier__miniature",
  dossierPrecedente: ".dossier__fleche--precedente",
  dossierSuivante: ".dossier__fleche--suivante",
  lienSection: "a[href^='#']",
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
  cadrePortrait: ".apropos__cadre",
  cartePortrait: ".apropos__carte",
  panneau: ".apropos__panneau",
  equipement: ".equipement",
  caseObjet: ".equipement__case",
  detailObjet: ".equipement__detail",
  ajustable: ".apropos",
  contenuZone: ".zone__texte, .apropos__classes, .apropos__identite, .apropos__panneau:not([hidden]), .projets__consigne, .projets__carte"
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
  heroPassage: "hero--passage",
  decorCadre: "projets__decor--cadre",
  dossierOuvert: "dossier-ouvert"
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
let destinationFinale = null;
let poursuivreTransition = null;
let transitionEnCours = null;
let transitionSautee = false;
let animationAnnonce = null;
let glissementAnnonce = null;
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
  // les images différées (loading="lazy", ex. miniatures des fenêtres de projet fermées) ne se
  // chargent qu'à l'affichage : les attendre bloquerait l'écran de chargement
  const images = [...document.images].filter((image) => image.loading !== "lazy");
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

  // animations réduites : pas de cérémonie (feu masqué en CSS), l'écran s'efface dès que les fichiers
  // et le feu du hero sont prêts
  if (!mouvementAutorise) {
    minuteur.progression = 1;
    Promise.all([suivreChargement((valeur) => {
      progressionReelle = valeur;
      afficherProgression();
    }), feuHero.charge]).then(() => {
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

  Promise.all([attenteTemps, attenteFichiers, attenteAllumage, feuHero.charge]).then(() => {
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

function animerVie() {
  const toileNuit = document.querySelector(SELECTEURS.heroNuit);
  const toileVie = document.querySelector(SELECTEURS.heroVie);
  if (!toileNuit || !toileVie) {
    return;
  }
  const nuit = toileNuit.getContext("2d");
  const vie = toileVie.getContext("2d");
  const { largeur, hauteur } = TRANSITION.grille;
  const hasard = (min, max) => min + Math.random() * (max - min);
  const point = (contexte, x, y, [r, v, b], opacite) => {
    contexte.fillStyle = `rgb(${r} ${v} ${b} / ${opacite})`;
    contexte.fillRect(Math.round(x), Math.round(y), 1, 1);
  };
  const lueurLanterne = (force) => {
    const { lanterne } = VIE;
    for (let y = -lanterne.rayon; y <= lanterne.rayon; y++) {
      for (let x = -lanterne.rayon; x <= lanterne.rayon; x++) {
        const proche = Math.max(0, 1 - Math.hypot(x, y * 1.3) / lanterne.rayon);
        const palier = Math.floor(proche * proche * force * 3 + (BAYER[(y + 64) % 4][(x + 64) % 4] + 0.5) / 16) / 3;
        if (palier > 0) {
          point(vie, lanterne.x + x, lanterne.y + y, lanterne.couleur, palier * force * 0.5);
        }
      }
    }
  };
  if (!mouvementAutorise) {
    lueurLanterne(VIE.lanterne.opacite);
    return;
  }
  const { lucioles, braises, chauvesSouris } = VIE;
  const essaim = Array.from({ length: lucioles.nombre }, () => ({
    x: hasard(...lucioles.x), y: hasard(...lucioles.y),
    rx: hasard(6, 18), ry: hasard(3, 9), vitesse: hasard(0.15, 0.4), phase: hasard(0, 100), clignement: hasard(0.6, 1.4)
  }));
  let etincelles = [];
  let vol = null;
  let prochainVol = hasard(2, 5);
  const dessiner = (temps) => {
    vie.clearRect(0, 0, largeur, hauteur);
    nuit.clearRect(0, 0, largeur, hauteur);
    // lucioles : elles errent lentement et ne s'allument que par instants
    essaim.forEach((luciole) => {
      const t = temps * luciole.vitesse + luciole.phase;
      const x = luciole.x + Math.sin(t) * luciole.rx + Math.sin(t * 2.7) * 2;
      const y = luciole.y + Math.cos(t * 1.3) * luciole.ry;
      const eclat = Math.max(0, Math.sin(temps * luciole.clignement + luciole.phase)) ** 3;
      if (eclat > 0.05) {
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => point(vie, x + dx, y + dy, lucioles.couleur, eclat * 0.45));
        point(vie, x, y, lucioles.couleur, eclat);
      }
    });
    // braises : elles quittent le feu, montent en ondulant et pâlissent
    if (Math.random() < braises.probabilite) {
      etincelles.push({ x: braises.x + hasard(-braises.ecart, braises.ecart), y: braises.y, vx: hasard(-0.3, 0.3), vy: hasard(-1.6, -0.9), age: 0, vie: hasard(...braises.vie), phase: hasard(0, 6) });
    }
    etincelles = etincelles.filter((braise) => braise.age < braise.vie);
    etincelles.forEach((braise) => {
      braise.age += 1;
      braise.x += braise.vx + Math.sin(braise.age * 0.25 + braise.phase) * 0.35;
      braise.y += braise.vy;
      braise.vy *= 0.985;
      const age = braise.age / braise.vie;
      point(vie, braise.x, braise.y, braises.couleurs[age < 0.3 ? 0 : age < 0.65 ? 1 : 2], 1 - age * 0.6);
    });
    // lanterne : sa lueur vacille comme le feu
    lueurLanterne(VIE.lanterne.opacite * (0.85 + 0.1 * Math.sin(temps * 8.3) + 0.05 * Math.sin(temps * 19.1)));
    // chauves-souris : de temps en temps, un petit groupe traverse le ciel devant la lune
    if (!vol && temps > prochainVol) {
      const versDroite = Math.random() < 0.5;
      vol = {
        versDroite,
        depart: temps,
        membres: Array.from({ length: 1 + Math.floor(Math.random() * 3) }, (_, n) => ({ decalage: n * hasard(10, 18), y: hasard(...chauvesSouris.y), phase: hasard(0, 6) }))
      };
    }
    if (vol) {
      const parcours = (temps - vol.depart) * chauvesSouris.vitesse * VIE.imagesParSeconde;
      let dehors = true;
      vol.membres.forEach((membre) => {
        const avance = parcours - membre.decalage;
        const x = vol.versDroite ? avance - 10 : largeur + 10 - avance;
        const y = membre.y + Math.sin(avance * 0.08 + membre.phase) * 6;
        dehors &&= vol.versDroite ? x > largeur + 10 : x < -10;
        const ailes = chauvesSouris.ailes[Math.floor(temps * 8 + membre.phase) % 2];
        ailes.forEach((ligne, dy) => [...ligne].forEach((c, dx) => {
          if (c === "k") {
            point(nuit, x + dx - 3, y + dy, chauvesSouris.couleur, 1);
          }
        }));
      });
      if (dehors) {
        vol = null;
        prochainVol = temps + hasard(...chauvesSouris.attente);
      }
    }
  };
  let visible = false;
  let derniere = 0;
  const boucle = (maintenant) => {
    if (!visible) {
      return;
    }
    if (maintenant - derniere >= 1000 / VIE.imagesParSeconde) {
      derniere = maintenant;
      dessiner(maintenant / 1000);
    }
    requestAnimationFrame(boucle);
  };
  new IntersectionObserver(([entree]) => {
    const etaitVisible = visible;
    visible = entree.isIntersecting;
    if (visible && !etaitVisible) {
      requestAnimationFrame(boucle);
    }
  }).observe(toileVie);
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

  // Le ciel de l'image, ligne par ligne (médiane des pixels de ciel, étoiles exclues) : prolongé sur
  // tout l'écran derrière la montagne du hero, il fait disparaître le cadre de l'image d'arrivée.
  const cielEtendu = creerToile(1, hauteurA);
  const contexteCiel = cielEtendu.getContext("2d");
  const colonneCiel = contexteCiel.createImageData(1, hauteurA);
  let couleurCiel = [0, 0, 0];
  for (let y = 0; y < hauteurA; y++) {
    const canaux = [[], [], []];
    for (let x = 0; x < detourage.cielGauche; x += 2) {
      const i = (y * largeurA + x) * 4;
      const [r, v, b] = pixelsA.data.subarray(i, i + 3);
      if ((r <= 6 && b >= v + 12) || (y > 700 && r <= 30 && b >= v + 12)) {
        canaux.forEach((canal, k) => canal.push(pixelsA.data[i + k]));
      }
    }
    if (canaux[0].length) {
      couleurCiel = canaux.map((canal) => canal.sort((a, b) => a - b)[canal.length >> 1]);
    }
    colonneCiel.data.set([...couleurCiel, 255], y * 4);
  }
  contexteCiel.putImageData(colonneCiel, 0, 0);

  return {
    arriveeNette, arriveeDetouree, arriveeAdoucie, cielEtendu, largeurA, hauteurA,
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
  const image = placer(arrivee, zoom);
  const cielArrivee = lisser(TRANSITION.cielArrivee[0], TRANSITION.cielArrivee[1], avancee);
  camera.calques.forEach((calque) => {
    const z = zoom ** calque.profondeur;
    const zone = placer(calque, z);
    const plan = plans[calque.plan];
    plan.globalAlpha = calque.fondu ? 1 - lisser(calque.fondu[0], calque.fondu[1], avancee) : 1;
    plan.drawImage(calque.source, zone.x, zone.y, zone.largeur, zone.hauteur);
    if (calque.etoiles && cielArrivee > 0) {
      // le ciel de l'arrivée gagne tout l'écran, au-dessus et au-dessous de l'image comprise
      const { cielEtendu } = ressources;
      const haut = cielEtendu.getContext("2d").getImageData(0, 0, 1, 1).data;
      const bas = cielEtendu.getContext("2d").getImageData(0, cielEtendu.height - 1, 1, 1).data;
      plan.globalAlpha = cielArrivee;
      plan.fillStyle = `rgb(${haut[0]} ${haut[1]} ${haut[2]})`;
      plan.fillRect(0, 0, grille.largeur, Math.ceil(image.y));
      plan.fillStyle = `rgb(${bas[0]} ${bas[1]} ${bas[2]})`;
      plan.fillRect(0, Math.floor(image.y + image.hauteur), grille.largeur, grille.hauteur);
      plan.imageSmoothingEnabled = true;
      plan.drawImage(cielEtendu, 0, image.y, grille.largeur, image.hauteur);
      plan.imageSmoothingEnabled = avancee > 0;
    }
    if (calque.etoiles) {
      const restant = 1 - lisser(calque.etoiles[0], calque.etoiles[1], avancee);
      camera.etoiles.forEach((etoile) => {
        const point = placer(etoile, z);
        plan.globalAlpha = etoile.opacite * restant;
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

  const enToile = { x: image.x * echelleToile, y: image.y * echelleToile, largeur: image.largeur * echelleToile, hauteur: image.hauteur * echelleToile };
  const revelee = lisser(TRANSITION.revelation[0], TRANSITION.revelation[1], avancee);
  const nette = lisser(TRANSITION.bordsNets[0], TRANSITION.bordsNets[1], avancee);
  const lisseImage = enToile.largeur < ressources.largeurA * 0.98;
  const marge = TRANSITION.detourage.marge * enToile.largeur / ressources.largeurA;
  // ordre : ciel de l'arrivée (fondu de fin), château et lune détourés, puis image nette à la toute fin
  contexte.imageSmoothingEnabled = lisseImage;
  contexte.globalAlpha = cielArrivee;
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

// Vrai quand un clic du menu vise une section plus loin que celle où l'on arrive :
// la transition suivante s'enchaîne sans afficher le contenu de l'étape.
function poursuitVers(zone) {
  return destinationFinale !== null && destinationFinale !== zone;
}

function decouvrirSansAnnonce(zone) {
  gsap.set(zone.querySelector(SELECTEURS.zoneTitre), { clearProps: "opacity" });
  gsap.set(zone.querySelectorAll(SELECTEURS.contenuZone), { clearProps: "opacity,visibility,transform" });
}

function terminerTransition(zone) {
  enTransition = false;
  reposJusqua = performance.now() + TRANSITION.repos;
  const continuer = poursuitVers(zone);
  if (zoneDifferee && !zonesDecouvertes.has(zoneDifferee.id)) {
    zonesDecouvertes.add(zoneDifferee.id);
    if (continuer) {
      decouvrirSansAnnonce(zoneDifferee);
    } else {
      annoncerZone(zoneDifferee);
    }
  }
  zoneDifferee = null;
  if (continuer && poursuivreTransition) {
    poursuivreTransition();
  } else {
    destinationFinale = null;
    transitionEnCours = null;
    transitionSautee = false;
  }
}

function sauterTransition() {
  if (!enTransition || !transitionEnCours || transitionSautee) {
    return;
  }
  transitionSautee = true;
  transitionEnCours.timeScale(TRANSITION.accelerationSaut);
}

function descendre(ressources, apropos, decor) {
  enTransition = true;
  const dejaVue = zonesDecouvertes.has(apropos.id);
  const camera = entrerDansCamera(ressources, apropos, 0);
  const etat = { avancee: 0 };
  return gsap.timeline()
    .to(etat, { avancee: 1, duration: TRANSITION.duree, ease: TRANSITION.courbe, onUpdate: () => dessinerCamera(camera, etat.avancee) })
    .add(() => {
      const continuer = poursuitVers(apropos);
      gsap.set([decor, SELECTEURS.ajustable], { "--voile-decor": 0 });
      if (dejaVue || continuer) {
        gsap.set(SELECTEURS.ajustable, { autoAlpha: 0 });
      }
      allerA(apropos);
      sortirDeCamera(camera);
      if (!continuer) {
        gsap.to([decor, SELECTEURS.ajustable], { "--voile-decor": 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out" });
      }
      if (dejaVue && !continuer) {
        gsap.to(SELECTEURS.ajustable, { autoAlpha: 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out", clearProps: "opacity,visibility" });
      }
      terminerTransition(apropos);
    });
}

function remonter(ressources, apropos, decor) {
  enTransition = true;
  const etat = { avancee: 1 };
  let camera = null;
  return gsap.timeline()
    .to(SELECTEURS.ajustable, { autoAlpha: 0, duration: TRANSITION.dureeVoile, ease: "power1.in" })
    .to([decor, SELECTEURS.ajustable], { "--voile-decor": 0, duration: TRANSITION.dureeVoile, ease: "power1.in" }, "<")
    .add(() => {
      allerA(hero);
      camera = entrerDansCamera(ressources, apropos, 1);
      gsap.set(SELECTEURS.ajustable, { clearProps: "opacity,visibility" });
      gsap.set([decor, SELECTEURS.ajustable], { "--voile-decor": 1 });
    })
    .to(etat, { avancee: 0, duration: TRANSITION.duree, ease: TRANSITION.courbe, onUpdate: () => dessinerCamera(camera, etat.avancee) })
    .add(() => {
      sortirDeCamera(camera);
      terminerTransition(hero);
    });
}


// ---------- Projets : la pièce du château, la carte des quêtes au mur ----------

// Cadrage de la pièce : la carte, centrée, occupe la moitié de la largeur ; l'image couvre tout l'écran.
function cadragePiece(largeur, hauteur) {
  const { image, carte, cadrage } = PROJETS;
  const k = Math.max(largeur * cadrage.largeurCarte / carte.largeur, largeur / image.largeur, hauteur / image.hauteur);
  const x = gsap.utils.clamp(largeur - image.largeur * k, 0, largeur * cadrage.gauche - carte.x * k);
  const y = gsap.utils.clamp(hauteur - image.hauteur * k, 0, hauteur * cadrage.centreY - (carte.y + carte.hauteur / 2) * k);
  return { x, y, k };
}

function placerPiece() {
  const zone = document.querySelector(SELECTEURS.zoneProjets);
  if (!zone) {
    return;
  }
  const { image, carte } = PROJETS;
  const { x, y, k } = cadragePiece(zone.clientWidth, zone.clientHeight);
  const decor = zone.querySelector(SELECTEURS.decorProjets);
  decor.classList.add(CLASSES.decorCadre);
  decor.style.setProperty("--piece-x", `${x}px`);
  decor.style.setProperty("--piece-y", `${y}px`);
  decor.style.setProperty("--piece-largeur", `${image.largeur * k}px`);
  decor.style.setProperty("--piece-hauteur", `${image.hauteur * k}px`);
  const bougies = zone.querySelector(SELECTEURS.bougies);
  ["--piece-x", "--piece-y", "--piece-largeur", "--piece-hauteur"].forEach((nom) => bougies?.style.setProperty(nom, decor.style.getPropertyValue(nom)));
  const surCarte = zone.querySelector(SELECTEURS.carteProjets);
  surCarte.style.setProperty("--carte-x", `${x + carte.x * k}px`);
  surCarte.style.setProperty("--carte-y", `${y + carte.y * k}px`);
  surCarte.style.setProperty("--carte-largeur", `${carte.largeur * k}px`);
  surCarte.style.setProperty("--carte-hauteur", `${carte.hauteur * k}px`);
  mesurerAffiches?.();
}

// Flammes des bougies : chaque flamme peinte est recouverte par une flamme en pixels qui ondule
// (hauteur, balancement de la pointe), entourée d'un halo tramé qui vacille.
function creerBougies(toile) {
  const { bougies } = PROJETS;
  const { cellule, couleurs, halo } = bougies;
  const contexte = toile.getContext("2d");
  const image = contexte.createImageData(toile.width, toile.height);
  const poser = (x, y, couleur, opacite) => {
    if (x < 0 || y < 0 || x >= toile.width || y >= toile.height) {
      return;
    }
    const i = (y * toile.width + x) * 4;
    const fond = image.data[i + 3] / 255;
    const total = opacite + fond * (1 - opacite);
    for (let c = 0; c < 3; c++) {
      image.data[i + c] = (couleur[c] * opacite + image.data[i + c] * fond * (1 - opacite)) / total;
    }
    image.data[i + 3] = 255 * total;
  };
  const graines = bougies.flammes.map(() => Math.random() * 100);
  return (temps) => {
    image.data.fill(0);
    bougies.flammes.forEach((flamme, n) => {
      const t = temps + graines[n];
      const cx = flamme.x / cellule;
      const pied = Math.round(flamme.pied / cellule);
      // halo : paliers tramés autour de la flamme, force qui vacille
      const force = halo.opacite * (0.8 + 0.12 * Math.sin(t * 9.1) + 0.08 * Math.sin(t * 23.7));
      const centreY = pied - flamme.hauteur / cellule / 2;
      for (let y = Math.floor(centreY - halo.rayon); y <= centreY + halo.rayon; y++) {
        for (let x = Math.floor(cx - halo.rayon); x <= cx + halo.rayon; x++) {
          const proche = Math.max(0, 1 - Math.hypot(x + 0.5 - cx, (y + 0.5 - centreY) * 0.8) / halo.rayon);
          const palier = Math.min(halo.paliers, Math.floor(proche * proche * force * halo.paliers * 3 + (BAYER[(y + 64) % 4][(x + 64) % 4] + 0.5) / 16)) / halo.paliers;
          if (palier > 0) {
            poser(x, y, halo.couleur, palier * force);
          }
        }
      }
      // flamme : un peu plus grande que la peinture pour la couvrir, la pointe se balance
      const hauteur = Math.round(flamme.hauteur / cellule * (1.05 + 0.12 * Math.sin(t * 6.3) + 0.06 * Math.sin(t * 15.1)));
      const demi = flamme.largeur / cellule / 2 + 0.3;
      const balancement = 0.9 * Math.sin(t * 4.7) + 0.4 * Math.sin(t * 11.3);
      for (let j = 0; j < hauteur; j++) {
        const h = j / hauteur;
        const largeur = demi * Math.sin(Math.PI * Math.min(1, (h + 0.12) * 0.9)) ** 0.7 * (1 - h * 0.35);
        const milieu = cx + balancement * h * h;
        for (let x = Math.floor(milieu - largeur); x < milieu + largeur; x++) {
          const ecart = Math.abs(x + 0.5 - milieu) / Math.max(0.5, largeur);
          const couleur = j === hauteur - 1 ? couleurs.pointe
            : ecart < 0.45 && h < 0.55 ? couleurs.coeur
              : ecart < 0.8 && h < 0.8 ? couleurs.vive
                : couleurs.bord;
          poser(x, pied - 1 - j, couleur, 1);
        }
      }
    });
    contexte.putImageData(image, 0, 0);
  };
}

// Dessine les flammes à l'instant donné, au rythme des pixels (10 images par seconde) : utilisée par
// la boucle de la section et par la transition, pour que les bougies brûlent déjà à l'arrivée.
let animerBougies = null;

function initialiserBougies() {
  const toile = document.querySelector(SELECTEURS.bougies);
  if (!toile || !mouvementAutorise) {
    return;
  }
  const dessiner = creerBougies(toile);
  const { imagesParSeconde } = PROJETS.bougies;
  animerBougies = (secondes) => dessiner(Math.floor(secondes * imagesParSeconde) / imagesParSeconde);
  dessiner(0);
  let visible = false;
  let derniere = 0;
  const boucle = (maintenant) => {
    if (!visible) {
      return;
    }
    if (maintenant - derniere >= 1000 / PROJETS.bougies.imagesParSeconde) {
      derniere = maintenant;
      dessiner(maintenant / 1000);
    }
    requestAnimationFrame(boucle);
  };
  new IntersectionObserver(([entree]) => {
    const etaitVisible = visible;
    visible = entree.isIntersecting;
    if (visible && !etaitVisible) {
      requestAnimationFrame(boucle);
    }
  }).observe(toile);
}

// Hauteur de chaque affiche dépliée (le rouleau descend jusqu'en bas) : remesurée quand la carte change de taille.
let mesurerAffiches = null;

// Les affiches clouées sur la carte : roulées au repos, elles se déroulent au survol (CSS) ;
// un clic ouvre le dossier du projet (data-dossier, géré par initialiserDossiers).
function initialiserQuetes() {
  const carte = document.querySelector(SELECTEURS.carteProjets);
  const affiches = carte ? [...carte.querySelectorAll(SELECTEURS.affiche)] : [];
  if (!affiches.length) {
    return;
  }
  mesurerAffiches = () => affiches.forEach((affiche) => {
    const hauteur = affiche.querySelector(SELECTEURS.afficheDeroule).offsetHeight;
    if (hauteur) {
      affiche.style.setProperty("--hauteur-affiche", `${hauteur}px`);
    }
  });
  mesurerAffiches();
  document.fonts?.ready.then(mesurerAffiches);
  initialiserCategories(carte, affiches);
}

// Plaque « Projets IUT / Projets perso » : les flèches passent d'une catégorie à l'autre ; les
// parchemins affichés s'effacent, puis ceux de l'autre catégorie apparaissent un à un.
function initialiserCategories(carte, affiches) {
  const plaque = carte.querySelector(SELECTEURS.categories);
  if (!plaque) {
    return;
  }
  const libelle = plaque.querySelector(SELECTEURS.categorie);
  const groupes = ["iut", "perso"];
  let actif = 0;
  let animation = null;
  const montrer = (index) => {
    actif = (index + groupes.length) % groupes.length;
    const groupe = groupes[actif];
    const sortants = affiches.filter((affiche) => !affiche.hidden);
    const entrants = affiches.filter((affiche) => affiche.dataset.groupe === groupe);
    libelle.textContent = plaque.dataset[groupe];
    const basculer = () => {
      affiches.forEach((affiche) => { affiche.hidden = affiche.dataset.groupe !== groupe; });
      mesurerAffiches?.();
    };
    animation?.progress(1);
    if (!mouvementAutorise) {
      basculer();
      return;
    }
    const { duree, decalage } = PROJETS.categories;
    animation = gsap.timeline()
      .to(sortants, { autoAlpha: 0, y: "-0.6cqw", duration: duree, ease: "power1.in", stagger: decalage / 2 })
      .add(() => {
        gsap.set(sortants, { clearProps: "opacity,visibility,transform" });
        basculer();
      })
      .fromTo(entrants, { autoAlpha: 0, y: "-0.8cqw" }, { autoAlpha: 1, y: 0, duration: duree * 1.4, ease: "power2.out", stagger: decalage, clearProps: "opacity,visibility,transform" });
  };
  plaque.querySelector(SELECTEURS.categoriePrecedente).addEventListener("click", () => montrer(actif - 1));
  plaque.querySelector(SELECTEURS.categorieSuivante).addEventListener("click", () => montrer(actif + 1));
}

// ---------- Dossiers : le projet en grand, dans une fenêtre au-dessus de la page ----------

function initialiserDossiers() {
  const racine = document.documentElement;
  document.querySelectorAll(SELECTEURS.dossier).forEach((dossier) => {
    const image = dossier.querySelector(SELECTEURS.dossierImage);
    const legende = dossier.querySelector(SELECTEURS.dossierLegende).textContent;
    const titre = dossier.querySelector(SELECTEURS.dossierTitre).textContent;
    const miniatures = [...dossier.querySelectorAll(SELECTEURS.dossierMiniature)];
    let courante = 0;
    // une miniature peut montrer une vidéo (data-video) : elle remplace alors l'image, muette, en boucle
    const video = dossier.querySelector(SELECTEURS.dossierVideo);
    const montrer = (index) => {
      courante = (index + miniatures.length) % miniatures.length;
      const miniature = miniatures[courante];
      miniatures.forEach((autre) => autre.setAttribute("aria-pressed", autre === miniature));
      const enVideo = Boolean(video && miniature.dataset.video);
      image.hidden = enVideo;
      if (video) {
        video.hidden = !enVideo;
        if (enVideo) {
          if (!video.src.endsWith(miniature.dataset.video)) {
            video.src = miniature.dataset.video;
          }
          if (mouvementAutorise) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      }
      if (!enVideo) {
        image.src = miniature.dataset.image;
        const description = miniature.getAttribute("aria-label").toLowerCase();
        image.alt = legende ? `${legende} · ${titre}, ${description}` : `${titre}, ${description}`;
      }
      if (mouvementAutorise) {
        gsap.fromTo(enVideo ? video : image, { opacity: 0.4 }, { opacity: 1, duration: 0.25, ease: "power1.out", clearProps: "opacity" });
      }
    };
    dossier.addEventListener("close", () => video?.pause());
    miniatures.forEach((miniature, index) => miniature.addEventListener("click", () => montrer(index)));
    dossier.querySelector(SELECTEURS.dossierPrecedente).addEventListener("click", () => montrer(courante - 1));
    dossier.querySelector(SELECTEURS.dossierSuivante).addEventListener("click", () => montrer(courante + 1));
    dossier.querySelector(SELECTEURS.dossierFermer).addEventListener("click", () => dossier.close());
    const cadre = dossier.querySelector(SELECTEURS.dossierCadre);
    dossier.addEventListener("keydown", (evenement) => {
      if (evenement.key === "ArrowLeft" || evenement.key === "ArrowRight") {
        evenement.preventDefault();
        montrer(courante + (evenement.key === "ArrowRight" ? 1 : -1));
        return;
      }
      // la page derrière ne défile pas : seules les touches utiles au cadre (s'il déborde) passent
      const defilement = [...TRANSITION.touchesBas, ...TRANSITION.touchesHaut, "End"].includes(evenement.key);
      const surBouton = evenement.key === " " && evenement.target.closest("button, a");
      if (defilement && !surBouton && cadre.scrollHeight <= cadre.clientHeight) {
        evenement.preventDefault();
      }
    });
    // un clic sur le voile (hors du cadre) ferme la fenêtre
    dossier.addEventListener("click", (evenement) => {
      if (evenement.target === dossier) {
        dossier.close();
      }
    });
    dossier.addEventListener("close", () => {
      racine.classList.remove(CLASSES.dossierOuvert);
      montrer(0);
    });
  });
  document.addEventListener("click", (evenement) => {
    const declencheur = evenement.target.closest(SELECTEURS.ouvrirDossier);
    const dossier = declencheur && document.getElementById(declencheur.dataset.dossier);
    if (!dossier || dossier.open) {
      return;
    }
    racine.classList.add(CLASSES.dossierOuvert);
    dossier.showModal();
    // le focus va au bouton de fermeture, pas au cadre qui peut défiler
    dossier.querySelector(SELECTEURS.dossierFermer).focus();
    if (mouvementAutorise) {
      gsap.fromTo(dossier.querySelector(SELECTEURS.dossierCadre), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", clearProps: "opacity,transform" });
    }
  });
}

// ---------- Transition À propos <-> Projets : on passe la fenêtre, la pièce est derrière ----------
// Deux images seulement : le château devant, percé à la place de la vitre allumée, et la pièce
// derrière. La caméra zoome dans la fenêtre jusqu'à ce que l'ouverture couvre l'écran ; la pièce,
// plus lointaine, grandit moins vite et arrive au cadrage de la section (carte centrée).
// Les deux images sont dessinées pixel pour pixel, sans lissage, comme les fonds CSS.

async function preparerRessourcesProjets(decorApropos) {
  const source = getComputedStyle(decorApropos).backgroundImage.match(/url\("?(.*?)"?\)/)[1];
  const [chateau, piece] = await Promise.all([source, source.replace(/a-propos\/[^/]+$/, "projets/piece.webp")].map(chargerImage));
  return { ...percerFenetre(chateau), piece, bougies: document.querySelector(SELECTEURS.bougies) };
}

function estVitre(r, v, b) {
  return r > 150 && v > 80 && b < 140 && r > b + 60;
}

// Perce la fenêtre : le château avec un trou à la place de la vitre (barres du vitrail comprises),
// et la vitre seule, qui s'efface au début du zoom pour laisser voir la pièce.
function percerFenetre(image) {
  const { vitre } = PROJETS.passage;
  const facade = creerToile(image.naturalWidth, image.naturalHeight);
  const contexte = facade.getContext("2d");
  contexte.drawImage(image, 0, 0);
  const largeur = vitre.droite - vitre.gauche + 1;
  const hauteur = vitre.bas - vitre.haut + 1;
  const zone = contexte.getImageData(vitre.gauche, vitre.haut, largeur, hauteur);
  const d = zone.data;
  const verre = new ImageData(largeur, hauteur);
  // la fenêtre s'élargit vers le bas : chaque ligne reprend au moins l'étendue de celle du dessus
  let etendue = null;
  for (let y = 0; y < hauteur; y++) {
    for (let x = 0; x < largeur; x++) {
      const i = (y * largeur + x) * 4;
      if (estVitre(d[i], d[i + 1], d[i + 2])) {
        etendue = etendue ? [Math.min(etendue[0], x), Math.max(etendue[1], x)] : [x, x];
      }
    }
    for (let x = etendue ? etendue[0] : largeur; etendue && x <= etendue[1]; x++) {
      const i = (y * largeur + x) * 4;
      verre.data.set(d.subarray(i, i + 4), i);
      d[i + 3] = 0;
    }
  }
  contexte.putImageData(zone, vitre.gauche, vitre.haut);
  const vitrage = creerToile(largeur, hauteur);
  vitrage.getContext("2d").putImageData(verre, 0, 0);
  return { facade, vitrage };
}

function preparerScene(toile) {
  const ratio = window.devicePixelRatio || 1;
  toile.width = Math.round(toile.clientWidth * ratio);
  toile.height = Math.round(toile.clientHeight * ratio);
  const contexte = toile.getContext("2d");
  contexte.imageSmoothingEnabled = false;
  return { contexte, largeur: toile.width, hauteur: toile.height };
}

// Courbe de temps du passage : accélère comme avant (puissance 2) jusqu'à la bascule, puis ralentit
// longuement (puissance 3) jusqu'à l'arrêt ; valeur et vitesse sont continues à la bascule.
function courbePassage(t) {
  const t1 = PROJETS.passage.bascule;
  const c1 = 1 / (t1 * t1 + 2 * t1 * (1 - t1) / 3);
  const c2 = 2 * c1 * t1 / (3 * (1 - t1) ** 2);
  return t < t1 ? c1 * t * t : 1 - c2 * (1 - t) ** 3;
}

// La même courbe jouée à l'envers, pour le retour vers l'À propos.
function courbePassageRetour(t) {
  return 1 - courbePassage(1 - t);
}

// Réglages du passage pour une taille d'écran (calculés une fois par taille).
// Modèle en perspective : la caméra est à la distance d de la façade (d = 1 au départ) ; la façade
// apparaît à l'échelle k0 / d, la pièce, à la profondeur D derrière la fenêtre, à l'échelle K / (d + D).
// D et K sont choisis pour que la pièce couvre toujours l'ouverture, qu'elle soit juste assez grande
// pour couvrir l'écran au moment où l'on franchit la fenêtre (vue d'ensemble), et que le zoom final
// dans la pièce reparte à la même vitesse.
const reglagesPassage = new Map();
function reglerPassage(largeur, hauteur, k0, fin, piece) {
  const cle = `${largeur}x${hauteur}`;
  if (reglagesPassage.has(cle)) {
    return reglagesPassage.get(cle);
  }
  const { ouverture, marge, franchie, profondeurMax } = PROJETS.passage;
  const largeurOuverture = ouverture.droite - ouverture.gauche;
  const hauteurOuverture = ouverture.bas - ouverture.haut;
  const minimumPour = (l, h) => {
    const brut = Math.max(l / piece.width, h / piece.height);
    return Math.min(brut * marge, Math.max(brut, fin.k));
  };
  // on « franchit » la fenêtre dès que l'ouverture remplit une dimension de l'écran (la hauteur : elle
  // est plus haute que large) ; la pièce y est juste assez grande pour couvrir ce qu'on voit, et comme
  // elle grandit moins vite que l'ouverture pendant l'approche, elle la couvrait aussi avant ; la façade
  // finit ensuite de s'écarter sur les côtés
  const echelleFranchie = Math.min(largeur / largeurOuverture, hauteur / hauteurOuverture);
  const zFranchie = Math.log(echelleFranchie / k0);
  const dFranchie = Math.exp(-zFranchie);
  const kFranchie = minimumPour(Math.min(largeurOuverture * echelleFranchie, largeur), Math.min(hauteurOuverture * echelleFranchie, hauteur));
  const kDepart = minimumPour(largeurOuverture * k0, hauteurOuverture * k0);
  const vitesseZ = zFranchie / franchie;
  const r0 = Math.log(kFranchie);
  const r1 = Math.log(fin.k);
  const pente = 3 * (r1 - r0) / (1 - franchie);
  const q = kDepart / kFranchie;
  const dCouverture = Math.max(0, (q - dFranchie) / (1 - q)) * 1.2;
  const dPente = pente > 0 ? dFranchie * (vitesseZ / pente - 1) : profondeurMax;
  // assez profonde pour couvrir l'ouverture dès le départ, et pour que le zoom final reparte sans
  // dépasser le cadrage ; jamais plus que profondeurMax (sinon la pièce paraîtrait trop zoomée au départ)
  const profondeur = Math.max(dCouverture, Math.min(Math.max(dPente, 0), profondeurMax));
  const reglage = {
    minimumPour,
    vitesseZ,
    profondeur,
    k: kFranchie * (dFranchie + profondeur),
    r0,
    r1,
    m0: Math.min(vitesseZ * dFranchie / (dFranchie + profondeur), Math.max(0, pente))
  };
  reglagesPassage.set(cle, reglage);
  return reglage;
}

// avancee 0 : le fond de l'À propos tel quel ; avancee 1 : la pièce au cadrage de la section Projets.
function dessinerPassage(scene, ressources, avancee) {
  const { contexte, largeur, hauteur } = scene;
  const { passage } = PROJETS;
  const { vitre, ouverture, fonduVitre, franchie } = passage;
  const { facade, vitrage, piece } = ressources;
  const k0 = Math.max(largeur / facade.width, hauteur / facade.height);
  const fin = cadragePiece(largeur, hauteur);
  const reglage = reglerPassage(largeur, hauteur, k0, fin, piece);
  // la caméra avance vers la façade à vitesse régulière en échelle (zoom exponentiel)
  const z = reglage.vitesseZ * avancee;
  const echelle = k0 * Math.exp(z);
  const approche = Math.min(1, avancee / franchie);
  const x0 = (largeur - facade.width * k0) / 2;
  const cible = { x: (ouverture.gauche + ouverture.droite) / 2, y: (ouverture.haut + ouverture.bas) / 2 };
  const recentrage = 1 - (1 - approche) ** 3;
  const centre = {
    x: gsap.utils.interpolate(x0 + cible.x * k0, largeur / 2, recentrage),
    y: gsap.utils.interpolate(cible.y * k0, hauteur / 2, recentrage)
  };
  // la pièce : en perspective pendant l'approche, puis zoom final qui repart à la même vitesse et
  // ralentit jusqu'au cadrage de la section (interpolation de Hermite, sans à-coup)
  let rPiece;
  let poseFinale = 0;
  if (avancee <= franchie) {
    rPiece = Math.log(reglage.k) - Math.log(Math.exp(-z) + reglage.profondeur);
  } else {
    const s = (avancee - franchie) / (1 - franchie);
    const h00 = 2 * s ** 3 - 3 * s ** 2 + 1;
    const h10 = s ** 3 - 2 * s ** 2 + s;
    const h01 = -2 * s ** 3 + 3 * s ** 2;
    rPiece = h00 * reglage.r0 + h10 * (1 - franchie) * reglage.m0 + h01 * reglage.r1;
    poseFinale = reglage.r1 > reglage.r0 ? (rPiece - reglage.r0) / (reglage.r1 - reglage.r0) : h01;
  }
  const milieu = { x: piece.width / 2, y: piece.height / 2 };
  const ecranPiece = {
    x: gsap.utils.interpolate(centre.x, fin.x + milieu.x * fin.k, poseFinale),
    y: gsap.utils.interpolate(centre.y, fin.y + milieu.y * fin.k, poseFinale)
  };
  // zone que la pièce doit toujours couvrir : ce qu'on voit de l'ouverture (bornée à l'écran)
  const visible = {
    gauche: Math.max(0, centre.x - (cible.x - ouverture.gauche) * echelle),
    droite: Math.min(largeur, centre.x + (ouverture.droite - cible.x) * echelle),
    haut: Math.max(0, centre.y - (cible.y - ouverture.haut) * echelle),
    bas: Math.min(hauteur, centre.y + (ouverture.bas - cible.y) * echelle)
  };
  const kPiece = Math.max(reglage.minimumPour(visible.droite - visible.gauche, visible.bas - visible.haut), Math.exp(rPiece));
  // la pièce est recalée, si besoin, pour couvrir toute la zone visible : jamais de vide derrière
  const taille = { largeur: piece.width * kPiece, hauteur: piece.height * kPiece };
  const coin = {
    x: gsap.utils.clamp(visible.droite - taille.largeur, visible.gauche, ecranPiece.x - milieu.x * kPiece),
    y: gsap.utils.clamp(visible.bas - taille.hauteur, visible.haut, ecranPiece.y - milieu.y * kPiece)
  };
  contexte.imageSmoothingEnabled = false;
  contexte.globalAlpha = 1;
  // fond bleu nuit plutôt que transparent : le décor de l'À propos ne peut jamais apparaître derrière
  contexte.fillStyle = passage.fond;
  contexte.fillRect(0, 0, largeur, hauteur);
  contexte.drawImage(piece, coin.x, coin.y, taille.largeur, taille.hauteur);
  // les bougies de la pièce brûlent déjà pendant qu'on passe la fenêtre
  const bougies = ressources.bougies;
  if (bougies && animerBougies) {
    animerBougies(performance.now() / 1000);
    const pas = PROJETS.bougies.cellule * kPiece;
    contexte.drawImage(bougies, coin.x, coin.y, bougies.width * pas, bougies.height * pas);
  }
  // la façade n'est plus dessinée une fois que l'ouverture couvre tout l'écran (elle en est alors sortie)
  const ouvertureCouvre = echelle * (ouverture.droite - ouverture.gauche) >= largeur && echelle * (ouverture.bas - ouverture.haut) >= hauteur;
  if (!ouvertureCouvre) {
    const gauche = centre.x - cible.x * echelle;
    const haut = centre.y - cible.y * echelle;
    contexte.drawImage(facade, gauche, haut, facade.width * echelle, facade.height * echelle);
    contexte.globalAlpha = 1 - lisser(fonduVitre[0], fonduVitre[1], approche);
    contexte.drawImage(vitrage, gauche + vitre.gauche * echelle, haut + vitre.haut * echelle, vitrage.width * echelle, vitrage.height * echelle);
    contexte.globalAlpha = 1;
  }
}

function elementsDuPassage(apropos, projets) {
  return {
    toile: document.querySelector(SELECTEURS.passageProjets),
    decorApropos: apropos.querySelector(SELECTEURS.decorApropos),
    contenuApropos: apropos.querySelector(SELECTEURS.ajustable),
    contenuProjets: [projets.querySelector(SELECTEURS.contenuProjets), projets.querySelector(SELECTEURS.carteProjets)]
  };
}

function descendreProjets(ressources, apropos, projets) {
  enTransition = true;
  const { passage } = PROJETS;
  const { toile, decorApropos, contenuApropos, contenuProjets } = elementsDuPassage(apropos, projets);
  const dejaVue = zonesDecouvertes.has(projets.id);
  const etat = { avancee: 0 };
  let scene = null;
  return gsap.timeline()
    .to(contenuApropos, { autoAlpha: 0, duration: passage.dureeVoile, ease: "power1.in" })
    .to([decorApropos, contenuApropos], { "--voile-decor": 0, duration: passage.dureeVoile, ease: "power1.in" }, "<")
    .add(() => {
      scene = preparerScene(toile);
      dessinerPassage(scene, ressources, 0);
      gsap.set(toile, { autoAlpha: 1 });
      gsap.set(projets, { "--voile-decor": 0 });
      if (dejaVue) {
        gsap.set(contenuProjets, { autoAlpha: 0 });
      }
      allerA(projets);
      placerPiece();
      gsap.set(contenuApropos, { clearProps: "opacity,visibility" });
      gsap.set([decorApropos, contenuApropos], { "--voile-decor": 1 });
    })
    .to(etat, { avancee: 1, duration: passage.dureeZoom, ease: courbePassage, onUpdate: () => dessinerPassage(scene, ressources, etat.avancee) })
    .add(() => {
      gsap.set(toile, { autoAlpha: 0 });
      gsap.to(projets, { "--voile-decor": 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out" });
      if (dejaVue) {
        gsap.to(contenuProjets, { autoAlpha: 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out", clearProps: "opacity,visibility" });
      }
      terminerTransition(projets);
    });
}

function remonterApropos(ressources, apropos, projets) {
  enTransition = true;
  const { passage } = PROJETS;
  const { toile, decorApropos, contenuApropos, contenuProjets } = elementsDuPassage(apropos, projets);
  const etat = { avancee: 1 };
  let scene = null;
  return gsap.timeline()
    .to(contenuProjets, { autoAlpha: 0, duration: passage.dureeVoile, ease: "power1.in" })
    .to(projets, { "--voile-decor": 0, duration: passage.dureeVoile, ease: "power1.in" }, "<")
    .add(() => {
      scene = preparerScene(toile);
      dessinerPassage(scene, ressources, 1);
      gsap.set(toile, { autoAlpha: 1 });
      gsap.set(contenuApropos, { autoAlpha: 0 });
      gsap.set([decorApropos, contenuApropos], { "--voile-decor": 0 });
      allerA(apropos);
      gsap.set(contenuProjets, { clearProps: "opacity,visibility" });
      gsap.set(projets, { "--voile-decor": 1 });
    })
    .to(etat, { avancee: 0, duration: passage.dureeZoom, ease: courbePassageRetour, onUpdate: () => dessinerPassage(scene, ressources, etat.avancee) })
    .add(() => {
      gsap.set(toile, { autoAlpha: 0 });
      if (!poursuitVers(apropos)) {
        gsap.to([decorApropos, contenuApropos], { "--voile-decor": 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out" });
        gsap.to(contenuApropos, { autoAlpha: 1, duration: TRANSITION.dureeVoileDecor, ease: "power1.out", clearProps: "opacity,visibility" });
      }
      terminerTransition(apropos);
    });
}

function activerPassage() {
  const apropos = document.querySelector(SELECTEURS.zoneApropos);
  const projets = document.querySelector(SELECTEURS.zoneProjets);
  const decor = apropos.querySelector(SELECTEURS.decorApropos);
  let ressources = null;
  let ressourcesProjets = null;
  preparerRessources(decor).then((pretes) => { ressources = pretes; });
  preparerRessourcesProjets(decor).then((pretes) => { ressourcesProjets = pretes; });
  const enHaut = (zone) => Math.abs(window.scrollY - zone.offsetTop) < 8;
  const tientDansEcran = (zone) => zone.offsetHeight <= window.innerHeight + 4;
  // les quatre passages : d'où on part, dans quel sens, vers quelle section
  const passages = [
    { versLeBas: true, vers: apropos, depuis: () => window.scrollY < hero.offsetTop + 8, pret: () => ressources, lancer: () => descendre(ressources, apropos, decor) },
    { versLeBas: false, vers: hero, depuis: () => enHaut(apropos), pret: () => ressources, lancer: () => remonter(ressources, apropos, decor) },
    { versLeBas: true, vers: projets, depuis: () => enHaut(apropos) && tientDansEcran(apropos), pret: () => ressourcesProjets, lancer: () => descendreProjets(ressourcesProjets, apropos, projets) },
    { versLeBas: false, vers: apropos, depuis: () => enHaut(projets), pret: () => ressourcesProjets, lancer: () => remonterApropos(ressourcesProjets, apropos, projets) }
  ];
  const trouver = (filtre) => passages.find((passage) => filtre(passage) && passage.depuis());
  // premier passage à jouer pour aller vers une section, même non voisine (clic du menu)
  const ordre = [hero, apropos, projets];
  const etapeVers = (cible) => {
    const ici = ordre.findIndex(enHaut);
    const la = ordre.indexOf(cible);
    if (ici < 0 || la < 0 || ici === la) {
      return null;
    }
    return trouver((passage) => passage.versLeBas === la > ici);
  };
  const passagesVus = new Set();
  const demarrer = (passage) => {
    cloreAnnonce();
    transitionEnCours = passage.lancer();
    const vitesse = transitionSautee ? TRANSITION.accelerationSaut : passagesVus.has(passage) ? TRANSITION.accelerationRevue : 1;
    transitionEnCours.timeScale(vitesse);
    passagesVus.add(passage);
  };
  poursuivreTransition = () => {
    const passage = destinationFinale && etapeVers(destinationFinale);
    if (passage && passage.pret()) {
      demarrer(passage);
    } else {
      destinationFinale = null;
      transitionEnCours = null;
      transitionSautee = false;
    }
  };
  let departTactile = null;
  const bloque = () => enTransition || performance.now() < reposJusqua;
  const lancer = (passage, evenement, destination = null) => {
    if (document.documentElement.classList.contains(CLASSES.chargementActif) || document.querySelector(SELECTEURS.dossierOuvert)) {
      return false;
    }
    if (bloque()) {
      evenement.preventDefault();
      return true;
    }
    if (!passage) {
      return false;
    }
    evenement.preventDefault();
    if (passage.pret()) {
      destinationFinale = destination;
      demarrer(passage);
    }
    return true;
  };
  const tenter = (versLeBas, evenement) => lancer(trouver((passage) => passage.versLeBas === versLeBas), evenement);
  const concerne = (versLeBas) => Boolean(trouver((passage) => passage.versLeBas === versLeBas));
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
    if (TRANSITION.touchesSaut.includes(evenement.key)) {
      sauterTransition();
      return;
    }
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
    const lien = evenement.target.closest(SELECTEURS.lienSection);
    const cible = lien && lien.getAttribute("href").length > 1 ? document.querySelector(lien.getAttribute("href")) : null;
    if (cible) {
      lancer(etapeVers(cible), evenement, cible);
    }
  };
  window.addEventListener("wheel", surMolette, { passive: false });
  window.addEventListener("touchstart", surDebutTactile, { passive: true });
  window.addEventListener("touchmove", surMouvementTactile, { passive: false });
  window.addEventListener("keydown", surTouche);
  window.addEventListener("pointerdown", sauterTransition);
  document.addEventListener("click", surClic);
  return () => {
    window.removeEventListener("wheel", surMolette);
    window.removeEventListener("touchstart", surDebutTactile);
    window.removeEventListener("touchmove", surMouvementTactile);
    window.removeEventListener("keydown", surTouche);
    window.removeEventListener("pointerdown", sauterTransition);
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
  cloreAnnonce();
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
      glissementAnnonce = gsap.timeline({ onComplete: cloreAnnonce })
        .to(annonceTitre, { x: cible.left - depart.left, y: cible.top - depart.top, scale: cible.height / depart.height, duration: NAVIGATION.dureeGlissement, ease: "power3.inOut" })
        .to([SELECTEURS.annonceVoile, SELECTEURS.annonceFilet, SELECTEURS.annonceSousTitre], { opacity: 0, duration: NAVIGATION.dureeGlissement * 0.7, ease: "power2.inOut" }, "<");
    }, `+=${NAVIGATION.pauseAnnonce}`);
}

// Termine l'annonce tout de suite (titre posé, voile retiré) : appelée à la fin du glissement,
// ou quand une transition démarre avant la fin pour que l'annonce ne flotte pas par-dessus.
function cloreAnnonce() {
  if (!titreEnAttente) {
    return;
  }
  animationAnnonce?.kill();
  glissementAnnonce?.kill();
  reveler(titreEnAttente);
  titreEnAttente = null;
  gsap.set(annonce, { autoAlpha: 0 });
  gsap.set(annonceTitre, { x: 0, y: 0, scale: 1 });
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
function activerOnglet(boutons, bouton, portrait, avecFocus) {
  animationPortrait?.progress(1).kill();
  const panneaux = boutons.map((autre) => document.getElementById(autre.getAttribute("aria-controls")));
  const panneau = document.getElementById(bouton.getAttribute("aria-controls"));
  boutons.forEach((autre) => {
    const actif = autre === bouton;
    autre.setAttribute("aria-selected", actif);
    autre.tabIndex = actif ? 0 : -1;
  });
  if (avecFocus) {
    bouton.focus();
  }
  const changerClasse = () => {
    panneaux.forEach((autre) => { autre.hidden = autre !== panneau; });
    portrait.src = bouton.dataset.portrait;
    portrait.alt = bouton.dataset.alt;
  };
  if (!mouvementAutorise || !portrait.complete) {
    changerClasse();
    return;
  }
  // la carte tourne jusqu'à se présenter de profil, le skin change, puis elle finit son tour
  const { retournement } = ONGLETS;
  const cadre = portrait.closest(SELECTEURS.cadrePortrait);
  const ancien = panneaux.find((autre) => !autre.hidden);
  const moitie = retournement.duree / 2;
  animationPortrait = gsap.timeline()
    .set(cadre, { transformPerspective: retournement.perspective })
    .to(cadre, { rotationY: 90, filter: `brightness(${1 - retournement.ombre})`, duration: moitie, ease: "power2.in" })
    .to(ancien, { opacity: 0, duration: moitie, ease: "power1.in" }, 0)
    .add(changerClasse)
    .set(ancien, { clearProps: "opacity" })
    .set(panneau, { opacity: 0 })
    .fromTo(cadre, { rotationY: -90 }, { rotationY: 0, filter: "brightness(1)", duration: moitie, ease: "power2.out", immediateRender: false, clearProps: "transform,filter" })
    .to(panneau, { opacity: 1, duration: moitie, ease: ONGLETS.courbeFondu, clearProps: "opacity" }, "<");
}

// La carte du portrait réagit à la souris comme une carte posée qu'on bouscule : elle penche du côté
// où l'on appuie, tressaille quand la souris arrive, puis se remet en place en oscillant.
function initialiserCartePortrait() {
  const carte = document.querySelector(SELECTEURS.cartePortrait);
  if (!carte || !mouvementAutorise) {
    return;
  }
  const reglages = ONGLETS.carte;
  let suivre = null;
  // reflet doré : écart du pointeur au centre (-0,5 à 0,5), lissé comme l'inclinaison de la carte,
  // puis traduit en variables CSS (position, écart amplifié, angle de la lumière du liseré)
  const reflet = { x: 0, y: 0 };
  const poserReflet = () => {
    carte.style.setProperty("--reflet-x", `${((reflet.x + 0.5) * 100).toFixed(1)}%`);
    carte.style.setProperty("--reflet-y", `${((reflet.y + 0.5) * 100).toFixed(1)}%`);
    carte.style.setProperty("--reflet-dx", `${(reflet.x * 100).toFixed(1)}%`);
    carte.style.setProperty("--reflet-dy", `${(reflet.y * 100).toFixed(1)}%`);
    // la lumière du liseré pivote doucement (± 35°) au lieu de faire le tour de la carte
    carte.style.setProperty("--reflet-angle", `${(135 + reflet.x * 70).toFixed(1)}deg`);
  };
  // un peu plus d'inertie que l'inclinaison : le reflet glisse au lieu de suivre nerveusement
  const suiviReflet = { duration: reglages.suivi * 2, ease: "power2.out", onUpdate: poserReflet };
  const suivreReflet = {
    x: gsap.quickTo(reflet, "x", suiviReflet),
    y: gsap.quickTo(reflet, "y", suiviReflet)
  };
  carte.addEventListener("pointerenter", (evenement) => {
    if (evenement.pointerType !== "mouse") {
      return;
    }
    gsap.killTweensOf(carte);
    gsap.set(carte, { transformPerspective: reglages.perspective });
    suivre = ["rotationX", "rotationY", "x", "y", "scale"].reduce((fonctions, propriete) => ({
      ...fonctions,
      [propriete]: gsap.quickTo(carte, propriete, { duration: reglages.suivi, ease: "power3.out" })
    }), {});
    const { force, maximum } = reglages.secousse;
    const secousse = gsap.utils.clamp(-maximum, maximum, (evenement.movementX - evenement.movementY) * force);
    gsap.fromTo(carte, { rotationZ: secousse }, { rotationZ: 0, duration: reglages.retour.duree, ease: reglages.retour.courbe });
  });
  carte.addEventListener("pointermove", (evenement) => {
    if (!suivre) {
      return;
    }
    const cadre = carte.getBoundingClientRect();
    const x = (evenement.clientX - cadre.left) / cadre.width - 0.5;
    const y = (evenement.clientY - cadre.top) / cadre.height - 0.5;
    suivre.rotationY(x * 2 * reglages.inclinaison);
    suivre.rotationX(-y * 2 * reglages.inclinaison);
    suivre.x(-x * reglages.recul);
    suivre.y(-y * reglages.recul);
    suivre.scale(reglages.zoom);
    suivreReflet.x(x);
    suivreReflet.y(y);
    carte.style.setProperty("--reflet-opacite", 1);
  });
  carte.addEventListener("pointerleave", () => {
    if (!suivre) {
      return;
    }
    suivre = null;
    carte.style.setProperty("--reflet-opacite", 0);
    gsap.to(carte, { rotationX: 0, rotationY: 0, x: 0, y: 0, scale: 1, duration: reglages.retour.duree, ease: reglages.retour.courbe, overwrite: "auto", clearProps: "transform" });
  });
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
  placerPiece();
  ajusterProjets();
}

// Panneau des Projets : même échelle que l'À propos, pour que les titres des deux sections soient
// exactement à la même place et à la même taille (appelée après le calcul de l'À propos).
function ajusterProjets() {
  const panneau = document.querySelector(SELECTEURS.contenuProjets);
  if (!panneau) {
    return;
  }
  const apropos = document.querySelector(SELECTEURS.ajustable);
  panneau.style.setProperty("--echelle", apropos?.style.getPropertyValue("--echelle") || 1);
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
initialiserCartePortrait();
initialiserObjets();
initialiserQuetes();
initialiserDossiers();
initialiserBougies();
animerVie();
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
