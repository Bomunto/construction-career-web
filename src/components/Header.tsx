
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Formations', href: '/formations' },
    { name: 'Notre Equipe', href: '/formateurs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-construction-600 text-white p-2 rounded-lg mr-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                IMC
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-construction-800">
                Institut des Métiers
              </h1>
              <p className="text-sm text-construction-600">
                de la Construction
              </p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-construction-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-construction-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              <a href="tel:+237699540594">Nous appeler</a>
            </div>
            <Link to="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Contactez-nous
              </Button>
            </Link>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.href.startsWith('/') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-construction-600 px-3 py-2 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-construction-600 px-3 py-2 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <div className="flex items-center text-sm text-gray-600 px-3">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+237699540594">Nous appeler</a>
                </div>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white mx-3">
                    Contactez-nous
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
