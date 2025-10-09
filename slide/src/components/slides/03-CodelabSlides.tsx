import { Badge } from "@/components/ui/badge";
import maximeImage from "@/assets/maxime.jpg";
import samuelImage from "@/assets/samuel.jpeg";
import pierreImage from "@/assets/pierre.jpeg";
import dorianImage from "@/assets/dorian.jpeg";
import qrCodeImage from "@/assets/image.png";

// Slide d'introduction personnelle
export function PersonalIntroSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
      <div className="flex items-center space-x-12">
        {/* Photo placeholder - à remplacer par la vraie photo */}
        <div className="w-48 h-48 rounded-full bg-secondary flex items-center justify-center shadow-lg overflow-hidden">
          <img src={maximeImage} alt="Maxime Courant" className="w-full h-full object-cover" />
        </div>
        
        <div className="text-left space-y-4">
          <h1 className="text-5xl font-bold text-accent">
            Maxime Courant
          </h1>
          <p className="text-2xl text-primary">
            Consultant & Dev en GenAI
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-lg px-4 py-2">Cursor Expert</Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">LLM Local</Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">Full-Stack</Badge>
          </div>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-xl text-muted-foreground">
          🪄 Prêt à transformer votre IDE en baguette magique ?
        </p>
        <p className="text-lg text-muted-foreground">
          Bienvenue dans l'aventure "Ensorcelle ton IDE"
        </p>
      </div>
    </div>
  );
}

// Slide titre principal accrocheur
export function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12 px-8 text-center">
      <div className="space-y-8">
        <div className="text-7xl mb-4">🤖⚔️✨</div>
        
        <h1 className="text-7xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent leading-tight">
          Ensorcelle ton IDE
        </h1>
        
        <div className="text-4xl font-semibold text-primary">
          de 0 à démo
        </div>
        
        <div className="bg-card/50 rounded-lg p-6 border border-primary/20 max-w-4xl">
          <p className="text-xl text-muted-foreground italic">
            Au royaume des IDE, ce codelab t'apprend à convertir Cursor ou Windsurf 
            en écuyers‑IA pour bâtir une appli fullstack avec{" "}
            <span className="text-accent font-bold">trois incantations</span> et{" "}
            <span className="text-accent font-bold">un café</span>.
          </p>
        </div>
      </div>
      
      <div className="text-lg text-muted-foreground">
        DevFest Nantes 2024 • Codelab Interactif
      </div>
    </div>
  );
}

// Slide présentation de l'équipe
export function CoachesSlide() {
  const coaches = [
    {
      name: "Samuel Berthe", 
      emoji: "⚔️",
      photo: samuelImage, // Placeholder
      color: "text-primary"
    },
    {
      name: "Pierre Rondeau", 
      emoji: "✨",
      photo: pierreImage, // Placeholder
      color: "text-primary"
    },
    {
      name: "Dorian OUVRARD",
      emoji: "🚀",
      photo: dorianImage, // Placeholder
      color: "text-accent"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12 px-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-accent">
          L'équipe
        </h1>
        <p className="text-2xl text-muted-foreground">
          Vos coachs pour ce codelab
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-12 w-full max-w-5xl">
        {coaches.map((coach, index) => (
          <div key={index} className="text-center space-y-6 bg-card/30 rounded-lg p-8 border border-primary/10">
            {/* Photo ou emoji */}
            <div className="flex justify-center">
              {coach.photo ? (
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={coach.photo} alt={coach.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center shadow-lg border-2 border-primary/20">
                  <span className="text-4xl">{coach.emoji}</span>
                </div>
              )}
            </div>
            
            {/* Nom et rôle */}
            <div className="space-y-2">
              <h3 className={`text-xl font-bold ${coach.color}`}>
                {coach.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Slide Chain of Thought & avantages Cursor
export function CursorAdvantagesSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-10 px-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-accent">
          Chain of Thought avec Cursor
        </h1>
        <p className="text-2xl text-muted-foreground">
          L'approche méthodologique qui change tout
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">🎯 Pourquoi Cursor ?</h2>
          <ul className="space-y-4 text-xl">
            <li className="flex items-start space-x-3">
              <span className="text-accent">⚡</span>
              <span>IA native intégrée</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent">🔗</span>
              <span>MCP Protocol support</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent">🎨</span>
              <span>Interface familière (VS Code)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent">🚀</span>
              <span>Cursor Rules personnalisables</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">🧠 Chain of Thought</h2>
          <div className="bg-card/40 rounded-lg p-6 border border-primary/20">
            <ol className="space-y-3 text-lg">
              <li className="flex items-center space-x-3">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                <span>Définir le contexte maximal</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                <span>Prompt minimal, résultat maximal</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                <span>Itération rapide & commit fréquent</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-primary/10 rounded-lg p-4 border border-primary/30">
        <p className="text-2xl font-bold text-accent">
          🏆 Objectif : Minimum de prompts = Maximum d'efficacité
        </p>
      </div>
    </div>
  );
}

// Slide outils MCP
export function MCPToolsSlide() {
  const tools = [
    {
      name: "Figma MCP",
      icon: "🎨",
      description: "Du design au code",
      features: ["Import maquettes", "Génération composants", "Responsive auto"]
    },
    {
      name: "Deepwiki MCP", 
      icon: "📚",
      description: "Documentation intelligente",
      features: ["Recherche docs", "Exemples de code", "Best practices"]
    },
    {
      name: "Playwright MCP",
      icon: "🎭", 
      description: "Tests E2E automatiques",
      features: ["Tests UI", "Debug visuel", "Validation parcours"]
    },
    {
      name: "GitHub MCP",
      icon: "🐙",
      description: "Intégration continue", 
      features: ["Auto commits", "Pull requests", "Code review"]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-10 px-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-accent">
          Les Outils Magiques
        </h1>
        <p className="text-2xl text-muted-foreground">
          Model Context Protocol (MCP) - Le pont-levis de votre IDE
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
        {tools.map((tool, index) => (
          <div key={index} className="bg-card/40 rounded-lg p-6 border border-primary/20 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{tool.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-primary">{tool.name}</h3>
                <p className="text-lg text-accent">{tool.description}</p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {tool.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-accent">✨</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="text-center bg-secondary/20 rounded-lg p-4 border border-secondary/30">
        <p className="text-xl text-secondary-foreground">
          🔗 <strong>MCP</strong> relie votre IDE à l'écosystème externe
        </p>
      </div>
    </div>
  );
}

// Slide parcours d'apprentissage
export function LearningPathSlide() {
  const steps = [
    {
      phase: "Frontend",
      icon: "🎨",
      task: "Figma → React/Mobile",
      details: ["Import design", "Composants générés", "Responsive mobile"]
    },
    {
      phase: "Backend", 
      icon: "⚙️",
      task: "CRUD avec PostgreSQL",
      details: ["Découverte BDD", "API générée", "Tests automatiques"]
    },
    {
      phase: "Interconnexion",
      icon: "🔗", 
      task: "Front ↔ Back",
      details: ["Service layer", "State management", "Error handling"]
    },
    {
      phase: "Concours",
      icon: "🏆",
      task: "Vibe-coding challenge",
      details: ["Moins de prompts", "Plus de features", "Code propre"]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-10 px-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-accent">
          Le Parcours d'Apprentissage
        </h1>
        <p className="text-2xl text-muted-foreground">
          4 étapes pour devenir un maître de l'IA-coding
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-6 w-full max-w-7xl">
        {steps.map((step, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="bg-card/40 rounded-lg p-6 border border-primary/20 space-y-4">
              <div className="text-5xl">{step.icon}</div>
              <h3 className="text-2xl font-bold text-primary">{step.phase}</h3>
              <p className="text-lg text-accent font-semibold">{step.task}</p>
              
              <ul className="space-y-2 text-sm">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex justify-center">
                <div className="text-3xl text-primary">→</div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center bg-accent/10 rounded-lg p-6 border border-accent/30 max-w-4xl">
        <h3 className="text-2xl font-bold text-accent mb-2">🎯 Challenge Final</h3>
        <p className="text-xl text-muted-foreground">
          Qui créera l'application la plus complète avec le moins de prompts ?
        </p>
      </div>
    </div>
  );
}

// Slide prérequis techniques
export function RequirementsSlide() {
  const requirements = [
    { name: "Cursor IDE", description: "Licence gratuite suffisante", icon: "💻", status: "Essentiel" },
    { name: "ChatGPT Account", description: "Pour les prompts de spec", icon: "🤖", status: "Essentiel" },
    { name: "Figma Access", description: "Import des maquettes", icon: "🎨", status: "Essentiel" },
    { name: "npx", description: "Node.js package runner", icon: "📦", status: "Technique" },
    { name: "uvx", description: "Python package runner", icon: "🐍", status: "Technique" },
    { name: "Root Access", description: "Droits admin sur sa machine", icon: "🔐", status: "Système" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-10 px-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-accent">
          Prérequis Techniques
        </h1>
        <p className="text-2xl text-muted-foreground">
          Ce dont vous avez besoin pour franchir la porte du royaume
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {requirements.map((req, index) => (
          <div key={index} className="bg-card/40 rounded-lg p-6 border border-primary/20 space-y-4">
            <div className="text-center">
              <div className="text-4xl mb-2">{req.icon}</div>
              <h3 className="text-xl font-bold text-primary">{req.name}</h3>
              <Badge 
                variant={req.status === "Essentiel" ? "default" : "outline"}
                className="mt-2"
              >
                {req.status}
              </Badge>
            </div>
            
            <p className="text-muted-foreground text-center text-sm">
              {req.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-primary/10 rounded-lg p-6 border border-primary/30">
          <h3 className="text-xl font-bold text-primary mb-3">✅ Avant l'atelier</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Installer Cursor IDE</li>
            <li>• Créer compte ChatGPT</li>
            <li>• Vérifier accès Figma</li>
          </ul>
        </div>
        
        <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
          <h3 className="text-xl font-bold text-accent mb-3">⚡ Pendant l'atelier</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Configuration des MCP</li>
            <li>• Setup des Cursor Rules</li>
            <li>• Installation packages au besoin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Slide de lancement du challenge
export function CallToActionSlide() {
  const githubUrl = "https://github.com/mcourant/codelab-genai";
  
  return (
    <div className="flex flex-col h-full px-12 py-8">
      {/* Titre compact en haut */}
      <div className="text-center mb-8">
        <div className="text-4xl mb-2">🚀⚡🔥</div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-accent via-primary to-secondary-foreground bg-clip-text text-transparent">
          C'est parti !
        </h1>
        <div className="text-2xl font-semibold text-primary mt-2">
          Challenge 2 heures • Front + Back
        </div>
      </div>
      
      {/* SECTION GITHUB/QR CODE DOMINANTE */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-accent/15 rounded-2xl p-12 border-4 border-accent/40 w-full max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-accent mb-2">📦 Ressources du Codelab</h2>
            <p className="text-xl text-muted-foreground">Scannez le QR Code ou copiez le lien ci-dessous</p>
          </div>
          
          <div className="grid grid-cols-5 gap-8 items-center">
            {/* QR Code ÉNORME */}
            <div className="col-span-2 flex justify-center">
              <div className="w-72 h-72 bg-white rounded-2xl flex items-center justify-center border-4 border-primary/60 shadow-2xl p-2">
                <img 
                  src={qrCodeImage} 
                  alt="QR Code GitHub Repository" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Lien GitHub ÉNORME */}
            <div className="col-span-3 space-y-6">
              <div className="text-2xl font-bold text-primary">
                Repository GitHub :
              </div>
              <div className="bg-card/80 rounded-xl p-6 border-2 border-primary/30">
                <p className="text-accent font-mono text-lg font-bold break-words leading-relaxed">
                  {githubUrl}
                </p>
              </div>
              <div className="text-lg text-muted-foreground">
                👆 Copiez ce lien dans votre navigateur
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message final compact */}
      <div className="text-center mt-8">
        <div className="text-3xl font-bold text-accent">
          À vos claviers, prêts... Codez ! 💻⚔️
        </div>
      </div>
    </div>
  );
}

// Slide WiFi pour les participants
export function WiFiSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12 px-8">
      <div className="text-center space-y-6">
        <div className="text-8xl mb-4">📶</div>
        
        <h1 className="text-6xl font-bold text-accent">
          Informations WiFi
        </h1>
        
        <p className="text-2xl text-muted-foreground">
          Restez connectés pendant le codelab
        </p>
      </div>
      
      <div className="bg-card/50 rounded-2xl p-12 border-4 border-primary/30 w-full max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary">
              WIFI:
            </h2>
          </div>
          
          <div className="bg-accent/10 rounded-lg p-8 border border-accent/30">
            <div className="space-y-4">
              <div className="text-2xl font-semibold text-accent">
                📱 Pour obtenir le code WiFi :
              </div>
              
              <div className="bg-card/80 rounded-xl p-6 border-2 border-primary/30">
                <p className="text-3xl font-bold text-primary font-mono">
                  Envoyer "GETWIFI"
                </p>
                <p className="text-2xl text-muted-foreground mt-2">
                  au numéro :
                </p>
                <p className="text-3xl font-bold text-accent font-mono">
                  06.44.63.42.42
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-xl text-muted-foreground">
          📲 Envoyez simplement un SMS avec le message "GETWIFI"
        </p>
        <p className="text-lg text-muted-foreground">
          Vous recevrez les informations de connexion par retour
        </p>
      </div>
    </div>
  );
}