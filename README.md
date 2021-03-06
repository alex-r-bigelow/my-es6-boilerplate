This contains very basic webpack boilerplate for my personal projects.

I have some more involved boilerplates that are less bare-bones; check out the `extra-goodies` branch, or even the `mure-boilerplate` if you're wanting to build a Mure app.

Magic going on in here:
  - This feels at least a little like regular web development, where we can pretend that an `index.html` file is the entry point. The javascript file (`index.js`) gets included in the HTML body automagically without any special tags.
  - There's an `npm prepublish` step that creates a custom d3.js v4 bundle (included modules are defined in `lib/d3.bundle.js`); see [this guide](http://alex-r-bigelow.github.io/#D3andBabel) for background as to what's going on here.
  - There's a [hack](http://alex-r-bigelow.github.io/#WebpackSVGTemplates) that imports SVG as an image or a template, depending on whether the filename is `template.svg`.

Setup:
======
    npm install

Development:
============
    webpack-dev-server --progress

Deployment:
===========
    webpack
Bundles everything into `docs/` for use with Github pages
