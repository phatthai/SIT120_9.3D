# Kerbside Mobile Mechanics (SIT120 Task 9.3D)

The three pages planned in Task 1.1P and the booking form from Task 6.3D,
rebuilt as a Vue 3 application with Vite.

## Run it locally

    npm install
    npm run dev

## Build for the Deakin server

    npm run build

Upload the contents of `dist/` into `public_html/task9-3d/`.
`vite.config.js` sets `base: './'`, so every asset path in the build is relative.
Use `npm run preview` to test the build locally; opening `dist/index.html`
straight from the file system shows a blank page.

## Components (`src/components/`)

| File | Role |
|---|---|
| `AppHeader.vue` | Logo and main navigation, built from the `pages` prop |
| `AppFooter.vue` | Contact details, secondary navigation, copyright |
| `HomeView.vue` | Home page |
| `ServicesView.vue` | Services and price table |
| `ContactView.vue` | Booking page intro, service area and hours |
| `ContactForm.vue` | Booking form: props, v-model, validation, `submit-form` emit |

`App.vue` holds the current view, passes props down, listens for
`submit-form`, and renders the Customer Acknowledgement Card.
All styles live in `src/assets/styles.css`, imported once in `main.js`.
