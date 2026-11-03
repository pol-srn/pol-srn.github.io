const REGLAGES = {
  dureeRepli: 0.9,
  decalageRepli: 0.06,
  distanceRepli: 140,
  dureeApparitionAnnonce: 0.5,
  pauseAnnonce: 0.9,
  dureeDisparitionAnnonce: 0.6,
  seuilRepli: "top -12%",
  debutZone: "top 55%",
  nombreBraises: 14,
  derivBrume: 1.5,
  dureeBrume: 14,
  parallaxe: {
    ciel: 35,
    montagne: 25,
    "foret-loin": 15,
    brume: 12,
    "foret-proche": 8
  }
};

const CHARGEMENT = {
  dureeMinimale: 3.2,
  delaiChute: 1.2,
  dureeChute: 0.9,
  hauteurChute: 0.6,
  pointImpact: 0.74,
  opaciteLueur: 0.75,
  dureeApparitionLueur: 0.8,
  dureeRemplissage: 0.4,
  dureeEmbrasement: 1,
  agrandissementLueur: 3,
  agrandissementFinal: 16,
  dureeEclat: 0.7,
  dureeRetour: 1.8,
  dureeFonduSimple: 0.4
};

const ENTREE_HERO = {
  zoomDepart: 1.14,
  dureeZoom: 2.6,
  decalageTexte: 28,
  dureeTexte: 1,
  ecartTexte: 0.14,
  delaiTexte: 0.6,
  decalageMenu: 40,
  dureeMenu: 0.8,
  ecartMenu: 0.08,
  delaiMenu: 0.9,
  delaiEntete: 1.2
};

const SELECTEURS = {
  chargement: ".chargement",
  chargementFeu: ".chargement__feu",
  chargementCanvas: ".chargement__canvas",
  chargementLueur: ".chargement__lueur",
  chargementEtincelle: ".chargement__etincelle",
  chargementRemplissage: ".chargement__remplissage",
  chargementScene: ".chargement__scene",
  chargementEclat: ".chargement__eclat",
  hero: ".hero",
  heroScene: ".hero__scene",
  heroTextes: ".hero__ligne, .hero__accroche, .hero__dispo",
  entete: ".entete",
  calque: ".hero__calque--",
  halo: ".hero__halo",
  braises: ".hero__braises",
  menuTitre: ".menu-titre",
  lienMenuTitre: ".menu-titre__lien",
  chemin: ".chemin",
  etape: ".chemin__etape",
  lien: ".chemin__lien",
  feu: ".chemin__feu",
  etincelle: ".chemin__etincelle",
  annonce: ".annonce",
  annonceVoile: ".annonce__voile",
  annonceContenu: ".annonce__contenu",
  annonceTitre: ".annonce__titre",
  annonceFilet: ".annonce__filet",
  zone: ".zone"
};

const CLASSES = {
  chargementActif: "chargement-actif",
  lienActif: "chemin__lien--actif",
  etapeParcourue: "chemin__etape--parcourue",
  cheminReplie: "chemin--replie",
  braise: "hero__braise"
};

const MEDIAS = {
  ordinateur: "(min-width: 48rem)",
  mouvement: "(prefers-reduced-motion: no-preference)"
};

gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector(SELECTEURS.hero);
const chemin = document.querySelector(SELECTEURS.chemin);
const etapes = [...document.querySelectorAll(SELECTEURS.etape)];
const liens = [...document.querySelectorAll(SELECTEURS.lien)];
const etincelle = document.querySelector(SELECTEURS.etincelle);
const sections = liens.map((lien) => document.querySelector(lien.getAttribute("href")));
const annonce = document.querySelector(SELECTEURS.annonce);
const annonceTitre = document.querySelector(SELECTEURS.annonceTitre);
const zonesDecouvertes = new Set();
let animationAnnonce = null;

function activerEtape(index) {
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

function creerBraises() {
  const conteneur = document.querySelector(SELECTEURS.braises);
  for (let i = 0; i < REGLAGES.nombreBraises; i++) {
    const braise = document.createElement("span");
    braise.className = CLASSES.braise;
    braise.style.setProperty("--x", `${Math.round(Math.random() * 100)}%`);
    braise.style.setProperty("--derive", `${Math.round(Math.random() * 60 - 30)}px`);
    braise.style.setProperty("--duree", `${(3 + Math.random() * 3).toFixed(2)}s`);
    braise.style.setProperty("--delai", `${(Math.random() * 5).toFixed(2)}s`);
    conteneur.append(braise);
  }
}

function annoncerZone(nom) {
  if (animationAnnonce) {
    animationAnnonce.kill();
  }
  annonceTitre.textContent = nom;
  animationAnnonce = gsap.timeline()
    .set(annonce, { autoAlpha: 1 })
    .fromTo(SELECTEURS.annonceVoile, { opacity: 0 }, { opacity: 1, duration: REGLAGES.dureeApparitionAnnonce, ease: "power2.out" })
    .fromTo(SELECTEURS.annonceContenu, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: REGLAGES.dureeApparitionAnnonce, ease: "power3.out" }, "<0.1")
    .fromTo(SELECTEURS.annonceFilet, { scaleX: 0 }, { scaleX: 1, duration: REGLAGES.dureeApparitionAnnonce * 1.4, ease: "power3.out" }, "<")
    .to([SELECTEURS.annonceVoile, SELECTEURS.annonceContenu], { opacity: 0, duration: REGLAGES.dureeDisparitionAnnonce, ease: "power2.in" }, `+=${REGLAGES.pauseAnnonce}`)
    .set(annonce, { autoAlpha: 0 });
}

function suivreSections(avecEtincelle) {
  const pas = etapes.length > 1 ? etapes[1].offsetTop - etapes[0].offsetTop : 0;
  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onToggle: (etat) => {
        if (etat.isActive) {
          activerEtape(index);
        }
      },
      onUpdate: (etat) => {
        if (avecEtincelle && index < sections.length - 1) {
          gsap.set(etincelle, { y: (index + etat.progress) * pas, opacity: etat.progress > 0.02 && etat.progress < 0.98 ? 1 : 0 });
        }
      }
    });
  });
}

function annoncerLesZones() {
  document.querySelectorAll(SELECTEURS.zone).forEach((zone) => {
    ScrollTrigger.create({
      trigger: zone,
      start: REGLAGES.debutZone,
      onEnter: () => {
        if (!zonesDecouvertes.has(zone.id)) {
          zonesDecouvertes.add(zone.id);
          annoncerZone(zone.querySelector("h2").textContent);
        }
      }
    });
  });
}

function animerDecor() {
  Object.entries(REGLAGES.parallaxe).forEach(([nom, decalage]) => {
    gsap.to(`${SELECTEURS.calque}${nom}`, {
      yPercent: decalage,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
    });
  });
  gsap.fromTo(`${SELECTEURS.calque}brume`, { xPercent: -REGLAGES.derivBrume, scale: 1.04 }, { xPercent: REGLAGES.derivBrume, scale: 1.04, duration: REGLAGES.dureeBrume, ease: "sine.inOut", repeat: -1, yoyo: true });
  gsap.to(SELECTEURS.halo, { opacity: () => gsap.utils.random(0.55, 1), duration: () => gsap.utils.random(0.08, 0.3), ease: "sine.inOut", repeat: -1, repeatRefresh: true });
  creerBraises();
}

function replierMenu(avecMouvement) {
  const liensMenu = gsap.utils.toArray(SELECTEURS.lienMenuTitre);
  const feux = gsap.utils.toArray(`${SELECTEURS.chemin} ${SELECTEURS.etape}`);
  chemin.classList.remove(CLASSES.cheminReplie);
  gsap.set(chemin, { autoAlpha: 0 });
  const repli = gsap.timeline({ paused: true })
    .to(liensMenu, { x: REGLAGES.distanceRepli, autoAlpha: 0, duration: REGLAGES.dureeRepli * 0.6, stagger: REGLAGES.decalageRepli, ease: "power2.in" })
    .set(chemin, { autoAlpha: 1 })
    .from(feux, { x: 40, autoAlpha: 0, duration: REGLAGES.dureeRepli * 0.6, stagger: REGLAGES.decalageRepli, ease: "power3.out" }, "-=0.2");
  ScrollTrigger.create({
    trigger: hero,
    start: REGLAGES.seuilRepli,
    onEnter: () => (avecMouvement ? repli.play() : repli.progress(1)),
    onLeaveBack: () => (avecMouvement ? repli.reverse() : repli.progress(0))
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

function revelerHero() {
  gsap.fromTo(SELECTEURS.heroScene, { scale: ENTREE_HERO.zoomDepart }, { scale: 1, duration: ENTREE_HERO.dureeZoom, ease: "power3.out" });
  gsap.from(SELECTEURS.heroTextes, { autoAlpha: 0, y: ENTREE_HERO.decalageTexte, duration: ENTREE_HERO.dureeTexte, stagger: ENTREE_HERO.ecartTexte, delay: ENTREE_HERO.delaiTexte, ease: "power3.out" });
  gsap.from(SELECTEURS.lienMenuTitre, { autoAlpha: 0, x: ENTREE_HERO.decalageMenu, duration: ENTREE_HERO.dureeMenu, stagger: ENTREE_HERO.ecartMenu, delay: ENTREE_HERO.delaiMenu, ease: "power3.out" });
  gsap.from(SELECTEURS.entete, { autoAlpha: 0, duration: ENTREE_HERO.dureeMenu, delay: ENTREE_HERO.delaiEntete });
}

function lancerChargement() {
  const ecran = document.querySelector(SELECTEURS.chargement);
  if (!ecran) {
    return;
  }
  const mouvement = window.matchMedia(MEDIAS.mouvement).matches;
  const remplissage = document.querySelector(SELECTEURS.chargementRemplissage);
  const feu = document.querySelector(SELECTEURS.chargementFeu);
  const canvas = document.querySelector(SELECTEURS.chargementCanvas);
  const minuteur = { progression: 0 };
  let progressionReelle = 0;

  if (mouvement) {
    feuChargement.demarrer(canvas);
  } else {
    feuChargement.contexte = canvas.getContext("2d");
    feuChargement.mode = "allume";
    feuChargement.dessiner();
  }

  const afficherProgression = () => {
    gsap.set(remplissage, { scaleX: Math.min(minuteur.progression, progressionReelle) });
  };

  const allumage = gsap.timeline({ paused: !mouvement })
    .set(SELECTEURS.chargementEtincelle, { y: () => -window.innerHeight * CHARGEMENT.hauteurChute, opacity: 1 }, CHARGEMENT.delaiChute)
    .to(SELECTEURS.chargementEtincelle, { y: () => feu.offsetHeight * CHARGEMENT.pointImpact, duration: CHARGEMENT.dureeChute, ease: "power2.in" })
    .set(SELECTEURS.chargementEtincelle, { opacity: 0 })
    .add(() => feuChargement.allumer())
    .to(SELECTEURS.chargementLueur, { opacity: CHARGEMENT.opaciteLueur, duration: CHARGEMENT.dureeApparitionLueur, ease: "power2.out" })
    .add(() => {
      gsap.to(SELECTEURS.chargementLueur, { scale: () => gsap.utils.random(0.94, 1.06), opacity: () => gsap.utils.random(0.6, 0.85), duration: () => gsap.utils.random(0.1, 0.25), repeat: -1, repeatRefresh: true, ease: "sine.inOut" });
    });

  const fin = () => {
    if (!mouvement) {
      gsap.to(ecran, { autoAlpha: 0, duration: CHARGEMENT.dureeFonduSimple, onComplete: () => { feuChargement.arreter(); terminerChargement(ecran); } });
      return;
    }
    gsap.killTweensOf(SELECTEURS.chargementLueur);
    feuChargement.embraser(CHARGEMENT.dureeEmbrasement);
    gsap.timeline({ onComplete: () => terminerChargement(ecran) })
      .to(SELECTEURS.chargementLueur, { scale: CHARGEMENT.agrandissementLueur, opacity: 1, duration: CHARGEMENT.dureeEmbrasement, ease: "power2.in" })
      .to(SELECTEURS.chargementLueur, { scale: CHARGEMENT.agrandissementFinal, duration: CHARGEMENT.dureeEclat, ease: "power2.in" })
      .to(SELECTEURS.chargementEclat, { opacity: 1, duration: CHARGEMENT.dureeEclat, ease: "power2.in" }, "<")
      .set(SELECTEURS.chargementScene, { autoAlpha: 0 })
      .set(ecran, { backgroundColor: "transparent" })
      .add(() => {
        feuChargement.arreter();
        revelerHero();
      })
      .to(SELECTEURS.chargementEclat, { opacity: 0, duration: CHARGEMENT.dureeRetour, ease: "power2.out" });
  };

  const attenteTemps = gsap.to(minuteur, { progression: 1, duration: mouvement ? CHARGEMENT.dureeMinimale : 0, ease: "power1.inOut", onUpdate: afficherProgression }).then();
  const attenteFichiers = suivreChargement((valeur) => {
    progressionReelle = valeur;
    afficherProgression();
  });
  const attenteAllumage = mouvement ? allumage.then() : Promise.resolve();

  Promise.all([attenteTemps, attenteFichiers, attenteAllumage]).then(() => {
    gsap.to(remplissage, { scaleX: 1, duration: CHARGEMENT.dureeRemplissage, ease: "power1.out", overwrite: true, onComplete: fin });
  });
}

lancerChargement();

const medias = gsap.matchMedia();

medias.add(MEDIAS, (contexte) => {
  const { ordinateur, mouvement } = contexte.conditions;
  suivreSections(ordinateur && mouvement);
  if (ordinateur) {
    replierMenu(mouvement);
  } else {
    chemin.classList.remove(CLASSES.cheminReplie);
  }
  if (mouvement) {
    animerDecor();
    annoncerLesZones();
  }
  return () => {
    document.querySelectorAll(`.${CLASSES.braise}`).forEach((braise) => braise.remove());
    chemin.classList.add(CLASSES.cheminReplie);
  };
});
