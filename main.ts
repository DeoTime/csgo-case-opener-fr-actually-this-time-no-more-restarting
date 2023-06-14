namespace SpriteKind {
    export const Collectable = SpriteKind.create()
    export const Shop = SpriteKind.create()
    export const Crate = SpriteKind.create()
    export const UncommonCrate = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Crate, function (sprite, otherSprite) {
    game.showLongText("Do you want to buy a CommonCrate for 5 coins?", DialogLayout.Bottom)
    story.showPlayerChoices("ye", "no")
    if (story.checkLastAnswer("ye")) {
        if (wealth >= 5) {
            wealth += -5
            info.setScore(wealth)
            game.showLongText("ok", DialogLayout.Bottom)
            numOfCoinsDuplicated = 2
        }
        if (wealth < 5) {
            game.showLongText("ur too poor", DialogLayout.Bottom)
        }
    } else if (story.checkLastAnswer("no")) {
    	
    }
    pause(1000)
})
function LevelReset () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Collectable)
    sprites.destroyAllSpritesOfKind(SpriteKind.Shop)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shop, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level1`)
    LevelReset()
    BasicCase = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Crate)
    BasicCase.setPosition(39, 42)
    UncommonCase = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b 7 7 7 7 7 7 7 7 7 7 7 7 b . 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b 7 7 7 7 7 c b b c 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b c 7 7 7 7 7 7 7 7 7 7 7 7 c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.UncommonCrate)
    UncommonCase.setPosition(88, 42)
})
function CoinCreation () {
    for (let index = 0; index < numOfCoinsDuplicated; index++) {
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Collectable)
        Coin.setStayInScreen(true)
        characterAnimations.loopFrames(
        Coin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving)
        )
        Coin.x = randint(10, 150)
        Coin.y = randint(50, 120)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectable, function (sprite, otherSprite) {
    wealth += 1
    sprites.destroy(otherSprite)
    pause(100)
    CoinCreation()
})
// Dushroom creation and animation proccess
function DushroomCreation () {
    Dushroom = sprites.create(img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `, SpriteKind.Player)
    controller.moveSprite(Dushroom)
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 3 3 c . . 
        f b c c c d d d b b 3 3 3 3 c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d c d d d d d d b c 3 3 c 
        . c d d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 b c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 b c c c c b b f 
        . c 3 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d c d b c . 
        f 3 c c c d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 3 3 c . . 
        f b c c c d d d b b 3 3 3 3 c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d c d d d d d d b c 3 3 c 
        . c d d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 b c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 b c c c c b b f 
        . c 3 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d c d b c . 
        f 3 c c c d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 1 3 3 3 3 1 b b . . 
        c b b b 1 1 3 3 3 3 3 1 1 b . . 
        c b b b b b 3 3 3 3 3 1 1 b . . 
        f b b b b b b 3 3 3 3 3 3 c . . 
        f b b b b b b 3 3 3 3 3 b b c . 
        f b b b b b b b b 3 3 3 b b b c 
        . c b b b b b b b 1 1 b b b b c 
        . c c b b b b b b 1 1 b b b b f 
        . f d c c b b b b 3 3 b b b b f 
        . f d d d c c b b b b b b b c f 
        . . c d d d d c c b b b b c f f 
        . . . c d d d d c c c c f f f . 
        . . . . c c c f b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b b 1 1 3 3 3 3 3 1 1 b . . 
        c b b b b b 3 3 3 3 3 1 1 b . . 
        f b b b b b 3 3 3 3 3 3 3 c . . 
        f b b b b b b 3 3 3 3 3 3 b c . 
        f b b b b b b b b 3 3 3 b b b c 
        . c b b b b b b b b b b b b b c 
        . c c b b b b b b 1 1 b b b b f 
        . f d c b b b b b 1 1 b b b b f 
        . f d d c c b b b b b b b b b f 
        . . c d d d c c b b b b b b f f 
        . . f c d d d d c c c c f f f . 
        . . f f c c c f b b b f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c c b 1 1 3 3 3 3 3 b b . . 
        c c c b 1 1 1 3 3 3 3 3 1 b . . 
        c c b b b b 3 3 3 3 3 1 1 b . . 
        f b b b b b 3 3 3 3 3 1 1 c . . 
        f b b b b b 3 3 3 3 3 3 3 c c . 
        f b b b b b b b 3 3 3 3 3 b c c 
        . c b b b b b b b b b b b b b c 
        . c b b b b b b b 3 3 b b b b f 
        . f c b b b b b b 1 1 b b b b f 
        . f d c c b b b b 1 1 b b b b f 
        . . c d d c c b b b b b b b f f 
        . . f c d d d c c c c c f f f . 
        . f f b c c c f c f b b f f . . 
        . f d d d b f . . f b b b f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 1 3 3 3 3 1 1 1 b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b b c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 b b b b b b f 
        . c b b 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b 1 1 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 3 3 b b b b c c d f . 
        f c b b b b b b b c c d d d f . 
        f f c b b b b c c d d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . . . b b f c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c f . . 
        . . . . f b b b f c c c f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 1 3 3 3 3 1 1 1 b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b b c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 b b b b b b f 
        . c b b 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b 1 1 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 3 3 b b b b c c d f . 
        f c b b b b b b b c c d d d f . 
        f f c b b b b c c d d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . . . b b f c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c f . . 
        . . . . f b b b f c c c f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Dushroom,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 b c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 b c c c c b b f 
        . c 3 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d c d b c . 
        f 3 c c c d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
}
function ShopCreation () {
    Shop2 = sprites.create(img`
        ................2e22e2.................
        .............222ee22e2222..............
        ..........222e222e22ee22e222...........
        ........e2e22eee2e22e2eee22e2e.........
        .....eeee2e22e222e22e222e22e2eeee......
        ...22e22e2eeee222e22e222eeee2e22e22....
        .22eee22e2e22e22ee22ee22e22e2e22eee22..
        6eee2e22e2e22e222e22e222e22e2e22e2eee6c
        622e2eeee2e22eee2e22e2eee22e2eeee2e2266
        622e2e22e2eeee222e22e222eeee2e22e2e2266
        c22eee22e2e22e22ee22ee22e22e2e22eee22cc
        622e2e22eee22e222e22e222e22eee22e2e226c
        6eee2e22e2e22e222e22e222e22e2e22e2eee66
        622e2eeee2e22e222e22e222e22e2eeee2e2266
        622eee22e2eeee22ee22ee22eeee2e22eee226c
        622e2e22eee22e222e22e222e22eee22e2e2266
        6eee2e22e2e22e222e22e222e22e2e22e2eee66
        c22e2eeee2e22e222e22e222e22e2eeee2e22cc
        622e2e22e2e22e22ee22ee22e22e2e22e2e226c
        622eee22e2e22eeec6666ceee22e2e22eee2266
        622e2e22e2eeecc66666666cceee2e22e2e2266
        622e2eeecc6666cc444444cc6666cceee2e226c
        622e2cc6666cc644444444446cc6666cc2e2266
        622c6666cc644444444444444446cc6666c2266
        cc666ccc644bcc6666666666ccb446ccc666ccc
        ccccc666666cb444444444444bc666666cccccc
        4444444444c4444444444444444c44444444444
        cb44444444b4111111111111114b44444444bc6
        6644444444116eeeeeeeeeeee61144444444666
        6e222222e416e4e4e44e4444ee614e222222e66
        6eeeeeeee416e4e4e44e4444ee614eeeeeeee66
        6edddddde466f4e4ffffff44ee664edddddde66
        6edfdffde466f4effffffff4ee664edffdfde66
        6edcdccde466f4effffffffeee664edccdcde66
        6edddddde466f4eeeeeeeeeeee664edddddde66
        6edcdccde466e4e4e44e4444ee664edccdcde66
        666666666466e4e4e44e44eeee664666666666c
        664444444466e4e4e44e44fffe664444444466c
        c64ee4eee466f4e4e44e4444fe664eee4ee46c.
        .c4ee4eee466f4e4e44e44ffee664eee4ee4c..
        ..6444444466f4e4e44e4444ee6644444446...
        ...6eee44466f4e4e44e4444ee66444eee6....
        `, SpriteKind.Shop)
    Shop2.setPosition(77, 16)
}
let Shop2: Sprite = null
let Dushroom: Sprite = null
let Coin: Sprite = null
let UncommonCase: Sprite = null
let BasicCase: Sprite = null
let wealth = 0
let numOfCoinsDuplicated = 0
numOfCoinsDuplicated = 1
ShopCreation()
DushroomCreation()
CoinCreation()
tiles.setCurrentTilemap(tilemap`level1`)
forever(function () {
    info.setScore(wealth)
})
