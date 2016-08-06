This contains very basic webpack boilerplate for my personal projects. The main feature is that it at least feels like regular web development, where we can pretend that an `index.html` file is the entry point. The only magic is the javascript file (`index.js`) gets included in the body automagically without any special tags.

Setup:
======
    npm install

Development:
============
    webpack-dev-server --progress --verbose --colors --watch

Deployment:
===========
    webpack
Bundles everything into `build/`
