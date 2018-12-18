const keys = 'LEFT,RIGHT,UP,DOWN,SPACE,W,A,S,D'
let pl, k, plats, bad, c, scoreText
let score = 0




function preload() {
    this.load.image('bg', './assets/bg.png')
    this.load.image('squat', './assets/squat.png')
    this.load.image('plat', './assets/platform.png')
    this.load.image('bad', './assets/devil.png')
    this.load.image('ok', './assets/gud.png')
}

function create() {
    this.add.image(0,0, 'bg').setOrigin(0,0)

    pl = this.physics.add.sprite(100,100, 'squat')
    pl.setCollideWorldBounds(true)
    pl.setCollideWorldBounds(true)
    pl.setGravityY(1300)
    

    bad = this.physics.add.sprite(100,150, 'bad')
    bad.setCollideWorldBounds(true)
    bad.setBounce(0.3)
    bad.setVelocity(300)

    plat = this.physics.add.staticGroup()
    plat.create(300,300, 'plat').setScale(3,1).refreshBody()
    plat.create(200,200, 'plat')
    plat.create('plat')

    this.physics.add.collider(pl, plat)
    this.physics.add.collider(pl, bad)
    


    k = this.input.keyboard.addKeys(keys)

    let c
    coins = this.physics.add.group()

    c = coins.create(40,40, 'ok')
    c.setCollideWorldBounds(true)
     c.setGravityY(900)

     c = coins.create(600,40, 'ok')
     c.setCollideWorldBounds(true)
     c.setGravityY(900)

function pickUp (pl,coin) {
    coin.destroy()
    score += 10
    scoreText.setText('Score: ' + score)
}

      this.physics.add.collider(pl,bad)
      this.physics.add.collider(pl,coins, pickUp)
      scoreText = this.add.text(16,16, 'score: 0', {fontSize: '32px', fill: '##4d5563'}  )
}

function update() {
    
    if (k.D.isDown) {
        pl.setVelocityX(300)
    }

     if (k.W.isDown) {
        pl.setVelocityY(-300)
    }

     if (k.A.isDown) {
        pl.setVelocityX(-300)
    }
    }


let config = {
    width: 683,
    height: 384,
    scene:{preload, create, update},
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200,},
            debug: false,
        },
    },
}

 new Phaser.Game(config)