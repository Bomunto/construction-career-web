
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Hammer, 
  HardHat, 
  Wrench, 
  Zap, 
  PaintBucket,
  ArrowRight,
  Clock,
  Users,
  Award
} from 'lucide-react';

const FormationsSection = () => {
  const formations = [
    {
      icon: HardHat,
      title: "Gestion de chantier",
      description: "Apprenez à coordonner et superviser les projets de construction du début à la fin.",
      duration: "12 mois",
      niveau: "Intermédiaire",
      emplois: ["Chef de chantier", "Coordinateur", "Superviseur"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Hammer,
      title: "Charpenterie-menuiserie",
      description: "Maîtrisez les techniques de travail du bois et de construction de structures.",
      duration: "18 mois",
      niveau: "Débutant",
      emplois: ["Charpentier", "Menuisier", "Poseur"],
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "Électricité de construction",
      description: "Formation complète en installation électrique résidentielle et commerciale.",
      duration: "15 mois",
      niveau: "Débutant",
      emplois: ["Électricien", "Installateur", "Technicien"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Wrench,
      title: "Plomberie et chauffage",
      description: "Spécialisez-vous dans l'installation et la maintenance des systèmes de plomberie.",
      duration: "16 mois",
      niveau: "Débutant",
      emplois: ["Plombier", "Installateur", "Réparateur"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: PaintBucket,
      title: "Finition de bâtiment",
      description: "Apprenez les techniques de finition intérieure et extérieure.",
      duration: "10 mois",
      niveau: "Débutant",
      emplois: ["Peintre", "Plâtrier", "Finisseur"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: HardHat,
      title: "Sécurité sur chantier",
      description: "Formation spécialisée en prévention et sécurité dans le BTP.",
      duration: "6 mois",
      niveau: "Tous niveaux",
      emplois: ["Préventeur", "Coordinateur sécurité", "Inspecteur"],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="formations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-800 mb-4">
            NOS FORMATIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des formations nombreuses qui mènent toutes à un emploi aux défis multiples et intéressants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formations.map((formation, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`bg-gradient-to-r ${formation.color} p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <formation.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-construction-800 group-hover:text-orange-600 transition-colors duration-300">
                  {formation.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {formation.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formation.duration}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {formation.niveau}
                  </Badge>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-construction-700 mb-2">Débouchés :</p>
                  <div className="flex flex-wrap gap-1">
                    {formation.emplois.map((emploi, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {emploi}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-construction-600 hover:bg-construction-700 text-white group-hover:bg-orange-500 transition-all duration-300">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informations pratiques */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-construction-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-construction-600" />
              </div>
              <h3 className="text-xl font-bold text-construction-800 mb-2">Horaires flexibles</h3>
              <p className="text-gray-600">Cours de jour et de soir pour s'adapter à votre emploi du temps</p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-construction-600" />
              </div>
              <h3 className="text-xl font-bold text-construction-800 mb-2">Petits groupes</h3>
              <p className="text-gray-600">Apprentissage personnalisé avec un suivi individuel</p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-construction-600" />
              </div>
              <h3 className="text-xl font-bold text-construction-800 mb-2">Certification</h3>
              <p className="text-gray-600">Diplômes reconnus par l'industrie de la construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;
