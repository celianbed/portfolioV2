// src/data.ts

export const personalInfo = {
  name: "Célian Bedminster",
  role: "Développeur Flutter & Python",
  tagline: "Développeur chez Bull | Freelance",
  description:
    "Curieux et passionné, je conçois des applications mobiles et interactives qui allient performance, sécurité et esthétique. Mon objectif : transformer des idées en solutions concrètes, du prototype au produit déployé. Mon profil hybride entre ingénierie logicielle et IA me permet d'apporter une vision complète aux projets. En parallèle, je développe également mon activité en freelance.",
  location: "Île-de-France, France",
  // Obfuscated to reduce bot scraping — assembled at runtime
  email: ["celianbedminster", "proton.me"].join("@"),
  linkedin: "https://www.linkedin.com/in/celianbdr/",
  cvUrl: "/assets/pdf/BedminsterCelian.pdf",
  photo: "/assets/img/moi.jpg",
  tableauSyntheseUrl: "/assets/pdf/CelianTableauDeSynthese.pdf",
};

export const skills = [
  {
    category: "Front-end & Mobile",
    icon: "/assets/img/html.png",
    techs: ["Flutter", "React", "Angular", "TypeScript", "HTML / CSS", "JavaScript", "Next.js", "Bootstrap"],
    level: 85,
  },
  {
    category: "Back-end",
    icon: "/assets/img/appli.png",
    techs: ["Python", "Django", "Flask", "Java", "Spring Boot", "PHP", "Node.js", "C#", ".NET"],
    level: 80,
  },
  {
    category: "Base de Données",
    icon: "/assets/img/bdd.png",
    techs: ["PostgreSQL", "MySQL", "MariaDB", "SQL Server", "MongoDB", "SQLite", "HFSQL"],
    level: 75,
  },
  {
    category: "DevOps & Infrastructure",
    icon: "/assets/img/reseaux.png",
    techs: ["Docker", "Nginx", "Jenkins", "Linux", "Apache", "Cloudflare Tunnel", "Git", "PowerShell"],
    level: 70,
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
    title: "Ecocert — Certificats",
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
    title: "Ecocert — Simulateur",
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
        "Développement d'une application robuste pour simuler les certifications agricoles biologiques.",
      missions: [
        "Développement Back-end Java",
        "Mise en place de l'ORM Hibernate pour la persistance",
        "Création des vues dynamiques en JSP/JSTL",
        "Gestion des rôles utilisateurs",
      ],
      env: "Java EE, GlassFish, SQL Server, Hibernate",
    },
  },
  {
    id: "ecocert-traitement",
    title: "Ecocert — Traitements",
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
        "Configuration d'un serveur web complet sur Raspberry Pi pour héberger des projets personnels et comprendre l'infrastructure réseau.",
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
        "Développement d'un outil pour générer des mots de passe robustes respectant les bonnes pratiques de sécurité.",
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
    period: "Stage DEC — Mars à Juin 2025",
    image: "/assets/img/sae.png",
    shortDesc: "Refonte complète du site web d'une entreprise locale sous WordPress avec plugin PHP personnalisé.",
    tech: ["WordPress", "PHP", "CSS"],
    screenshots: [],
    fullDesc: {
      context:
        "Stage réalisé dans le cadre du DEC au Cégep de la Pocatière. Refonte complète du site web de l'entreprise SAE Kamouraska en duo avec un collègue.",
      missions: [
        "Modernisation de l'interface et amélioration de l'expérience utilisateur",
        "Développement d'un plugin WordPress personnalisé en PHP",
        "Intégration de fonctionnalités spécifiques demandées par le client",
        "Travail en conditions réelles avec une entreprise locale",
      ],
      env: "WordPress, PHP, MySQL, CSS",
    },
  },
  {
    id: "mairie-tours",
    title: "Mairie de Tours",
    period: "Stage 1ère année",
    image: "/assets/img/Tours.png",
    shortDesc: "Développement mobile WLangage et gestion de parc informatique.",
    tech: ["WinDev Mobile", "Android", "HFSQL"],
    screenshots: [],
    documents: [
      { label: "Rapport hebdomadaire", url: "/assets/pdf/ModalsPDF/RapportHebdoMairie.pdf" },
      { label: "Gestion de projet", url: "/assets/pdf/ModalsPDF/GestionDeProjetMairie.pdf" },
      { label: "Gestion du patrimoine informatique", url: "/assets/pdf/ModalsPDF/GestionPatrimoineMairie.pdf" },
    ],
    fullDesc: {
      context:
        "Stage de première année. Travail sur 'Aristé Mobile', une application pour les jardiniers de la ville.",
      missions: [
        "Migration de l'application Windows vers Android",
        "Intégration de l'API Leaflet pour la géolocalisation des arbres",
        "Gestion du patrimoine informatique de la mairie",
        "Documentation technique",
      ],
      env: "WinDev Mobile, HFSQL, Android, Leaflet, PC Moover",
    },
  },
  {
    id: "harmonie-mutuelle",
    title: "Harmonie Mutuelle",
    period: "Stage 2ème année",
    image: "/assets/img/HM.png",
    shortDesc: "Développement d'applications métier en Java/Spring Boot et Angular.",
    tech: ["Java", "Spring Boot", "Angular"],
    screenshots: [],
    documents: [
      { label: "Rapport hebdomadaire", url: "/assets/pdf/ModalsPDF/RapportHebdoHM.pdf" },
      { label: "Gestion du patrimoine informatique", url: "/assets/pdf/ModalsPDF/GestionPatrimoineHM.pdf" },
    ],
    fullDesc: {
      context:
        "Stage de deuxième année chez Harmonie Mutuelle, travail sur des applications internes.",
      missions: [
        "Développement d'applications métier en Java/Spring Boot",
        "Participation aux sprints Agile (Jira, Confluence)",
        "Tests unitaires et d'intégration",
        "Rédaction de documentation",
      ],
      env: "Java, Spring Boot, Angular, Oracle, Git, IntelliJ, Jira, Confluence",
    },
  },
];

export const certifications = [
  {
    name: "MOOC ANSSI",
    date: "Octobre 2022",
    image: "/assets/img/SecNum.png",
    description:
      "Le MOOC de l'ANSSI donne beaucoup d'informations pour s'initier à la cybersécurité, approfondir ses connaissances et permettre d'agir de manière efficace pour protéger ses outils numériques.",
    attestationUrl: "/assets/pdf/ModalsPDF/SecNum.pdf",
    attestationLabel: "Voir l'attestation",
  },
  {
    name: "Certification Python",
    date: "Novembre 2022",
    image: "/assets/img/python.png",
    description:
      "Certification python pour m'entrainer et renforcer mes compétences dans la logique de développement. Python est en plus largement utilisé dans divers domaines tels que le développement web, l'analyse de données, l'intelligence artificielle et l'automatisation.",
    attestationUrl: "/assets/img/pythonCertif.png",
    attestationLabel: "Voir l'évolution",
  },
  {
    name: "Formation Java POO",
    date: "Janvier 2023",
    image: "/assets/img/java.png",
    description:
      "Cette certification a approfondi mes connaissances et amélioré ma compréhension pratique des concepts Java, ce qui est bénéfique pour mon développement professionnel à long terme. Elle m'offre de nouvelles opportunités professionnelles et me permet d'accéder à des postes plus avancés.",
    attestationUrl: "/assets/img/javaCertif.png",
    attestationLabel: "Voir l'évolution",
  },
  {
    name: "Formation WLangage",
    date: "Avril 2023",
    image: "/assets/img/Modals/Stages/Mairie/WL.png",
    description:
      "Avant mon stage de première année de BTS SIO, j'ai réalisé une courte formation sur le Wlangage pour me former et avoir un minimum de connaissance pour le début du stage. Celle-ci m'a beaucoup aidé à faire évoluer l'application vers le système Android.",
  },
  {
    name: "Formation Kotlin",
    date: "Mars 2024",
    image: "/assets/img/kotlin.png",
    description:
      "Kotlin est devenu un choix privilégié pour le développement d'applications Android, soutenu officiellement par Google et apprécié pour sa syntaxe concise et expressive. Sa compatibilité totale avec Java permet une intégration fluide avec les bibliothèques existantes, élargissant les possibilités de développement.",
  },
  {
    name: "Learning AI Through Visualization",
    date: "Octobre 2025",
    image: "/assets/img/columbiaplus.jpeg",
    description:
      "Certification axée sur la compréhension de l'intelligence artificielle à travers la visualisation de données. Exploration des concepts fondamentaux de l'IA et du machine learning par des approches visuelles et interactives.",
  },
];

export const techWatch = {
  title: "Kotlin / Swift & Algorithmes des réseaux sociaux",
  tools: ["Feedly", "Google Alerts", "Discord", "Feeder"],
  proofImages: [
    "/assets/img/preuveAlerts.png",
    "/assets/img/preuveDiscord.png",
    "/assets/img/preuveFeedly.png",
    "/assets/img/preuveFeeder.png",
  ],
  intro:
    "La veille technologique est une activité consistant à rester au courant des dernières avancées sur un secteur donné. C'est essentiel dans l'informatique car le domaine évolue sans cesse.",
  summary:
    "Ma veille se concentre sur Kotlin et Swift, deux langages modernes conçus pour le développement mobile natif. Kotlin, promu par JetBrains et adopté par Google pour Android, et Swift, développé par Apple pour iOS, représentent l'état de l'art du développement mobile. J'explore aussi le fonctionnement des algorithmes de recommandation des réseaux sociaux (TikTok, Instagram) pour comprendre leurs mécanismes et optimiser la portée des applications.",
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
    "La veille technologique sur Swift et Kotlin m'a permis et me permettra de maintenir mes compétences à jour, d'adopter les meilleures pratiques, d'explorer de nouvelles bibliothèques et outils, d'anticiper les tendances, et d'améliorer la collaboration et la productivité au sein des équipes de développement futur. Quant à la veille sur les algorithmes des réseaux sociaux, elle aide à mieux comprendre l'objectif de leurs créateurs, à contourner ces algorithmes, à optimiser sa stratégie de contenu, et surtout de gérer la réputation en ligne.",
};

export const formations = {
  intro:
    "Mon parcours de formation m'a mené du BTS SIO option SLAM à un DEC en programmation au Canada, puis à un Bachelor Développeur Web FullStack chez CODA. Chaque étape a consolidé mes compétences techniques et ma polyvalence.",
  items: [
    {
      id: "bachelor-coda",
      title: "Bachelor Développeur Web FullStack",
      school: "CODA – École d'Informatique",
      period: "Septembre 2025 — Juin 2026",
      location: "Orléans, France",
      status: "current" as const,
      description:
        "Formation en alternance (3 semaines entreprise / 1 semaine école) préparant à la certification RNCP37873 Développeur Web FullStack. Cursus professionnalisant axé sur la conception d'applications du front-end au back-end, la sécurité, la gestion de projet et l'éco-conception.",
      highlights: [
        "Développement front-end & back-end (React, Node.js, APIs REST)",
        "Gestion de bases de données & déploiement",
        "Méthodes Agile et gestion de projet",
        "Éco-conception logicielle & Green IT",
        "Alternance chez Bull (Eviden)",
      ],
      url: "https://www.coda.school/formation/bachelor-developpeur-web-fullstack",
    },
    {
      id: "dec-pocatiere",
      title: "DEC Jeux & Programmation",
      school: "Cégep de la Pocatière",
      period: "Août 2024 — Juin 2025",
      location: "La Pocatière, Québec, Canada",
      status: "completed" as const,
      description:
        "Diplôme d'études collégiales en programmation de jeux et applications. Formation au Canada couvrant le développement de jeux (Unreal Engine 5), les applications interactives et la programmation orientée objet.",
      highlights: [
        "Développement de jeux avec Unreal Engine 5",
        "Programmation C++, C# et scripting",
        "Stage chez SAE Kamouraska (refonte WordPress)",
        "Expérience interculturelle au Québec",
      ],
    },
    {
      id: "bts-sio",
      title: "BTS SIO — Option SLAM",
      school: "Lycée Paul-Louis Courier",
      period: "2022 — 2024",
      location: "Tours, France",
      status: "completed" as const,
      description:
        "Brevet de Technicien Supérieur Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers. Formation en 2 ans aux métiers du développement logiciel, de la conception de bases de données et de la gestion de projets informatiques.",
      highlights: [
        "Développement Java EE, PHP, C#",
        "Conception & administration de BDD (SQL Server, MariaDB)",
        "Stage Mairie de Tours (WinDev Mobile)",
        "Stage Harmonie Mutuelle (Java/Spring Boot/Angular)",
        "Projets : Ecocert, Mille Nuits, Secourisme PLC",
      ],
    },
  ],
};