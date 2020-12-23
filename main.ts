//variabili
let Proiettile: Sprite = null
let Alieno: Sprite = null
let Alieno2: Sprite = null
let Personaggio: Sprite = null
let GameOverVar: Sprite = null
let punti = 0
//funzioni
function sparo () {
    Proiettile = sprites.create(img`
        . . . 7 7 . . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        `, SpriteKind.Projectile)
    Proiettile.setPosition(Personaggio.x, Personaggio.y)
    Proiettile.setVelocity(0, -100)
}
function CreaNemico () {
    forever(function() {
        Alieno = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . . . . . 1 . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 f 1 1 1 1 f 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 . 1 1 1 1 1 1 1 1 1 1 . 1 . 
            . 1 . 1 1 1 1 1 1 1 1 1 1 . 1 . 
            . 1 . 1 1 1 1 1 1 1 1 1 1 . 1 . 
            . . . 1 . . . . . . . . 1 . . . 
            . . . . 1 1 1 . . 1 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        Alieno.setPosition(randint(0, 160), 0)
        Alieno.setVelocity(0, 50)
        pause(1000)
})
}
function CreaNemico2 () {
    forever(function() {
        Alieno2 = sprites.create(img`
            . . 1 . . . . 1 . .
            1 . . 1 1 1 1 . . 1
            1 . 1 f 1 1 f 1 . 1
            1 1 1 f 1 1 f 1 1 1
            . 1 1 1 1 1 1 1 1 .
            . 1 1 1 1 1 1 1 1 .
            . 1 . 1 . . 1 . 1 .
            1 1 . . . . . . 1 1
        `, SpriteKind.Enemy)
        Alieno2.setPosition(randint(0, 160), 0)
        Alieno2.setVelocity(0, 50)
        pause(2000)
})
}
function GameOver() {
    GameOverVar = sprites.create(img`
        ................................
        ...cccccccccccccccccccccccccc...
        ..caaaaaaaaaaaaaaaaaaaaaaaaaac..
        .caaaaaaaaaaaaaaaaaaaaaaaaaaaac.
        .caaaa88aaaaaaaaaaaaaaaaaaaaaac.
        .caaaa8988aaaaaaaaaaaaaaaaaaaac.
        .caaaa89998aaaaaaaaaaaaaaaaaaac.
        .caaaa8999988aaaaaaaaaaaaaaaaac.
        .caaaa89999998aaaaaaaaaaaaaaaac.
        .caaaa8999999988aaaaaaaaaaaaaac.
        .caaaa89999999998aaaaaaaaaaaaac.
        .caaaa8999e22299988aaaaaaaaaaac.
        .caaaa899e2222299998aaaaaaaaaac.
        .caaaa89e29999e2999988aaaaaaaac.
        .caaaa89e29999e29999998aaaaaaac.
        .caaaa89e29999e2999999988aaaaac.
        .caaaa89e22222229999999998aaaac.
        .caaaa89e22222229999999998aaaac.
        .caaaa89e29999e2999999988aaaaac.
        .caaaa89e29999e29999988aaaaaaac.
        .caaaa89e29999e299998aaaaaaaaac.
        .caaaa89999999999988aaaaaaaaaac.
        .caaaa899999999998aaaaaaaaaaaac.
        .caaaa89999999988aaaaaaaaaaaaac.
        .caaaa899999988aaaaaaaaaaaaaaac.
        .caaaa8999998aaaaaaaaaaaaaaaaac.
        .caaaa899988aaaaaaaaaaaaaaaaaac.
        .caaaa8988aaaaaaaaaaaaaaaaaaaac.
        .caaaa88aaaaaaaaaaaaaaaaaaaaaac.
        ..caaaaaaaaaaaaaaaaaaaaaaaaaac..
        ...cccccccccccccccccccccccccc...
        ................................
    `, SpriteKind.Food)
    GameOverVar.setPosition(80, 60)
}
//sparo
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    punti++
    console.log(punti)

    
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sparo()
})
forever(function() {
    if (punti >= 10) {
        CreaNemico2()
}
})
//eventi
scene.setBackgroundColor(0)
Personaggio = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
Personaggio.setPosition(80, 110)
controller.moveSprite(Personaggio, 100, 0)
effects.starField.startScreenEffect()
console.log("collisione")
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    game.reset()
})
CreaNemico()