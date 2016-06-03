# Sedona angularjs seed - step 2

AngularJS to Angular2 transition : step 2 - SystemJS.

## Work In Progress

This is a work in progress.

Planned steps are :
- npm dependencies upgrade (done)
- jspm dependencies upgrade (done)
- use noelmace/angularjs-decorators (done)
- drop systemjs-route-bundler and replace it by a KISS gulp-jspm-build task
- addapt and externalise build tasks
- migration from jslint to eslint
- apply Sedona angularjs guidelines and (upgraded) eslint-config

## How To

### Install & Run

1. `npm start`
2. Browse to `http://localhost:9000`

### Test

#### Unit Tests

run `npm test` to launch unit tests

#### End to end

run `npm run wd` to launch the webdriver server
then, run `npm run e2e` to launch the e2e tests

### Lint

run `npm run lint` to run jshint

### Distribute

run `npm run release` bundle, cache busting, and minify

## Versions
The project has been tested with the following environment:

- node v5.4.0
- npm v3.5.3
- jspm v0.16.33
