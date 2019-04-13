//var playerTexture = PIXI.utils.TextureCache["Game/Images/PlayerCar.png"];
//var playerSprite = new PIXI.Sprite(texture);

PIXI.loader
    .add([
        ImageURLs.PlayerCar,
        ImageURLs.DesertBackground
    ])
    .on("progress", loadingProgressHandler)
    .load(setup);


function loadingProgressHandler(loader, resource) {
    console.log("Loading");
    //    console.log("Progress: " + loader.progress + "%");
}
