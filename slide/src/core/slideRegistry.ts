import { SlideMetadata } from './types';

// Import des composants de slides
import { 
  PersonalIntroSlide,
  TitleSlide,
  CoachesSlide,
  CursorAdvantagesSlide,
  MCPToolsSlide,
  LearningPathSlide,
  RequirementsSlide,
  CallToActionSlide,
  WiFiSlide
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
    id: 'personal-intro',
    title: 'Maxime Courant - Introduction',
    component: PersonalIntroSlide,
  },
  {
    id: 'title',
    title: 'Ensorcelle ton IDE',
    component: TitleSlide,
  },
  {
    id: 'coaches',
    title: 'Les 3 Coachs',
    component: CoachesSlide,
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
    id: 'learning-path',
    title: 'Parcours d\'Apprentissage',
    component: LearningPathSlide,
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
    id: 'wifi',
    title: 'Informations WiFi',
    component: WiFiSlide,
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