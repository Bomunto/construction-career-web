
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-construction-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Contenu texte */}
            <div className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Une question ? Contactez-nous !
              </h3>
              
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Notre équipe est à votre disposition pour vous accompagner dans votre projet de formation. 
                Nous répondons à toutes vos questions rapidement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Appelez-nous</h4>
                    <p className="text-orange-100">+237 6 99 54 05 94</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Écrivez-nous</h4>
                    <p className="text-orange-100">info@imc-formation.cm</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visitez-nous</h4>
                    <p className="text-orange-100">ETOUDI, Yaoundé</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-orange-600 text-lg px-8 py-4">
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Informations pratiques */}
            <div className="bg-white/10 backdrop-blur-sm p-12">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">
                Pourquoi nous contacter ?
              </h4>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-white mx-auto mb-3" />
                  <h5 className="font-semibold text-white mb-2">Conseil personnalisé</h5>
                  <p className="text-orange-100 text-sm">Orientation gratuite</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                  <h5 className="font-semibold text-white mb-2">Réponse rapide</h5>
                  <p className="text-orange-100 text-sm">Sous 24h maximum</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                  <h5 className="font-semibold text-white mb-2">Rendez-vous</h5>
                  <p className="text-orange-100 text-sm">Visite de nos locaux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
