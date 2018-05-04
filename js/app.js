// Enemies our player must avoid
let Enemy = function(x, y, u) {
    this.x = x;
    this.y = y;
    this.u = u;

    this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
    this.sprite += this.u * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let Player = function(x, y, u) {
    this.x = x;
    this.y = y;
    this.u = u;
    this.sprite = 'images/char-cat-girl.png';
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

Player.prototype.handleInput = function(keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= this.u + 30;
            break;
        case 'up':
            this.y -= this.u + 30;
            break;
        case 'right':
            this.x += this.u + 30;
            break;
        case 'down':
            this.y += this.u + 30;
            break;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
