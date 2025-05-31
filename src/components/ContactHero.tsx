
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactHero = () => {
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
            <span className="text-orange-400">CONTACTEZ-NOUS</span>
            <br />
            DÈS AUJOURD'HUI
          </h1>
          
          <p className="text-xl md:text-2xl text-construction-100 mb-8 leading-relaxed max-w-4xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet de formation professionnelle.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Appelez-nous</h3>
              <p className="text-construction-200">+237 6 99 54 05 94</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Écrivez-nous</h3>
              <p className="text-construction-200">info@imc-formation.cm</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visitez-nous</h3>
              <p className="text-construction-200">ETOUDI, Yaoundé</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MessageCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Discutons</h3>
              <p className="text-construction-200">Réponse rapide</p>
            </div>
          </div>
          
          <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 max-w-2xl mx-auto">
            <p className="text-xl font-semibold mb-2">
              💬 Nous sommes là pour vous aider !
            </p>
            <p className="text-construction-200">
              Horaires d'accueil : Lun-Ven 8h-18h • Sam 9h-16h • Réponse garantie sous 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
