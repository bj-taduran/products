# Node - Angular Product Catalog Application

## Overview

This application is a simple implementation of Node.js and Angular for a product catalog requirement.
Some features and functionalities contained herein are RESTful api, pagination, unit tests and csrf-protection.

## Prerequisites

### Git
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

### Angular JS
- https://angularjs.org/

## Steps to Execute the Application

1. Clone the migo-products repo
2. Install node js (version 4.4.0)
3. Go to "products" root folder of the repo
4. $ npm install
5. $ npm install -g bower
6. $ bower install
7. $ node server/app.js
8. Open browser and go to #http://127.0.0.1:8081/


## Workings of the application

- The application's RESTful properties were base on [express-tutorials] implementation.
- There is no database setup on the backend. Data is purely an instance of an object in the server.
- Front end is an angular implementation that works well in modularizing reusable and repeatable components of the front end.
- [TDD](http://agiledata.org/essays/tdd.html) was used for both backend and frontend development.

## Application Directory Layout

    public/             --> all of the files that will be exposed
      img/               
        books/          --> thumbnails for books
        games/          --> thumbnails for games
        music/          --> thumbnails for music
        shows/          --> thumbnails for shows
      index.html        --> THE DEFAULT PAGE for domain root path
    client/             --> contains the scripts that powers the client
      app.js            --> declaration of modules and filters and how directives are used: Angular JS
      app.spec.js       --> unit tests
    bower_components/   --> assets, scripts and libraries we are using through /components path
      angular/
      bootstrap/
      jquery/
    server/             --> contains all codes required in the server side
      models/
        products.json   --> represents the datasource
      api.js            --> processor of the client requests and sends responses back
      app.js            --> MAIN SCRIPT that routes requests to the api.js script 
    bower.json          --> contains the application dependencies, mostly from the frontend side
    karma.conf.js       --> contains configuration and app information that testing needs
    package.json        --> contains the application dependencies, mostly from the server side

## Contact

For more information you may email me at bj.taduran@gmail.com

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[express-tutorials]: http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
[DI]: http://docs.angularjs.org/#!guide.di
[directive]: http://docs.angularjs.org/#!angular.directive
[$filter]: http://docs.angularjs.org/#!angular.Array.filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ng:repeat]: http://docs.angularjs.org/#!angular.widget.@ng:repeat
[ng:view]: http://docs.angularjs.org/#!angular.widget.ng:view
[node-mac]: http://code.google.com/p/rudix/downloads/detail?name=node-0.4.0-0.dmg&can=2&q=
[node-windows]: http://node-js.prcn.co.cc/
[node-generic]: https://github.com/joyent/node/wiki/Installation
[$resource]: http://docs.angularjs.org/#!angular.service.$resource
[$rouet]: http://docs.angularjs.org/#!angular.service.$route
[service]: http://docs.angularjs.org/#!angular.service
[$xhr]: http://docs.angularjs.org/#!angular.service.$xhr