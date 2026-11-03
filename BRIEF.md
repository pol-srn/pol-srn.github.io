# Brief — Portfolio Paul Siron

## Identité
- Signature : **Paul Siron**. Identité visuelle neuve (pas de logo existant).
- Étudiant BUT MMI 2e année, IUT du Limousin (Limoges), parcours Création numérique.
- Profil : créatif polyvalent. Dessin (papier + tablette/Photoshop) depuis l'enfance, montage vidéo (chaîne YouTube trottinette freestyle *pol_scootering*), UI/maquettage Figma. Apprend Unity.
- Fil rouge : curiosité, envie d'apprendre et de créer. Le site doit montrer de la profondeur, pas un catalogue.

## Cibles (par priorité)
1. Recruteurs de stage : 8 à 12 semaines dès avril 2027, puis 12 à 16 semaines en 2028.
2. Jurys de master.
3. Agences.
4. Freelance : éventuel, une simple mention.

## Ton
- À retenir : **intéressant, original, surprenant** (sortir du lot sans complexité forcée).
- À éviter : **trop classique**.
- Référence aimée : BATCH, pour son jeu sur les tailles de police.
- Parti pris : la rigueur Apple (espace, hiérarchie, une couleur d'action, motion sobre), sans en reprendre le look. Une seule signature forte, tout le reste discret.
- Tutoiement/vouvoiement et registre : à fixer avec la direction artistique.

## Direction artistique (questionnaire du 2026-11-02)
- **Univers total dark fantasy.** Le site est le monde, mais avec des **sections claires** (accueil, projets, à propos, contact). Les 3 premiers aperçus « faisaient trop jeu, pas assez site ».
- **Base retenue : piste B · Arcade.** Elle reste à retravailler.
- **Sombre**, palette **nuit froide** : bleus nuit, violets, lune pâle.
- Première impression : **un « waouh » visuel**.
- **Pixel art pour les illustrations** (décors, scènes). Interface et textes courants nets et lisibles.
- **Titres en gothique net, non pixelisé** : UnifrakturMaguntia (Book), validée le 2026-11-02. Textes courants en Schibsted Grotesk.
- **Pixel art en pixels de 2 px** sur desktop (niveau de détail de la fin de la 2D : briques ombrées, feu dégradé, brume tramée).
- Sur la carte, chaque projet est un **feu de camp** : le niveau sélectionné est allumé, les autres sont éteints.
- **Motion très vivant.** Grosse animation à l'arrivée dans chaque section, puis seulement quelques petits éléments de décor animés à l'intérieur.
- **Projets « façon jeu ».** Sur l'accueil, une carte du monde avec à gauche la liste des projets présentés comme des niveaux. Chaque projet sélectionné affiche une courte description et un bouton vers sa page dédiée.
- Production des illustrations pixel art : **à décider** (génération IA Figma, dessin en code, assets libres ou Paul plus tard).
- Références : **Paul envoie des liens.**
- La rigueur Apple s'applique à la structure, à la lisibilité, à la hiérarchie et à la sobriété de l'interface, pas au décor.

## Hero validé (Figma : « Test · hero arcade (3 arches) », 2026-11-03)
- Arcade gothique de 3 arches façon « arches » : une principale au centre, deux latérales fermées par un muret bas. Colonnes groupées, moulures à boudins, lierre.
- Décor continu derrière les arches : ciel, lune, piton rocheux organique avec un petit château gothique (fenêtres chaudes) sur son flanc gauche, brouillard de la 2e rangée d'arbres jusqu'au pied de la montagne, forêt d'arbres feuillus.
- Feu de camp DS3 : asset de Paul (`feu-final.png`, détouré), centré sur l'arche, 240 × 411 px.
- Éclairage : le feu est la lumière principale (vignette radiale + halo chaud), avec un halo propre à la lune.
- Titre « Paul Siron » en 156 px, accroche et disponibilité groupées dessous.

## Navigation validée (prototype Figma « Navigation A+B+C »)
- **C. Menu titre qui se replie :** le menu façon écran titre du hero se transforme en chemin de feux au premier défilement.
- **A. Chemin de feux de camp :** colonne fixe sur le bord droit, 5 feux (Accueil, À propos, Projets, Compétences, Contact) reliés par un sentier. Feu allumé = section active, sentier doré = parcouru, étincelle = progression du défilement, nom en gothique au survol. Sur mobile : barre horizontale en bas.
- **B. Annonce de zone :** à l'entrée de chaque section, son nom apparaît en grand au centre, puis s'efface.
- Accessibilité : vrai `<nav>` avec liens, `aria-current`, clavier, version sans animation (`prefers-reduced-motion`).

## Moodboard (`moodboard/`) : principes retenus, sans en reprendre le contenu
- **Lumière.** Clair-obscur. Une nuit bleue froide occupe presque toute la surface, avec **une seule source chaude** (le feu) et la lune comme lumière froide secondaire. L'œil va toujours vers la lumière.
- **Couleur.** Bleu nuit à sarcelle pour le fond, os/lune pâle pour le texte, **braise orange-or** pour l'accent : action, sélection, focus. La lune rouge reste un écart rare.
- **Profondeur.** Plans successifs séparés par la brume. Personnages minuscules dans un monde immense : le décor domine, le contenu s'y pose.
- **Cadrage.** Arches, ouvertures, tunnel de branches : le motif du **seuil**, qui sert de transition entre les sections (on « passe l'arche » pour entrer dans la suivante).
- **Matière.** Pixel art tramé et grain. Écran CRT (lignes de balayage, très léger).
- **Interface.** Menu façon titre de jeu : liste sobre, élément sélectionné marqué par une barre lumineuse, filet fin, texte net posé sur l'illustration plein cadre. Contenus présentés dans des **cadres d'écran** façon borne d'arcade.
- **Humeur.** Calme, mélancolie, halte au coin du feu (le feu de camp, point de repos), plus que le combat.

## Structure (reprise de l'ancienne maquette, sans sa DA)
- **Accueil, une seule page qui défile :** nav (Accueil, À propos, Projets, Compétences, Contact), puis hero avec le nom, puis À propos (photo, parcours, hobbies), Projets (carte du monde + liste en niveaux), Compétences (logiciels + texte), Contact (infos + formulaire).
- **Page projet dédiée :** titre, description à gauche, carrousel (grande image, flèches, vignettes) à droite. Sur mobile : titre, carrousel, puis description.
- Contact : formulaire via un service externe (le site est statique). Ne pas publier l'adresse complète : la ville suffit. Téléphone : au choix de Paul.

## Projets (6)
1. **App Hollow Knight** (Figma) : appli mobile de scan et collection de créatures façon TCG. Projet phare, étude de cas complète.
2. **Stop motion Decathlon** (SAÉ 1.04, groupe) : concept, storyboard et prise de vue par Paul ; montage et voix off par l'équipe.
3. **Stickers hard/soft skills** (SAÉ 1.03) : Illustrator (style Wood) et Photoshop.
4. **Site SAÉ 1.05** (HTML/CSS/JS statique, responsive, hébergé) : https://siron-sae105.mmi-limoges.fr/monsite.html
5. **Reportage 3 min + pub 30 s** (groupe) : Paul a imaginé les plans, filmé et monté. https://youtu.be/XSuQX0kv3WE
6. **Pratique perso** : YouTube, dessins, Unity.

## Contenu
- Bilingue **FR + EN**.
- Section contact complète (e-mail, LinkedIn, CV PDF). Seul réseau pro : LinkedIn.
- Photo : portrait détouré (pull bordeaux) fourni.
- Visuels des projets à refaire proprement.

## Technique
- **HTML / CSS / JS vanilla + GSAP**. Claude code, Paul dirige et valide.
- Méthode verif-code-projet : variables CSS, propriétés ordonnées par catégorie, BEM, W3C, a11y.
- Bilingue : pages FR à la racine, pages EN dans `/en/`.
- Hébergement **GitHub Pages** (gratuit). Nom de domaine à décider avant la mise en ligne.
- Échéance : au plus vite, idéalement une V1 en ligne mi-décembre 2026.
