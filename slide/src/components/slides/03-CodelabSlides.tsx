import { Badge } from "@/components/ui/badge";
import maximeImage from "@/assets/maxime.jpg";
import samuelImage from "@/assets/samuel.jpeg";
import qrCodeImage from "@/assets/image.png";
import shiftHackathonImage from "@/assets/shift-hackathon.png";

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
    <div className="relative flex flex-col items-center justify-center h-full space-y-12 px-8 text-center">
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
            Au royaume des IDE, ce codelab t'apprend à convertir Cursor
            en écuyers‑IA pour bâtir une appli fullstack avec{" "}
            <span className="text-accent font-bold">trois incantations</span> et{" "}
            <span className="text-accent font-bold">un café</span>.
          </p>
        </div>
      </div>

      <div className="text-lg text-muted-foreground space-y-2">
        <div>DevFest Nantes 2025 • Codelab Interactif</div>
        <div className="text-2xl font-bold text-accent">
          📶 WiFi: XYZ
        </div>
      </div>

      {/* Photos coaches en bas à droite de la page */}
      <div className="fixed bottom-8 right-8 flex items-center space-x-4">
        <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center shadow-xl overflow-hidden">
          <img src={samuelImage} alt="Samuel Berthe" className="w-full h-full object-cover" />
        </div>
        <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center shadow-xl overflow-hidden">
          <img src={maximeImage} alt="Maxime Courant" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

// Slide présentation du Nantes GenAI Meetup
export function NantesGenAIMeetupSlide() {
  const stats = [
    {
      number: "15",
      label: "Events par an",
      icon: "📅",
      color: "text-accent"
    },
    {
      number: "1",
      label: "Hackathon Shift",
      icon: "🏆",
      color: "text-primary"
    },
    {
      number: "12",
      label: "Workshops",
      icon: "🛠️",
      color: "text-secondary"
    },
    {
      number: "900 personnes*",
      label: "Communauté",
      icon: "🦙",
      color: "text-primary"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12 px-8">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Nantes GenAI Meetup
        </h1>
        <p className="text-2xl text-muted-foreground">
          La communauté nantaise passionnée par l'Intelligence Artificielle Générative
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card/40 rounded-lg p-8 border border-primary/20 text-center space-y-4">
            <div className="text-5xl">{stat.icon}</div>
            <div className={`text-4xl font-bold ${stat.color}`}>
              {stat.number}
            </div>
            <div className="text-xl text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <div className="bg-accent/10 rounded-lg p-6 border border-accent/30 max-w-4xl">
          <p className="text-xl text-muted-foreground italic">
            *9000 selon le syndicat des llamas 🦙
          </p>
        </div>

        <div className="text-lg text-primary">
          Rejoignez-nous pour explorer ensemble les dernières avancées en GenAI !
        </div>
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
      color: "text-primary",
      subtitle: "Full-time Open-sourcer"
    },
    {
      name: "Maxime Courant",
      emoji: "🚀",
      photo: maximeImage, // Placeholder
      color: "text-accent",
      subtitle: "Freelance & Coach IA"
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
      
      <div className="grid grid-cols-2 gap-12 w-full max-w-5xl">
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
            <div className="space-y-3">
              <h3 className={`text-3xl font-bold ${coach.color}`}>
                {coach.name}
              </h3>
              <p className="text-muted-foreground text-xl font-medium">
                {coach.subtitle}
              </p>
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
      name: "Context7 MCP", 
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
      name: "Taskmaster MCP",
      icon: "🐙",
      description: "Le Product Manager IA", 
      features: ["Specifications fonctionnelles", "Technologies utilisées", "Workflow IA"]
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
      phase: "Plannification",
      icon: "🕰️",
      task: "Taskmaster",
      details: ["Specifications fonctionnelles", "Technologies utilisées", "Workflow IA"]
    },
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
          Challenge 2 heures • Spec + Front + Back
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
      <div className="text-center mt-8 space-y-4">
        <div className="text-3xl font-bold text-accent">
          À vos claviers, prêts... Codez ! 💻⚔️
        </div>
        <div className="text-2xl font-bold text-primary">
          📶 WiFi: XYZ
        </div>
      </div>
    </div>
  );
}

// Slide dédiée au Shift Hackathon
export function ShiftHackathonSlide() {
  const shiftHackathonUrl = "https://shift-hackathon.com";
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://shift-hackathon.com&format=png&color=000000&bgcolor=transparent";

  return (
    <div className="flex flex-col h-full px-8 py-6">
      {/* Titre */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Shift Hackathon
        </h1>
        <p className="text-2xl text-muted-foreground mt-2">
          Le hackathon GenAI de Nantes
        </p>
      </div>

      {/* Contenu principal - layout horizontal */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* GAUCHE - Logo et description */}
            <div className="space-y-8">
              <div className="flex justify-center">
                <img
                  src={shiftHackathonImage}
                  alt="Shift Hackathon Logo"
                  className="w-80 h-80 object-contain"
                />
              </div>

              <div className="bg-accent/15 rounded-2xl p-8 border-2 border-accent/30">
                <h2 className="text-4xl font-bold text-accent mb-4">48h de création intensive</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Rejoignez-nous pour le plus grand hackathon d'IA générative de Nantes
                </p>

                <div className="text-center mb-6">
                  <div className="bg-primary/20 rounded-lg p-4 border-2 border-primary/40">
                    <p className="text-2xl font-bold text-primary">
                      📅 27-29 Mars 2026
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-lg text-primary">
                  <p>Thème 2026: hack tes outils du quotidien</p>
                </div>
              </div>
            </div>

            {/* DROITE - QR Code et informations */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-4">Rejoignez la waiting list !</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Les inscriptions ne sont pas encore ouvertes, mais vous pouvez déjà réserver votre place
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src={qrCodeUrl}
                  alt="QR Code Shift Hackathon"
                  className="w-48 h-48 object-contain"
                />
              </div>

              <div className="bg-card/80 rounded-xl p-6 border-2 border-primary/30 text-center">
                <p className="text-primary font-mono text-lg font-bold mb-2">
                  {shiftHackathonUrl}
                </p>
                <p className="text-muted-foreground">
                  Scannez pour rejoindre la waiting list
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
