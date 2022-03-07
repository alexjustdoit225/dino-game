/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1'); 
const c = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800; 
const CANVAS_HEIGHT = canvas.height = 500; 

let obstacles = []; 
let frame = 0; 
 
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

    // collision detection 
    crashWith(otherobj) {

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
    
}
//creates character
const dino = new Dino(); 
//creates obstacle
const block = new Obstacle(); 

let interval = setInterval(animate(), 20);
//stops the game
function stop() {
    clearInterval(interval); 
}
// does something at a given frame rate 
function everyInterval(n) {
    if ((frame / n ) % 1 == 0) {return true}
    return false; 
}
function animate() {
    let x, y; 
    if (dino.crashWith(block)) {
        stop(); 
    } else {
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    c.fillStyle = dino.color; 
    dino.draw();
    c.fillStyle = block.color;  
    block.draw();
    block.move();    
    requestAnimationFrame(animate); 
    }
}
animate(); 