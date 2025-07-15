namespace SpriteKind {
    export const Seta = SpriteKind.create()
    export const monedaBlock = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const otro = SpriteKind.create()
    export const antyGumba = SpriteKind.create()
    export const Flag = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Merio)
    Merio.setImage(assets.image`Mario Derecha`)
    dir = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Merio)
    Merio.setImage(assets.image`Mario Iz`)
    dir = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Block, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Seta = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e 4 e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e 4 e e e . . . 
        . . e e e e e 4 e e e e e e . . 
        . e e e e 4 e e e e e e e 4 e . 
        . e e 4 e e 4 e e 4 e 4 e e e . 
        . e e e e e e e e e e e e e e . 
        . . . . . d c d d d d . . . . . 
        . . . . . d d d d d c . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d d c d d d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . c d d d c d . . . . . 
        . . . b b b b b b b b b b . . . 
        . . . b b b b b b b b b b . . . 
        `, SpriteKind.Seta)
    tiles.placeOnTile(Seta, otherSprite.tilemapLocation())
    tiles.setTileAt(otherSprite.tilemapLocation(), assets.tile`transparency16`)
    tiles.setWallAt(otherSprite.tilemapLocation(), false)
    Seta.vy += -200
    Seta.setVelocity(50, 0)
    Seta.ay = 200
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.antyGumba, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    sprites.destroy(sprite, effects.disintegrate, 200)
    info.changeScoreBy(100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Merio,
    [img`
        . . . . 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 d d 
        . . . e e e d d d f d . . d d 
        . . e d e d d d d f d d d 2 2 
        . . e d e e d d d d f d d d 2 
        . . . e d d d d d f f f f 2 2 
        . . . . d d d d d d d 2 2 2 . 
        . . . 2 2 8 2 2 8 2 2 2 2 2 . 
        . . 2 2 2 2 8 2 2 8 2 2 . . . 
        2 2 2 2 2 2 8 8 8 5 2 . . . . 
        d d 2 2 2 2 5 8 8 8 2 . . e e 
        d d . . 8 8 8 8 8 8 8 8 8 e e 
        . e e 8 8 8 8 8 8 8 8 8 8 e e 
        . e e 8 8 8 8 8 8 . . . . . . 
        . e e . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . e e e d d d f d . . . . 
        . . e d e d d d d f d d d . . 
        . . e d e e d d d d f d d d . 
        . . . e d d d d d f f f f . . 
        . . . . d d d d d d d . . . . 
        . . . 2 2 8 2 2 2 2 2 . . . . 
        . . 2 2 2 8 2 2 8 2 2 2 . . . 
        . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
        . d d 2 8 5 8 8 5 8 2 d d . . 
        . d d d 8 8 8 8 8 8 d d d . . 
        . d d 8 8 8 8 8 8 8 8 d d . . 
        . . . 8 8 8 . . 8 8 8 . . . . 
        . . e e e . . . . e e e . . . 
        . e e e e . . . . e e e e . . 
        `,img`
        . . . . 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . e e e d d d f d . . . . 
        d d e d e d d d d f d d d . . 
        d d e d e e d d d d f d d d . 
        2 2 . e d d d d d f f f f . . 
        2 2 . . d d d d d d d . . . . 
        2 2 2 2 2 8 2 2 8 2 2 2 2 . . 
        . 2 2 2 2 2 8 2 2 8 2 2 2 . . 
        . . . . 2 2 8 8 8 5 2 2 2 . . 
        . . . . 2 2 5 8 8 8 2 d d . . 
        e e 8 8 8 8 8 8 8 8 8 d d . . 
        e e 8 8 8 8 8 8 8 8 8 . . e e 
        e e . . . . . 8 8 8 8 8 8 e e 
        . . . . . . . 8 8 8 8 8 8 e e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . e e e d d d f d . . . . 
        . . e d e d d d d f d d d . . 
        . . e d e e d d d d f d d d . 
        . . . e d d d d d f f f f . . 
        . . . . d d d d d d d . . . . 
        . . . 2 2 8 2 2 2 2 2 . . . . 
        . . 2 2 2 8 2 2 8 2 2 2 . . . 
        . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
        . d d 2 8 5 8 8 5 8 2 d d . . 
        . d d d 8 8 8 8 8 8 d d d . . 
        . d d 8 8 8 8 8 8 8 8 d d . . 
        . . . 8 8 8 . . 8 8 8 . . . . 
        . . e e e . . . . e e e . . . 
        . e e e e . . . . e e e e . . 
        `],
    50,
    true
    )
    dir = 2
    currentDir = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Merio,
    [img`
        . . . . . . 2 2 2 2 2 . . . . 
        d d 2 2 2 2 2 2 2 2 2 2 . . . 
        d d . . d f d d d e e e . . . 
        2 2 d d d f d d d d e d e . . 
        2 d d d f d d d d e e d e . . 
        2 2 f f f f d d d d d e . . . 
        . 2 2 2 d d d d d d d . . . . 
        . 2 2 2 2 2 8 2 2 8 2 2 . . . 
        . . . 2 2 8 2 2 8 2 2 2 2 . . 
        . . . . 2 5 8 8 8 2 2 2 2 2 2 
        e e . . 2 8 8 8 5 2 2 2 2 d d 
        e e 8 8 8 8 8 8 8 8 8 . . d d 
        e e 8 8 8 8 8 8 8 8 8 8 e e . 
        . . . . . . 8 8 8 8 8 8 e e . 
        . . . . . . . . . . . . e e . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . d f d d d e e e . . . 
        . . d d d f d d d d e d e . . 
        . d d d f d d d d e e d e . . 
        . . f f f f d d d d d e . . . 
        . . . . d d d d d d d . . . . 
        . . . . 2 2 2 2 2 8 2 2 . . . 
        . . . 2 2 2 8 2 2 8 2 2 2 . . 
        . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
        . . d d 2 8 5 8 8 5 8 2 d d . 
        . . d d d 8 8 8 8 8 8 d d d . 
        . . d d 8 8 8 8 8 8 8 8 d d . 
        . . . . 8 8 8 . . 8 8 8 . . . 
        . . . e e e . . . . e e e . . 
        . . e e e e . . . . e e e e . 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . d f d d d e e e . . . 
        . . d d d f d d d d e d e d d 
        . d d d f d d d d e e d e d d 
        . . f f f f d d d d d e . 2 2 
        . . . . d d d d d d d . . 2 2 
        . . 2 2 2 2 8 2 2 8 2 2 2 2 2 
        . . 2 2 2 8 2 2 8 2 2 2 2 2 . 
        . . 2 2 2 5 8 8 8 2 2 . . . . 
        . . d d 2 8 8 8 5 2 2 . . . . 
        e e d d 8 8 8 8 8 8 8 8 8 e e 
        e e 8 8 8 8 8 8 8 8 8 8 8 e e 
        e e 8 8 8 8 8 8 8 . . . . e e 
        . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . d f d d d e e e . . . 
        . . d d d f d d d d e d e . . 
        . d d d f d d d d e e d e . . 
        . . f f f f d d d d d e . . . 
        . . . . d d d d d d d . . . . 
        . . . . 2 2 2 2 2 8 2 2 . . . 
        . . . 2 2 2 8 2 2 8 2 2 2 . . 
        . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
        . . d d 2 8 5 8 8 5 8 2 d d . 
        . . d d d 8 8 8 8 8 8 d d d . 
        . . d d 8 8 8 8 8 8 8 8 d d . 
        . . . . 8 8 8 . . 8 8 8 . . . 
        . . . e e e . . . . e e e . . 
        . . e e e e . . . . e e e e . 
        `],
    50,
    true
    )
    dir = 1
    currentDir = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canShoot > 2) {
        canShoot = 0
        if (currentDir == 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . 2 2 2 2 2 2 . . . . . 
                . . . . 2 2 2 2 4 2 2 2 . . . . 
                . . . 2 2 2 4 4 4 2 2 1 2 . . . 
                . . . 2 2 2 4 4 4 4 2 2 2 2 . . 
                . . . 2 2 4 4 5 5 5 4 2 2 2 . . 
                . . . 2 2 4 4 5 5 5 4 2 2 2 . . 
                . . . 2 2 4 4 5 5 4 4 2 2 . . . 
                . . . . 2 2 4 4 4 4 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Merio, 140, 0)
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . 2 2 2 2 2 2 . . . . . 
                . . . . 2 2 2 2 4 2 2 2 . . . . 
                . . . 2 2 2 4 4 4 2 2 1 2 . . . 
                . . . 2 2 2 4 4 4 4 2 2 2 2 . . 
                . . . 2 2 4 4 5 5 5 4 2 2 2 . . 
                . . . 2 2 4 4 5 5 5 4 2 2 2 . . 
                . . . 2 2 4 4 5 5 4 4 2 2 . . . 
                . . . . 2 2 4 4 4 4 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Merio, -140, 0)
        }
        projectile.setScale(1.2, ScaleAnchor.Middle)
        projectile.y += -5
        animation.runImageAnimation(
        barra,
        [img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `],
        52,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Final`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    for (let index = 0; index <= 13; index++) {
        tiles.setTileAt(tiles.getTileLocation(199, 0), assets.tile`transparency16`)
    }
    Merio.follow(Final, 120)
    scene.cameraFollowSprite(Final)
    Final.ay = 50
    Win = 1
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        GumbaDir(50, sprite)
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        GumbaDir(-50, sprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.antyGumba, function (sprite, otherSprite) {
    if (canDie > 3) {
        otherSprite.setImage(img`
            ................
            ................
            ................
            ................
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999229999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            ................
            ................
            ................
            ................
            `)
        otherSprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monedaBlock, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(100)
    moneda = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(moneda, otherSprite.tilemapLocation())
    tiles.setTileAt(otherSprite.tilemapLocation(), assets.tile`transparency16`)
    tiles.setWallAt(otherSprite.tilemapLocation(), false)
    moneda.setVelocity(-70, -70)
    moneda.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Merio.tileKindAt(TileDirection.Bottom, assets.tile`Suelo`) || (Merio.tileKindAt(TileDirection.Bottom, assets.tile`Ladrillo`) || (Merio.tileKindAt(TileDirection.Bottom, assets.tile`Tunel10`) || (Merio.tileKindAt(TileDirection.Bottom, assets.tile`Tunel11`) || (Merio.tileKindAt(TileDirection.Bottom, assets.tile`LuckyBlock`) || Merio.tileKindAt(TileDirection.Bottom, assets.tile`suelo2`)))))) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        Merio.vy += salto
        if (dir == 1) {
            animation.runImageAnimation(
            Merio,
            [img`
                . . . . . . 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . d f d d d e e e . . . 
                . . d d d f d d d d e d e . . 
                . d d d f d d d d e e d e . . 
                . . f f f f d d d d d e . . . 
                . . . . d d d d d d d . . . . 
                . . . . 2 2 2 2 2 8 2 2 . . . 
                . . . 2 2 2 8 2 2 8 2 2 2 . . 
                . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
                . . d d 2 8 5 8 8 5 8 2 d d . 
                . . d d d 8 8 8 8 8 8 d d d . 
                . . d d 8 8 8 8 8 8 8 8 d d . 
                . . . . 8 8 8 . . 8 8 8 . . . 
                . . . e e e . . . . e e e . . 
                . . e e e e . . . . e e e e . 
                `,img`
                . . . . . . 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . d f d d d e e e . . . 
                1 1 d d d f d d d d e d e d d 
                1 1 d d f d d d d e e d e d d 
                1 2 f f f f d d d d d e . 2 d 
                2 2 . . d d d d d d d . . 2 2 
                2 2 2 2 2 2 2 2 2 8 2 2 2 2 2 
                . . 2 2 2 2 8 2 2 8 2 2 2 2 . 
                . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
                . . . . . 8 5 8 8 5 8 . . . . 
                . . e . . 8 8 8 8 8 8 . . e . 
                . . e e 8 8 8 8 8 8 8 8 e e . 
                . . e e 8 8 8 . . 8 8 8 e e . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            pause(200)
            animation.runImageAnimation(
            Merio,
            [img`
                . . . . . . 2 2 2 2 2 . . . . 
                d d 2 2 2 2 2 2 2 2 2 2 . . . 
                d d . . d f d d d e e e . . . 
                2 2 d d d f d d d d e d e . . 
                2 d d d f d d d d e e d e . . 
                2 2 f f f f d d d d d e . . . 
                . 2 2 2 d d d d d d d . . . . 
                . 2 2 2 2 2 8 2 2 8 2 2 . . . 
                . . . 2 2 8 2 2 8 2 2 2 2 . . 
                . . . . 2 5 8 8 8 2 2 2 2 2 2 
                e e . . 2 8 8 8 5 2 2 2 2 d d 
                e e 8 8 8 8 8 8 8 8 8 . . d d 
                e e 8 8 8 8 8 8 8 8 8 8 e e . 
                . . . . . . 8 8 8 8 8 8 e e . 
                . . . . . . . . . . . . e e . 
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                `,img`
                . . . . . . 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . d f d d d e e e . . . 
                . . d d d f d d d d e d e . . 
                . d d d f d d d d e e d e . . 
                . . f f f f d d d d d e . . . 
                . . . . d d d d d d d . . . . 
                . . . . 2 2 2 2 2 8 2 2 . . . 
                . . . 2 2 2 8 2 2 8 2 2 2 . . 
                . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
                . . d d 2 8 5 8 8 5 8 2 d d . 
                . . d d d 8 8 8 8 8 8 d d d . 
                . . d d 8 8 8 8 8 8 8 8 d d . 
                . . . . 8 8 8 . . 8 8 8 . . . 
                . . . e e e . . . . e e e . . 
                . . e e e e . . . . e e e e . 
                `,img`
                . . . . . . 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . d f d d d e e e . . . 
                . . d d d f d d d d e d e d d 
                . d d d f d d d d e e d e d d 
                . . f f f f d d d d d e . 2 2 
                . . . . d d d d d d d . . 2 2 
                . . 2 2 2 2 8 2 2 8 2 2 2 2 2 
                . . 2 2 2 8 2 2 8 2 2 2 2 2 . 
                . . 2 2 2 5 8 8 8 2 2 . . . . 
                . . d d 2 8 8 8 5 2 2 . . . . 
                e e d d 8 8 8 8 8 8 8 8 8 e e 
                e e 8 8 8 8 8 8 8 8 8 8 8 e e 
                e e 8 8 8 8 8 8 8 . . . . e e 
                . . . . . . . . . . . . . . . 
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                `,img`
                . . . . . . 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . d f d d d e e e . . . 
                . . d d d f d d d d e d e . . 
                . d d d f d d d d e e d e . . 
                . . f f f f d d d d d e . . . 
                . . . . d d d d d d d . . . . 
                . . . . 2 2 2 2 2 8 2 2 . . . 
                . . . 2 2 2 8 2 2 8 2 2 2 . . 
                . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
                . . d d 2 8 5 8 8 5 8 2 d d . 
                . . d d d 8 8 8 8 8 8 d d d . 
                . . d d 8 8 8 8 8 8 8 8 d d . 
                . . . . 8 8 8 . . 8 8 8 . . . 
                . . . e e e . . . . e e e . . 
                . . e e e e . . . . e e e e . 
                `],
            50,
            true
            )
        } else if (dir == 2) {
            animation.runImageAnimation(
            Merio,
            assets.animation`Salto Der`,
            50,
            false
            )
            pause(200)
            animation.runImageAnimation(
            Merio,
            [img`
                . . . . 2 2 2 2 2 . . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 d d 
                . . . e e e d d d f d . . d d 
                . . e d e d d d d f d d d 2 2 
                . . e d e e d d d d f d d d 2 
                . . . e d d d d d f f f f 2 2 
                . . . . d d d d d d d 2 2 2 . 
                . . . 2 2 8 2 2 8 2 2 2 2 2 . 
                . . 2 2 2 2 8 2 2 8 2 2 . . . 
                2 2 2 2 2 2 8 8 8 5 2 . . . . 
                d d 2 2 2 2 5 8 8 8 2 . . e e 
                d d . . 8 8 8 8 8 8 8 8 8 e e 
                . e e 8 8 8 8 8 8 8 8 8 8 e e 
                . e e 8 8 8 8 8 8 . . . . . . 
                . e e . . . . . . . . . . . . 
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                `,img`
                . . . . 2 2 2 2 2 . . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . 
                . . . e e e d d d f d . . . . 
                . . e d e d d d d f d d d . . 
                . . e d e e d d d d f d d d . 
                . . . e d d d d d f f f f . . 
                . . . . d d d d d d d . . . . 
                . . . 2 2 8 2 2 2 2 2 . . . . 
                . . 2 2 2 8 2 2 8 2 2 2 . . . 
                . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
                . d d 2 8 5 8 8 5 8 2 d d . . 
                . d d d 8 8 8 8 8 8 d d d . . 
                . d d 8 8 8 8 8 8 8 8 d d . . 
                . . . 8 8 8 . . 8 8 8 . . . . 
                . . e e e . . . . e e e . . . 
                . e e e e . . . . e e e e . . 
                `,img`
                . . . . 2 2 2 2 2 . . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . 
                . . . e e e d d d f d . . . . 
                d d e d e d d d d f d d d . . 
                d d e d e e d d d d f d d d . 
                2 2 . e d d d d d f f f f . . 
                2 2 . . d d d d d d d . . . . 
                2 2 2 2 2 8 2 2 8 2 2 2 2 . . 
                . 2 2 2 2 2 8 2 2 8 2 2 2 . . 
                . . . . 2 2 8 8 8 5 2 2 2 . . 
                . . . . 2 2 5 8 8 8 2 d d . . 
                e e 8 8 8 8 8 8 8 8 8 d d . . 
                e e 8 8 8 8 8 8 8 8 8 . . e e 
                e e . . . . . 8 8 8 8 8 8 e e 
                . . . . . . . 8 8 8 8 8 8 e e 
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                `,img`
                . . . . 2 2 2 2 2 . . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . 
                . . . e e e d d d f d . . . . 
                . . e d e d d d d f d d d . . 
                . . e d e e d d d d f d d d . 
                . . . e d d d d d f f f f . . 
                . . . . d d d d d d d . . . . 
                . . . 2 2 8 2 2 2 2 2 . . . . 
                . . 2 2 2 8 2 2 8 2 2 2 . . . 
                . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
                . d d 2 8 5 8 8 5 8 2 d d . . 
                . d d d 8 8 8 8 8 8 d d d . . 
                . d d 8 8 8 8 8 8 8 8 d d . . 
                . . . 8 8 8 . . 8 8 8 . . . . 
                . . e e e . . . . e e e . . . 
                . e e e e . . . . e e e e . . 
                `],
            50,
            true
            )
        } else {
            animation.runImageAnimation(
            Merio,
            assets.animation`Salto Der`,
            50,
            false
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`anti_der`, function (sprite, location) {
    GumbaDir(-50, sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.antyGumba, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Seta, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Merio.setScale(1.5, ScaleAnchor.Bottom)
    info.changeLifeBy(1)
    info.changeScoreBy(200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 100)
    info.changeScoreBy(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`morision`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`anti_iz0`, function (sprite, location) {
    GumbaDir(50, sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (info.life() == 1 && canDie > 3) {
        info.changeLifeBy(-1)
    } else {
        Merio.setScale(1, ScaleAnchor.Bottom)
        if (info.life() > 1 && canDie > 3) {
            canDie = 0
        }
        info.setLife(1)
    }
})
function GumbaDir (dir: number, gumble: Sprite) {
    gumble.setVelocity(dir, 0)
}
let moneda: Sprite = null
let projectile: Sprite = null
let currentDir = 0
let Seta: Sprite = null
let dir = 0
let Final: Sprite = null
let salto = 0
let canShoot = 0
let barra: Sprite = null
let Merio: Sprite = null
let canDie = 0
let AntiGumba: Sprite = null
let Gumba: Sprite = null
let SetaBlock1: Sprite = null
let moneda1: Sprite = null
let Win = 0
tiles.setCurrentTilemap(tilemap`nivel2`)
scene.setBackgroundImage(img`
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
let Monedax = [
17,
24,
105,
112,
117,
120,
123,
179,
105,
120,
138,
139
]
let Setax = [22, 88]
let Gumbax = [
24,
46,
57,
58,
107,
109,
120,
122,
130,
132,
135,
137,
93,
94
]
Win = 0
let setTimeForWin = 1
for (let index = 0; index <= Monedax.length; index++) {
    moneda1 = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ........7.......
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .99999999999999.
        `, SpriteKind.monedaBlock)
    if (index <= 7) {
        tiles.placeOnTile(moneda1, tiles.getTileLocation(Monedax[index], 10))
    } else {
        tiles.placeOnTile(moneda1, tiles.getTileLocation(Monedax[index], 6))
    }
}
for (let index = 0; index <= Setax.length; index++) {
    SetaBlock1 = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .99999999999999.
        `, SpriteKind.Block)
    tiles.placeOnTile(SetaBlock1, tiles.getTileLocation(Setax[index], 10))
}
for (let index = 0; index <= Gumbax.length; index++) {
    Gumba = sprites.create(img`
        . . . . . . e e d d . . . . . . 
        . . . . . e e e e e d . . . . . 
        . . . . e e e e e e e d . . . . 
        . . . e e e e e e e e e d . . . 
        . . e f f e e e e e e f f d . . 
        . e e e 1 f e e e e f 1 e e d . 
        . e e e 1 f f f f f f 1 e e d . 
        e e e e 1 f 1 e e 1 f 1 e e e d 
        e e e e 1 1 1 e e 1 1 1 e e e d 
        e e e e e e e e e e e e e e e d 
        . e e e e d d d d d d e e e e . 
        . . . . d d d d d d d d . . . . 
        . . f f d d d d d d d d f f . . 
        . f f f f f d d d d f f f f f . 
        . f f f f f f . . f f f f f f . 
        . . f f f f f . . f f f f f . . 
        `, SpriteKind.Enemy)
    AntiGumba = sprites.create(assets.image`morisiogumba`, SpriteKind.antyGumba)
    if (index <= 12) {
        tiles.placeOnTile(Gumba, tiles.getTileLocation(Gumbax[index], 13))
        tiles.placeOnTile(AntiGumba, tiles.getTileLocation(Gumbax[index], 13))
    } else {
        tiles.placeOnTile(Gumba, tiles.getTileLocation(Gumbax[index], 5))
        tiles.placeOnTile(AntiGumba, tiles.getTileLocation(Gumbax[index], 5))
    }
    AntiGumba.setFlag(SpriteFlag.AutoDestroy, false)
    Gumba.setScale(0.9, ScaleAnchor.Bottom)
    AntiGumba.follow(Gumba)
    if (index % 2 == 0) {
        Gumba.setVelocity(50, 0)
    } else {
        Gumba.setVelocity(-50, 0)
    }
    Gumba.setFlag(SpriteFlag.GhostThroughSprites, false)
    animation.runImageAnimation(
    Gumba,
    [img`
        . . . . . . e e d d . . . . . . 
        . . . . . e e e e e d . . . . . 
        . . . . e e e e e e e d . . . . 
        . . . e e e e e e e e e d . . . 
        . . e f f e e e e e e f f d . . 
        . e e e 1 f e e e e f 1 e e d . 
        . e e e 1 f f f f f f 1 e e d . 
        e e e e 1 f 1 e e 1 f 1 e e e d 
        e e e e 1 1 1 e e 1 1 1 e e e d 
        e e e e e e e e e e e e e e e d 
        . e e e e d d d d d d e e e e . 
        . . . . d d d d d d d d . . . . 
        . . . f d d d d d d d d f f . . 
        . . . f f f d d d d f f f f f . 
        . . f f f f f . . . f f f f f f 
        . . f f f f f . . . . f f f f f 
        `,img`
        . . . . . . e e d d . . . . . . 
        . . . . . e e e e e d . . . . . 
        . . . . e e e e e e e d . . . . 
        . . . e e e e e e e e e d . . . 
        . . e f f e e e e e e f f d . . 
        . e e e 1 f e e e e f 1 e e d . 
        . e e e 1 f f f f f f 1 e e d . 
        e e e e 1 f 1 e e 1 f 1 e e e d 
        e e e e 1 1 1 e e 1 1 1 e e e d 
        e e e e e e e e e e e e e e e d 
        . e e e e d d d d d d e e e e . 
        . . . . d d d d d d d d . . . . 
        . . f f d d d d d d d d f f . . 
        . f f f f f d d d d f f f f f . 
        . f f f f f f . . f f f f f f . 
        . . f f f f f . . f f f f f . . 
        `],
    100,
    true
    )
}
info.setScore(0)
let isSeta = 0
canDie = 3
game.splash("WAD for mooving", "SPACE for fire")
Merio = sprites.create(assets.image`Mario Derecha`, SpriteKind.Player)
Merio.setFlag(SpriteFlag.Ghost, false)
tiles.placeOnTile(Merio, tiles.getTileLocation(2, 13))
controller.moveSprite(Merio, 100, 0)
Merio.ay = 400
scene.cameraFollowSprite(Merio)
info.setLife(1)
barra = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.otro)
canShoot = 2
salto = -200
barra.setStayInScreen(true)
Final = sprites.create(img`
    ...........7c............
    .........777c............
    ........7777c............
    ......777777c............
    ....77777777c............
    ...777777777c............
    .77777777777c............
    777777777777c............
    .77777777777c............
    ..7777777777c............
    ....77777777c............
    .....7777777c............
    .......77777c............
    ........7777c............
    .........777c............
    ...........7c............
    `, SpriteKind.Flag)
tiles.placeOnRandomTile(Final, assets.tile`PaloFin`)
forever(function () {
    if (info.life() > 1) {
        salto = -300
    } else {
        salto = -230
    }
    if (Win == 1) {
        if (setTimeForWin == 1) {
            canShoot = 0
        }
        setTimeForWin = 0
        if (canShoot > 2) {
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverScoringType(game.ScoringType.HighScore)
            game.setGameOverMessage(true, "Time: " + game.runtime() / 1000 + " sec")
            game.gameOver(true)
        }
    }
    barra.setPosition(Merio.x, Merio.x - 140)
})
game.onUpdateInterval(100, function () {
    canShoot += 0.1
    canDie += 0.1
})
