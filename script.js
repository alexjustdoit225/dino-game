/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1'); 
const c = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800; 
const CANVAS_HEIGHT = canvas.height = 500; 

let obstacles = []; 
 

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
    // moves block
    move() {
        this.x --; 
    }
    // draws block
    draw() {
        c.fillRect(this.x, this.y, this.width, this.height); 
    }
    // collision detection 
    crashWith() {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
                crash = false;
        }
    return crash;
    }
}
//creates character
const dino = new Dino(); 
//creates obstacle
const block = new Obstacle(); 

let interval = setInterval(animate(), 20);
function stop () {
    clearInterval(interval); 
}

function animate() {
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    c.fillStyle = dino.color; 
    dino.draw();
    c.fillStyle = block.color;  
    block.draw();
    block.move();    
    requestAnimationFrame(animate); 
}
animate(); 