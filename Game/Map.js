class Lane {
    constructor() {
        this.x = 0;
    }

    showLine() {
        let line = new PIXI.Graphics();
        line.lineStyle(2, 0xD5402B, 1);

        line.position.x = this.x;
        line.position.y = app.renderer.height / 2;

        line.pivot.set(this.x, 0);
        line.moveTo(this.x, 0);
        line.lineTo(this.x, 300);

        app.stage.addChild(line);
    }
}

var Map = {
    backgrounds: new Array(3),
    backgroundSpeed: 5,
    lanes: new Array(4),
    topBackgroundY: 0,

    createMap: function () {
        // Create background sprite
        for (var i = 0; i < this.backgrounds.length; i++) {
            this.backgrounds[i] = new Sprite(resources[ImageURLs.DesertBackground].texture);
        }

        // Resize
        this.resize();
    },

    addLanes: function () {
        // Add lanes
        var laneSpacing = app.renderer.width / 5;
        var initialX = app.renderer.width / 2.45;
        initialX /= 2;
        for (i = 0; i < this.lanes.length; i++) {
            let l = new Lane();
            l.x = initialX + (laneSpacing * i);
            console.log(i);
            l.showLine();
            this.lanes[i] = l;
        }
    },

    update: function (delta) {
        // Move background pieces
        for (var i in this.backgrounds) {
            var bg = this.backgrounds[i];
            if (bg.y > app.renderer.height) {
                bg.y = this.topBackgroundY;
            }
            bg.y += this.backgroundSpeed;
        }
    },

    resize: function () {
        // Size
        var newWidth = app.renderer.width;
        var newScale = newWidth / this.backgrounds[0].width;

        for (var i in this.backgrounds) {
            var bg = this.backgrounds[i];
            bg.width = newWidth;
            bg.height = bg.height * newScale;

            // Position
            bg.x = 0;
            bg.y = 0 - (bg.height * i);
        }
        this.topBackgroundY = this.backgrounds[2].y;
    }
}
