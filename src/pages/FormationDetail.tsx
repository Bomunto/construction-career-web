
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Clock, 
  Award, 
  Users, 
  CheckCircle, 
  Calendar,
  Euro,
  GraduationCap,
  Target,
  BookOpen,
  Banknote,
  Phone
} from 'lucide-react';
import { formations } from '@/data/formations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FormationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const formation = formations.find(f => f.id === id);

  if (!formation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Formation non trouvée</h1>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = formation.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/#formations"
            className="inline-flex items-center text-construction-600 hover:text-construction-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
        </div>

        {/* En-tête de la formation */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className={`bg-gradient-to-r ${formation.color} p-8 text-white`}>
            <div className="flex items-center space-x-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <IconComponent className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{formation.title}</h1>
                <p className="text-xl text-white/90">{formation.description}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">{formation.duration}</p>
                <p className="text-sm text-white/80">Durée</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <Award className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">{formation.niveau}</p>
                <p className="text-sm text-white/80">Niveau</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <Banknote className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">{formation.price}</p>
                <p className="text-sm text-white/80">Tarif</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <GraduationCap className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Diplômé</p>
                <p className="text-sm text-white/80">Certifié</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description détaillée */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Description de la formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {formation.detailedDescription}
                </p>
              </CardContent>
            </Card>

            {/* Programme */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Programme de formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {formation.program.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Débouchés */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Débouchés et carrières
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formation.career.map((career, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-construction-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prérequis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prérequis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {formation.prerequisites.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5" />
                  Horaires disponibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-construction-700 mb-2">
                    Cours de jour
                  </h4>
                  {formation.schedule.jour.map((schedule, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {schedule}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-construction-700 mb-2">
                    Cours du soir
                  </h4>
                  {formation.schedule.soir.map((schedule, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {schedule}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="w-5 h-5" />
                  Certification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {formation.certification}
                </p>
              </CardContent>
            </Card>

            {/* Débouchés tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Métiers visés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {formation.emplois.map((emploi, index) => (
                    <Badge key={index} variant="secondary">
                      {emploi}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="bg-construction-50 border-construction-200">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="font-bold text-construction-800">
                    Intéressé par cette formation ?
                  </h3>
                  <p className="text-sm text-construction-600">
                    Contactez-nous pour plus d'informations ou pour vous
                    inscrire.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-construction-600 hover:bg-construction-700">
                      Demander des informations
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-construction-600 text-construction-600 hover:bg-construction-50"
                    >
                      {/* L’ancre reçoit le style du bouton grâce à asChild */}
                      <a
                        href="tel:+237699540594"
                        aria-label="Appeler le +237 699 54 05 94"
                        className="flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {/* Affichage lisible du numéro : espaces insécables (&nbsp;) */}
                        Nous appeler
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FormationDetail;
