import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Briefcase,
  Clock,
  Building2,
  Heart,
  Handshake,
  Users,
} from "lucide-react";

const AtoutsSection = () => {
  const atouts = [
    {
      icon: GraduationCap,
      title: "Enseignants compétents et passionnés",
      description:
        "Notre équipe pédagogique combine expérience professionnelle et passion pour l'enseignement",
    },
    {
      icon: Briefcase,
      title: "Formations aux perspectives d'emploi intéressantes",
      description:
        "Des programmes conçus pour répondre aux besoins du marché du travail",
    },
    {
      icon: Clock,
      title: "Horaire de jour et de soir",
      description:
        "Flexibilité d'horaires pour s'adapter à votre situation personnelle",
    },
    {
      icon: Building2,
      title: "Locaux modernes",
      description:
        "Installations récentes avec équipements à la pointe de la technologie",
    },
    {
      icon: Heart,
      title: "Cadre d'apprentissage chaleureux",
      description:
        "Un environnement vaste, accueillant et facilement accessible",
    },
    {
      icon: Handshake,
      title: "Partenariats entreprises",
      description:
        "Collaboration étroite avec plusieurs entreprises du secteur",
    },
    {
      icon: Users,
      title: "École ouverte à tous",
      description:
        "Accueil de tous les profils, avec ou sans expérience préalable",
    },
  ];

  return (
    <section id="atouts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-800 mb-4">
            NOS ATOUTS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce qui fait la différence de l'Institut des Métiers de la
            Construction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atouts.map((atout, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-construction-500 to-construction-600 p-4 rounded-2xl w-fit group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <atout.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-construction-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {atout.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {atout.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-construction-600 to-construction-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à commencer votre formation ?
            </h3>
            <p className="text-xl text-construction-100 mb-8 max-w-2xl mx-auto">
              Rejoignez-nous et bénéficiez de tous ces avantages pour construire
              votre avenir professionnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                <Link to="/formations">Découvrir nos formations</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-construction-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Link to="/contact">Demander des informations</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtoutsSection;
