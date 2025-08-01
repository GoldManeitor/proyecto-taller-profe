// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010103010101010101010301010101010201030202020202010103020201010101020303030404040303030101010201010101010201010202020202010102010101010101020101020101020201010101020101010101010202020102010101010102010101010101010201010201010101020202020202010202010102010102020201010102020101010102010101010101010101010101010101020101010201010101010101010201010101010102010102010202020201010101020101020101020101010101010101010201010201010101010101010102020202010102020201010102020101010101020101010101010101010102020202020101`, img`
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . 2 2 2 . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.brick,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
