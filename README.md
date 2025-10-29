# 🎯 Aléa

> *"Alea iacta est"* - Le dé est jeté

Une application de quiz interactive et accessible, développée dans le cadre du Titre Professionnel Développeur Web et Web Mobile.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)](https://www.mongodb.com/)

## 📖 À propos du projet

Aléa est une application web full-stack de quiz interactive, conçue pour offrir une expérience d'apprentissage moderne et accessible. Initialement pensée pour le domaine du powerlifting, elle a évolué vers une plateforme modulable et personnalisable en marque blanche.

### 🎯 Origine du nom

Le nom "Aléa" est inspiré de l'expression latine *"Alea iacta est"* (le dé est jeté). Ce nom symbolise à la fois le jeu et la prise de décision, éléments centraux dans un quiz où chaque question met en jeu la réflexion, l'intuition et parfois la chance.

## ✨ Fonctionnalités principales

### 🔓 Accessibles à tous
- Page d'accueil avec présentation du site
- Accès aux quiz en mode visiteur
- Mentions légales et licence consultables
- Formulaire de contact

### 🔑 Authentification sécurisée
- Inscription avec confirmation par mail
- Connexion sécurisée via JWT
- Réinitialisation du mot de passe par token
- Vérification d'adresse email

### 🔒 Espace utilisateur
- Profil personnalisé
- Historique des quiz réalisés
- Suivi des performances et statistiques

### 🛡️ Panneau administrateur
- Gestion complète des utilisateurs et rôles
- Création et modification de quiz
- Gestion des questions avec réutilisation
- Contrôle total sur les contenus

### ♿ Menu d'accessibilité complet
Un des points forts majeurs de l'application, offrant :

#### 👀 Vision
- Mode contraste élevé
- Mode sombre/clair
- Filtres pour daltonisme
- Réglages de police personnalisés

#### 📖 Lecture
- Police spéciale dyslexie
- Guide de lecture
- Mise en évidence des liens

#### 🔊 Audio
- Synthèse vocale intégrée
- Lecture au survol
- Réglage vitesse et volume

#### ⌨️ Navigation
- Curseur agrandi
- Réduction des animations
- Focus clavier amélioré

#### Raccourcis clavier
- `Alt + A` - Ouvrir/fermer le menu
- `Alt + C` - Contraste élevé
- `Alt + D` - Mode dyslexie
- `Alt + S` - Synthèse vocale
- `Alt + M` - Mode sombre/clair
- `Alt + +/-` - Taille du texte

## 🏗️ Architecture technique

### Stack technologique

**Front-end**
- React 18 avec hooks
- React Router DOM pour la navigation
- Axios pour les appels API
- CSS moderne et responsive

**Back-end**
- Node.js avec Express
- MongoDB avec Mongoose
- JWT pour l'authentification
- Bcrypt pour le hashage des mots de passe

**Outils**
- Git pour le versioning
- ESLint & Prettier pour la qualité du code
- Docker (optionnel)

### Structure du projet

```
alea/
├── client/                    # Front-end React
│   ├── public/               # Fichiers statiques
│   └── src/
│       ├── assets/          # Ressources graphiques
│       ├── components/      # Composants réutilisables
│       │   ├── Navbar.jsx
│       │   ├── AccessibilityMenu.jsx
│       │   └── ProtectedRoute.jsx
│       ├── features/        # Modules fonctionnels
│       ├── pages/          # Pages principales
│       │   ├── QuizPage.jsx
│       │   ├── AdminPage.jsx
│       │   └── ProfilePage.jsx
│       ├── services/       # Appels API
│       └── utils/          # Fonctions utilitaires
│
├── server/                   # Back-end Node.js
│   ├── controllers/         # Logique métier
│   ├── models/             # Schémas Mongoose
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   └── Question.js
│   ├── routes/             # Endpoints API
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── quizzes.js
│   │   └── questions.js
│   ├── middleware/         # Middleware personnalisés
│   │   ├── protect.js
│   │   ├── authorize.js
│   │   └── optionalAuth.js
│   ├── services/          # Logique applicative
│   ├── utils/             # Utilitaires
│   ├── app.js            # Configuration Express
│   └── server.js         # Point d'entrée
│
└── README.md
```

## 🔒 Sécurité

### Mesures de protection implémentées

**Headers HTTP sécurisés**
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy` configuré
- `Content-Security-Policy` restrictive

**Rate Limiting**
- Global : 100 requêtes / 15 min
- Auth : 10 tentatives / 15 min
- API : 50 requêtes / 15 min
- Admin : 200 requêtes / 15 min

**Authentification**
- Tokens JWT sécurisés
- Mots de passe hashés avec bcrypt
- Cookies httpOnly et secure
- Protection CORS configurée

**Validation**
- Validation stricte côté serveur
- Protection contre injection SQL/NoSQL
- Limitation des payloads (10MB)
- Blocage des fichiers sensibles (.env, .git)

## 🚀 Installation et utilisation

### Prérequis
- Node.js (v14 ou supérieur)
- MongoDB (local ou Atlas)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/alea.git
cd alea

# Installation des dépendances back-end
cd server
npm install

# Installation des dépendances front-end
cd ../client
npm install
```

### Configuration

Créer un fichier `.env` dans le dossier `server/` :

```env
# Base de données
MONGODB_URI=mongodb://localhost:27017/alea
# ou pour MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/alea

# JWT
JWT_SECRET=votre_secret_jwt_tres_securise
JWT_EXPIRE=7d

# Email (optionnel pour réinitialisation mot de passe)
EMAIL_HOST=smtp.exemple.com
EMAIL_PORT=587
EMAIL_USER=votre@email.com
EMAIL_PASS=votre_mot_de_passe

# Environnement
NODE_ENV=development
PORT=3001

# URLs autorisées (CORS)
CLIENT_URL=http://localhost:3000
```

### Lancement

```bash
# Terminal 1 - Lancer le serveur back-end
cd server
npm run dev

# Terminal 2 - Lancer le client front-end
cd client
npm start
```

L'application sera accessible sur :
- Front-end : http://localhost:3000
- Back-end : http://localhost:3001

## 📊 Modèles de données

### User
```javascript
{
  username: String (requis, unique),
  email: String (requis, unique),
  password: String (requis, hashé),
  role: String (user/admin),
  isVerified: Boolean,
  resetToken: String,
  resetTokenExpiration: Date
}
```

### Quiz
```javascript
{
  title: String (requis),
  description: String,
  category: String (requis),
  createdBy: ObjectId (User),
  isAutoGenerated: Boolean,
  questionsCount: Number
}
```

### Question
```javascript
{
  question: String (requis),
  answers: Array (A, B, C),
  correctAnswers: Array,
  category: String,
  quizId: ObjectId (Quiz, optionnel)
}
```

## 🛠️ Résolution de problèmes techniques

### Protection des routes administrateur
**Problème** : Accès direct aux pages admin sans vérification

**Solution** : Composant `ProtectedRoute` avec :
- Vérification JWT
- Contrôle des rôles utilisateur
- Gestion des états (loading, error)
- Redirections automatiques

### Sécurité des tokens de réinitialisation
**Problème** : Gestion sécurisée des tokens de reset password

**Solution** : Système en 6 étapes :
1. Génération aléatoire sécurisée
2. Hashage avant stockage en DB
3. Envoi du token non-hashé par email
4. Comparaison lors de la vérification
5. Validation avec expiration
6. Invalidation après utilisation

## 📈 Statistiques du projet

- ✅ **85%** de taux d'achèvement
- 🎯 MVP fonctionnel et déployable
- 🏗️ Architecture Full-Stack moderne
- ♿ Conformité WCAG 2.1
- 🔒 Sécurité renforcée multi-niveaux

## 🚀 Roadmap et évolutions futures

### Court terme
- [ ] Système de catégories étendues avec filtrage
- [ ] Mode multijoueur temps réel (WebSockets)
- [ ] Génération automatique de quiz par IA
- [ ] Analytics et tableaux de bord
- [ ] Système de badges et gamification
- [ ] Export/import de quiz (JSON, CSV)

### Moyen terme
- [ ] Containerisation Docker + Kubernetes
- [ ] Pipeline CI/CD avec tests automatisés
- [ ] Cache Redis pour optimisation
- [ ] CDN pour ressources statiques
- [ ] Architecture microservices
- [ ] Base de données distribuée

### Long terme
- [ ] Modèle SaaS multi-tenant
- [ ] API publique avec quotas
- [ ] Intégrations LMS
- [ ] Application mobile native
- [ ] Marketplace de quiz communautaire
- [ ] IA pour recommandations personnalisées

## 👤 Auteur

**Ichem DGHIM**
- Développeur Web Junior
- 20 ans, basé à Agen
- Diplômé Bac STI2D spécialité SIN
- Formation : Titre Professionnel Développeur Web et Web Mobile (AFEC)

## 🎓 Contexte du projet

Ce projet a été réalisé dans le cadre du **Titre Professionnel Développeur Web et Web Mobile**, démontrant la maîtrise complète de la chaîne de développement full-stack moderne.

### Compétences démontrées
- ✅ Développement front-end avec React
- ✅ Développement back-end avec Node.js/Express
- ✅ Gestion de base de données NoSQL (MongoDB)
- ✅ Authentification et autorisation JWT
- ✅ Sécurité et protection des données
- ✅ Architecture MVC
- ✅ API RESTful
- ✅ Accessibilité web (WCAG 2.1)
- ✅ Gestion de projet agile
- ✅ Documentation technique

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Forker le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Committer vos changements (`git commit -m 'Add AmazingFeature'`)
4. Pousser vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Contact

Pour toute question ou suggestion concernant le projet :
- Email : [ichem.dghim@gmail.com]
- GitHub : [@IDGHIM](https://github.com/IDGHIM)
- Portfolio : [https://idghim.github.io/fcc-Portofolio-Webpage/]

---

**Note** : Ce projet représente un tremplin vers des développements plus ambitieux, tout en constituant une démonstration concrète des compétences acquises durant la formation.
