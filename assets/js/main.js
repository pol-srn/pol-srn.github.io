const CHARGEMENT = {
  dureeMinimale: 4.8,
  delaiChute: 0.3,
  dureeChute: 2.2,
  progressionImpact: 0.25,
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
  dureeRemplissage: 0.4,
  dureeEmbrasement: 1,
  agrandissementLueur: 3,
  dureeEclat: 0.8,
  rayonEclatDepart: "150vmax",
  rayonEclatFin: "9vmax",
  dureeResserrement: 2,
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
  heroFeu: ".hero__feu",
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
  zoneTitre: ".zone__titre"
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
  filante: "hero__filante"
};

const MEDIAS = {
  ordinateur: "(min-width: 48rem)",
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
let animationAnnonce = null;
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

  const tempsImpact = CHARGEMENT.delaiChute + CHARGEMENT.dureeChute;
  const attenteTemps = gsap.timeline({ onUpdate: afficherProgression })
    .to(minuteur, { progression: CHARGEMENT.progressionImpact, duration: tempsImpact, ease: "none" })
    .to(minuteur, { progression: 1, duration: CHARGEMENT.dureeMinimale - tempsImpact, ease: "power1.inOut" })
    .then();

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
  gsap.fromTo(SELECTEURS.brumeLoin, { xPercent: -DECOR.derivBrumeLoin, scale: 1.03 }, { xPercent: DECOR.derivBrumeLoin, scale: 1.03, duration: DECOR.dureeBrumeLoin, ease: "sine.inOut", repeat: -1, yoyo: true });
  gsap.fromTo(SELECTEURS.brumeProche, { xPercent: DECOR.derivBrumeProche, scale: 1.05, opacity: 0.85 }, { xPercent: -DECOR.derivBrumeProche, scale: 1.05, opacity: 1, duration: DECOR.dureeBrumeProche, ease: "sine.inOut", repeat: -1, yoyo: true });
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

function reveler(titre) {
  if (titre) {
    gsap.set(titre, { opacity: 1 });
  }
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
    gsap.set(zone.querySelector(SELECTEURS.zoneTitre), { opacity: 0 });
    ScrollTrigger.create({
      trigger: zone,
      start: NAVIGATION.debutZone,
      onEnter: () => {
        if (!zonesDecouvertes.has(zone.id)) {
          zonesDecouvertes.add(zone.id);
          annoncerZone(zone);
        }
      }
    });
  });
}

creerEtoiles();
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
  if (mouvement) {
    animerDecor();
    programmerEtoileFilante(DECOR.filante.delaiMin);
    annoncerLesZones();
  }
  return () => {
    prochaineFilante?.kill();
    chemin.classList.add(CLASSES.cheminDeploye);
    document.querySelectorAll(SELECTEURS.zoneTitre).forEach((titre) => gsap.set(titre, { clearProps: "opacity" }));
  };
});
