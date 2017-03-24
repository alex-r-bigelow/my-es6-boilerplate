import * as d3 from 'd3';
import template from './template.svg';

import './style.scss';

function resize () {
  let bounds = d3.select('#container').node().getBoundingClientRect();
  let svg = d3.select('svg');
  svg.attrs({
    width: bounds.width,
    height: bounds.height
  });
}

function setup () {
  d3.select('#container').html(template);
  resize();
}
window.onload = setup;
window.onresize = resize;
