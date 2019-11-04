import {Canvas} from "./modules/Canvas.js";
import {$} from "./modules/id.js";
import {Shape} from "./modules/shapesSpiral.js";

let shapes = [];
var canvas;

var redraw = function () {      
    canvas.clear();     // clear canvas
    canvas.prep();      // prep canvas with background color
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].move();
        shapes[i].draw();
    }
}

var repeater = function () {
    setInterval(redraw, 1);
}

var initialize = function () {
    canvas = Object.create(Canvas);
    canvas.init('mycv', 'grey');
    let shape = Object.create(Shape);
    shape.init(canvas, 0, 0, 50, 50, 'blue');
    shapes.push(shape);
    repeater();
}

window.addEventListener('load', initialize);