# 🔧 FocusFlow - Backend Express avec Cursor AI

> **Guide 3/3** : Création d'une API REST avec Express.js assistée par l'IA pour persister les tâches sur serveur

## 📋 Table des matières

- [🎯 Objectifs](#-objectifs)
- [🏗️ 1. Architecture backend](#️-1-architecture-backend)
- [⚙️ 2. Génération du projet API avec Cursor](#️-2-génération-du-projet-api-avec-cursor)
- [🚀 3. Implémentation de l'API Express](#-3-implémentation-de-lapi-express)
- [🔄 4. Adaptation du frontend](#-4-adaptation-du-frontend)
- [🧪 5. Tests automatisés avec Playwright MCP](#-5-tests-automatisés-avec-playwright-mcp)
- [📦 6. Déploiement et production](#-6-déploiement-et-production)

## 🎯 Objectifs

Transformer FocusFlow d'une application locale vers une solution full-stack avec l'assistance de Cursor AI :

- ✅ **API REST** complète générée avec JavaScript
- ✅ **Persistance serveur** remplaçant localStorage
- ✅ **Service layer** généré automatiquement
- ✅ **Gestion d'erreurs** et états de chargement
- ✅ **Tests E2E** automatisés via Playwright MCP
- ✅ **Workflow IA** avec Chain of Thought

> 📋 **Prérequis** : Avoir terminé les guides [setup](01-setup.md) et [frontend](02-frontend.md), avec Cursor AI et les MCP configurés.

## 🏗️ 1. Architecture backend

### 1.1 Vue d'ensemble

```
focusflow/
├── src/                    # Frontend React
├── api/                    # Backend Express
│   ├── src/
│   │   ├── index.js       # Point d'entrée
│   │   ├── routes/        # Routes API
│   │   ├── middleware/    # Middlewares
│   │   └── utils/         # Utilitaires
│   └── package.json
└── package.json           # Frontend
```

### 1.2 Endpoints API

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/api/tasks` | Récupérer toutes les tâches |
| `POST` | `/api/tasks` | Créer une nouvelle tâche |
| `PUT` | `/api/tasks/:id` | Modifier une tâche existante |
| `DELETE` | `/api/tasks/:id` | Supprimer une tâche |

### 1.3 Modèle de données

```javascript
// Structure d'une tâche (exemple)
const taskExample = {
  id: 1,
  title: "Ma tâche",
  done: false,
  createdAt: new Date(),
  updatedAt: new Date()
};
```

## ⚙️ 2. Défi : Architecture backend

### 2.1 🎯 Objectif

Créer la structure d'un backend Express en JavaScript pour votre application FocusFlow.

### 2.2 🤔 Temps de réflexion

Avant de commencer, posez-vous ces questions :
- Comment organiseriez-vous les fichiers d'une API REST ?
- Quelles dépendances sont nécessaires pour Express ?
- Où placeriez-vous les routes, middlewares et utilitaires ?
- Comment géreriez-vous la configuration (ports, CORS, etc.) ?

### 2.3 💪 À vous de jouer !

Créez votre propre prompt pour Cursor en pensant à :
1. La structure de dossiers que vous voulez
2. Les dépendances nécessaires (express, cors, dotenv...)
3. La configuration du projet (package.json, scripts)
4. Les bonnes pratiques Express 2024

#### 2.3.1 Utiliser le mode Plan

> 💡 **Recommandation** : Utilisez le mode **Plan** de Cursor pour planifier votre architecture backend avant de générer le code.

**Workflow :**

1. **Activez le mode Plan** (icône Plan dans le chat Agent)
2. **Donnez votre prompt** (celui que vous avez créé ou l'exemple ci-dessous)
3. **Répondez aux questions** : Cursor peut demander des précisions sur :
   - La structure de dossiers préférée
   - Les conventions de nommage
   - Les outils de développement (nodemon, etc.)

4. **Cursor génère le plan** avec la structure complète du backend

**Durant l'exécution :**

L'agent peut suggérer des améliorations :
- "Ajouter un logger (Winston ou Morgan) ?"
- "Mettre en place ESLint et Prettier ?"
- "Créer un fichier .env.example pour la documentation ?"

**À vous de décider** : Acceptez/refusez selon vos besoins pour ce tutoriel.

5. **Validez et exécutez** le plan

<details>
<summary>🆘 Besoin d'aide ? Exemple de prompt</summary>

```
Suis les règles : @workflow-ai.mdc & @feature-planning.mdc

Crée la structure backend Express pour FocusFlow :

1. **Analyse** : Examine la structure frontend existante
2. **Architecture** : Crée un dossier `api/` avec structure JavaScript
3. **Configuration** : Génère package.json et scripts de développement
4. **Dépendances** : Installe express, cors, dotenv

Structure attendue :
```
api/
├── src/
│   ├── index.js
│   ├── routes/
│   ├── middleware/
│   └── utils/
└── package.json
```

Utilise les meilleures pratiques JavaScript et Express 2024.
```

</details>

### 2.4 ✅ Points de contrôle

Vérifiez que Cursor a bien créé :

- ✅ **Dossier api/** initialisé
- ✅ **package.json** avec scripts de développement
- ✅ **Dépendances** installées (express, cors, dotenv)
- ✅ **Structure src/** préparée pour l'API REST
- ✅ **Scripts npm** pour dev/start

**Commandes attendues :**
- `npm run dev` : Démarrage en mode développement
- `npm start` : Démarrage en production

### 2.5 📝 Vérification manuelle

```bash
# Vérifier la structure générée
ls -la api/

# Tester l'installation
cd api && npm run dev
```

> ✅ **Validation** : Le serveur doit démarrer sans erreur sur le port 3001.

### 2.6 🏆 Challenge bonus

Pensez déjà à votre prochaine étape : quels endpoints d'API allez-vous créer ?

## 🚀 3. Défi : Implémentation des routes API

### 3.1 🎯 Objectif

Créer les routes d'une API REST pour gérer les tâches (CRUD complet).

### 3.2 🤔 Réflexion REST

Quelle est la logique d'une API REST pour les tâches ?
- Quels sont les 4 opérations CRUD de base ?
- Quels codes de statut HTTP utiliser ?
- Comment structurer vos réponses JSON ?
- Comment gérer les erreurs ?

### 3.3 💪 Votre mission

Créez un prompt pour générer :
1. **Routes principales** : GET, POST, PUT, DELETE pour `/api/tasks`
2. **Gestion d'erreurs** : Try/catch et messages clairs
3. **Validation** : Vérifier les données reçues
4. **Structure de réponse** : Format JSON consistant

#### 3.3.1 Utiliser le mode Plan

> 💡 **Recommandation** : Planifiez vos routes API avec le mode Plan pour garantir une structure cohérente.

**Workflow :**

1. **Activez le mode Plan**
2. **Donnez votre prompt** pour la création des routes
3. **Répondez aux questions** : Cursor peut demander :
   - "Séparer les routes dans différents fichiers (tasks.routes.js) ?"
   - "Ajouter un middleware de validation (express-validator) ?"
   - "Créer des controllers séparés pour la logique métier ?"

4. **Cursor génère le plan** avec toutes les routes et leur structure

**Durant l'exécution :**

L'agent peut suggérer :
- "Ajouter un middleware d'authentification pour sécuriser les routes ?"
- "Implémenter un système de pagination pour GET /api/tasks ?"
- "Ajouter des tests unitaires pour chaque route ?"
- "Créer un middleware de rate limiting ?"

**Vous gardez le contrôle** :
- ✅ Acceptez ce qui améliore votre projet
- ❌ Refusez ce qui n'est pas nécessaire pour le tutoriel
- 🎯 Orientez selon vos objectifs d'apprentissage

5. **Validez et exécutez** le plan

<details>
<summary>🆘 Besoin d'aide ? Exemple de prompt</summary>

```
Suis les règles : @workflow-ai.mdc & @feature-planning.mdc

Crée les routes API REST pour FocusFlow :

1. **Analyse** : Comprends la logique CRUD pour les tâches
2. **Endpoints** : GET, POST, PUT, DELETE pour /api/tasks
3. **Stockage** : Utilise un tableau en mémoire pour commencer
4. **Validation** : Vérifie les données (titre requis, etc.)
5. **Réponses** : Format JSON avec success/data/error

Endpoints à implémenter :
- GET /api/tasks : Liste des tâches
- POST /api/tasks : Créer une tâche
- PUT /api/tasks/:id : Modifier une tâche
- DELETE /api/tasks/:id : Supprimer une tâche

Utilise JavaScript et les bonnes pratiques Express 2024.
```

</details>

### 3.4 📝 Structure de données

Rappel de la structure d'une tâche :

```javascript
// Exemple d'objet tâche
const task = {
  id: 1,
  title: "Ma tâche",
  done: false,
  createdAt: new Date(),
  updatedAt: new Date()
};

// Exemple de réponse API
const response = {
  success: true,
  data: task, // ou array de tasks
  error: null
};
```

### 3.5 ✅ Points de contrôle

Vérifiez que votre API générée inclut :

- ✅ **4 routes CRUD** : GET, POST, PUT, DELETE
- ✅ **Gestion d'erreurs** : Try/catch sur chaque route
- ✅ **Validation** : Vérification des données
- ✅ **Codes HTTP** : 200, 201, 400, 404, 500
- ✅ **Réponses JSON** : Format consistant

<details>
<summary>🔍 Exemple de code généré attendu</summary>

```javascript
const express = require('express');
const router = express.Router();

// Stockage en mémoire
let tasks = [];
let nextId = 1;

// GET /api/tasks
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération des tâches'
    });
  }
});

// POST /api/tasks
router.post('/', (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Le titre est requis'
      });
    }
    
    const newTask = {
      id: nextId++,
      title: title.trim(),
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    tasks.push(newTask);
    
    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la création'
    });
  }
});

// PUT et DELETE similaires...

module.exports = router;
```

</details>

### 3.6 🏆 Challenge bonus

**Pour aller plus loin :**
- Ajoutez une route de recherche : `GET /api/tasks/search?q=terme`
- Implémentez une pagination : `GET /api/tasks?page=1&limit=10`
- Créez un middleware de logging des requêtes

## 🔄 4. Défi : Intégration frontend

### 4.1 🎯 Objectif

Faire communiquer votre frontend React avec l'API backend que vous venez de créer.

### 4.2 🤔 Réflexion intégration

Comment connecter un frontend à une API ?
- Où appeler les endpoints de votre API ?
- Comment gérer les erreurs réseau ?
- Comment remplacer localStorage par des appels API ?
- Où stocker l'URL de l'API ?

### 4.3 💪 Mission intégration

Adaptez le frontend pour utiliser votre API :
1. **Service API** : Créer un service pour les appels fetch
2. **Store Zustand** : Modifier pour utiliser l'API au lieu de localStorage
3. **Gestion d'erreurs** : Afficher les erreurs réseau
4. **Loading states** : Afficher les états de chargement

#### 4.3.1 Utiliser le mode Plan

> 💡 **Recommandation** : Utilisez le mode Plan pour planifier l'intégration complète frontend-backend.

**Workflow :**

1. **Activez le mode Plan**
2. **Donnez votre prompt** pour l'intégration frontend
3. **Répondez aux questions** : Cursor peut demander :
   - "Utiliser React Query ou SWR pour la gestion du cache ?"
   - "Implémenter des optimistic updates ?"
   - "Ajouter un système de retry automatique en cas d'erreur ?"

4. **Cursor génère le plan** incluant :
   - Service API
   - Modifications du store Zustand
   - Composants de gestion d'erreurs
   - États de chargement

**Durant l'exécution :**

L'agent peut suggérer des améliorations :
- "Ajouter des notifications toast avec React Hot Toast ?"
- "Implémenter un système de synchronisation en temps réel ?"
- "Créer un composant ErrorBoundary pour gérer les erreurs ?"
- "Ajouter des tests d'intégration avec MSW (Mock Service Worker) ?"

**C'est votre projet** :
- Explorez les suggestions qui vous intéressent
- Restez simple si vous préférez maîtriser les bases
- Documentez vos choix pour comprendre leur impact

5. **Validez et exécutez** le plan

<details>
<summary>🆘 Besoin d'aide ? Exemple de prompt</summary>

```
Suis les règles : @workflow-ai.mdc & @feature-planning.mdc

Adapte le frontend FocusFlow pour utiliser l'API backend :

1. **Service API** : Crée un service pour communiquer avec l'API
2. **Store Zustand** : Remplace localStorage par appels API
3. **Gestion erreurs** : Affiche les erreurs réseau
4. **Loading states** : Ajoute des indicateurs de chargement
5. **Environnement** : Utilise VITE_API_URL pour la configuration

Endpoints à implémenter :
- getTasks() : GET /api/tasks
- createTask(title) : POST /api/tasks
- updateTask(id, updates) : PUT /api/tasks/:id
- deleteTask(id) : DELETE /api/tasks/:id

Utilise JavaScript et les bonnes pratiques fetch API 2024.
```

</details>

### 4.4 ✅ Points de contrôle

Vérifiez que votre intégration inclut :

- ✅ **Service API** : Fonctions pour tous les endpoints
- ✅ **Store modifié** : Appels API au lieu de localStorage
- ✅ **Gestion d'erreurs** : Affichage des erreurs réseau
- ✅ **Loading states** : Indicateurs de chargement
- ✅ **Configuration** : URL de l'API via .env

<details>
<summary>🔍 Exemple de code attendu</summary>

```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function apiCall(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!data.success) {
      throw new ApiError(data.error || 'Erreur API', response.status);
    }

    return data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Erreur de connexion', 0);
  }
}

export const taskApi = {
  getTasks: () => apiCall('/tasks'),
  createTask: (title) => apiCall('/tasks', {
    method: 'POST',
    body: JSON.stringify({ title }),
  }),
  updateTask: (id, updates) => apiCall(`/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
  }),
  deleteTask: (id) => apiCall(`/tasks/${id}`, {
    method: 'DELETE',
  }),
};
```

</details>

### 4.5 🏆 Challenge bonus

**Optimisations avancées :**
- Implémentez des "optimistic updates" (mise à jour optimiste)
- Ajoutez un cache local pour les tâches
- Créez un système de retry automatique
- Ajoutez des indicateurs de synchronisation

## 🧪 5. Défi : Tests d'intégration

### 5.1 🎯 Objectif

Vérifier que votre intégration frontend/backend fonctionne parfaitement.

### 5.2 🤔 Réflexion tests

Comment tester une intégration complète ?
- Quels sont les parcours utilisateur critiques ?
- Comment vérifier la persistance des données ?
- Que faire si l'API est indisponible ?
- Comment tester les états de chargement ?

### 5.3 💪 Mission tests  
Par défaut, Cursor bloque la création et l’édition automatique des fichiers `.env` pour protéger vos secrets (Dotfile Protection).  Si Auto-Run est activé.
  
**Pour permettre à Cursor de générer ou modifier les fichiers `.env` (ex : `api/.env`) lors de l’auto-run ou via les prompts, vous devez désactiver la protection des fichiers cachés (Dotfile protection) dans les paramètres Cursor :**  
  
> 1. Ouvrez **Cursor → Settings → Chat**  
> 2. Cherchez l’option **Dotfile Protection**  
> 3. Désactivez-la (**Web : "disable Dotfile protection"**)  
> 4. Relancez Cursor si besoin  
  
Cela autorisera la génération automatique de fichiers `.env` par l’IA, tout en gardant à l’esprit de ne jamais commiter ces fichiers (ils sont déjà listés dans `.gitignore`).



Prompt Cursor pour l'environnement :

```
Crée le fichier de configuration d'environnement pour l'API :

**Fichier** : api/.env
**Variables** :
- PORT=3001 (port du serveur)
- NODE_ENV=development (environnement de développement)
- FRONTEND_URL=http://localhost:5173 (URL du frontend pour CORS)

Assure-toi que ce fichier soit ignoré par Git (vérifie .gitignore).
```

**Fichier généré :**

<details>
<summary>🔍 Configuration générée - api/.env</summary>

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

</details>

> ⚠️ **Sécurité** : Cursor ajoute automatiquement `api/.env` au `.gitignore` pour éviter de commiter les secrets.

## 🔄 5. Défi : Intégration frontend

### 5.1 🎯 Objectif

Faire communiquer votre frontend React avec l'API backend que vous venez de créer.

### 5.2 🤔 Réflexion intégration

Comment connecter un frontend à une API ?
- Où appeler les endpoints de votre API ?
- Comment gérer les erreurs réseau ?
- Comment remplacer localStorage par des appels API ?
- Où stocker l'URL de l'API ?

### 5.3 💪 Mission intégration

Adaptez le frontend pour utiliser votre API :
1. **Service API** : Créer un service pour les appels fetch
2. **Store Zustand** : Modifier pour utiliser l'API au lieu de localStorage
3. **Gestion d'erreurs** : Afficher les erreurs réseau
4. **Loading states** : Afficher les états de chargement

<details>
<summary>🆘 Besoin d'aide ? Exemple de prompt</summary>

```
Suis les règles : @workflow-ai.mdc & @feature-planning.mdc

Adapte le frontend FocusFlow pour utiliser l'API backend :

1. **Service API** : Crée un service pour communiquer avec l'API
2. **Store Zustand** : Remplace localStorage par appels API
3. **Gestion erreurs** : Affiche les erreurs réseau
4. **Loading states** : Ajoute des indicateurs de chargement
5. **Environnement** : Utilise VITE_API_URL pour la configuration

Endpoints à implémenter :
- getTasks() : GET /api/tasks
- createTask(title) : POST /api/tasks
- updateTask(id, updates) : PUT /api/tasks/:id
- deleteTask(id) : DELETE /api/tasks/:id

Utilise JavaScript et les bonnes pratiques fetch API 2024.
```

</details>

### 5.4 ✅ Points de contrôle

Vérifiez que votre intégration inclut :

- ✅ **Service API** : Fonctions pour tous les endpoints
- ✅ **Store modifié** : Appels API au lieu de localStorage
- ✅ **Gestion d'erreurs** : Affichage des erreurs réseau
- ✅ **Loading states** : Indicateurs de chargement
- ✅ **Configuration** : URL de l'API via .env

<details>
<summary>🔍 Exemple de code attendu</summary>

```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function apiCall(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!data.success) {
      throw new ApiError(data.error || 'Erreur API', response.status);
    }

    return data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Erreur de connexion', 0);
  }
}

export const taskApi = {
  getTasks: () => apiCall('/tasks'),
  createTask: (title) => apiCall('/tasks', {
    method: 'POST',
    body: JSON.stringify({ title }),
  }),
  updateTask: (id, updates) => apiCall(`/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
  }),
  deleteTask: (id) => apiCall(`/tasks/${id}`, {
    method: 'DELETE',
  }),
};
```

</details>

### 5.5 🏆 Challenge bonus

**Optimisations avancées :**
- Implémentez des "optimistic updates" (mise à jour optimiste)
- Ajoutez un cache local pour les tâches
- Créez un système de retry automatique
- Ajoutez des indicateurs de synchronisation

**Code généré attendu :**

<details>
<summary>🔍 Store migré - src/store/index.ts</summary>

```typescript
import { create } from 'zustand';
import { taskApi, Task } from '../services/api';

interface TaskStore {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  
  // Actions
  loadTasks: () => Promise<void>;
  addTask: (title: string) => Promise<void>;
  toggleTask: (id: number) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
  clearError: () => void;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  loading: false,
  error: null,

  clearError: () => set({ error: null }),

  loadTasks: async () => {
    set({ loading: true, error: null });
    
    try {
      const tasks = await taskApi.getTasks();
      set({ tasks, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Erreur lors du chargement',
        loading: false
      });
    }
  },

  addTask: async (title: string) => {
    set({ loading: true, error: null });
    
    try {
      const newTask = await taskApi.createTask(title);
      set(state => ({
        tasks: [newTask, ...state.tasks],
        loading: false
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Erreur lors de l\'ajout',
        loading: false
      });
    }
  },

  toggleTask: async (id: number) => {
    const task = get().tasks.find(t => t.id === id);
    if (!task) return;

    // Optimistic update
    set(state => ({
      tasks: state.tasks.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    }));

    try {
      const updatedTask = await taskApi.updateTask(id, { done: !task.done });
      set(state => ({
        tasks: state.tasks.map(t => t.id === id ? updatedTask : t)
      }));
    } catch (error) {
      // Revert optimistic update
      set(state => ({
        tasks: state.tasks.map(t =>
          t.id === id ? { ...t, done: task.done } : t
        ),
        error: error instanceof Error ? error.message : 'Erreur lors de la modification'
      }));
    }
  },

  removeTask: async (id: number) => {
    // Optimistic update
    const originalTasks = get().tasks;
    set(state => ({
      tasks: state.tasks.filter(t => t.id !== id)
    }));

    try {
      await taskApi.deleteTask(id);
    } catch (error) {
      // Revert optimistic update
      set({
        tasks: originalTasks,
        error: error instanceof Error ? error.message : 'Erreur lors de la suppression'
      });
    }
  },
}));
```

</details>


## 🧪 6. Défi : Tests d'intégration

### 6.1 🎯 Objectif

Vérifier que votre intégration frontend/backend fonctionne parfaitement.

### 6.2 🤔 Réflexion tests

Comment tester une intégration complète ?
- Quels sont les parcours utilisateur critiques ?
- Comment vérifier la persistance des données ?
- Que faire si l'API est indisponible ?
- Comment tester les états de chargement ?

### 6.3 💪 Mission tests

Créez des tests qui vérifient :
1. **Cycle CRUD complet** : Ajout, modification, suppression
2. **Persistance** : Rechargement de page
3. **Gestion d'erreurs** : Serveur indisponible
4. **UX** : États de chargement

<details>
<summary>🆘 Besoin d'aide ? Utilisez Playwright MCP</summary>

Dans Cursor, utilisez directement le MCP Playwright avec ces instructions :

```
Execute les tests E2E suivants sur http://localhost:5173 :

**Test 1 - Cycle complet :**
1. Ouvre l'application
2. Ajoute une tâche "Test intégration API"
3. Vérifie qu'elle apparaît dans la liste
4. Coche la tâche
5. Recharge la page
6. Vérifie que la tâche reste cochée
7. Supprime la tâche

**Test 2 - Gestion d'erreurs :**
1. Arrête le serveur backend
2. Essaie d'ajouter une tâche
3. Vérifie l'affichage du message d'erreur
```

</details>

### 6.4 🔧 Préparation des tests

Avant de tester, démarrez vos deux services :

**Terminal 1 - Backend :**
```bash
cd api
npm run dev
```

**Terminal 2 - Frontend :**
```bash
npm run dev
```

**Terminal 3 - Tests manuels :**
```bash
# Testez vos endpoints
curl http://localhost:3001/health
curl http://localhost:3001/api/tasks
```

### 6.5 ✅ Checklist de tests

**Tests à réaliser :**

- ✅ **Ajout tâche** : Fonctionne et apparaît dans la liste
- ✅ **Modification tâche** : Toggle done fonctionne
- ✅ **Suppression tâche** : Disparaît définitivement
- ✅ **Persistance** : Reste après rechargement
- ✅ **Gestion d'erreurs** : Message d'erreur si API indisponible
- ✅ **Loading states** : Indicateurs de chargement
- ✅ **Endpoints API** : Tous les endpoints répondent correctement

### 6.6 🏆 Challenge bonus

**Tests avancés :**
- Testez la gestion des requêtes simultanées
- Vérifiez les performances avec beaucoup de tâches
- Testez la résilience à la perte de connexion
- Créez un test de charge basique

### 6.7 🎉 Félicitations !

Si tous vos tests passent, vous avez réussi à :
- ✅ Créer une API REST fonctionnelle
- ✅ Intégrer frontend et backend
- ✅ Gérer les erreurs réseau
- ✅ Tester l'intégration complète

Vous avez maintenant une application full-stack opérationnelle !

## 📦 7. Défi : Déploiement (Bonus)

### 7.1 🎯 Objectif

Mettre votre application FocusFlow en ligne pour la montrer au monde !

### 7.2 🤔 Réflexion déploiement

Comment déployer une application full-stack ?
- Où héberger le frontend ? Le backend ?
- Comment gérer les variables d'environnement ?
- Quelles sont les étapes de build ?
- Comment configurer les domaines et CORS ?

### 7.3 💪 Mission déploiement

Choisissez votre stratégie de déploiement :

**Options recommandées :**
- **Frontend** : Vercel, Netlify, GitHub Pages
- **Backend** : Railway, Render, Heroku
- **Full-stack** : Vercel (avec API routes)

**Commandes de build :**
```bash
# Frontend
npm run build

# Backend
cd api && npm start
```

### 7.4 ✅ Checklist de déploiement

**Avant de déployer :**

- ✅ **Build local** : Vérifiez que `npm run build` fonctionne
- ✅ **Variables d'env** : Configurez les URLs de production
- ✅ **CORS** : Autorisez votre domaine frontend
- ✅ **Tests** : Tous les tests passent
- ✅ **Optimisations** : Images, bundles, etc.

**Variables d'environnement production :**
```bash
# Backend
NODE_ENV=production
FRONTEND_URL=https://votre-app.vercel.app
PORT=3001

# Frontend
VITE_API_URL=https://votre-api.railway.app/api
```

### 7.5 🏆 Challenge bonus

**Améliorations pour la production :**
- Ajoutez une vraie base de données (PostgreSQL, MongoDB)
- Implémentez un système d'authentification
- Ajoutez du monitoring et des logs
- Configurez un CI/CD avec GitHub Actions
- Optimisez les performances (cache, CDN)

### 7.6 🎉 Bravo !

Si vous avez déployé votre application, vous avez maintenant :
- ✅ Une application full-stack en ligne
- ✅ Maîtrise des déploiements modernes
- ✅ Expérience complète du développement web

Partagez votre création avec vos amis ! 🎆

## ✅ Bravo ! Vous avez réussi !

Vous avez maintenant maîtrisé le développement full-stack avec Cursor AI :

- ✅ **API REST** complète créée avec JavaScript
- ✅ **Intégration frontend/backend** opérationnelle
- ✅ **Persistance serveur** remplacant localStorage
- ✅ **Gestion d'erreurs** et états de chargement
- ✅ **Tests d'intégration** avec Playwright MCP
- ✅ **Architecture scalable** prête pour la production
- ✅ **Workflow IA** avec Chain of Thought et MCP

### 🤓 Compétences développées

**Maîtrise de Cursor AI :**
- Création de prompts efficaces et structurés
- Utilisation des MCP pour les tests automatiques
- Workflow Chain of Thought pour le développement
- Approche itérative et autonome

**Développement full-stack :**
- API REST avec Express.js et JavaScript
- Intégration frontend/backend avec gestion d'erreurs
- Tests d'intégration et validation
- Préparation au déploiement

### 🔥 Ce que vous savez maintenant faire

- **Concevoir** une architecture backend adaptée
- **Implémenter** des endpoints REST fonctionnels
- **Intégrer** frontend et backend de manière robuste
- **Tester** l'intégration complète
- **Réfléchir** avant de coder (pas de copier-coller !)
- **Utiliser** l'IA comme un assistant, pas une béquille

---

### 📚 Guides disponibles

1. **[🚀 01-setup.md](01-setup.md)** - Configuration et préparation
2. **[📱 02-frontend.md](02-frontend.md)** - Développement de l'interface
3. **[🔧 03-backend.md](03-backend.md)** - Backend Express avec Cursor AI ← *Vous êtes ici*
4. **[🏠 README.md](README.md)** - Vue d'ensemble du projet

---

> 🎉 **Félicitations !** Vous maîtrisez maintenant le développement full-stack avec l'assistance de l'IA Cursor. FocusFlow est prêt pour la production !
> 
> 💡 **Et maintenant ?** Continuez à explorer, créez vos propres projets, et rappelez-vous : l'IA est votre assistant, votre cerveau reste le chef d'orchestre ! 🎼
>
> 🚀 **Prochaines étapes :** Bases de données, authentification, déploiement, et tout ce que votre imagination peut concevoir !
