define(["models/EquipmentFactory"],function (EquipmentFactory) {

    var Weapon = function () {
        this.entity = {};
        this.ammoLeft = 10;
        this.isShooting = false;
        this.ammoModel = {};
        this.ownerActor = {};
        this.shootingVector=[0,0];
        this.direction=null;
        this.ammoTriggered = false;
        this.shoot = function (direction) {
            
            if (this.isShooting || this.ammoLeft<=0){
                return false;
            }
            this.direction=direction;
            if(this.ownerActor.mouseEvent!=null){
                
            this.shootingVector=[
               this.ownerActor.mouseEvent.layerX,
               this.ownerActor.mouseEvent.layerY
                
            ];
            }else{
              this.shootingVector=[
                0,
                200
                
            ];  
            }
            this.isShooting = true;
            this.ammoLeft--;
        };

        this.isReady = true;
        this.reloadingCounter = 0;
        
        this.update = function () {
            
            if (this.isShooting){
                this.reloadingCounter ++;
                
                if ((this.reloadingCounter>(0.8*this.reloadTime))&&( this.ammoTriggered==false)){
                    this.ammoModel.spawn(this.direction,this.shootingVector);
                    this.ammoTriggered=true;
                }
            }
            if (this.reloadingCounter>=this.reloadTime){
                this.reloadingCounter =0;
                this.isShooting=false;
                this.isReady =true;
                this.ammoTriggered=false;
            }
        };
    };
    return (Weapon);
});