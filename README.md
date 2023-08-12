# chaiinchomp-react-app-template

This is my personal app template configured with all the boilerplate and defaults I like :)

See also [react-chomp](https://github.com/chaiinchomp/react-chomp)

## Preinstalled dependencies

### Base app template

- [`create-react-app`](https://create-react-app.dev/)

### Routing & analytics

- [`react-router-dom`](https://reactrouter.com/en/main)
- [`history`](https://www.npmjs.com/package/history)
- [`react-ga`](https://www.npmjs.com/package/react-ga)
  - _Requires GA ID in env var `REACT_APP_GA_TRACKING`_

### State management

- [`react-redux`](https://www.npmjs.com/package/react-redux) with [`@reduxjs/toolkit`](https://redux.js.org/)
- [`redux-thunk`](https://www.npmjs.com/package/redux-thunk)

### Styling

- [`tailwindcss`](https://tailwindcss.com/) with [`postcss`](https://postcss.org/) and [`autoprefixer`](https://www.npmjs.com/package/autoprefixer)
  - Plugins: [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms), [`tailwindcss-multi-theme`](https://www.npmjs.com/package/tailwindcss-multi-theme)
- [`react-responsive`](https://www.npmjs.com/package/react-responsive)

### Linting

- [`lint-staged`](https://www.npmjs.com/package/lint-staged) with [`husky`](https://www.npmjs.com/package/husky)
- [`eslint`](https://eslint.org/)
- [`prettier`](https://prettier.io/)

### Utilities

- [`lodash`](https://lodash.com/)
- [`immutability-helper`](https://www.npmjs.com/package/immutability-helper)
- [`query-string`](https://www.npmjs.com/package/query-string)
- [`node-fetch`](https://www.npmjs.com/package/node-fetch)

## Scripts

### `npm start`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build:styles`

Styles are always regenerated during the build step, or run manually to recompile tailwindcss styles.
