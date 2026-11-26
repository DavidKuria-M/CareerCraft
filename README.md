# CV Builder & Career Dashboard

A guest-first React CV builder and career dashboard built with **Vite**, **React Router**, and **Lucide React**. Users can fill out general information, education, and work experience, toggle a live CV preview mode, and navigate across dashboard sections.

## Current Features (Frontend WIP)
- **Live CV Builder & Preview:** Edit General Information, Education, and Work Experience with real-time CV preview rendering and a full-width Preview Mode toggle.
- **Dashboard Layout & Routing:** Persistent sidebar and top bar via nested `<Outlet />` routing (`/` for My CV, `/job-board`, `/my-applications`, `/explore-jobs`, `/settings`, plus standalone `/sign-in`).
- **Placeholder Screens:** Reusable `ComingSoon` view supporting both embedded dashboard mode and standalone full-screen mode.

## Tech Stack
- **Frontend:** React, Vite, React Router DOM (`react-router-dom`), Lucide React, CSS
- **Planned Backend (Upcoming Phase):** Node.js, REST/JSON API, and a database for user authentication, persistent CV storage, and job/application tracking

## Local Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Roadmap
- [x] Guest-first CV form sections and live preview
- [x] Nested routing with `DashboardLayout` and `<Outlet />`
- [ ] Search filtering in `TopBar` and polish for upcoming views
- [ ] Node.js backend API & database integration (authentication, saving CVs, applications)