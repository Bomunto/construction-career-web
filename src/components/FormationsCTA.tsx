
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Target, Clock, Award } from 'lucide-react';

const FormationsCTA = () => {
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

        <div className="bg-gradient-to-r from-construction-600 to-construction-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Contenu texte */}
            <div className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Découvrez nos 5 formations spécialisées
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Gestion de Projet BTP</h4>
                    <p className="text-construction-200">Planification et coordination</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Architecture d'Intérieur</h4>
                    <p className="text-construction-200">Design et aménagement</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">BIM Manager</h4>
                    <p className="text-construction-200">Modélisation 3D avancée</p>
                  </div>
                </div>
              </div>
              
              <Link to="/formations">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
                  Voir toutes nos formations
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Informations pratiques */}
            <div className="bg-white/10 backdrop-blur-sm p-12">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">
                Informations pratiques
              </h4>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h5 className="font-semibold text-white mb-2">Horaires flexibles</h5>
                  <p className="text-construction-200 text-sm">Cours de jour et de soir</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h5 className="font-semibold text-white mb-2">Certifications</h5>
                  <p className="text-construction-200 text-sm">Diplômes reconnus</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <GraduationCap className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h5 className="font-semibold text-white mb-2">Accompagnement</h5>
                  <p className="text-construction-200 text-sm">Suivi personnalisé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsCTA;
