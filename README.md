# greenspark-task

This task was created using [Vite](https://vitejs.dev/) + [Vue 3](https://v3.vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Pinia](https://pinia.vuejs.org/).

I used the official Vue 3 command (npm create vue@latest) to create the project, and I added TypeScript, Pinia, Vitest, ESLint and Prettier.

I removed the default components and styles, and I added some components for the SVG assets and basic styles (like custo proprieties for colors) for this task. I didn't use any CSS framework.

I initially created a simple store with Pinia (.src/stores/ProductStore.ts) to fetch the data from the API with Axios, and I built the components to display the data. I used the [Vue Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html).

I created some global components for the checkbox and the color picker(that is a radio group), they simply emit the selected value to the parent component.

I updated the store adding a partial copy of each product in localStorage, and I added a single function to update every kind of propriety.

I created a global component for the tooltip.

I checked the correct behaviour of the app on Chrome, Firefox, Safari on MacOS, and on Safari(15.5) on the iOS Simulator.

I checked the code with ESLint and Prettier, and I added some tests for the store functions.

For further details, please check the code and the comments in the files.



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
