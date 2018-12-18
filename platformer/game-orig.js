let player, curs, plat

new Phaser.Game({
    width: 683, //half of 1366
    height: 364, //half of 768
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200,},
            debug: false
        },
    },

    scene: {
   
        preload: function () {
            this.load.image('bg', './assets/bg.png')
            this.load.image('squat', './assets/squat.png')
            this.load.image('plat', './assets/platform.png')
        },
        create() {
            this.add.image(0,0, 'bg').setOrigin(0,0)
            player = this.physics.add.sprite(100,100, 'squat')
            player.setCollideWorldBounds(true)
            //player.setBounce(0.1)
            plat = this.physics.add.staticGroup()
            plat.create(300,300, 'plat').setScale(3,1).refreshBody()
            plat.create(200,200, 'plat')
            plat.create('plat')

            this.physics.add.collider(player, plat)
            


            curs = this.input.keyboard.createCursorKeys()
        },

        update() {
            /*if (plat.body.checkWorldBounds()) {
                this.create()
                return
            }
            */
            player.setDragX(0) //in the air

             if (! player.body.onFloor()) return
             
            player.setDragX(1200) // on the ground

            if (curs.left.isDown) {
                player.setVelocityX(-200)
            }
            else if (curs.right.isDown) {
                player.setVelocityX(200)
            }
           
            if (curs.up.isDown || curs.space.isDown) {
            player.setVelocityY(-500)
            }

            
        }
    } 
    

})
