This contains very basic webpack boilerplate for my personal projects. The main feature is that it at least feels like regular web development, where we can pretend that an `index.html` file is the entry point. The only magic is the javascript file (`index.js`) gets included in the body automagically without any special tags.

I've also added my [hack](http://alex-r-bigelow.github.io/#WebpackSVGTemplates) that imports SVG as an image or a template, depending on whether the filename is `template.svg`.

Setup:
======
    npm install

Development:
============
    webpack-dev-server --progress --colors --watch

Deployment:
===========
    webpack
Bundles everything into `docs/`
