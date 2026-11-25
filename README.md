# Ramsuns Hydraulics — React (Webpack)

React 19 website migrated from Vite to Webpack 5. Original body markup, stylesheet, assets and behavior are preserved. The React wrapper uses createElement and Webpack's asset/source loader instead of Vite's raw import.

## Run locally
Install Node.js 22 LTS or newer supported LTS, then open a terminal in this folder:

```sh
npm install
npm start
```
Open http://localhost:3000. `npm run dev` is an alias.

## Production

```sh
npm run build
```
Deploy the contents of `dist/` to your static hosting server. Relative asset paths support hosting in a subdirectory. `npm run preview` serves a production-mode compilation locally. `npm run deploy` builds and publishes to GitHub Pages using the configured Git remote.

The enquiry form retains its original mailto workflow; it does not send email through a backend.

The original index referenced a missing assets/js/main.js; that reference was removed because src/original-behavior.js is initialized by React. The old Vite lockfile was removed; npm install generates a new lockfile. Dependencies are not bundled in the ZIP.

Validation: source syntax and unchanged asset/markup/behavior checks performed. Dependency installation, production build and browser testing could not be performed in the migration environment because npm registry access was unavailable.
