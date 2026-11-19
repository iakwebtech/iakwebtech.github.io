# GitHub Profile Portfolio

A responsive, single-page developer portfolio website that automatically fetches and displays your live GitHub profile, repository stats, and top projects.

## Features

- **Live GitHub Integration**: Loads avatar, bio, location, followers, public repo count, total stars, and top repositories via the GitHub REST API (with 15-minute `localStorage` caching).
- **Project Filtering**: Search repositories by name/description and filter by programming language.
- **Profile Switcher**: Preview any public GitHub profile via `?user=<username>` or the GitHub icon in the navigation bar.
- **Dark & Light Themes**: Persisted theme toggle in the header.
- **Zero Build Step**: Pure HTML, CSS, and vanilla JavaScript — ready for GitHub Pages.

## Quick Customization

Open `script.js` and edit the `PORTFOLIO_CONFIG` object at the top:

- `githubUsername`: Your GitHub username
- `brandName`, `role`, `availability`, `email`
- `skills`, `focusAreas`, `experience`, `socials`

## Deploy on GitHub Pages

1. Push these files to a repository named `<your-username>.github.io` (or any repository with GitHub Pages enabled).
2. In your repository **Settings → Pages**, set the source to the `main` branch (`/ (root)`).
3. Your portfolio will be live at `https://<your-username>.github.io`.
