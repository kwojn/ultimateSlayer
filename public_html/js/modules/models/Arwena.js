define({
    spriteFileUrl: "assets/dresspreview.png",
    width: 65,
    height: 65,
    meshDataOffset: {
        walkLeft: {x: 1, y: 585, loop: true, frames: 9},
        walkRight: {x: 1, y: 712, loop: true, frames: 9},
        stand: {x: 1, y: 648, loop: false, frames: 1},
        jumpLeft: {x: 1, y: 65, loop: false, frames: 7},
        jumpRight: {x: 1, y: 195, loop: false, frames: 7},
        jumpUp: {x: 1, y: 130, loop: false, frames: 7},
        shootRightBow: {x: 1, y: 1225, loop: false,frames:12},
        shootLeftBow: {x: 1, y: 1100, loop: false,frames:12},
        die: {x: 1, y: 1295, loop: false, frames: 6}
    },
    meshData: {
        width: 64,
        height: 65
    },
    stamina: 30,
    weapons: ["Bow"],
    ammo: [{ripper: 100}],
    jumpVelocity: 40,
    walkVelocity: 1

});