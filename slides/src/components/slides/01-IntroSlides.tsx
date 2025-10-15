import { Badge } from "@/components/ui/badge";

export function IntroSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Bienvenue
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Système de présentation moderne construit avec React, TypeScript et Tailwind CSS
        </p>
      </div>
      
      <div className="flex gap-2">
        <Badge variant="outline">React 19</Badge>
        <Badge variant="outline">TypeScript</Badge>
        <Badge variant="outline">Tailwind CSS</Badge>
        <Badge variant="outline">shadcn/ui</Badge>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        Utilisez les flèches de navigation pour commencer
      </div>
    </div>
  );
}