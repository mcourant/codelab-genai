import { SlideMetadata } from './types';

// Import des composants de slides
import {
  TitleSlide,
  NantesGenAIMeetupSlide,
  CoachesSlide,
  CursorAdvantagesSlide,
  MCPToolsSlide,
  LearningPathSlide,
  RequirementsSlide,
  CallToActionSlide,
  ShiftHackathonSlide,
} from '@/components/slides/03-CodelabSlides';

/**
 * Registre central de toutes les slides de la présentation.
 * 
 * Pour ajouter une nouvelle slide :
 * 1. Créer le composant dans /components/slides/
 * 2. L'importer ici
 * 3. L'ajouter au tableau slideRegistry
 */
export const slideRegistry: SlideMetadata[] = [
  {
    id: 'title',
    title: 'Ensorcelle ton IDE',
    component: TitleSlide,
  },
  {
    id: 'coaches',
    title: 'Les 2 Coachs',
    component: CoachesSlide,
  },
  {
    id: 'nantes-genai-meetup',
    title: 'Meetup GenAI Nantes',
    component: NantesGenAIMeetupSlide,
  },
  {
    id: 'learning-path',
    title: 'Parcours d\'Apprentissage',
    component: LearningPathSlide,
  },
  {
    id: 'cursor-advantages',
    title: 'Chain of Thought avec Cursor',
    component: CursorAdvantagesSlide,
  },
  {
    id: 'mcp-tools',
    title: 'Les Outils MCP',
    component: MCPToolsSlide,
  },
  {
    id: 'requirements',
    title: 'Prérequis Techniques',
    component: RequirementsSlide,
  },
  {
    id: 'call-to-action',
    title: 'Challenge Time !',
    component: CallToActionSlide,
  },
  {
    id: 'shift-hackathon',
    title: 'Shift Hackathon',
    component: ShiftHackathonSlide,
  },
];

/**
 * Utilitaires pour interagir avec le registre
 */
export const slideUtils = {
  /**
   * Obtenir le nombre total de slides
   */
  getTotalSlides: () => slideRegistry.length,
  
  /**
   * Obtenir une slide par son index
   */
  getSlideByIndex: (index: number): SlideMetadata | undefined => {
    if (index < 0 || index >= slideRegistry.length) {
      return undefined;
    }
    return slideRegistry[index];
  },
  
  /**
   * Obtenir une slide par son ID
   */
  getSlideById: (id: string): SlideMetadata | undefined => {
    return slideRegistry.find(slide => slide.id === id);
  },
  
  /**
   * Obtenir l'index d'une slide par son ID
   */
  getSlideIndexById: (id: string): number => {
    return slideRegistry.findIndex(slide => slide.id === id);
  },
};