# Portfolio Personnel

Mon portfolio construit avec [Astro.js](https://astro.build/) et [Tailwind CSS](https://tailwindcss.com/) pour présenter mes projets, compétences et expériences.

Ce projet est un site statique moderne, rapide et optimisé, déployé via Docker et Traefik sur mon VPS personnel.

## 📝 Description

Ce portfolio est développé avec Astro.js, stylisé grâce à Tailwind CSS, et utilise divers outils modernes (TypeScript, MDX, Web3Forms…).
Le site est entièrement responsive et conçu pour offrir une navigation fluide.

## 🚀 Structure

```text
/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   └── 
│   ├── content/
│   │   ├── blog/
│   │   └── config.ts
│   ├── data/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```
## Techologies utilisés

- Astro.JS
- Tailwind CSS
- astro icon
- MDX
- MD
- TypeScript
- WEB3forms (formulaire)

## 🚀 Fonctionnalités

- Pages pour présenter mes projets, compétences, cv et contact
- Design responsive adapté à tous les écrans
- Navigation fluide et intuitive
- Dark mode prêt à être activé
- Formulaire de contact via Web3Forms

## Créer un projet astro

### Prérequis

- Node.js (version 16 ou plus récente)
- npm ou yarn

### Commande

```sh
npm create astro@latest -- --template basics
```

## 🛠️ Installation et lancement local

### Prérequis

- Node.js (version 16 ou plus récente)
- npm

### Étapes
```bash
git clone https://github.com/Crista-Desuraune/portfolio.git
```

#### Accéder au dossier
```bash
cd portfolio-astro
```

#### Installer les dépendances
```bash
npm install
```

#### Démarrer le serveur local
```bash
npm run dev
```

Accède ensuite à http://localhost:4321

### 🧞 Commandes

| Command                   | Action                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Installe les dépendences                           |
| `npm run dev`             | Lance le local `localhost:4321`                    |
| `npm run build`           | Build ton site dans `./dist/`                      |
| `npm run preview`         | Avant de déployer, preview ton build localement    |
| `npm run astro ...`       | Lance commande CLI comme `astro add`, `astro check`|

## 🤝 Contribuer
Les contributions sont les bienvenues ! Pour contribuer :
1. Fork le projet
2. Crée une branche (`git checkout -b feature/ma-feature`)
3. Commit tes changements (`git commit -am 'Ajoute ma feature'`)
4. Push (`git push origin feature/ma-feature`)
5. Ouvre une Pull Request

## Déploiement sur VPS (Docker + Traefik)

### Le site est déployé sur un VPS personnel en utilisant :

- Docker pour containeriser le build Astro
- Traefik comme reverse-proxy avec SSL Let’s Encrypt automatique

### Stack de production
- Docker Compose pour orchestrer l’ensemble
- Un container Traefik
- HTTPS automatique avec Let’s Encrypt
- Routage basé sur mon domaine : crista-desuraune.fr

Les fichiers utilisés comprennent :

- Dockerfile (build Astro)
- docker-compose.yml (Traefik + site)

## Site en ligne

Mon portfolio est disponible ici :
https://crista-desuraune.fr

## Auteur
**Crista DESURAUNE--COCU**

## Remerciment
- Merci à Raphaël Sanchez de m'avoir suivi, conseillé et aidé sur le projet