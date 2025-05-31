
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Linkedin, Award, Users } from 'lucide-react';

const FormateursTeam = () => {
  const formateurs = [
    {
      id: 1,
      name: "Jean-Pierre MBAMBA",
      title: "Directeur Pédagogique",
      speciality: "Gestion de projet BTP",
      experience: "20 ans d'expérience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      email: "jp.mbamba@imc-formation.cm",
      description: "Expert en gestion de projets de construction avec une solide expérience terrain."
    },
    {
      id: 2,
      name: "Marie FOTSO",
      title: "Formatrice Senior",
      speciality: "Architecture d'Intérieur",
      experience: "15 ans d'expérience",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6106602?w=300&h=300&fit=crop&crop=face",
      email: "m.fotso@imc-formation.cm",
      description: "Architecte d'intérieur passionnée par la transmission de son savoir-faire."
    },
    {
      id: 3,
      name: "Paul NKOMO",
      title: "Formateur BIM",
      speciality: "BIM Manager",
      experience: "12 ans d'expérience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      email: "p.nkomo@imc-formation.cm",
      description: "Spécialiste en modélisation 3D et technologies BIM les plus avancées."
    },
    {
      id: 4,
      name: "Claudine ESSOMBA",
      title: "Formatrice Technique",
      speciality: "Charpenterie & Menuiserie",
      experience: "18 ans d'expérience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      email: "c.essomba@imc-formation.cm",
      description: "Artisane experte en charpenterie traditionnelle et moderne."
    },
    {
      id: 5,
      name: "Daniel OWONA",
      title: "Formateur Sécurité",
      speciality: "Sécurité sur Chantier",
      experience: "16 ans d'expérience",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      email: "d.owona@imc-formation.cm",
      description: "Expert en prévention des risques et sécurité des chantiers de construction."
    },
    {
      id: 6,
      name: "Sylvie MANGA",
      title: "Formatrice Technique",
      speciality: "Finition de Bâtiment",
      experience: "14 ans d'expérience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      email: "s.manga@imc-formation.cm",
      description: "Spécialiste des techniques de finition et de décoration intérieure."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-800 mb-4">
            RENCONTREZ NOTRE ÉQUIPE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des professionnels expérimentés et passionnés, dédiés à votre réussite et à votre épanouissement professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formateurs.map((formateur) => (
            <Card key={formateur.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-orange-200 group-hover:border-orange-400 transition-colors">
                    <AvatarImage src={formateur.image} alt={formateur.name} />
                    <AvatarFallback className="text-lg font-bold">
                      {formateur.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold text-construction-800 mb-1">
                    {formateur.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-2">
                    {formateur.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                    <Award className="w-4 h-4" />
                    <span>{formateur.speciality}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{formateur.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                  {formateur.description}
                </p>
                
                <div className="flex justify-center gap-3">
                  <a
                    href={`mailto:${formateur.email}`}
                    className="bg-construction-100 hover:bg-construction-200 p-2 rounded-lg transition-colors"
                    title="Envoyer un email"
                  >
                    <Mail className="w-4 h-4 text-construction-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-construction-100 hover:bg-construction-200 p-2 rounded-lg transition-colors"
                    title="Profil LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-construction-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section statistiques équipe */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-construction-800 text-center mb-8">
            Notre engagement qualité
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-3xl font-bold text-construction-800 mb-2">15+</h4>
              <p className="text-gray-600">Années d'expérience moyenne</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-3xl font-bold text-construction-800 mb-2">100%</h4>
              <p className="text-gray-600">Formateurs certifiés</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-3xl font-bold text-construction-800 mb-2">500+</h4>
              <p className="text-gray-600">Étudiants formés</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-3xl font-bold text-construction-800 mb-2">95%</h4>
              <p className="text-gray-600">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormateursTeam;
