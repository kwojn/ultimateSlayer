define({
    spriteFileUrl: "assets/skeleton_3.png",
    width: 65,
    height: 65,
    meshDataOffset: {
        walkLeft: {x: 1, y: 585, loop: true, frames: 9},
        walkRight: {x: 1, y: 712, loop: true, frames: 9},
        stand: {x: 1, y: 648, loop: false, frames: 1},
        jumpLeft: {x: 1, y: 65, loop: false, frames: 7},
        jumpRight: {x: 1, y: 195, loop: false, frames: 7},
        jumpUp: {x: 1, y: 130, loop: false, frames: 7},
        shootRigth: {x: 1, y: 0, loop: false},
        shootRightBow: {x: 1, y: 1225, loop: false, frames: 12},
        shootLeft: {x: 1, y: 0, loop: false},
        shootLeftBow: {x: 1, y: 1100, loop: false, frames: 12},
        die: {x: 1, y: 1295, loop: false, frames: 6}
    },
    meshData: {
        width: 64,
        height: 65
    },
    stamina: 80,
    weapons: ["Bow"],
    ammo: [{ripper: 500}],
    jumpVelocity: 33.5,
    walkVelocity: 6,
    deathMod:function(game){
        game.contextCollection.menuContext.endingType = "YouLoose";
        game.contextCollection.menuContext.pageName = "endGame";
        game.contextCollection.loadingContext.loadingStarted=false;
        game.contextCollection.loadingContext.loadingEnded=false;
        
        game.setContext("menuContext");
        
    }

});