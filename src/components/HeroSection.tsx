
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Building } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-br from-construction-900 via-construction-800 to-construction-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M54 54h6v6h-6zM42 42h6v6h-6zM30 30h6v6h-6zM18 18h6v6h-6zM6 6h6v6H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-orange-400">PRÉPAREZ-VOUS</span>
              <br />
              À UNE CARRIÈRE
              <br />
              <span className="text-orange-400">STIMULANTE!</span>
            </h1>

            <p className="text-xl md:text-2xl text-construction-100 mb-8 leading-relaxed">
              Au cœur du milieu de la construction
            </p>

            <p className="text-lg text-construction-200 mb-10 leading-relaxed">
              Grâce à notre équipe, riche d'une expérience acquise autant en
              entreprise qu'en éducation, nos élèves peuvent compter sur un
              savoir-faire exceptionnel et des compétences de haut niveau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
                <a href="/formations">Découvrir nos formations</a>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-construction-800 text-lg px-8 py-4"
              >
                <a href="/contact">Nous contacter</a>
              </Button>
            </div>
          </div>

          {/* Statistiques et points forts */}
          <div className="animate-slide-in-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Pourquoi nous choisir ?
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Enseignants expérimentés
                    </h4>
                    <p className="text-construction-200">
                      Professionnels passionnés
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Formations reconnues
                    </h4>
                    <p className="text-construction-200">
                      Perspectives d'emploi intéressantes
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Locaux modernes</h4>
                    <p className="text-construction-200">
                      Équipements de pointe
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-500/20 rounded-lg border border-orange-400/30">
                <p className="text-center font-semibold text-lg">
                  🎯 Une école ouverte à tous !
                </p>
                <p className="text-center text-construction-200 mt-2">
                  Horaires de jour et de soir disponibles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
