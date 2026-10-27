// src/data.ts

export const personalInfo = {
  name: "Célian Bedminster",
  role: "Développeur back-end & automatisation",
  tagline: "Master en alternance chez Bull | Auto-entrepreneur",
  description:
    "Après un BTS SIO et un double diplôme en DEC Informatique au Canada, je me suis spécialisé en développement back-end. Je suis aujourd'hui en Master en alternance chez Bull, aux Clayes-sous-Bois, où je développe des outils d'automatisation pour nos infrastructures de calcul haute performance (HPC) et IA. En parallèle, je suis auto-entrepreneur : je développe des applications Flutter et Python sur mesure pour des entreprises et des particuliers.",
  location: "Bois d'Arcy, Île-de-France",
  // Obfuscated to reduce bot scraping, assembled at runtime
  email: ["celianbedminster", "proton.me"].join("@"),
  linkedin: "https://www.linkedin.com/in/celianbdr/",
  cvUrl: "/assets/pdf/BedminsterCelian.pdf",
  photo: "/assets/img/moi.jpg",
  tableauSyntheseUrl: "/assets/pdf/CelianTableauDeSynthese.pdf",
};

export const skills = [
  {
    category: "Back-end",
    techs: ["Python", "Flask", "Django", "Java", "Spring Boot", "PHP", "CodeIgniter", "Node.js", "C#", ".NET", "C"],
    level: 85,
  },
  {
    category: "Front-end & Mobile",
    techs: ["Flutter", "React", "Angular", "TypeScript", "HTML / CSS", "JavaScript", "Next.js", "Bootstrap"],
    level: 80,
  },
  {
    category: "Base de Données",
    techs: ["PostgreSQL", "MySQL", "MariaDB", "SQL Server", "MongoDB", "SQLite", "HFSQL"],
    level: 80,
  },
  {
    category: "DevOps & Infrastructure",
    techs: ["Linux", "Docker", "Nginx", "Jenkins", "Apache", "Cloudflare Tunnel", "Git", "PowerShell"],
    level: 75,
  },
];

export const projects = [
  {
    id: "secourisme-plc",
    title: "Secourisme PLC",
    category: "Projet BTS",
    image: "/assets/img/Modals/SecourismePLC/LogoS.png",
    shortDesc: "Refonte complète d'un site vitrine sous WordPress pour une association de secourisme.",
    tech: ["WordPress", "CSS", "MySQL"],
    screenshots: [
      "/assets/img/Modals/SecourismePLC/BDDSecourisme.png",
    ],
    fullDesc: {
      context:
        "Modernisation de la présence en ligne de l'association de secourisme via un CMS pour faciliter la maintenance par le client.",
      missions: [
        "Comparatif technique des CMS (WordPress, Joomla, Drupal)",
        "Installation et configuration de WordPress",
        "Création d'une charte graphique personnalisée",
        "Optimisation SEO et Accessibilité",
      ],
      env: "WordPress, MySQL, Apache",
    },
  },
  {
    id: "millenuit",
    title: "Mille Nuits",
    category: "Projet BTS",
    image: "/assets/img/Logo_mille_nuits.png",
    shortDesc: "Application de gestion des comptes-rendus de visite pour les commerciaux terrain.",
    tech: ["PHP", "Bootstrap", "MariaDB"],
    screenshots: [
      "/assets/img/Modals/Millenuit/MILLENUITAjtDistrib.png",
      "/assets/img/Modals/Millenuit/MILLENUITAjtcmpt.png",
      "/assets/img/Modals/Millenuit/MILLENUITDernierCmpt.png",
      "/assets/img/Modals/Millenuit/MILLENUITDetailCmpt.png",
      "/assets/img/Modals/Millenuit/MILLENUITListeDistrib.png",
      "/assets/img/Modals/Millenuit/MILLENUITModifCmpt.png",
      "/assets/img/Modals/Millenuit/MILLENUITSchemaBDD.png",
    ],
    documents: [
      { label: "Documentation technique BDD", url: "/assets/pdf/ModalsPDF/MIILENUITDocTechniqueBDD.pdf" },
    ],
    fullDesc: {
      context:
        "L'entreprise Mille Nuits, leader du textile (couettes/oreillers), avait besoin d'un suivi précis pour ses commerciaux sur le terrain.",
      missions: [
        "Conception de la BDD (MCD/MLD)",
        "Création de l'interface CRUD pour les distributeurs",
        "Système de filtrage des comptes-rendus par secteur",
        "Sécurisation des accès utilisateurs",
      ],
      env: "HTML/CSS, Bootstrap 5, PHP, MariaDB, Trello",
    },
  },
  {
    id: "ecocert-certif",
    title: "Ecocert, Certificats",
    category: "Projet BTS",
    image: "/assets/img/ecocert.png",
    shortDesc: "Gestion de certificats de conformité biologique pour l'organisme Ecocert.",
    tech: ["Java", "JSP", "SQL Server"],
    screenshots: [
      "/assets/img/Modals/Ecocert/connexion.png",
      "/assets/img/Modals/Ecocert/Demande.png",
      "/assets/img/Modals/Ecocert/Recherche.png",
      "/assets/img/Modals/Ecocert/BDDEcocert.png",
    ],
    fullDesc: {
      context:
        "Application de gestion des certificats pour l'organisme de certification biologique Ecocert.",
      missions: [
        "Développement Back-end Java",
        "Interface de consultation et gestion des certificats",
        "Création des vues dynamiques en JSP/JSTL",
        "Gestion des rôles utilisateurs",
      ],
      env: "Java EE, GlassFish, SQL Server, Jira, BitBucket",
    },
  },
  {
    id: "ecocert-simu",
    title: "Ecocert, Simulateur",
    category: "Projet BTS",
    image: "/assets/img/ecocert.png",
    shortDesc: "Simulateur de certification Bio en Java EE avec ORM Hibernate.",
    tech: ["Java", "Hibernate", "JSP"],
    screenshots: [
      "/assets/img/Modals/Ecocert/Simulateur/connexion.png",
      "/assets/img/Modals/Ecocert/Simulateur/listeSimu.png",
      "/assets/img/Modals/Ecocert/Simulateur/faireSimu.png",
      "/assets/img/Modals/Ecocert/Simulateur/simu.png",
      "/assets/img/Modals/Ecocert/Simulateur/Annotations.png",
      "/assets/img/Modals/Ecocert/Simulateur/BDDBase.png",
      "/assets/img/Modals/Ecocert/Simulateur/BDDUp.png",
    ],
    fullDesc: {
      context:
        "Développement d'une application web, en équipe de 3, pour simuler les certifications agricoles biologiques.",
      missions: [
        "Développement Back-end Java",
        "Mise en place de l'ORM Hibernate pour la persistance",
        "Création des vues dynamiques en JSP/JSTL",
        "Gestion de version avec Bitbucket et travail en méthode Agile",
      ],
      env: "Java EE, GlassFish, SQL Server, Hibernate, Bitbucket",
    },
  },
  {
    id: "ecocert-traitement",
    title: "Ecocert, Traitements",
    category: "Projet BTS",
    image: "/assets/img/ecocert.png",
    shortDesc: "Application mobile Android de gestion des traitements pour les parcelles agricoles.",
    tech: ["Java", "Android", "SQLite"],
    screenshots: [
      "/assets/img/Modals/Ecocert/Traitement/menu.png",
      "/assets/img/Modals/Ecocert/Traitement/parcelle.png",
      "/assets/img/Modals/Ecocert/Traitement/parcelleRef.png",
      "/assets/img/Modals/Ecocert/Traitement/traitement.png",
      "/assets/img/Modals/Ecocert/Traitement/ajoutTraitement.png",
      "/assets/img/Modals/Ecocert/Traitement/ajout_T.png",
      "/assets/img/Modals/Ecocert/Traitement/BDD.png",
    ],
    fullDesc: {
      context:
        "Application mobile Android pour la gestion des traitements appliqués aux parcelles agricoles dans le cadre de la certification biologique.",
      missions: [
        "Développement de l'application Android en Java",
        "Mise en place de la base de données SQLite",
        "Gestion des parcelles et traitements",
        "Interface XML ergonomique",
      ],
      env: "Android Studio, Java, SQLite, XML",
    },
  },
  {
    id: "hebergement",
    title: "Hébergement Web",
    category: "Projet personnel",
    image: "/assets/img/hebergementweb.jpg",
    shortDesc: "Mise en place d'un hébergement web sur Raspberry Pi avec sécurisation complète.",
    tech: ["Linux", "Apache", "Raspberry Pi"],
    screenshots: [],
    fullDesc: {
      context:
        "Configuration d'un serveur web complet sur Raspberry Pi pour héberger mes projets personnels et apprendre l'administration système.",
      missions: [
        "Installation et configuration du serveur Apache",
        "Configuration DNS et nom de domaine",
        "Mise en place de certificats SSL avec Let's Encrypt / Certbot",
        "Sécurisation avec CrowdSec",
        "Configuration FTP avec ProFTPd",
        "Accès distant via VNC",
      ],
      env: "Raspberry Pi OS, Apache, Let's Encrypt, CrowdSec, ProFTPd, PowerShell",
    },
  },
  {
    id: "genmdp",
    title: "Générateur de mots de passe",
    category: "Projet personnel",
    image: "/assets/img/GenMdp.jpg",
    shortDesc: "Générateur de mots de passe sécurisés avec interface graphique WinForms.",
    tech: ["C#", ".NET", "WinForms"],
    screenshots: [
      "/assets/img/Modals/GenMdp/LogicielUnique.png",
      "/assets/img/Modals/GenMdp/LogicielListe.png",
    ],
    documents: [
      { label: "Télécharger le logiciel", url: "/assets/logiciel/Generateur_de_mot_de_passe.rar" },
    ],
    fullDesc: {
      context:
        "Développement d'un outil pour générer des mots de passe robustes respectant les recommandations de l'ANSSI.",
      missions: [
        "Algorithme de génération aléatoire sécurisé",
        "Interface graphique WinForms ergonomique",
        "Génération unique ou en liste",
        "Options de personnalisation (longueur, caractères spéciaux)",
      ],
      env: "C#, .NET, Visual Studio, WinForms",
    },
  },
  {
    id: "paysphere",
    title: "PaySphere",
    category: "Projet personnel",
    image: "/assets/img/Modals/PaySphere/PaySphereLogo.png",
    shortDesc: "Application mobile de gestion bancaire sécurisée facilitant les virements à l'international.",
    tech: ["Flutter", "Flask", "PostgreSQL"],
    screenshots: [
      "/assets/img/Modals/PaySphere/PaySphereMockup.png",
    ],
    fullDesc: {
      context:
        "Développement d'une application bancaire sécurisée facilitant les virements à l'international. Le projet combine une API Flask en back-end et Flutter en front-end, hébergé sur Raspberry Pi.",
      missions: [
        "Développement de l'API REST sécurisée avec Flask",
        "Interface mobile moderne et intuitive avec Flutter",
        "Authentification JWT et gestion des tokens",
        "Base de données PostgreSQL",
        "Hébergement sur Raspberry Pi",
      ],
      env: "Flutter, Flask, PostgreSQL, JWT, Raspberry Pi",
    },
  },
];

export const stages = [
  {
    id: "sae-kamouraska",
    title: "SAE Kamouraska",
    period: "Stage - Mars à juin 2025",
    image: "/assets/img/sae.png",
    shortDesc: "Refonte complète du site web d'une entreprise locale sous WordPress avec plugin PHP personnalisé.",
    tech: ["WordPress", "PHP", "CSS"],
    screenshots: [],
    fullDesc: {
      context:
        "Stage réalisé dans le cadre du DEC au Cégep de La Pocatière, au Québec. Refonte complète du site web de l'entreprise SAE Kamouraska, en duo avec un collègue.",
      missions: [
        "Modernisation de l'interface et de l'expérience utilisateur sous WordPress",
        "Développement d'un plugin WordPress personnalisé en PHP",
        "Intégration des fonctionnalités demandées par le client",
        "Échanges directs avec le client tout au long du stage",
      ],
      env: "WordPress, PHP, MySQL, CSS",
    },
  },
  {
    id: "harmonie-mutuelle",
    title: "Harmonie Mutuelle",
    period: "Stage - Janvier à mars 2024",
    image: "/assets/img/HM.png",
    shortDesc: "Développement d'une fonctionnalité front-end et back-end en Angular et Spring Boot au sein de la DSI.",
    tech: ["Java", "Spring Boot", "Angular"],
    screenshots: [],
    documents: [
      { label: "Rapport hebdomadaire", url: "/assets/pdf/ModalsPDF/RapportHebdoHM.pdf" },
      { label: "Gestion du patrimoine informatique", url: "/assets/pdf/ModalsPDF/GestionPatrimoineHM.pdf" },
    ],
    fullDesc: {
      context:
        "Stage de deuxième année de BTS au sein du système d'information d'Harmonie Mutuelle, intégré à une équipe travaillant en Scrum.",
      missions: [
        "Création d'une fonctionnalité front-end et back-end avec Angular et TypeScript",
        "Appels d'API via Spring Boot",
        "Conception planifiée en amont avec Jira et Confluence",
        "Participation aux rituels Scrum de l'équipe",
      ],
      env: "Java, Spring Boot, Angular, TypeScript, Oracle, Git, IntelliJ, Jira, Confluence",
    },
  },
  {
    id: "mairie-tours",
    title: "Mairie de Tours",
    period: "Stage - Mai à juin 2023",
    image: "/assets/img/Tours.png",
    shortDesc: "Développement mobile en WLangage pour l'inventaire des arbres de la ville.",
    tech: ["WinDev Mobile", "Android", "HFSQL"],
    screenshots: [],
    documents: [
      { label: "Rapport hebdomadaire", url: "/assets/pdf/ModalsPDF/RapportHebdoMairie.pdf" },
      { label: "Gestion de projet", url: "/assets/pdf/ModalsPDF/GestionDeProjetMairie.pdf" },
      { label: "Gestion du patrimoine informatique", url: "/assets/pdf/ModalsPDF/GestionPatrimoineMairie.pdf" },
    ],
    fullDesc: {
      context:
        "Stage de première année de BTS à la DSI de la mairie de Tours, sur 'Aristé Mobile', l'application qui permet aux jardiniers de la ville d'inventorier les arbres.",
      missions: [
        "Migration de l'application Windows vers Android",
        "Intégration de la cartographie pour la géolocalisation des arbres",
        "Gestion du patrimoine informatique de la mairie",
        "Rédaction de la documentation technique",
      ],
      env: "WinDev Mobile, WLangage, HFSQL, Android, Leaflet, PC Mover",
    },
  },
];

export const certifications = [
  {
    name: "MOOC ANSSI",
    date: "Octobre 2022",
    image: "/assets/img/SecNum.png",
    description:
      "Le MOOC SecNumacadémie de l'ANSSI couvre les bases de la cybersécurité : sécurité des postes, authentification, mobilité et sécurité du numérique au quotidien.",
    attestationUrl: "/assets/pdf/ModalsPDF/SecNum.pdf",
    attestationLabel: "Voir l'attestation",
  },
  {
    name: "Certification Python",
    date: "Novembre 2022",
    image: "/assets/img/python.png",
    description:
      "Certification passée pour travailler ma logique de développement et consolider les bases du langage que j'utilise aujourd'hui tous les jours chez Bull.",
    attestationUrl: "/assets/img/pythonCertif.png",
    attestationLabel: "Voir l'évolution",
  },
  {
    name: "Formation Java POO",
    date: "Janvier 2023",
    image: "/assets/img/java.png",
    description:
      "Formation sur la programmation orientée objet en Java : héritage, interfaces, collections et gestion des exceptions. Elle m'a servi de base pour les projets Java EE du BTS et le stage chez Harmonie Mutuelle.",
    attestationUrl: "/assets/img/javaCertif.png",
    attestationLabel: "Voir l'évolution",
  },
  {
    name: "Formation WLangage",
    date: "Avril 2023",
    image: "/assets/img/Modals/Stages/Mairie/WL.png",
    description:
      "Formation courte suivie avant mon stage de première année de BTS, pour arriver à la mairie de Tours avec les bases du WLangage. Elle m'a beaucoup aidé à faire évoluer l'application vers Android.",
  },
  {
    name: "Formation Kotlin",
    date: "Mars 2024",
    image: "/assets/img/kotlin.png",
    description:
      "Kotlin est le langage recommandé par Google pour Android, et il reste compatible avec les bibliothèques Java existantes. Je l'ai appris dans le prolongement de ma veille sur le développement mobile natif.",
  },
  {
    name: "Learn AI Through Visualization",
    date: "Octobre 2025",
    image: "/assets/img/columbiaplus.jpeg",
    description:
      "Module 1 du programme Columbia+ sur l'intelligence artificielle. Les concepts du machine learning y sont abordés par la visualisation de données plutôt que par les mathématiques pures.",
  },
  {
    name: "MOOC INPI",
    // TODO Célian : ajouter la date (laissée vide pour ne rien inventer)
    date: "",
    image: "",
    description:
      "MOOC de l'INPI sur la propriété intellectuelle : marques, brevets, dessins et modèles. Utile pour protéger un projet logiciel et cadrer mes prestations en tant qu'auto-entrepreneur.",
  },
  {
    name: "Certificat Voltaire",
    // TODO Célian : ajouter la date (laissée vide pour ne rien inventer)
    date: "",
    image: "",
    description:
      "Certification de niveau en orthographe et en grammaire françaises, utile au quotidien pour la documentation technique et les échanges avec les clients.",
  },
];

export const techWatch = {
  title: "Kotlin / Swift & algorithmes des réseaux sociaux",
  tools: ["Feedly", "Google Alerts", "Discord", "Feeder"],
  proofImages: [
    "/assets/img/preuveAlerts.png",
    "/assets/img/preuveDiscord.png",
    "/assets/img/preuveFeedly.png",
    "/assets/img/preuveFeeder.png",
  ],
  intro:
    "La veille technologique consiste à rester au courant des dernières avancées d'un secteur donné. C'est indispensable en informatique, où les outils changent vite.",
  summary:
    "Ma veille porte sur Kotlin et Swift, les deux langages du développement mobile natif. Kotlin est porté par JetBrains et adopté par Google pour Android, Swift est développé par Apple pour iOS. Je suis aussi le fonctionnement des algorithmes de recommandation de TikTok et Instagram, pour comprendre ce qui détermine la portée d'une application. Depuis mon alternance chez Bull, je suis également l'actualité du calcul haute performance et de l'IA.",
  methods: {
    pull: "Recherche active d'informations : moteurs de recherche, bases de données spécialisées, portails techniques.",
    push: "Réception proactive d'informations : newsletters, alertes email, flux RSS.",
  },
  articles: [
    {
      title: "Realms & Kotlin",
      url: "https://www.mongodb.com/developer/products/realm/announcing-realm-kotlin-beta/",
    },
    {
      title: "Kotlin 2.0 est arrivé !",
      url: "https://blog.jetbrains.com/kotlin/2024/05/celebrating-kotlin-2-0-fast-smart-and-multiplatform/",
    },
    {
      title: "Application Apple Vision Pro",
      url: "https://www.hackingwithswift.com/articles/265/shipping-a-visionos-app-for-launch",
    },
    {
      title: "Comprendre les algorithmes des réseaux sociaux",
      url: "https://www.axess.fr/blog/marketing-digital/tout-comprendre-sur-les-algorithmes-de-vos-reseaux-sociaux-preferes",
    },
    {
      title: "Les nouveautés de SwiftUI avec iOS 17",
      url: "https://blog.jetbrains.com/kotlin/2024/05/celebrating-kotlin-2-0-fast-smart-and-multiplatform/",
    },
    {
      title: "TikTok enrichit son algorithme",
      url: "https://www.socialmediatoday.com/news/tiktok-launches-new-feature-to-enrich-its-algorithm/",
    },
  ],
  conclusion:
    "Cette veille me sert surtout à ne pas rester bloqué sur les versions que j'ai apprises en cours : je vois passer les nouvelles versions de Kotlin et de Swift, les bibliothèques qui émergent et celles qui sont abandonnées. Côté réseaux sociaux, comprendre comment ces algorithmes classent les contenus aide à savoir ce qui rend une application visible, et à gérer sa propre présence en ligne.",
};

export const formations = {
  intro:
    "Du BTS SIO au Master en alternance, en passant par un double diplôme au Québec. Voici mes formations et mes expériences en entreprise.",
  items: [
    {
      id: "master-alternance",
      title: "Master en alternance",
      school: "ESGI",
      period: "Depuis septembre 2026",
      location: "Île-de-France, France",
      status: "current" as const,
      type: "formation" as const,
      badge: "NOW",
      description:
        "Master en alternance poursuivi chez Bull, dans la continuité de mon Bachelor. Je me spécialise en systèmes, réseaux et sécurité.",
      highlights: [
        "Alternance chez Bull, aux Clayes-sous-Bois",
        "Systèmes, réseaux et sécurité",
        "Automatisation d'infrastructures de calcul",
      ],
    },
    {
      id: "freelance",
      title: "Auto-entrepreneur, développeur Flutter & Python",
      school: "À mon compte",
      period: "Depuis février 2026",
      location: "Bois d'Arcy, France",
      status: "current" as const,
      type: "experience" as const,
      badge: "FREE",
      description:
        "Je propose mes services aux entreprises et aux particuliers pour développer des solutions sur mesure, en respectant le cahier des charges du client.",
      highlights: [
        "Applications mobiles en Flutter",
        "Back-end et outils en Python",
        "Cadrage du besoin et suivi client",
      ],
    },
    {
      id: "alternance-bull",
      title: "Alternant développement et automatisation",
      school: "Bull",
      period: "Depuis octobre 2025",
      location: "Les Clayes-sous-Bois, France",
      status: "current" as const,
      type: "experience" as const,
      badge: "BULL",
      description:
        "Je développe des outils d'automatisation pour les infrastructures de calcul haute performance (HPC) et IA, et j'administre les serveurs sur lesquels elles tournent.",
      highlights: [
        "Outils d'automatisation en Python, PostgreSQL et Linux",
        "Participation aux revues logicielles des infrastructures HPC et IA",
        "Administration de serveurs et développement web en Flask et C",
        "Optimisation des architectures réseau et des environnements de calcul",
      ],
    },
    {
      id: "bachelor-coda",
      title: "Bachelor Développeur Web FullStack",
      school: "CODA, école d'informatique",
      period: "Septembre 2025 à juin 2026",
      location: "Orléans, France",
      status: "completed" as const,
      type: "formation" as const,
      badge: "BAC+3",
      description:
        "Bachelor en alternance (3 semaines en entreprise, 1 semaine à l'école), option Cybersécurité et Data Analysis, préparant la certification RNCP37873 Développeur Web FullStack.",
      highlights: [
        "Option Cybersécurité et Data Analysis",
        "Développement front-end et back-end (React, Node.js, API REST)",
        "Bases de données et déploiement",
        "Méthodes Agile et gestion de projet",
        "Éco-conception logicielle et Green IT",
        "Alternance chez Bull",
      ],
      url: "https://www.coda.school/formation/bachelor-developpeur-web-fullstack",
    },
    {
      id: "dec-pocatiere",
      title: "DEC Informatique, option jeux vidéo",
      school: "Cégep de La Pocatière",
      period: "Août 2024 à juin 2025",
      location: "La Pocatière, Québec, Canada",
      status: "completed" as const,
      type: "formation" as const,
      badge: "DEC",
      description:
        "Diplôme d'études collégiales en informatique, option jeux vidéo, obtenu en double diplôme lors d'une année au Québec.",
      highlights: [
        "Double diplôme obtenu",
        "Développement de jeux avec Unreal Engine 5",
        "Programmation C++, C# et scripting",
        "Stage chez SAE Kamouraska (refonte WordPress)",
      ],
    },
    {
      id: "bts-sio",
      title: "BTS SIO, option SLAM",
      school: "Lycée Paul-Louis Courier",
      period: "Septembre 2022 à juillet 2024",
      location: "Tours, France",
      status: "completed" as const,
      type: "formation" as const,
      badge: "BTS",
      description:
        "BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers. Obtenu avec une moyenne de 14,66/20.",
      highlights: [
        "Développement Java EE, PHP et C#",
        "Conception et administration de bases de données (SQL Server, MariaDB)",
        "Stage à la mairie de Tours (WinDev Mobile)",
        "Stage chez Harmonie Mutuelle (Java, Spring Boot, Angular)",
        "Projets Ecocert, Mille Nuits et Secourisme PLC",
      ],
    },
  ],
};
