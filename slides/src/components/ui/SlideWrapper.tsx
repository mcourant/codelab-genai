import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  isFullscreen?: boolean;
}

/**
 * Conteneur de base pour toutes les slides.
 * Fournit un layout cohérent et responsive pour chaque slide.
 */
export function SlideWrapper({ children, className, isFullscreen = false }: SlideWrapperProps) {
  return (
    <div 
      className={cn(
        "w-full h-screen flex items-center justify-center",
        "bg-background text-foreground",
        // Adapter le padding selon le mode et la présence du header
        isFullscreen 
          ? "p-8 md:p-12 lg:p-16" // Padding normal en mode plein écran (header auto-masqué)
          : "p-8 md:p-12 lg:p-16 pt-20", // Padding top supplémentaire pour le header en mode normal
        className
      )}
    >
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}

export default SlideWrapper;