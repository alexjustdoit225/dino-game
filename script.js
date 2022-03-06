/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1'); 
const c = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800; 
const CANVAS_HEIGHT = canvas.height = 500; 

class Dino {
    constructor() {
        this.width = 20; 
        this.height = 50; 
        this.color = '#8338ec'; 
        this.x = 0; 
        this.y = canvas.height - this.height; 
    }

    update() {

    }

    draw() {
        c.fillRect(this.x, this.y, this.width, this.height); 
        c.fillStyle = this.color; 
    }

};

const dino = new Dino(); 

function animate() {
    dino.draw();  
    requestAnimationFrame(animate); 
}
animate(); 