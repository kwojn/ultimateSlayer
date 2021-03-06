define({
    process: function (game, actor, hero) {
        var ax = actor.position.x,
                ay = actor.position.y,
                hx = hero.position.x,
                hy = hero.position.y,
                desiredDirection = hx - ax <= 0 ? "Left" : "Right",
                notDesiredDirection = hx - ax <= 0 ? "Right" : "Left",
                effectiveRange = actor.activeWeapon.ammoModel.distance;
        if (Math.abs(ax-hx)>500 || Math.abs(ay-hy)>300){
            actor.stand();
            return;
        }
        if ( Math.random()>game.difficultyFactor ){
            return;
        }
        if (Math.abs(ay-hy)>10 && actor.stamina>=20){
            actor.walk(desiredDirection);
            return;
        }
        if (Math.abs(ax-hx)>effectiveRange){
            actor.walk(desiredDirection);
            return;
        }else if(Math.random()<game.difficultyFactor){
            if (actor.stamina<=20){
                Math.random()<0.2?actor.jump(notDesiredDirection):actor.walk(notDesiredDirection);
                return;
            }
            
            actor.previousAction = desiredDirection;
            actor.Shoot(desiredDirection);
            return;
        }
    }
    
    
    



});