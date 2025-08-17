# 🚀 FocusFlow - Setup et Configuration

> **Guide 1/3** : Configuration initiale du projet FocusFlow avec Cursor AI et les outils MCP

## 📋 Table des matières

- [🎯 Introduction](#-introduction)
- [📋 Prérequis](#-prérequis)
- [🛠️ 1. Initialisation du projet](#️-1-initialisation-du-projet)
- [⚙️ 2. Configuration de Cursor AI et MCP](#️-2-configuration-de-cursor-ai-et-mcp)
- [📄 3. Création des règles de projet](#-3-création-des-règles-de-projet)
- [➡️ Suite du tutoriel](#️-suite-du-tutoriel)

## 🎯 Introduction

**FocusFlow** est une application de gestion de tâches inspirée de la méthode GTD (Getting Things Done), développée avec un stack moderne et l'assistance de l'IA. Ce premier guide vous accompagne dans la configuration complète de votre environnement de développement.

### 🏗️ Architecture du projet

- **Frontend** : React 18 + TypeScript + Vite + Tailwind CSS
- **État global** : Zustand avec persistance localStorage
- **Navigation** : React Router DOM
- **Tests** : Playwright pour les tests E2E
- **IA** : Cursor AI avec intégrations MCP (Figma, Deepwiki, Playwright)
- **Backend** : Express.js (optionnel, guide 3)

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v16+ recommandé), npm et **npx**
- **Cursor AI** ([télécharger ici](https://cursor.sh/))
- **Compte Figma** (pour l'import de designs)

## 🛠️ 1. Initialisation du projet

### 1.1 Cloner le boilerplate

Nous partons d'un boilerplate pré-configuré pour éviter les étapes fastidieuses de configuration :

```bash
git clone https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate focusflow
cd focusflow
npm install
```

### 1.2 Vérifier l'installation

```bash
npm run dev
```

✅ L'application doit être accessible sur `http://localhost:5173`

### 1.3 Ajouter les dépendances FocusFlow

```bash
npm install zustand react-router-dom
npm install -D @types/react-router-dom
```

**Dépendances ajoutées :**
- `zustand` : Gestion d'état global avec persistance
- `react-router-dom` : Navigation entre les pages

> 💡 **Pourquoi un boilerplate ?** Configurer React + TypeScript + Vite + Tailwind manuellement nécessite de nombreux fichiers de configuration. Le boilerplate nous permet de nous concentrer sur le développement de FocusFlow.

## ⚙️ 2. Configuration de Cursor AI et MCP

Les **MCP (Model Context Protocol)** étendent les capacités de Cursor AI en connectant des sources externes :

- **🎨 Figma MCP** : Import de designs et génération de code UI
- **📚 Deepwiki MCP** : Accès aux documentations GitHub
- **🧪 Playwright MCP** : Tests E2E automatisés

Vous trouverez une liste de serveurs MCP et leurs instructions d'installation respectives ici: [mcp.so](https://mcp.so).

### 2.1 Configuration complète des MCP

Créez ou éditez le fichier `~/.cursor/mcp.json` (accessible également depuis les paramètres de Cursor). :

<details>
<summary>📋 Cliquez pour voir la configuration complète</summary>

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "figma-developer-mcp",
        "--figma-api-key=VOTRE_TOKEN_FIGMA",
        "--stdio"
      ]
    },
    "deepwiki": {
      "command": "npx",
      "args": ["-y", "mcp-deepwiki@latest"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

</details>

> ⚠️ **Important** : Après avoir ajouté les serveurs MCP, redémarrez Cursor et vérifiez que le mode **Agent** est activé dans le chat.

### 2.2 Configuration du MCP Figma

#### Étape 1 : Obtenir un token API Figma

1. Connectez-vous à [Figma](https://figma.com)
2. Allez dans **Settings** → **Security** → **Personal Access Tokens**
3. Générez un nouveau token avec les permissions API ci-dessous:
4. ⚠️ **Conservez ce token précieusement** (il ne sera affiché qu'une seule fois)

<img width="350" alt="image" src="https://github.com/user-attachments/assets/5407a6a1-f6ed-4d35-b346-4b2c157fb012" />

#### Étape 2 : Configurer le token dans Cursor

Remplacez `VOTRE_TOKEN_FIGMA` dans la configuration MCP par votre token.

#### Étape 3 : Test de la configuration

Une fois configuré, vous pourrez utiliser la commande `::figma` dans le chat Cursor :

```
::figma https://www.figma.com/design/IhVR4yEdIoYXqZWPnjM11R/Untitled
```

### 2.3 Configuration du MCP Deepwiki

Le MCP Deepwiki est un service public qui ne nécessite aucune configuration supplémentaire.

**Utilisation :**
```
::deepwiki facebook/react ask_question "How to use useEffect hook?"
```

### 2.4 Configuration du MCP Playwright

Le MCP Playwright permet d'automatiser les tests E2E directement depuis Cursor.

> 📝 **Note** : La première utilisation peut prendre du temps (téléchargement des navigateurs).

### 2.5 Test de la configuration

Dans les paramètres de Cursor, vérifiez que les serveurs MCP et notamment le serveur Playwright apparaîssent en "vert".

## 📄 3. Création des Cursor rules

Les Cursor rules guident l'IA dans la génération de code conforme aux spécifications: code style, architecture, etc...

### 3.1 Créer .cursor/rules/feature-planning.mdc

Cette première Cursor rule va nous permettre décrire le projet, afin d'orienter l'agent de Cursor. 

Décrivez quelques specifications fonctionnelles pour votre application de gestion de tâches.

Listez également les principales techno utilisés (React + TypeScript + Tailwind CSS + Zustand + Playright + Express.js).

ChatGPT peut vous aider, ou déroulez le contenu caché ci-dessous:

<details>
<summary>📋 Contenu du fichier .cursor/rules/feature-planning.mdc</summary>

```markdown
---
description: Features and technical specifications
globs: 
alwaysApply: true
---

# FocusFlow – Feature Planning (Spécifications)

FocusFlow est une application de gestion de tâches basée sur la méthode GTD (Getting Things Done).

## Catégories de tâches (GTD)
- **Inbox** : tâches brutes à trier
- **Next Actions** : tâches à réaliser prochainement
- **Projects** : tâches faisant partie de projets à plusieurs étapes
- **Waiting For** : tâches déléguées, en attente d'une action externe
- **Someday/Maybe** : idées ou tâches possibles, un jour
- **Calendar** : tâches liées à des dates précises

*(Pour ce tutoriel, nous simplifierons avec une liste générale)*

## Fonctionnalités Clés
- Ajouter une nouvelle tâche (champ + bouton "Ajouter")
- Lister toutes les tâches
- Marquer une tâche comme terminée (checkbox)
- Modifier le titre d'une tâche
- **UI/UX** : interface minimaliste, responsive (mobile-first)
- **Persistance** : Zustand + localStorage

## Stack Technique
- **Frontend** : React + TypeScript + Tailwind CSS + Zustand
- **Tests** : Playwright MCP via Cursor
- **Backend** : Express.js (optionnel)
```

</details>

### 3.2 Créer .cursor/rules/workflow-ai.mdc

Dans une nouvelle Cursor rule, décrivez ensuite les étapes de construction d'une feature. Rappelez-vous du principe de "chain of thought": incitez Cursor à réaliser vos tâches step by step.

<details>
<summary>📋 Contenu du fichier .cursor/rules/workflow-ai.mdc</summary>

```markdown
---
description: Workflow Chain of Thought pour FocusFlow
globs: 
alwaysApply: true
---

# Prompt Agent : Planification et Implémentation

Tu es un agent spécialisé dans le développement au sein d'une base de code existante. Suis ce processus strict :

## 1. Analyse de la Demande
- Comprends précisément la fonctionnalité demandée
- Reformule la demande pour confirmer la compréhension
- Liste les objectifs finaux spécifiques

## 2. Analyse de la Base de Code
- Inspecte la base de code existante
- Identifie les composants impactés
- Documente les dépendances et contraintes

## 3. Vérification via MCP DeepWiki
- Consulte les documentations nécessaires
- Documente les informations pertinentes
- Évalue l'impact sur le développement

## 4. Plan d'Implémentation
- Décompose en tâches séquentielles
- Tâches concises et actionnables
- Identifie les vérifications intermédiaires

## 5. Exécution
- Complète chaque tâche séquentiellement
- Vérifie le code produit et exécute les tests immédiatement après chaque étape
- Documente les modifications

## 6. Vérification Finale
- Révision complète des changements
- Correspondance avec la demande initiale
- Rapport de synthèse détaillé
```

</details>

> ✅ **Vérification**: Les fichiers doivent apparaître dans la section "Rules" des paramètres de Cursor.

Vous remarquerez que Cursor vous permet d'appliquer ces rules uniquement dans certains dossier, ou pour certains types de fichiers.

## 🤖 Ce que les agents apportent au workflow de code

### 3.3 Révolution du processus de développement

Les agents IA transforment fondamentalement la façon dont nous développons des applications. Voici comment ils enrichissent votre workflow :

#### 🔄 **Workflow traditionnel vs. Workflow assisté par IA**

**Avant (Workflow traditionnel) :**
```
Idée → Recherche manuelle → Écriture du code → Tests manuels → Debug → Documentation
```

**Avec les agents IA (Workflow moderne) :**
```
Idée → Agent analyse → Code généré + Tests automatiques → Validation IA → Documentation auto
```

#### 🚀 **Avantages clés des agents dans le développement**

**1. 📈 Accélération du développement**
- **Génération de code** : Création automatique de composants, API et tests
- **Refactoring intelligent** : Amélioration du code existant en respectant les patterns
- **Résolution de bugs** : Identification et correction automatique des erreurs

**2. 🧠 Assistance cognitive**
- **Chain of Thought** : Décomposition des tâches complexes en étapes simples
- **Contextualisation** : Compréhension de votre base de code existante
- **Recommandations** : Suggestions d'architectures et bonnes pratiques

**3. 🔗 Intégration d'outils (MCP)**
- **Figma → Code** : Transformation automatique des designs en composants React
- **Documentation** : Accès en temps réel aux docs techniques via DeepWiki
- **Tests E2E** : Création et exécution automatique de tests Playwright

**4. 🎯 Qualité et cohérence**
- **Standards respectés** : Code conforme aux conventions du projet
- **Tests intégrés** : Validation automatique à chaque modification
- **Gestion d'erreurs** : Implémentation robuste des cas d'erreur

#### 💡 **Cas d'usage concrets dans FocusFlow**

| Tâche traditionnelle | Avec les agents IA | Gain de temps |
|---------------------|-------------------|---------------|
| Créer un composant React | `::figma [URL] → Génération automatique` | **80%** |
| Écrire des tests E2E | `Tests Playwright en langage naturel` | **70%** |
| Consulter la doc React | `::deepwiki facebook/react` | **90%** |
| Débugger une API | `Analyse + correction automatique` | **60%** |

#### 🎨 **Exemple de workflow avec agents**

**Scénario :** Ajouter une fonctionnalité de filtre de tâches

```markdown
1. **Analyse par l'agent** : Comprend la demande et examine le code existant
2. **Design import** : ::figma pour récupérer le design du filtre
3. **Génération** : Création automatique du composant TaskFilter
4. **Intégration** : Modification du store Zustand et des composants existants
5. **Tests** : Génération automatique des tests Playwright
6. **Documentation** : Mise à jour automatique des commentaires et README
```

**Résultat :** 30 minutes au lieu de 3 heures !

#### ⚡ **Productivité amplifiée**

Les agents ne remplacent pas le développeur, ils **amplifient** ses capacités :

- **Plus de créativité** : Focus sur l'architecture et l'UX au lieu du code répétitif
- **Moins d'erreurs** : Validation automatique et tests intégrés
- **Apprentissage continu** : Découverte de nouvelles techniques et patterns
- **Itération rapide** : Prototypage et validation ultra-rapides

> 💡 **Conseil :** Les agents sont vos assistants, pas vos remplaçants. Gardez le contrôle sur l'architecture et les décisions importantes !

## ➡️ Suite du tutoriel

Votre environnement est maintenant prêt ! Passez au guide suivant :

**[📱 02-frontend.md - Développement de l'interface](02-frontend.md)**

---

### 📚 Guides disponibles

1. **[🚀 01-setup.md](01-setup.md)** - Configuration et préparation ← *Vous êtes ici*
2. **[📱 02-frontend.md](02-frontend.md)** - Développement de l'interface  
3. **[🔧 03-backend.md](03-backend.md)** - Backend Express (optionnel)
4. **[🏠 README.md](README.md)** - Vue d'ensemble du projet

---

> 💡 **Besoin d'aide ?** Consultez la [documentation Cursor](https://cursor.sh/docs) ou le [guide MCP](https://docs.anthropic.com/claude/docs/mcp)
