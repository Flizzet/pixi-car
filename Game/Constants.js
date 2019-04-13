const ImageURLs = {
    PlayerCar: "Game/Images/PlayerCar.png",
    DesertBackground: "Game/Images/DesertBackground.png"
}

const GAME_WIDTH = 480,
    GAME_HEIGHT = 800,
    GAME_RATIO = 1.666;

const
    Container = PIXI.Container,
    resources = PIXI.loader.resources,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;
