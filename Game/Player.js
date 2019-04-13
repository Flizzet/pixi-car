var Player = {
    playerSprite: undefined,
    leftKey: new keyboard(65),
    rightKey: new keyboard(68),
    velocity: {
        x: 0,
        y: 0
    },
    horizontalSpeed: 4,
    targetLane: 3,

    createPlayer: function () {
        this.playerSprite = new Sprite(resources[ImageURLs.PlayerCar].texture);

        this.resize();

        // Key pressing
        this.leftKey.press = () => {
            if (this.targetLane > 0) {
                this.targetLane--;
            }
        }
        this.rightKey.press = () => {
            if (this.targetLane < Map.lanes.length - 1) {
                this.targetLane++;
            }
        }
    },

    update: function (delta) {
        // Move towards target lane
        if (this.targetLane !== -1) {
            this.velocity.x = (Map.lanes[this.targetLane].x - this.playerSprite.x) / 10;

            this.playerSprite.x += this.velocity.x;
            this.playerSprite.rotation = Math.toRadians(this.velocity.x);
        }
    },

    resize: function () {
        // Size
        var newWidth = app.renderer.width * 0.15;
        var newScale = newWidth / this.playerSprite.width;

        this.playerSprite.width = newWidth;
        this.playerSprite.height = this.playerSprite.height * newScale;

        // Initial position
        this.playerSprite.anchor.x = 0.5;
        this.playerSprite.anchor.y = 0.5;
        this.playerSprite.x = app.renderer.width / 2;
        this.playerSprite.y = app.renderer.height - (app.renderer.height * 0.2);
    }
}
