
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Award, BookOpen, Star } from 'lucide-react';

const FormateursHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-construction-900 via-construction-800 to-construction-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M54 54h6v6h-6zM42 42h6v6h-6zM30 30h6v6h-6zM18 18h6v6h-6zM6 6h6v6H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-orange-400">NOTRE ÉQUIPE</span>
            <br />
            DE FORMATEURS
          </h1>
          
          <p className="text-xl md:text-2xl text-construction-100 mb-8 leading-relaxed max-w-4xl mx-auto">
            Rencontrez nos experts passionnés qui vous accompagneront dans votre parcours de formation. 
            Une équipe expérimentée et dévouée à votre réussite professionnelle.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expérience</h3>
              <p className="text-construction-200">15+ ans en moyenne</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certifications</h3>
              <p className="text-construction-200">Experts reconnus</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BookOpen className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Pédagogie</h3>
              <p className="text-construction-200">Approche moderne</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Star className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-construction-200">Résultats prouvés</p>
            </div>
          </div>
          
          <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 max-w-2xl mx-auto">
            <p className="text-xl font-semibold mb-2">
              👥 Une équipe dédiée à votre succès
            </p>
            <p className="text-construction-200">
              Formateurs expérimentés • Suivi personnalisé • Expertise terrain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormateursHero;
