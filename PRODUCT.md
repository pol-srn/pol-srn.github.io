# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

1. **Recruteurs de stage (cible principale).** Ils parcourent le site en quelques minutes pour décider s'ils contactent Paul : stage de 8 à 12 semaines dès avril 2027, puis 12 à 16 semaines en 2028.
2. Jurys de master.
3. Agences.
4. Freelance : une simple mention.

## Product Purpose

Portfolio personnel de Paul Siron, étudiant en BUT MMI 2e année (IUT du Limousin, Limoges). Il doit donner envie de le contacter pour un stage en montrant de la profondeur et de la curiosité, pas un catalogue. Succès : un recruteur se souvient du site et prend contact.

## Positioning

Un créatif polyvalent (dessin, vidéo, UI) qui montre sa curiosité à travers un monde dark fantasy jouable, plutôt qu'un catalogue de projets.

## Operating Context

- Site d'une seule page qui défile, sections : Accueil, À propos (qui absorbe les compétences), Projets, Contact. Page dédiée par projet.
- Navigation en chemin de feux de camp ; annonce « Nouvelle zone découverte » à l'entrée de chaque section.
- Bilingue : français à la racine, anglais dans `/en/`.
- Consulté surtout sur ordinateur, aussi sur mobile.

## Capabilities and Constraints

- Stack : HTML / CSS / JS vanilla + GSAP (ScrollTrigger). Paul dirige et valide, Claude code.
- Site statique hébergé sur GitHub Pages ; formulaire de contact via un service externe. Nom de domaine à décider.
- Méthode de code verif-code-projet : variables CSS, propriétés ordonnées par catégorie, BEM, rem, validation W3C, accessibilité.
- Chaque section tient dans la hauteur de l'écran sur ordinateur, sans défilement interne.
- Échéance : V1 en ligne idéalement mi-décembre 2026.
- Undecided : production des futures illustrations pixel art ; transitions narratives entre sections (à faire une fois les sections finies) ; CV téléchargeable (plus tard, CV pas finalisé).

## Brand Commitments

- Signature : « Paul Siron ». Pas de logo existant.
- Registre : **tutoiement** du visiteur.
- Ton : intéressant, original, surprenant ; à éviter : trop classique, rendu « généré par IA ».
- Engagements visuels déjà validés (voir BRIEF.md) : univers dark fantasy façon Souls, nuit froide + une seule source chaude (le feu), pixel art 2 px pour les illustrations, titres en UnifrakturMaguntia, textes nets lisibles.

## Evidence on Hand

- Brief complet : `BRIEF.md`. CV : `Downloads/CV Paul SIRON.pdf` (source des dates, outils, centres d'intérêt).
- Portraits pixel art (étudiant, chevalier, samouraï, sorcier) et icônes : `assets/images/a-propos/`.
- 6 projets listés dans le brief (App Hollow Knight, stop motion Decathlon, stickers, site SAÉ 1.05, reportage + pub, pratique perso) ; visuels à refaire.
- Absences à ne pas inventer : aucun témoignage, aucune expérience pro hors visite d'agence et stage de 3e ; aucun niveau chiffré de compétence.
- Ne jamais publier l'adresse complète ni le téléphone.

## Product Principles

1. Le monde sert le propos : chaque élément de jeu doit rendre l'information plus claire ou plus mémorable, jamais la cacher.
2. Le vrai mot d'abord, la métaphore ensuite : un recruteur pressé comprend tout sans jouer.
3. Le niveau d'émerveillement du hero se maintient dans chaque section.
4. Une seule signature forte par écran, le reste sobre et lisible.

## Accessibility & Inclusion

Navigation au clavier, `aria-current`, rôles ARIA corrects pour les composants interactifs, alternative sans animation (`prefers-reduced-motion`), contrastes lisibles sur fond sombre.
