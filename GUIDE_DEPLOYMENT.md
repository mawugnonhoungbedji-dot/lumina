# Instructions Déploiement GitHub

Voici comment mettre en ligne votre site maintenant que les fichiers de configuration sont prêts.

## 1. Installer Git

Téléchargez et installez Git pour Windows depuis : **[git-scm.com](https://git-scm.com/)**.

## 2. Créer un dépôt sur GitHub

1. Connectez-vous à votre compte [GitHub](https://github.com/).
2. Créez un nouveau dépôt nommé `lumina` (ou le nom de votre choix).
3. **Ne cochez aucune option** (pas de README, pas de licence).

## 3. Envoyer votre code

Ouvrez votre terminal et exécutez ces commandes une par une :

```bash
# Initialiser le dépôt local
git init

# Ajouter les fichiers
git add .

# Enregistrer les changements
git commit -m "Initial commit & Deployment config"

# Lier à GitHub (Remplacez VOTRE_NOM et VOTRE_DEPOT)
git remote add origin https://github.com/VOTRE_NOM/VOTRE_DEPOT.git

# Envoyer vers la branche main
git branch -M main
git push -u origin main
```

## 4. Activer GitHub Pages

1. Sur GitHub, allez dans **Settings** -> **Pages**.
2. Dans la section **Build and deployment** -> **Source**, choisissez **GitHub Actions**.
3. C'est tout ! Votre site sera compilé et déployé automatiquement sous quelques minutes.
