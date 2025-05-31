
import React from 'react';
import { Play, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-construction-800 mb-4">
            DÉCOUVREZ NOTRE ÉCOLE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une présentation complète de nos installations, nos formations et notre équipe pédagogique
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Container pour la vidéo */}
          <div className="relative bg-construction-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
            {/* Placeholder pour la vidéo - à remplacer par une vraie vidéo */}
            <div className="absolute inset-0 bg-gradient-to-br from-construction-800 to-construction-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-orange-500 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer group">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Vidéo de présentation</h3>
                <p className="text-construction-200">Cliquez pour découvrir notre école</p>
              </div>
            </div>
            
            {/* Si vous avez une vidéo, décommentez et remplacez cette section :
            <video 
              controls 
              poster="/path/to/poster.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/path/to/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            */}
          </div>

          {/* Points clés sous la vidéo */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-construction-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Video className="w-8 h-8 text-construction-600" />
                </div>
                <h4 className="text-lg font-bold text-construction-800 mb-2">Visite virtuelle</h4>
                <p className="text-gray-600">Découvrez nos ateliers et équipements modernes</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-construction-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-construction-600" />
                </div>
                <h4 className="text-lg font-bold text-construction-800 mb-2">Témoignages</h4>
                <p className="text-gray-600">Écoutez nos étudiants et diplômés</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-construction-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Video className="w-8 h-8 text-construction-600" />
                </div>
                <h4 className="text-lg font-bold text-construction-800 mb-2">Formations</h4>
                <p className="text-gray-600">Aperçu de nos programmes d'enseignement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
