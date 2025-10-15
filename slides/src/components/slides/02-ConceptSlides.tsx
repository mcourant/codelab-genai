import { Badge } from "@/components/ui/badge";

export function ConceptSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground">
          Architecture du Système
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Un système de slides modulaire et extensible basé sur un registre centralisé
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="text-center space-y-3 p-6 border rounded-lg">
          <Badge className="mb-2">Core</Badge>
          <h3 className="font-semibold">Registre</h3>
          <p className="text-sm text-muted-foreground">
            Système centralisé de gestion des slides avec métadonnées
          </p>
        </div>
        
        <div className="text-center space-y-3 p-6 border rounded-lg">
          <Badge className="mb-2" variant="secondary">Navigation</Badge>
          <h3 className="font-semibold">Hook useSlides</h3>
          <p className="text-sm text-muted-foreground">
            Logique de navigation réutilisable avec état partagé
          </p>
        </div>
        
        <div className="text-center space-y-3 p-6 border rounded-lg">
          <Badge className="mb-2" variant="outline">UI</Badge>
          <h3 className="font-semibold">Composants</h3>
          <p className="text-sm text-muted-foreground">
            Interface modulaire avec shadcn/ui et Tailwind CSS
          </p>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground max-w-2xl">
        Chaque slide est un composant React autonome, facilement extensible et maintenable
      </div>
    </div>
  );
}