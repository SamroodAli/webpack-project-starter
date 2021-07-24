# Webpack starter

Welcome to my webpack starter for microverse

### Setup

clone repo and run

```bash
npm install
```

### Project structure
* The html page is in `dist` folder.
* Write your javascript in `src/`. 
* Write your styles in `src/index.scss` and import it in `index.js`
```js
import 'index.scss';
```
* The final project assets will be in `dist` folder after build command in production section below.
###

## For development
You have live updates for javscript and scss. Refresh after changes to html.

1. Run in your terminal and keep it running, the project will be available live with hot reloading at `localhost:8080`. Happy programming : )
```bash
npm run start
```
2. Keep the import for scss in `index.js` if you want scss styles.
```js
import 'index.scss';
```

##

## For linters
All commands have --fix appended internally already.

One command for all linters
```
npm run linters
```

### Standalone linters
* eslint
```bash
npm run eslint
```
* stylelint
```bash
npm run stylelint
```
* webhint
```bash
npm run hint
```

## For production
One command to create production code and publish live on github. After project completion. Helpful for lighthouse linter on github pull request.

```bash
npm run publish
```
or seperately run,

1. Build final production project build
```bash
npm run build
```
2. Run in terminal to push your created`dist` folder to github to get a live website on github
```bash
npm run live
```
# webpack-project-starter
