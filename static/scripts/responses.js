function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "bonjour") {
        return "bonjour comment je peut vous aider!";
    } 
    else if (input == "merci") {
        return "avec plaisir !";
    
    } 
    else if (input == "intellij") {
        return "IntelliJ IDEA également appelé « IntelliJ », « IDEA » ou « IDJ » est un environnement de développement intégré (en anglais Integrated Development Environment - IDE) destiné au développement de logiciels informatiques reposant sur la technologie Java. Il est développé par JetBrains (anciennement « IntelliJ ») et disponible en deux versions, l'une communautaire, open source, sous licence Apache 2 et l'autre propriétaire, protégée par une licence commerciale. Tous deux supportent les langages de programmation Java, Kotlin, Groovy et Scala";
        
    }
    else if (input == "notepadd++"){
        return  "Notepad++ est un éditeur de texte libre générique, fonctionnant sous Windows, codé en C++, qui intègre la coloration syntaxique de code source pour les langages et fichiers C, C++, Java, C#, XML, HTML, PHP, JavaScript, makefile, art ASCII, doxygen, .bat, MS fichier ini, ASP, Visual Basic/VBScript, SQL, Objective-C, CSS, Pascal, Perl, Python, R, MATLAB, Lua, TCL, Assembleur, Ruby, Lisp, Scheme, Properties, Diff, Smalltalk, PostScript et VHDL ainsi que pour tout autre langage informatique, car ce logiciel propose la possibilité de créer ses propres colorations syntaxiques pour un langage quelconque.";
    }
    else if (input == "eclipse ide"){
        return "Eclipse IDE est un environnement de développement intégré libre (le terme Eclipse désigne également le projet correspondant, lancé par IBM) extensible, universel et polyvalent, permettant potentiellement de créer des projets de développement mettant en œuvre n'importe quel langage de programmation. Eclipse IDE est principalement écrit en Java (à l'aide de la bibliothèque graphique SWT, d'IBM), et ce langage, grâce à des bibliothèques spécifiques, est également utilisé pour écrire des extensions.";   
    }
    else if (input == "code blocks"){
        return "Code:Blocks est un environnement de développement intégré libre et multiplate-forme. Il est écrit en C++ et utilise la bibliothèque wxWidgets. Code:Blocks est orienté C et C++, mais il supporte d'autres langages comme FORTRAN ou le D.";
    }
    else if (input == "star uml"){
        return "StarUML est un outil de génie logiciel dédié à la modélisation UML et édité par la société coréenne MKLabs.  Il est multiplateforme et fonctionne sous Windows, Linux et MacOS.";
    }
    else if (input == "oracle mysql"){
        return "MySQL est un système de gestion de bases de données relationnelles (SGBDR). Il est distribué sous une double licence GPL et propriétaire. Il fait partie des logiciels de gestion de base de données les plus utilisés au monde2, autant par le grand public (applications web principalement) que par des professionnels, en concurrence avec Oracle, PostgreSQL et Microsoft SQL Server";
    }
    else if (input == "ubuntu"){
      return "Ubuntu (prononciation : /u.bun.tu/, en anglais : [ʊbʊntu]) est un système d’exploitation GNU/Linux fondé sur Debian. Il est développé, commercialisé et maintenu pour les ordinateurs individuels (desktop), les serveurs (Server) et les objets connectés (Core) par la société Canonical";

    }
    else if (input == "fedora"){
        return "Fedora Linux est un système d’exploitation libre et une distribution Linux communautaire développée par le projet Fedora et sponsorisée par l’entreprise Red Hat, qui lui fournit des développeurs ainsi que des moyens financiers et logistiques. Fedora est orientée vers l'inclusion de nouvelles technologies pour le monde du logiciel libre, auquel elle contribue via les projets amont tels que le noyau Linux, GNOME, NetworkManager, PackageKit, PulseAudio, Wayland, la célèbre suite de compilateurs GCC et bien d’autres. Tous les six mois, au printemps et à l'automne, Fedora Linux propose une nouvelle version stable";

    }
    else if (input == "c#"){
        return "Il est dérivé du C++ et très proche du Java dont il reprend la syntaxe générale ainsi que les concepts, y ajoutant des notions telles que la surcharge des opérateurs, les indexeurs (en) et les délégués. Il est utilisé notamment pour développer des applications web sur la plateforme ASP.NET, ainsi que des jeux vidéo avec le moteur de jeux Unity.";
    }
    else if (input == "symfony"){
        return "Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web.";
    }
    else if (input == "laravel"){
        return "Laravel est un framework web open-source écrit en PHP1 respectant le principe modèle-vue-contrôleur et entièrement développé en programmation orientée objet. Laravel est distribué sous licence MIT, avec ses sources hébergées sur GitHub.";

    }
    else if (input == "github"){
        return "GitHub est une plateforme open source de gestion de versions et de collaboration destinée aux développeurs de logiciels. Livrée en tant que logiciel à la demande (SaaS, Software as a Service), la solution GitHub a été lancée en 2008. Elle repose sur Git, un système de gestion de code open source créé par Linus Torvalds dans le but d'accélérer le développement logiciel.";
    }
    else if (input == "matlab"){
        return "MATLAB (« matrix laboratory ») est un langage de script2 émulé par un environnement de développement du même nom ; il est utilisé à des fins de calcul numérique. Développé par la société The MathWorks, MATLAB permet de manipuler des matrices, d'afficher des courbes et des données, de mettre en œuvre des algorithmes, de créer des interfaces utilisateurs, et peut s’interfacer avec d’autres langages comme le C, C++, Java, et Fortran.Les utilisateurs de MATLAB (environ 4 millions en 20193) sont de milieux très différents tels que l’ingénierie, les sciences et l’économie, dans un contexte aussi bien industriel que pour la recherche.";
    }
    //apps physique chimie 
    else if (input == "avemica"){
        return "Aviméca est un logiciel autorisant l'ouverture de fichier vidéo (d'extension . avi), le pointage et la saisie des coordonnées d'un point dans chacune des images de l'animation vidéo et l'exportation de ces données vers un tableur-grapheur."
    }
    else if (input == "avistep"){
        return "Avistep, un logiciel pour réaliser des mesures sur une vidéo au format AVI. Après pointage et étalonnage les résultats peuvent être facilement exportés vers un tableur."
    }
    else if (input == "regressi"){
       return "Regressi est un logiciel d'acquisition généralisé possédant des fonctions de calcul et de modélisation poussées. L'entrée des données se fait au clavier, ou par fichier (mesures généralement acquises par l'intermédiaire d'interfaces analogiques)." 
    }
    else if (input == "salsaj"){
        return "SalsaJ est un logiciel multi-plateforme et multilingue, gratuit, librement téléchargeable et peut être installé et redistribué librement. "
    }
    else if (input == "isis porteuse"){
        return "La CAO électronique Proteus1,2 est une suite logicielle, éditée par la société Labcenter Electronics et revendue en France exclusivement par Multipower. Proteus est actuellement (2020) la seule CAO électronique qui permet la conception d'un système électronique complet et de le simuler, y compris avec le code des microcontrôleurs. Pour ce faire, elle inclut un éditeur de schéma (ISIS), un outil de placement-routage (ARES), un simulateur analogique-numérique, un environnement de développement intégré pour microcontrôleurs, un module de programmation par algorigrammes ainsi qu'un éditeur d'interface pour smartphone afin de piloter à distance des cartes Arduino ou Raspberry Pi."
    }
    else if (input == "chemdrew"){
        return "ChemDraw is a molecule editor first developed in 1985 by David A. Evans and Stewart Rubenstein[1] (later by the cheminformatics company CambridgeSoft). The company was sold to PerkinElmer in the year 2011.[2] ChemDraw, along with Chem3D and ChemFinder, is part of the ChemOffice suite of programs and is available for Macintosh and Microsoft Windows."
    }
    else if (input == "chemsketch"){
        return "Le logiciel CHEMSKETCH permet entre autres choses d’éditer, représenter et analyser des formules chimiques et des molécules. Nous présentons ici les notions de base qui vous permettront de dessiner et retrouver certaines propriétés de ces dernières. Des tutoriels complets sont disponibles sur le site de la compagnie Advanced Chemistry Development (ACD) qui a réalisé le logiciel."
    }
    else if (input == "avogadro"){
        return "Avogadro est un éditeur de molécule multiplateforme extensible (grâce à des plugins) et libre, utilisé pour la chimie numérique, la modélisation moléculaire, la bio-informatique, la science des matériaux et les domaines proches."
    }
    else if (input == "atlence resistor viewer"){
        return "Atlence Resistor Viewer allows electronics engineers to quickly and easily get the value and characteristics of a resistor from its color bands and vice versa. Main features: - 4-, 5-, 6-band resistor. - Get the band colors of a resistor and the standard values."
    }
    else if (input == "chemdoodle"){
        return "L'application ChemDoodle est un éditeur graphique spécialisé. Il facilite l'édition de figures représentant des structures chimiques, des schémas réactifs ou des spectres d'analyses."
    }
    else if (input == "model chemLab"){
        return " Model ChemLab Pro comprend l'Assistant de laboratoire qui permet aux enseignants d'effectuer, de modifier et de créer des simulations de laboratoire alors que la version régulière ne permet aux élèves d'effectuer que des simulations de laboratoire"
    }
    else if (input == "marvin"){
        return "arvin is one of the world’s most widely used and trusted chemical drawing software, utilized daily by over 100,000 scientists, researchers, start-ups and Fortune 500 organizations, including top 20 pharmaceutical companies. In one application, you can simply and intuitively produce customizable illustrations, search for chemical structures online and perform advanced chemical calculations. Marvin can handle a large variety of chemical structures and file formats, so it’s robust enough for any use case."
    }
    // apps architecture 
    else if (input == "autocad"){
        return "AutoCAD est un logiciel de dessin assisté par ordinateur (DAO) créé en décembre 1982 par Autodesk. En 1992, AutoCAD est développé pour Mac OS et pour Windows en 1994"
    
    }
    else if (input == "sketchup."){
        return "SketchUp est un logiciel de modélisation 3D, d'animation et de cartographie orienté vers l'architecture. Initialement édité par la société @Last Software (racheté par Google ensuite), ce logiciel se caractérise par des outils simples (rotation, extrusion, déplacement, etc.), qui en font un logiciel de 3D très différent des modeleurs 3D classiques. Il a été racheté en 2012 par la société Trimble."
    }
    else if (input == "vectorworks architect"){
        return "Grâce à ce logiciel pour plateformes multiples, les concepteurs peuvent créer des modèles visuels riches en données sans porter atteinte au processus de conception, tout en collaborant efficacement tout au long du cycle de vie du projet."
    }
    else if (input == "microstation"){
        return "MicroStation est un puissant outil de création de modèle 2D ou 3D, paramétrique ou non. MicroStation permet de lier tout type d'élément à un enregistrement en base de données. MicroStation possède de très puissantes fonctions de rendu photo-réaliste ainsi que des fonctions d'animation et de cinématique."
    }
    else if (input == "archicad"){
        return "ArchiCAD est un logiciel qui permet de modéliser des projets de construction : En 2D, les architectes peuvent modéliser les plans des bâtiments qu'ils projetent de construire. En 3D, ils obtiennent un rendu contextualisé proche de la réalité de l'immeuble."
    }
    else if (input == "revit"){
        return "Revit est un logiciel de conception de bâtiment édité par la société américaine Autodesk qui permet de créer un modèle en 3D d'un bâtiment pour créer divers documents nécessaires à sa construction (plan, perspective, ...)."
    }
    else if (input == "floor plan creator"){
        return "Floor Plan Creator supporte l'envoi de messages électroniques, et vous permet de convertir vos plans soit en formats image classiques, soit dans des formats adaptés pour les graphiques vecteurs (SVG ou DXF). Vous pouvez concevoir plusieurs étages par plan, et créer des pièces de la forme de votre choix."
    }
    else if (input == "rhino"){
        return "Rhinoceros 3D, aussi appelé “Rhino 3D”, est un logiciel de conception assistée par ordinateur. Rhino CAO est principalement utilisé dans les métiers de l'architecture, du design industriel et la conception de bijoux."
    }
    // apps electronique 
    else if (input == "schemaplic "){
    return "chemaplic est un logiciel disponible par abonnement qui se révèle efficace et très pratique. Il vous aide à concevoir et simuler des schémas de câblage électriques, électroniques ou même énergétiques. Il est conçu plutôt pour les professionnels de l'installation électrique. "
}
    else if (input == "proficad"){
    return "ProfiCAD est le logiciel gratuit le plus populaire pour la schématisation électrique. Vous pouvez l’utiliser pour la réalisation de vos dessins, même si vous êtes un particulier débutant. Il vous donne la possibilité de faire de nombreux calculs, mais les professionnels n’en font pas usage.  "
}
else if (input == "autocad"){
    return "AutoCAD est un outil qui permet de concevoir toutes sortes de projets, dont les schémas électriques. Il dispose de nombreuses fonctions professionnelles, ce qui lui permet d’être parmi les préférés des architectes, ingénieurs et électriciens. Le plus de ce logiciel ? Ses possibilités infinies de conception qui utilisent les techniques 2D et 3D. "
}
else if (input == "intelliplus électricité "){
    return "Ce logiciel s’apparente beaucoup à AutoCAD de par son design, tout comme ses fonctionnalités destinées aux professionnels. Vous pouvez choisir d’intégrer dans votre plan directement les normes en vigueur, la norme française NF C15 100 et/ou la norme européenne HD 384. Il est lui aussi freemium. "
}
else if (input == "ds elec "){
    return "DS Elec est un outil pour schéma électrique relativement simple à prendre en main et possède une bibliothèque d’exemples de schémas et de symboles qui pourront être utiles aux débutants. Le seul inconvénient, c’est que le logiciel est payant."
}
else if (input == "qelectrotech"){
    return "QElectrotech est un programme dont la prise en main est assez simple, car il fonctionne avec un système de glisser-déposer. Il s’agit d’un logiciel OpenSource."

}
else if (input == "kiCad"){
    return "Cet outil est téléchargeable gratuitement. Il vous permet, en plus de concevoir vos schémas électriques, d’y ajouter un circuit électrique, ce que ne font pas forcément les autres logiciels"
}
else if (input == "see electrical"){
    return "Avec ce logiciel, vous avez le choix entre plusieurs niveaux de conception, ce qui influence aussi son prix. C’est un outil conçu à 100 % pour Windows.  SchemBAT"
}
else if (input == "schembat"){
    return "Vous pourrez concevoir des schémas divers avec ce logiciel, tant un schéma unifilaire qu’un plan d’implantation de divers câblages. Il est recommandé aussi bien aux pros qu’aux particuliers. SchemBAT est payant."
}
//apps maths
else if (input == "imsl"){
    return "IMSL (International Mathematics and Statistics Library) is a commercial collection of software libraries of numerical analysis functionality that are implemented in the computer programming languages C, Java, C#.NET, and Fortran. A Python interface is also available. The IMSL Libraries were developed by Visual Numerics, which was acquired in 2009 by Rogue Wave Software, which was acquired in 2019 by Minneapolis, Minnesota-based application software developer Perforce.[1]"
}
else if (input == "mathcad"){
    return "Mathcad est un logiciel permettant de réaliser des calculs scientifiques. Son interface permet de réaliser des rapports, c'est-à-dire des documents formatés qui mêlent des calculs et des textes nécessaires à la compréhension d'un projet d'ingénierie."
}
else if (input == "matheass"){
    return "MatheAss est un logiciel pour la solution numérique de nombreux problèmes en mathématiques à l'école. Il trouve une large utilisation en Allemagne en mathématiques du secondaire et est disponible en plusieurs langues, aussi en français"
}
else if (input == "wolfram"){
    return "Wolfram Mathematica est un logiciel de calcul formel édité par Wolfram Research depuis 1988 et utilisé dans les milieux scientifiques pour effectuer des calculs algébriques et créer des programmes"
}
else if (input == "ocamlmath"){
    return "OCaml, anciennement connu sous le nom d'Objective Caml, est l'implémentation la plus avancée du langage de programmation Caml, créé par Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy et leurs collaborateurs en 1996. Ce langage, de la famille des langages ML, est un projet open source dirigé et maintenu essentiellement par l'Inria"
}
else if (input == "gnu octave"){
    return "GNU Octave est un logiciel libre de calcul numérique comparable à MATLAB et à Scilab. Ce n'est pas un logiciel de calcul formel. Le logiciel est développé puis maintenu pour le projet GNU par John W. Eaton."
}
else if (input == "scilab"){
    return "Scilab (prononciation : [saɪləb][réf. nécessaire] contraction de Scientific Laboratory en anglais) est un logiciel libre de calcul numérique multi-plateforme fournissant un environnement de calcul pour des applications scientifiques. Il possède un langage de programmation orienté calcul numérique de haut niveau. Il peut être utilisé pour le traitement du signal, l’analyse statistique, le traitement d’images, les simulations de dynamique des fluides, l’optimisation numérique, et la modélisation et simulation de systèmes dynamiques explicites et implicites. Il est disponible pour Windows, MacOS, GNU/Linux et BSD"
}
//apps en economie 
else if (input == "gretl"){
    return "gretl is an open-source statistical package, mainly for econometrics. The name is an acronym for Gnu Regression, Econometrics and Time-series Library. It has both a graphical user interface (GUI) and a command-line interface. It is written in C, uses GTK+ as widget toolkit for creating its GUI, and calls gnuplot for generating graphs. The native scripting language of gretl is known as hansl (see below); it can also be used together with TRAMO/SEATS, R, Stata, Python, Octave, Ox and Julia."
}
else if (input == "octave"){
    return "Octave est un outil dédié au calcul numérique : il définit un langage interprété dont les commandes permettent d'effectuer des calculs numériques réels ou complexes."
}
else if (input == "libre office"){
    return "LibreOffice est une suite bureautique puissante. Son interface claire et ses outils avancés vous permettent de libérer votre créativité et de développer votre productivité. LibreOffice intègre plusieurs applications qui en font la suite bureautique Libre & Open Source la plus évoluée sur le marché : Writer le traitement de texte, Calc le tableur, Impress le module de présentation, Draw notre application de dessin et d'organigrammes, Base notre base de données et interface de base de données et Math pour l'édition de formules mathématiques."
}
else if (input == "latex"){
    return "LaTeX est un langage informatique qui permet de formatter et de gé- nérer des documents scientifiques. LaTeX est notamment utilisé par les mathématiciens pour la qualité du rendu et de la génération de formules mathématique."
}
else if (input == "zotero"){
    return "Zotero est un logiciel de gestion de références gratuit, libre et open source qui s'inscrit dans la philosophie du Web 2.02. Il permet de gérer des données bibliographiques et des documents de recherche (tels que des fichiers PDF, images, etc.). Ses principaux atouts reposent sur l'intégration au navigateur web ; la possibilité de synchronisation des données depuis plusieurs ordinateurs ;"
}
//apps en finance 
else if (input =="quickbooks"){
    return "QuickBooks est un logiciel de comptabilité et de facturation simple et complet pour les TPE et PME. QuickBooks, une solution de gestion en ligne plébiscitée."
}
else if (input == "freshbooks"){
    return "Freshbooks est un logiciel américain de comptabilité. Ce logiciel de gestion comptable est très ergonomique. Il convient parfaitement aux personnes qui n'aiment vraiment pas les tâches administratives."
}
else if (input == "wrike"){
    return "Wrike est un logiciel collaboratif de gestion de projet crée pour gérer le flux de travail pour des entreprises et des organisations de tailles variantes. Le logiciel est offert en 3 versions différentes: Gratuite, Professionnelle, et Entreprise."
}
else if (input == "netsuite"){
    return "Oracle NetSuite est un progiciel de gestion intégrée ou, en anglais, une solution ERP (Enterprise Ressource Planning). Cette solution dans le Cloud permet de gérer l'ensemble des processus et des parties prenantes de l'entreprise, des clients aux fournisseurs."
}
//apps de modelisation
else if (input == "maya"){
    return "Maya est un puissant logiciel d'animation, de modélisation, de simulation, de rendu et de compositing 3D édité par Autodesk. Il vous permettra de concevoir et de modéliser des personnages et des textures en 3D. Pour se faire, vous disposerez de nombreux outils d'édition avancés avec entre autres Maya nHair pour créer des cheveux dynamiques, Maya nParticles pour définir des effets visuels en 3D ou encore Maya nCloth pour développer des matériaux déformables.De plus, une pléthore d'outils d'animation et de modélisation est disponible. Vous pourrez ainsi utiliser la liaison géodésique en pixel pour simplifier le skinning de vos personnages. Le logiciel supporte aussi l'intégration de pipelines afin de personnaliser Maya à l'aide de scripts et de gérer l'assemblage de vos scènes."
}
else if (input == "3ds max"){
    return "3DS MAX est le logiciel incontournable en matière de modélisation et de rendu 3D. Il se distingue par la richesse de ses fonctionnalités d'animation 3D, d'ombrages et ses nombreux effets dynamiques. Ce logiciel 3D est utilisé par la majorité des professionnels pour créer et éditer des animations spectaculaires."
}
else if (input == "cinema 4d"){
    return "Cinema 4D est très utilisée de part son prix plus accessible que les grosses suites et pour sa facilité de prise en main. Cinema 4d Studio est un logiciel 3D plus simple à utiliser que 3ds max et Maya. Son interface est plus intuitive et les techniques utilisées sont plus compréhensibles."
}
else if (input == "zbrush "){
    return "Zbrush est un logiciel incontournable en termes de sculpture digitale et de modélisation 3D. Véritable Photoshop 3D, simple d'utilisation et puissant, ZBrush est utilisé dans les studios de production les plus prestigieux pour la rapidité de son flux de travail et la qualité de ces modélisations 3D ultra réalistes."
}
else if (input == " modo"){
    return "Modo est un logiciel phare en termes de modélisation et d'animation 3D. Utilisé par de nombreux professionnels en effets spéciaux, cette solution professionnelle est truffée de fonctionnalités de pointe. Il se revendique comme le plus rapide et créatif du marché"
}
else if (input == " autoCAD"){
    return "AutoCAD est le leader incontesté dans le domaine de la CAO depuis des années désormais ce n'est pas pour rien. Ce logiciel est très complet et répondra à tous les besoins des professionnels. S'adressant à de nombreux corps de métiers (mécanique, cartographie, électronique, architecture...), ce logiciel professionnel permet de concevoir des objets en 2D ou en 3D, des plans, des schémas et autres dessins nécessaires à la réalisation d'un projet. Il est très utilisé dans l'architecture."
}
else if (input == "rhino 3D "){
    return "Rhino 3D se distingue par ses fonctionnalités de modélisation et de rendu 3D. Il propose de nombreuses possibilités pour concevoir des formes complexes et pour modifier le maillage des modèles. Une solution à tester sans hésitation et gratuitement en version de démonstration !"
}
else if (input == " blender"){
    return "l est open source et gratuit, c'est à dire que le code source de l'application est ouvert, consultable en ligne et que n'importe quelle personne souhaitant participer au projet peut modifier le code pour ajouter des fonctionnalités ou corriger des problèmes. Le logiciel est une véritable suite 3D et dispose de fonctions avancées de modélisation, animation, gréage (rigging), simulation, rendu, composition, texturation et suivi des mouvements. En plus de cela, Blender permet également l'édition de vidéos et il dispose d'un environnement de développement de jeux vidéo intégré."
}
else if (input == " sketchup"){h
    return "Ce logiciel de modélisation 3D intuitif est conçu à l'origine pour les architectes. Mais il convient aussi parfaitement à tous les besoins de modélisation 3D aussi bien pour la conception de pièces industrielles, pour le cinéma et le jeu vidéo que pour l'impression 3D. Très simple dans les phases de conception d'un projet"
}
else if (input == "sculptris "){
    return "Créé par les fabricants de ZBrush, Pixologic, Sculptris est un logiciel de conception 3D qui donne beaucoup de libertés aux artistes pour concevoir des modélisations avec des outils simples. Ce programme est un excellent point de départ pour les débutants qui peuvent ensuite passer à la vitesse supérieure avec le logiciel ZBrush une fois qu'ils ont appris à maîtriser l'outil et qu'ils ont donc les compétences nécessaires pour son utilisation."
}
//apps de communication
else if (input == "gmail"){
    return "Gmail (pronounced Gee-mail) is a free web-based email service that provides users with 15 GB of storage for messages and the ability to search for specific messages. The Gmail program also automatically organizes successively related messages into a conversational thread."
}
else if (input == "facebook"){a
    return "Facebookest un réseau social en ligne appartenant à Meta. Il permet à ses utilisateurs de publier des images, des photos, des vidéos, des fichiers et documents, d'échanger des messages, joindre et créer des groupes et d'utiliser une variété d'applications sur une variété d'appareils"
}
else if (input == "messenger"){
    return "A messenger app is any app that enables a private messaging function between two or more people. With more and more messenger apps popping up every day, this type of technology is quickly becoming the most popular way to send text-based messages, replacing SMS and MMS as the preference of most consumers."
}
else if (input == "whatsapp"){
    return "WhatsApp is a free cross-platform messaging service. It lets users of iPhone and Android smartphones and Mac and Windows PC call and exchange text, photo, audio and video messages with others across the globe for free, regardless of the recipient's device."
}
else if (input == "telegram"){
    return "Telegram is a secure messaging and audio calling cloud-based app that allows you to send messages, photos, videos and files of any type to your contacts for free. You can also create groups for up to 200,000 people or channels for broadcasting to unlimited contacts or audiences"
}
else if (input == "viber"){
    return "est un logiciel multiplateforme de messagerie instantanée pour smartphone, tablette et ordinateur qui permet d'échanger par Internet des messages texte et des fichiers, mais également des appels audio et vidéo en utilisant la technologie de la voix sur IP."
}
else if (input == "instagram"){
    return "Instagram is a free photo and video sharing app available on iPhone and Android. People can upload photos or videos to our service and share them with their followers or with a select group of friends. They can also view, comment and like posts shared by their friends on Instagram"
}
else if (input == "wrike"){
    return "Best communication tool for teams of all sizes"
}
else if (input == "workvivo"){
    return "Best for its wide variety of communication options within the team"
}
else if (input == "workmates"){
    return "Best online communication tool with native engagement functionality"
}
else if (input == "troop Messenger"){
    return "Best communication tool with unlimited search history"
}
else if (input == "livestorm"){
    return "Best communication tool for hosting online events"
}
else if (input == "blink"){
    return "Best communication tool for deskless employees "
}
else if (input == "flock"){
    return "Best for organizing communication using channels"
}
else if (input == "microsoft Teams"){
    return "Best communication tool for Microsoft users"
}
else if (input == "zoho Cliq"){
    return "Best for small enterprises"
}
    else {
        return "vérifier que vous avez entrez le logiciel en miniscule si oui veuillez l'ajouter dans la base de données pour nous aider à améliorer et merci!";
    }
}