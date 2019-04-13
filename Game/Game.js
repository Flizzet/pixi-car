// Creates application
const app = new PIXI.Application({
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    antialias: false,
    transparent: false,
    resolution: 1,
    roundPixels: true
});
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;


var gameScene = new Container();
var gameOverScene = new Container();

// Creates canvas element, pushes to DOM
document.body.appendChild(app.view);

// Initial calls
resize();
styleRenderer();

// Initial calls
function setup() {

    // Start update
    app.ticker.add(delta => update(delta));

    // Hide game over scene
    gameOverScene.visible = false;

    // Create Sprites
    Map.createMap();
    Player.createPlayer();

    // Add Sprites to Stage in order
    for (var i in Map.backgrounds) {
        app.stage.addChild(Map.backgrounds[i]);
    }
    app.stage.addChild(Player.playerSprite);

    Map.addLanes();
}

function update(delta) {
    Map.update(delta);
    Player.update(delta);
}

// Resize method
function resize() {
    // Calculate new dimensions
    var height = window.innerHeight;
    var width = height / GAME_RATIO;

    // Apply new dimensions
    app.renderer.resize(width, height);
}
// Resize listener
window.onresize = resize;

// Style/position app
function styleRenderer() {
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.left = '50%';
    app.renderer.view.style.right = '50%';
    app.renderer.view.style.transform = 'translateX(-50%)';
    app.renderer.roundPixels = true;
}
