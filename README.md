# Eszter Varga - Portfolio

My personal portfolio website: a single-page site with my projects, experience, education and skills.

**Live:** https://vargaeszter11.github.io/portfolio/

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [lucide-react](https://lucide.dev/) icons
- Google Analytics (gtag.js)
- GitHub Actions + GitHub Pages for deployment

## Project structure

```text
src/
  components/   One component per section, plus shared ones (ProjectCard, DetailModal)
  assets/       Images and screenshots
  index.css     Tailwind setup and theme colours
  App.jsx       Page layout
public/         Static files (favicon)
```

## Deployment

Every push to `main` triggers the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and deploys it to GitHub Pages.
