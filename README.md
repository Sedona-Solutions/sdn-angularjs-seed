Sedona angularjs seed
================================

**This alternative is no longer maintained.**
-----------------------

**The "jshint" alternative isn't meant to be maintaned as a real alternative, given the fact that it only support ES features
above stage-2, and that Decorators are currently at stage-1.**

**Furthermore, eslint has a far better documentation and plugins, and
permit to have "sharable configurations".**

We only keep this branch to show how eslint is better ;)

Current state
-------------------

This seed currently match the step 2 (Module Loading and home made decorators) of our internal transition path from AngularJS to Angular2.

### Work In Progress

This is a work in progress.

Remaining steps are :
- drop systemjs-route-bundler and replace it by systemjs builder (nearly done - need some optimisations)
- migration from jslint to eslint
- migration from Less to SCSS
- add HTML validation
- add client side commit hooks and init script
- inline (source code) documentation

How To
-------------

### Install & Run

1. `npm start`
2. Browse to `http://localhost:9000`

### Test

#### Unit Tests

run `npm test` to launch unit tests

##### Coverage reports

`npm test` automatically generates html and json coverage reports in target/coverage.

However, some mapping issues, due to BabelJS transpilation, still need to be fixed. Thereby, the previously mentioned reports are, for now, related to the ES5 transpiled JS code.
Due to isparta deprecation and issues on it (douglasduteil/isparta#38), istanbul (gotwarlost/istanbul#429) and remap-istanbul (SitePen/remap-istanbul#1), there is still some work in progress on that case.

Related issue : #5.

##### EMFile issue

The `npm test` script could, on some systems, run into a EMFILE error. We use rolaveric/karma-systemjs but you can look at Workiva/karma-jspm#97 for the description of a similar issue, and some resolutions.

#### End to end

run `npm run wd` to launch the webdriver server
then, run `npm run e2e` to launch the e2e tests

### Lint

run `npm run lint` to run jshint

### Distribute

run `npm run release` bundle, cache busting, and minify

Engines
-------------

This project is strongly bind to :
* gulp
* system.js and jspm
* angularjs 1.5
* babel.js
* angular material (at a lower level)

The following engines may be required in the OS for some uses :
* istanbul
* remap-istanbul
* git

### Versions
The project has been tested with the following environment:

- node v5.4.0
- npm v3.5.3
- jspm v0.16.33

Credits
-----------

SDN-AngularJS-Seed is created and maintained by [Sedona](http://www.sedona.fr).

It is available under the MIT Licence, more details in the LICENCE file.

We would like to thanks the authors of the different libraries and bundle
used in this solution.

* SDN-AngularJS-Seed was based on the angular1-systemjs-seed project, from Swimlane
[github:swimlane/angular1-systemjs-seed](https://github.com/swimlane/angular1-systemjs-seed)
