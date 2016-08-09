Sedona angularjs seed
================================

Current state
-------------------

This seed currently match the step 2 (Module Loading and home made decorators) of our internal transition path from AngularJS to Angular2.

### Work In Progress

This is a work in progress.

Remaining steps are :
- drop systemjs-route-bundler and replace it by systemjs builder (nearly done - need some optimisations)
- add client side commit hooks and init script
- inline (source code) documentation

How To
-------------

### Start a new project from this seed

To start a new project from this seed, follow the following steps :

1. clone the desired [release](https://github.com/Sedona-Solutions/sdn-angularjs-seed/releases)
    ```
    git clone --branch=<release> --depth=1 -o sdn-angular-seed \
        https://github.com/Sedona-Solutions/sdn-angularjs-seed.git <appFolder>
    ```
    See the CHANGELOG.md file for more informations about release.

    Use "master" instead of the release number if you want to start from the last commit (*at your own risks*).

2. cd to the <appFodler> folder and run ``npm install``

3. change the project's data in the package.json file

4. change the app title in app/index.html and the app name in app/app.component.js > @Module > name.

5. remove all the README content

### Start browserSync server

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

run `npm run lint` to run eslint

### Distribute

run `npm run release` bundle, cache busting, and minify

Conventions and requirements
----------------

Due to the absence of the [angular-transition-sugar](https://github.com/Sedona-solutions/angular-transition-sugar)
library in this projet, and the use of system.js, some coding conventions are **very importants** to follow and understand !

Simply follow the existing files in this projet to do so.

### Modules

When a module can be lazy loaded, you need :
 * to export the module definition object (ex: AdminModule) at first
 * to export the "angular.module" return has the "module"
variable
 * to define a "main component" for this module thanks to the "component" property of the definition object (ex: AdminModule.component)

We recommend to always follow this rules, even if your module doesn't need to be lazy loaded.

### Components

When defining a new component, you should :
1. define and export the component's controller has an ES6 class
2. add a `$$name` string property to this class, which you later use as the first parameter for the `angularModule.component` function,
   when registering the component in the module file
3. also add a `$$config` object property to this class, which will represent the component definition object (ie. the
second argument for the previously mentioned angular function)

### Routes

Some methods from [angular-transition-sugar](https://github.com/Sedona-solutions/angular-transition-sugar) have been hadded
to the `common/utils` folder of this project in order to simply the definitions of new routes using angular ui-router.

Accordingly, in order to define new routes, you'll need to :
0. import { generateRoutesConfigurations } from 'common/utils/routes';
1. define (and export) a `ROUTES` array in the module definition file, which will be an array of "route definition objects"
2. call the `generateRoutesConfiguration` with the previously definied array
3. use each methods into the returned object has argument to a `angularModule.config` function call

Engines
-------------

This project is strongly bound to :
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

We would like to thank the authors of the different libraries and bundle
used in this solution.

* SDN-AngularJS-Seed was based on the angular1-systemjs-seed project, from Swimlane
[github:swimlane/angular1-systemjs-seed](https://github.com/swimlane/angular1-systemjs-seed)
