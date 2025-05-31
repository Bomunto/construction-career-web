
import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Instagram,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 text-white p-3 rounded-lg mr-4">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                  IMC
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Institut des Métiers</h3>
                <p className="text-construction-300">de la Construction</p>
              </div>
            </div>
            
            <p className="text-construction-200 mb-6 max-w-md leading-relaxed">
              Votre partenaire de confiance pour une formation de qualité dans le secteur de la construction. 
              Nous formons les professionnels de demain avec passion et expertise.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-construction-800 p-3 rounded-lg hover:bg-orange-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-construction-800 p-3 rounded-lg hover:bg-orange-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-construction-800 p-3 rounded-lg hover:bg-orange-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-construction-200 hover:text-orange-400 transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#formations" className="text-construction-200 hover:text-orange-400 transition-colors duration-200">
                  Nos formations
                </a>
              </li>
              <li>
                <a href="#atouts" className="text-construction-200 hover:text-orange-400 transition-colors duration-200">
                  Nos atouts
                </a>
              </li>
              <li>
                <a href="#contact" className="text-construction-200 hover:text-orange-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-construction-200 hover:text-orange-400 transition-colors duration-200">
                  Inscription
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-construction-200">
                    1234 Rue de la Construction<br />
                    Montréal, QC H1X 1X1
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:514XXXXXXX" className="text-construction-200 hover:text-orange-400 transition-colors duration-200">
                  514-XXX-XXXX
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@imc-formation.ca" className="text-construction-200 hover:text-orange-400 transition-colors duration-200">
                  info@imc-formation.ca
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Liens partenaires */}
        <div className="border-t border-construction-700 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Nos partenaires</h4>
            <p className="text-construction-300">
              Nous collaborons avec plusieurs entreprises du secteur pour garantir l'employabilité de nos diplômés
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-construction-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-construction-300 text-sm">
              © 2024 Institut des Métiers de la Construction. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-construction-300 hover:text-orange-400 transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-construction-300 hover:text-orange-400 transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-construction-300 hover:text-orange-400 transition-colors duration-200">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
