import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize, Minimize, Eye, EyeOff } from 'lucide-react';
import { SlideNavigationState, SlideNavigationActions } from '@/core/types';

interface PresentationHeaderProps extends SlideNavigationState, SlideNavigationActions {
  /** État du mode plein écran */
  isFullscreen: boolean;
  /** Fonction pour basculer le mode plein écran */
  toggleFullscreen: () => void;
}

/**
 * Header compact pour la présentation avec stepper et contrôles
 */
export function PresentationHeader({
  currentIndex,
  totalSlides,
  goToSlide,
  isFullscreen,
  toggleFullscreen,
}: PresentationHeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

  // Auto-masquage du header en mode plein écran
  useEffect(() => {
    if (isFullscreen) {
      // Masquer le header après 3 secondes en mode plein écran
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      setHideTimer(timer);
      
      return () => {
        if (timer) clearTimeout(timer);
      };
    } else {
      // Toujours visible en mode normal
      setIsVisible(true);
      if (hideTimer) {
        clearTimeout(hideTimer);
        setHideTimer(null);
      }
    }
  }, [isFullscreen]);

  // Réafficher le header lors du mouvement de la souris en mode plein écran
  useEffect(() => {
    if (!isFullscreen) return;

    const handleMouseMove = () => {
      setIsVisible(true);
      
      // Relancer le timer de masquage
      if (hideTimer) clearTimeout(hideTimer);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      setHideTimer(timer);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Réafficher sur n'importe quelle touche
      if (e.key !== 'F11') {
        setIsVisible(true);
        
        if (hideTimer) clearTimeout(hideTimer);
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
        setHideTimer(timer);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen, hideTimer]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* Stepper compact */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground mr-3">
                {currentIndex + 1} / {totalSlides}
              </span>
              
              {/* Points de progression */}
              <div className="flex space-x-1">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 hover:scale-125 ${
                      index === currentIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Aller à la slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Titre de la slide actuelle */}
            <div className="flex-1 text-center">
              <h1 className="text-lg font-semibold text-foreground truncate max-w-md mx-auto">
                Ensorcelle ton IDE
              </h1>
            </div>

            {/* Contrôles */}
            <div className="flex items-center space-x-2">
              {/* Bouton visibilité du header (en mode plein écran) */}
              {isFullscreen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsVisible(!isVisible);
                    if (hideTimer) clearTimeout(hideTimer);
                  }}
                  className="opacity-60 hover:opacity-100"
                >
                  {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              )}
              
              {/* Bouton plein écran */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="opacity-60 hover:opacity-100"
                title={isFullscreen ? 'Quitter le plein écran (F11)' : 'Mode plein écran (F11)'}
              >
                {isFullscreen ? (
                  <Minimize className="w-4 h-4" />
                ) : (
                  <Maximize className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PresentationHeader;