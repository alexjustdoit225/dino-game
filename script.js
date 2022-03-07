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
    }

};

class Obstacle {
    constructor(){
        this.width = 20;
        this.height = 20;
        this.x = canvas.width - this.width;
        this.y  = canvas.height - this.height;
        this.color = 'red';
    }

    move() {
        this.x --; 
    }

    draw() {
        c.fillRect(this.x, this.y, this.width, this.height); 
    }
}
const dino = new Dino(); 

const block = new Obstacle(); 

function animate() {
    c.fillStyle = dino.color; 
    dino.draw();
    c.fillStyle = block.color;  
    block.draw();
    block.move();    
    requestAnimationFrame(animate); 
}
animate(); 