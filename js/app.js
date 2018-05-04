// Enemies our player must avoid
let Enemy = function(x, y, u) {
    this.x = x;
    this.y = y;
    this.u = u;
    this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
    this.x += this.u * dt;

    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }

    // Check for collision between player and enemies
    if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let Player = function(x, y, u) {
    this.x = x;
    this.y = y;
    this.u = u;
    this.sprite = 'images/char-boy.png';
};


Player.prototype.update = function() {
    // Lock player inside the canvas
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // Check if the player reached the end
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= this.u + 50;
            break;
        case 'up':
            this.y -= this.u + 30;
            break;
        case 'right':
            this.x += this.u + 50;
            break;
        case 'down':
            this.y += this.u + 30;
            break;
    }
};

let allEnemies = [];
let enemyPosition = [60, 140, 220];
let player = new Player(200, 380, 50);
let enemy;

enemyPosition.forEach(function(pos) {
    enemy = new Enemy(0, pos, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
