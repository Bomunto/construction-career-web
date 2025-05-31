
import { 
  Hammer, 
  HardHat, 
  Wrench, 
  Zap, 
  PaintBucket,
  LucideIcon
} from 'lucide-react';

export interface Formation {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  niveau: string;
  emplois: string[];
  color: string;
  detailedDescription: string;
  prerequisites: string[];
  program: string[];
  career: string[];
  schedule: {
    jour: string[];
    soir: string[];
  };
  certification: string;
  price: string;
}

export const formations: Formation[] = [
  {
    id: "gestion-chantier",
    icon: HardHat,
    title: "Gestion de chantier",
    description: "Apprenez à coordonner et superviser les projets de construction du début à la fin.",
    duration: "12 mois",
    niveau: "Intermédiaire",
    emplois: ["Chef de chantier", "Coordinateur", "Superviseur"],
    color: "from-blue-500 to-blue-600",
    detailedDescription: "Cette formation complète vous prépare à devenir un leader sur les chantiers de construction. Vous apprendrez à planifier, organiser et superviser tous les aspects d'un projet de construction, de la lecture des plans à la gestion des équipes et au respect des délais.",
    prerequisites: [
      "Expérience de 2 ans minimum dans la construction",
      "Diplôme d'études secondaires",
      "Capacités de leadership et communication"
    ],
    program: [
      "Lecture et interprétation de plans",
      "Planification et ordonnancement des travaux",
      "Gestion d'équipes et leadership",
      "Sécurité sur chantier et réglementation",
      "Contrôle qualité et normes",
      "Gestion budgétaire et coûts",
      "Relations clients et coordination",
      "Logiciels de gestion de projet"
    ],
    career: [
      "Chef de chantier résidentiel ou commercial",
      "Coordinateur de projets de construction",
      "Superviseur de travaux",
      "Contremaître spécialisé",
      "Consultant en gestion de chantier"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 8h00 - 16h00"],
      soir: ["Lundi au jeudi: 18h00 - 22h00"]
    },
    certification: "Diplôme d'études professionnelles (DEP) en gestion de chantier",
    price: "À partir de 3 500€"
  },
  {
    id: "charpenterie-menuiserie",
    icon: Hammer,
    title: "Charpenterie-menuiserie",
    description: "Maîtrisez les techniques de travail du bois et de construction de structures.",
    duration: "18 mois",
    niveau: "Débutant",
    emplois: ["Charpentier", "Menuisier", "Poseur"],
    color: "from-amber-500 to-amber-600",
    detailedDescription: "Découvrez l'art ancestral du travail du bois appliqué aux techniques modernes de construction. Cette formation vous enseignera toutes les compétences nécessaires pour concevoir, fabriquer et installer des structures en bois.",
    prerequisites: [
      "Aucune expérience requise",
      "Bonne condition physique",
      "Aptitude pour le travail manuel",
      "Précision et attention aux détails"
    ],
    program: [
      "Propriétés et essences de bois",
      "Outils manuels et électroportatifs",
      "Techniques de coupe et d'assemblage",
      "Charpente traditionnelle et moderne",
      "Menuiserie intérieure et extérieure",
      "Isolation et étanchéité",
      "Finitions et traitements",
      "Sécurité et protection individuelle"
    ],
    career: [
      "Charpentier-couvreur",
      "Menuisier d'agencement",
      "Poseur de charpente",
      "Artisan menuisier indépendant",
      "Technicien en construction bois"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 7h30 - 15h30"],
      soir: ["Mardi et jeudi: 18h00 - 22h00", "Samedi: 8h00 - 16h00"]
    },
    certification: "Diplôme d'études professionnelles (DEP) en charpenterie-menuiserie",
    price: "À partir de 4 200€"
  },
  {
    id: "electricite-construction",
    icon: Zap,
    title: "Électricité de construction",
    description: "Formation complète en installation électrique résidentielle et commerciale.",
    duration: "15 mois",
    niveau: "Débutant",
    emplois: ["Électricien", "Installateur", "Technicien"],
    color: "from-yellow-500 to-yellow-600",
    detailedDescription: "Maîtrisez tous les aspects de l'électricité dans le bâtiment, des installations résidentielles simples aux systèmes commerciaux complexes. Une formation essentielle dans un secteur en forte demande.",
    prerequisites: [
      "Diplôme d'études secondaires",
      "Bonnes notions en mathématiques",
      "Capacité de travail en hauteur",
      "Vision normale des couleurs"
    ],
    program: [
      "Principes fondamentaux de l'électricité",
      "Lecture de schémas électriques",
      "Installation de câblages et conduits",
      "Systèmes de distribution électrique",
      "Éclairage et prises de courant",
      "Systèmes de sécurité et alarmes",
      "Domotique et automatisation",
      "Normes et réglementations électriques"
    ],
    career: [
      "Électricien résidentiel",
      "Électricien industriel",
      "Technicien en maintenance électrique",
      "Installateur de systèmes de sécurité",
      "Entrepreneur électricien"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 8h00 - 16h00"],
      soir: ["Lundi, mercredi, vendredi: 18h00 - 22h00"]
    },
    certification: "Diplôme d'études professionnelles (DEP) en électricité",
    price: "À partir de 3 800€"
  },
  {
    id: "plomberie-chauffage",
    icon: Wrench,
    title: "Plomberie et chauffage",
    description: "Spécialisez-vous dans l'installation et la maintenance des systèmes de plomberie.",
    duration: "16 mois",
    niveau: "Débutant",
    emplois: ["Plombier", "Installateur", "Réparateur"],
    color: "from-cyan-500 to-cyan-600",
    detailedDescription: "Apprenez à installer, maintenir et réparer tous les systèmes de plomberie et de chauffage. Une expertise technique très recherchée dans le secteur du bâtiment.",
    prerequisites: [
      "Aucune expérience requise",
      "Bonne condition physique",
      "Capacité de travail dans des espaces restreints",
      "Aptitude pour la résolution de problèmes"
    ],
    program: [
      "Systèmes de distribution d'eau",
      "Évacuation et assainissement",
      "Installation de sanitaires",
      "Chauffage central et radiateurs",
      "Systèmes de climatisation",
      "Pompes à chaleur et énergies renouvelables",
      "Détection de fuites et réparations",
      "Soudure et raccordements"
    ],
    career: [
      "Plombier-chauffagiste",
      "Installateur sanitaire",
      "Technicien en géothermie",
      "Dépanneur d'urgence",
      "Artisan plombier indépendant"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 7h30 - 15h30"],
      soir: ["Mardi et jeudi: 18h00 - 22h00"]
    },
    certification: "Diplôme d'études professionnelles (DEP) en plomberie-chauffage",
    price: "À partir de 3 900€"
  },
  {
    id: "finition-batiment",
    icon: PaintBucket,
    title: "Finition de bâtiment",
    description: "Apprenez les techniques de finition intérieure et extérieure.",
    duration: "10 mois",
    niveau: "Débutant",
    emplois: ["Peintre", "Plâtrier", "Finisseur"],
    color: "from-purple-500 to-purple-600",
    detailedDescription: "Perfectionnez l'art de la finition dans le bâtiment. Cette formation vous apprendra toutes les techniques pour donner l'aspect final parfait à tout projet de construction.",
    prerequisites: [
      "Sens artistique et esthétique",
      "Précision et minutie",
      "Résistance aux poussières et odeurs",
      "Capacité de travail en hauteur"
    ],
    program: [
      "Préparation des surfaces",
      "Techniques de peinture et enduits",
      "Pose de revêtements muraux",
      "Plâtrerie et cloisons sèches",
      "Isolation thermique et phonique",
      "Décoration et finitions artistiques",
      "Produits et matériaux modernes",
      "Techniques de restauration"
    ],
    career: [
      "Peintre en bâtiment",
      "Plâtrier-peintre",
      "Poseur de revêtements",
      "Décorateur d'intérieur",
      "Restaurateur de bâtiments anciens"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 8h00 - 15h00"],
      soir: ["Lundi, mercredi: 18h00 - 22h00"]
    },
    certification: "Diplôme d'études professionnelles (DEP) en finition de bâtiment",
    price: "À partir de 2 800€"
  },
  {
    id: "securite-chantier",
    icon: HardHat,
    title: "Sécurité sur chantier",
    description: "Formation spécialisée en prévention et sécurité dans le BTP.",
    duration: "6 mois",
    niveau: "Tous niveaux",
    emplois: ["Préventeur", "Coordinateur sécurité", "Inspecteur"],
    color: "from-red-500 to-red-600",
    detailedDescription: "Devenez un expert en sécurité sur les chantiers de construction. Cette formation essentielle vous permettra de prévenir les accidents et d'assurer la sécurité de tous les intervenants.",
    prerequisites: [
      "Expérience dans le BTP recommandée",
      "Sens de l'observation",
      "Capacités de communication",
      "Rigueur et autorité naturelle"
    ],
    program: [
      "Réglementation sécurité et santé au travail",
      "Analyse et évaluation des risques",
      "Équipements de protection individuelle",
      "Prévention des chutes et travail en hauteur",
      "Manipulation d'équipements et machines",
      "Plans de prévention et protocoles",
      "Formation et sensibilisation des équipes",
      "Gestion des accidents et premiers secours"
    ],
    career: [
      "Coordinateur SPS (Sécurité et Protection de la Santé)",
      "Préventeur de chantier",
      "Inspecteur sécurité",
      "Formateur en sécurité BTP",
      "Consultant en prévention des risques"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 9h00 - 17h00"],
      soir: ["Mardi et jeudi: 18h30 - 22h30"]
    },
    certification: "Certificat de coordinateur SPS et prévention BTP",
    price: "À partir de 2 200€"
  }
];
