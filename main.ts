namespace SpriteKind {
    export const consumible = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const Melee = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (animacionunavez == false) {
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . 5 5 5 f d d d d 4 e e e f . . 
            5 5 f 5 f e e e 4 e e f . . . . 
            . 5 5 5 e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 2 2 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . 5 5 5 f d d d d 4 e e e f . . 
            5 5 f 5 f e e e 4 e e f . . . . 
            . 5 5 5 e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        false
        )
        sprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        setTimeout(() => {
        tiles.setWallAt(tiles.getTileLocation(6, 1), false)
        tiles.setWallAt(tiles.getTileLocation(7, 1), false)
        tiles.setWallAt(tiles.getTileLocation(8, 1), false)
        }, 2000)
animacionunavez = true
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ItemTook < inventory.length - 1) {
        ItemTook = ItemTook + 1
    } else {
        ItemTook = 0
    }
    jorge.setImage(inventory[ItemTook])
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    if (game.ask("¿Querés agregar la llave a tu inventario?")) {
        sprites.destroy(otherSprite)
        inventory.removeAt(ItemTook)
        inventory.insertAt(ItemTook, FrontImageItemsGet[0])
        sprite.setImage(inventory[ItemTook])
        tengollave = true
        if (tengollave == true) {
            tiles.setWallAt(tiles.getTileLocation(6, 2), false)
            tiles.setWallAt(tiles.getTileLocation(7, 2), false)
            tiles.setWallAt(tiles.getTileLocation(8, 2), false)
        }
    } else {
        pause(2000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (game.ask("¿Querés agregar la piedra a tu inventario?")) {
        sprites.destroy(otherSprite)
        inventory.removeAt(ItemTook)
        inventory.insertAt(ItemTook, FrontImageItemsGet[2])
        sprite.setImage(inventory[ItemTook])
    } else {
        pause(2000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Melee, function (sprite, otherSprite) {
    if (game.ask("¿Querés agregar la espada a tu inventario?")) {
        sprites.destroy(otherSprite)
        inventory.removeAt(ItemTook)
        inventory.insertAt(ItemTook, FrontImageItemsGet[1])
        sprite.setImage(inventory[ItemTook])
    } else {
        pause(2000)
    }
})
let animacionunavez = false
let tengollave = false
let jorge: Sprite = null
let ItemTook = 0
let inventory: Image[] = []
let FrontImageItemsGet: Image[] = []
FrontImageItemsGet = [
assets.image`getKey`,
assets.image`swordGet`,
img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e c a . 
    . . f e e d d d d d d e a c c 3 
    . . . f e e 4 4 4 4 e e c c 7 c 
    . . e 4 f 2 2 2 2 2 2 f c 3 c a 
    . . 4 d f 2 2 2 2 2 2 f c a 3 a 
    . . 4 4 f 4 4 5 5 4 4 f a c a c 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,
img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    f f f f e e 4 4 4 4 e e f f f f 
    f 2 2 2 f 2 2 2 2 2 2 f 2 2 2 f 
    f 2 2 d f 2 2 2 2 2 2 f d 2 2 f 
    f f 2 2 f 4 4 5 5 4 4 f 2 2 f f 
    f f f f . f f f f f f . f f f f 
    . . . . . f f . . f f . . . . . 
    `
]
inventory = [img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `]
ItemTook = 0
jorge = sprites.create(inventory[ItemTook], SpriteKind.Player)
let llave = sprites.create(assets.image`Llave 1`, SpriteKind.Key)
let espada = sprites.create(img`
    c c c c c . . . . . . . . . . . 
    c d d d c . . . . . . . . . . . 
    c d d d c c c . . . . . . . . . 
    c d d d d d c . . . . . . . . . 
    c c c d d d c c c . . . . . . . 
    . . c d d d d d c . . . . . . . 
    . . c c c d d d c c c . . . . . 
    . . . . c d d d d d c . . . . . 
    . . . . c c c d d d c c . . c c 
    . . . . . . c d d d d c . c b c 
    . . . . . . c c c d d c c b c . 
    . . . . . . . . c c c c b c . . 
    . . . . . . . . . . c b c e c . 
    . . . . . . . . . c b c e e e c 
    . . . . . . . . c b c . c e e c 
    . . . . . . . . c c . . . c c c 
    `, SpriteKind.Melee)
let piedra = sprites.create(img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `, SpriteKind.Projectile)
tengollave = false
animacionunavez = false
controller.moveSprite(jorge, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(jorge)
tiles.placeOnTile(llave, tiles.getTileLocation(12, 2))
tiles.placeOnTile(piedra, tiles.getTileLocation(13, 2))
tiles.placeOnTile(espada, tiles.getTileLocation(13, 3))
