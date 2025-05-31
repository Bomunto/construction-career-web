
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-800 mb-4">
            CONTACTEZ-NOUS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous
            accompagner dans votre projet de formation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-800 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                  Parlons de votre projet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg">
                  Notre équipe est à votre disposition pour vous guider dans le
                  choix de votre formation et répondre à toutes vos questions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-construction-50 rounded-lg">
                    <div className="bg-construction-100 p-3 rounded-lg">
                      <MapPin className="w-5 h-5 text-construction-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-800">
                        Adresse
                      </h4>
                      <p className="text-gray-600">
                        ETOUDI,
                        <br />
                        Yaoundé, CM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-construction-50 rounded-lg">
                    <div className="bg-construction-100 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-construction-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-800">
                        Téléphone
                      </h4>
                      <p className="text-gray-600">+237 6 99 54 05 94</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-construction-50 rounded-lg">
                    <div className="bg-construction-100 p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-construction-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-800">
                        Email
                      </h4>
                      <p className="text-gray-600">info@imc-formation.cm</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-construction-50 rounded-lg">
                    <div className="bg-construction-100 p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-construction-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-800">
                        Horaires d'accueil
                      </h4>
                      <p className="text-gray-600">
                        Lun-Ven: 8h00 - 18h00
                        <br />
                        Sam: 9h00 - 16h00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-construction-800">
                Demandez des informations
              </CardTitle>
              <p className="text-gray-600">
                Remplissez ce formulaire et nous vous recontacterons rapidement
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input placeholder="Votre prénom" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input placeholder="Votre nom" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="votre.email@exemple.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+237699540594"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Formation d'intérêt
                  </label>
                  <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-500">
                    <option value="">Sélectionnez une formation</option>
                    <option value="gestion">Gestion de projet</option>
                    <option value="bim">BIM Manager</option>
                    <option value="designer">Designer de Cuisine</option>
                    <option value="interieur">Architecture d'Intérieur</option>
                    <option value="btp">Ingénieur de Suivie BTP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Décrivez votre projet ou posez vos questions..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer ma demande
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires. Nous nous engageons à protéger vos
                  données personnelles.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
