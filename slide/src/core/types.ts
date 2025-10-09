import React from 'react';

/**
 * Métadonnées d'une slide individuelle
 */
export interface SlideMetadata {
  /** Identifiant unique de la slide */
  id: string;
  /** Titre de la slide pour l'affichage ou la navigation */
  title: string;
  /** Composant React à rendre pour cette slide */
  component: React.FC;
}

/**
 * État de navigation du système de slides
 */
export interface SlideNavigationState {
  /** Index de la slide actuelle (0-based) */
  currentIndex: number;
  /** Nombre total de slides */
  totalSlides: number;
  /** Indique si on est sur la première slide */
  isFirst: boolean;
  /** Indique si on est sur la dernière slide */
  isLast: boolean;
}

/**
 * Actions de navigation disponibles
 */
export interface SlideNavigationActions {
  /** Aller à la slide suivante */
  goToNext: () => void;
  /** Aller à la slide précédente */
  goToPrevious: () => void;
  /** Aller à une slide spécifique par index */
  goToSlide: (index: number) => void;
}