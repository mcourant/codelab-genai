import { useState, useCallback, useEffect } from 'react';
import { slideRegistry, slideUtils } from '@/core/slideRegistry';
import { SlideNavigationState, SlideNavigationActions, SlideMetadata } from '@/core/types';

/**
 * Hook personnalisé pour gérer la navigation dans les slides
 * 
 * @param initialIndex - Index de départ (optionnel, par défaut 0)
 * @param enableKeyboardNavigation - Activer la navigation au clavier (optionnel, par défaut false)
 * @returns État de navigation et actions
 */
export function useSlides(
  initialIndex: number = 0,
  enableKeyboardNavigation: boolean = false
): SlideNavigationState & SlideNavigationActions & {
  currentSlide: SlideMetadata | undefined;
  slides: SlideMetadata[];
} {
  // État local
  const [currentIndex, setCurrentIndex] = useState(() => {
    // Validation de l'index initial
    const totalSlides = slideUtils.getTotalSlides();
    if (initialIndex < 0 || initialIndex >= totalSlides) {
      return 0;
    }
    return initialIndex;
  });

  // Calcul des valeurs dérivées
  const totalSlides = slideUtils.getTotalSlides();
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSlides - 1;
  const currentSlide = slideUtils.getSlideByIndex(currentIndex);

  // Actions de navigation
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }, [totalSlides]);

  // Navigation au clavier
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ': // Espace
          event.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        default:
          // Vérifier si c'est un chiffre pour aller à une slide spécifique
          const slideNumber = parseInt(event.key);
          if (!isNaN(slideNumber) && slideNumber >= 1 && slideNumber <= totalSlides) {
            event.preventDefault();
            goToSlide(slideNumber - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, goToNext, goToPrevious, goToSlide, totalSlides]);

  return {
    // État de navigation
    currentIndex,
    totalSlides,
    isFirst,
    isLast,
    
    // Actions
    goToNext,
    goToPrevious,
    goToSlide,
    
    // Données supplémentaires
    currentSlide,
    slides: slideRegistry,
  };
}