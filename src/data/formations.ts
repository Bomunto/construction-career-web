
import { 
  Target, 
  Building, 
  PaintBucket, 
  Home, 
  Wrench,
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
  startDate: string;
}

export const formations: Formation[] = [
  {
    id: "gestion-de-projet",
    icon: Target,
    title: "Gestion de Projet",
    description: "Devenez des professionnels en Gestion de Projet ! Cette filière forme des professionnels capables de planifier, coordonner et superviser des projets de construction.",
    duration: "03 Mois",
    niveau: "Intermédiaire",
    emplois: ["Chef de projet", "Coordinateur de projet", "Gestionnaire BTP", "Superviseur de chantier"],
    color: "from-purple-500 to-purple-600",
    detailedDescription: "Cette filière forme des professionnels capables de planifier, coordonner et superviser des projets de construction, de la conception à la livraison. Le gestionnaire de projet BTP assure le respect des délais, des budgets et des normes, tout en garantissant la qualité des travaux et la sécurité sur le terrain.",
    prerequisites: [
      "Diplôme d'études secondaires",
      "Expérience en construction recommandée",
      "Capacités de leadership",
      "Bonnes compétences en communication"
    ],
    program: [
      "Planification et gestion de projet",
      "Coordination d'équipes multidisciplinaires",
      "Gestion des budgets et des ressources",
      "Respect des délais et des normes",
      "Contrôle qualité des travaux",
      "Sécurité sur les chantiers",
      "Outils de gestion de projet",
      "Communication avec les clients"
    ],
    career: [
      "Chef de projet BTP",
      "Coordinateur de construction",
      "Gestionnaire de chantier",
      "Superviseur de travaux",
      "Consultant en gestion de projet"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 8h00 - 16h00"],
      soir: ["Lundi au jeudi: 18h00 - 22h00"]
    },
    certification: "Certificat délivré",
    price: "300 000 F",
    startDate: "5 Juin 2025"
  },
  {
    id: "bim-manager",
    icon: Building,
    title: "BIM Manager",
    description: "Devenez des professionnels en gestion BIM ! La filière forme des experts du Building Information Modeling (BIM), une méthode innovante de gestion de projets de construction.",
    duration: "03 Mois",
    niveau: "Avancé",
    emplois: ["BIM Manager", "Coordinateur BIM", "Spécialiste BIM", "Gestionnaire de maquette numérique"],
    color: "from-blue-500 to-blue-600",
    detailedDescription: "La filière forme des experts du Building Information Modeling (BIM), une méthode innovante de gestion de projets de construction basée sur des maquettes numériques 3D. Le BIM Manager coordonne les acteurs du chantier, optimise les coûts, les délais et la qualité grâce à des outils numériques avancés.",
    prerequisites: [
      "Formation en architecture ou ingénierie",
      "Maîtrise des outils informatiques",
      "Expérience en construction",
      "Capacités d'analyse et de coordination"
    ],
    program: [
      "Modélisation 3D et BIM",
      "Coordination des acteurs du projet",
      "Optimisation des coûts et délais",
      "Gestion de la qualité numérique",
      "Outils BIM avancés",
      "Collaboration interdisciplinaire",
      "Analyse de données de construction",
      "Gestion de maquettes numériques"
    ],
    career: [
      "BIM Manager",
      "Coordinateur BIM",
      "Spécialiste en modélisation 3D",
      "Gestionnaire de maquette numérique",
      "Consultant BIM"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 8h00 - 16h00"],
      soir: ["Mardi et jeudi: 18h00 - 22h00"]
    },
    certification: "Certificat délivré",
    price: "500 000 F",
    startDate: "5 Juin 2025"
  },
  {
    id: "designer-de-cuisine",
    icon: PaintBucket,
    title: "Designer de Cuisine",
    description: "Devenez des professionnels en Design de Cuisine ! Cette formation prépare à la conception de cuisines modernes, fonctionnelles et esthétiques.",
    duration: "02 Mois",
    niveau: "Débutant",
    emplois: ["Designer de cuisine", "Concepteur d'intérieur", "Spécialiste aménagement", "Consultant cuisine"],
    color: "from-pink-500 to-pink-600",
    detailedDescription: "Cette formation prépare à la conception de cuisines modernes, fonctionnelles et esthétiques. Elle combine design, ergonomie et techniques de modélisation pour former des professionnels prêts à intégrer des agences, des marques ou à travailler en freelance.",
    prerequisites: [
      "Sens artistique et créativité",
      "Intérêt pour le design d'intérieur",
      "Notions de base en dessin",
      "Capacité d'écoute client"
    ],
    program: [
      "Design et conception de cuisines",
      "Ergonomie et fonctionnalité",
      "Techniques de modélisation",
      "Choix des matériaux et finitions",
      "Relation client et conseil",
      "Logiciels de conception 3D",
      "Tendances et styles modernes",
      "Gestion de projet d'aménagement"
    ],
    career: [
      "Designer de cuisine",
      "Concepteur d'espaces culinaires",
      "Spécialiste en aménagement",
      "Consultant en design de cuisine",
      "Designer d'intérieur freelance"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 9h00 - 15h00"],
      soir: ["Lundi et mercredi: 18h00 - 22h00"]
    },
    certification: "Certificat délivré",
    price: "300 000 F",
    startDate: "5 Juin 2025"
  },
  {
    id: "architecture-interieur",
    icon: Home,
    title: "Architecture d'Intérieur",
    description: "Devenez des professionnels en Conception Graphique et en Architecture d'Intérieur ! La filière forme des professionnels capables de concevoir, d'aménager et de valoriser des espaces intérieurs.",
    duration: "12 Mois",
    niveau: "Intermédiaire",
    emplois: ["Architecte d'intérieur", "Décorateur", "Concepteur d'espaces", "Designer d'intérieur"],
    color: "from-orange-500 to-orange-600",
    detailedDescription: "La filière Architecture d'intérieur forme des professionnels capables de concevoir, d'aménager et de valoriser des espaces intérieurs, en alliant esthétique, fonctionnalité et confort. L'architecte d'intérieur intervient sur différents types de projets : habitations, bureaux, commerces, hôtels, lieux culturels.",
    prerequisites: [
      "Sens artistique développé",
      "Créativité et imagination",
      "Notions en dessin technique",
      "Intérêt pour l'art et le design"
    ],
    program: [
      "Conception et aménagement d'espaces",
      "Design d'intérieur et décoration",
      "Valorisation d'espaces intérieurs",
      "Ergonomie et fonctionnalité",
      "Esthétique et confort",
      "Projets résidentiels et commerciaux",
      "Logiciels de conception 3D",
      "Histoire de l'art et styles"
    ],
    career: [
      "Architecte d'intérieur",
      "Décorateur d'intérieur",
      "Concepteur d'espaces commerciaux",
      "Designer d'intérieur freelance",
      "Consultant en aménagement"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 8h00 - 16h00"],
      soir: ["Lundi, mercredi, vendredi: 18h00 - 22h00"]
    },
    certification: "Certificat international délivré",
    price: "1 000 000 F",
    startDate: "5 Juin 2025"
  },
  {
    id: "ingenieur-suivie-btp",
    icon: Wrench,
    title: "Ingénieur de Suivie BTP",
    description: "Devenez des professionnels en Ingénierie BTP ! La filière forme des ingénieurs spécialisés dans la conception, la planification et la réalisation d'infrastructures.",
    duration: "02 Mois",
    niveau: "Avancé",
    emplois: ["Ingénieur BTP", "Ingénieur de suivi", "Superviseur technique", "Gestionnaire d'infrastructure"],
    color: "from-green-500 to-green-600",
    detailedDescription: "La filière forme des ingénieurs spécialisés dans la conception, la planification et la réalisation d'infrastructures : bâtiments, routes, ponts, etc. Alliant rigueur technique et gestion de projet, l'ingénieur BTP est un acteur clé du développement durable et urbain.",
    prerequisites: [
      "Formation technique ou scientifique",
      "Solides bases en mathématiques",
      "Expérience en construction",
      "Capacités d'analyse technique"
    ],
    program: [
      "Conception d'infrastructures",
      "Planification de projets BTP",
      "Réalisation et suivi de chantier",
      "Rigueur technique et normes",
      "Gestion de projet complexe",
      "Développement durable",
      "Technologies de construction",
      "Contrôle qualité et sécurité"
    ],
    career: [
      "Ingénieur BTP",
      "Ingénieur de suivi de chantier",
      "Superviseur technique",
      "Gestionnaire d'infrastructures",
      "Consultant en ingénierie"
    ],
    schedule: {
      jour: ["Lundi au vendredi: 8h00 - 16h00"],
      soir: ["Mardi et jeudi: 18h00 - 22h00"]
    },
    certification: "Certificat délivré",
    price: "500 000 F",
    startDate: "5 Juin 2025"
  }
];
