# Sedona angularjs seed - step 2

AngularJS to Angular2 transition : step 2 - SystemJS.

This project was initially duplicated from the [Swimlane's angular1-systemjs-seed project](https://github.com/Swimlane/angular1-systemjs-seed).

## Work In Progress

This is a work in progress.

Planned steps are :
- npm dependencies upgrade
- jspm dependencies upgrade
- migration from angular-ui-router to angular-component-router
- apply Sedona angularjs guidelines and (upgraded) eslint-config
- externalise build tasks

----------

Seed project for ES6 modules via SystemJS with ES6 syntax using Babel that lazy-load and bundle build with AngularJS.

This project does:

- ES6 Syntax via Babel with source maps
- ES6 Modules via SystemJS
- Karma / Jasmine unit tests with coverage report
- Lazy-loading modules via routes with AngularJS
- Easy watch/browser-sync/lint/test/build setup via Gulp
- LESS CSS Support with source maps and minification
- AngularJS Template Compilation
- AngularJS Annotatation
- Bundle builds via SystemJS Builder
- Cache Busting with SystemJS
- Demonstrates on-demand theme loading

### Install & Run

1. `npm start`
2. Browse to `http://localhost:9000`

### Gulp Tasks

- `gulp test` to run karma tests
- `gulp webdriver-standalone` and `gulp sauce-test` to run e2e test
- `gulp lint` to run jshint
- `gulp release` to bundle, cache busting, and minify
