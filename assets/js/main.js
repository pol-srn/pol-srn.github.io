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

const SELECTEURS = {
  hero: ".hero",
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
