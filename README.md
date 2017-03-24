This contains very basic webpack boilerplate for my personal projects.

Magic going on in here:
  - This feels at least a little like regular web development, where we can pretend that an `index.html` file is the entry point. The javascript file (`index.js`) gets included in the HTML body automagically without any special tags.
  - There's an `npm prepublish` step that creates a custom d3.js v4 bundle (included modules are defined in `lib/d3.bundle.js`); see [this guide](http://alex-r-bigelow.github.io/#D3andBabel) for background as to what's going on here.
  - There's a [hack](http://alex-r-bigelow.github.io/#WebpackSVGTemplates) that imports SVG as an image or a template, depending on whether the filename is `template.svg`.

Setup:
======
    npm install
    npm run prepublish

Development:
============
    webpack-dev-server --progress --colors --watch

Deployment:
===========
    webpack
Bundles everything into `docs/` for use with Github pages
