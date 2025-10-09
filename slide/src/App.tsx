import { useState, useEffect } from 'react';
import { useSlides } from '@/hooks/useSlides';
import SlideWrapper from '@/components/ui/SlideWrapper';
import PresentationHeader from '@/components/ui/PresentationHeader';

function App() {
  // État pour le mode plein écran
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Hook personnalisé pour gérer les slides avec navigation clavier activée
  const slideNavigation = useSlides(0, true);
  
  const {
    currentSlide,
    currentIndex,
    totalSlides,
    isFirst,
    isLast,
    goToNext,
    goToPrevious,
    goToSlide,
  } = slideNavigation;

  // Fonction pour basculer le mode plein écran
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.warn('Fullscreen non supporté:', error);
    }
  };

  // Écouter les changements de mode plein écran
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Raccourcis clavier pour le mode plein écran
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'F11':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) {
            event.preventDefault();
            document.exitFullscreen().catch(console.warn);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Si aucune slide n'est trouvée, afficher un message d'erreur
  if (!currentSlide) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">
            Erreur de chargement
          </h1>
          <p className="text-muted-foreground">
            Aucune slide trouvée à l'index {currentIndex}
          </p>
        </div>
      </div>
    );
  }

  // Récupérer le composant de la slide actuelle
  const CurrentSlideComponent = currentSlide.component;

  return (
    <div className="relative">
      {/* Header de présentation */}
      <PresentationHeader
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        isFirst={isFirst}
        isLast={isLast}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        goToSlide={goToSlide}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />

      {/* Slide actuelle */}
      <main>
        <SlideWrapper isFullscreen={isFullscreen}>
          <CurrentSlideComponent />
        </SlideWrapper>
      </main>
    </div>
  );
}

export default App;
