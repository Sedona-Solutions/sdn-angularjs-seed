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

### Install & Run

1. `npm start`
2. Browse to `http://localhost:9000`

### Gulp Tasks

**WIP**

- `gulp test` to run karma tests
- `gulp webdriver-standalone` and `gulp sauce-test` to run e2e test
- `gulp lint` to run jshint
- `gulp release` to bundle, cache busting, and minify

### Versions
The project has been tested with the following environment:

- node v5.4.0
- npm v3.5.3
- jspm v0.16.33

### Best Practices

- https://github.com/johnpapa/angularjs-styleguide
- https://github.com/gocardless/angularjs-style-guide
- http://sett.ociweb.com/sett/settApr2014.html

### Original Swimlane Research & Resources

- https://github.com/angular/material-start/tree/es6
- https://github.com/systemjs/systemjs
- https://github.com/gocardless/es6-angularjs
- http://glenmaddern.com/articles/javascript-in-2015
- https://github.com/marcj/angular-es6-annotations
- https://github.com/robianmcd/angular-next
- https://github.com/ng-next/ng-next-example

----------
This project was initially duplicated from the [Swimlane's angular1-systemjs-seed project](https://github.com/Swimlane/angular1-systemjs-seed).

----------