//canvas
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d')
var score = 0;

//Testing
//ctx.fillRect(0,0,50,50)

//variables
var frames = 0;
var fondo = "./bg.jpg"
var peje = "./peje.png"
var anaya = "./anaya.png"
var voto = "./voto.png"
var viejito = "./viejito.png"
//var dinero = "./ligas.png"
var enemies = [];
var votes = []
var abuelos = [];

//clases (constructores)
function Background(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.imagen = new Image()
    this.imagen.src = fondo
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

function Heroe(){
    this.x = canvas.width / 3
    this.y = canvas.height - 230
    this.width = 100
    this.height = 160
    this.imagen = new Image()
    this.imagen.src = peje
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
    if(this.x < 0) this.x = 0
    if(this.x > canvas.width) this.x = canvas.width - 10
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
    
    this.checkIfTouch = function(enemy){
    return (this.x < enemy.x + enemy.width) &&
            (this.x + this.width > enemy.x) &&
            (this.y < enemy.y + enemy.height) &&
            (this.y + this.height > enemy.y);
    }
    
}

function Enemy(x){
    this.x = x
    this.y = 0
    this.width = 100
    this.height = 100
    this.imagen = new Image()
    this.imagen.src = anaya
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

function Vote(x){
    this.x = x
    this.y = 0
    this.width = 60
    this.height = 80
    this.imagen = new Image()
    this.imagen.src = voto
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

function Abuelo(x){
    this.x = x
    this.y = 0
    this.width = 130
    this.height = 90
    this.imagen = new Image()
    this.imagen.src = viejito
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}




//instancias
var board = new Background()
var peje = new Heroe()

//generateEnemy()
//generateEnemy()
//generateEnemy()


//main functions
function update(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    frames++
    board.draw()
    peje.draw()
    generateEnemy()
    drawEnemies()
    checkCollition()
    generateVotes()
    drawVotes()
    generateAbuelos()
    drawAbuelos()
    
}

function start(){
    interval = setInterval(update,1000/60)
}

function gameOver(){
    clearInterval(interval)
    ctx.font = "100px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText('GAME OVER',230,350)
    ctx.fillText(enemies.length, 470,450)
}
//aux functions

function generateEnemy(){
    if(frames % 64 === 0){
        const x = Math.floor(Math.random() * 45)
        enemies.push(new Enemy(x * 64))
    }
}

function drawEnemies(){
    enemies.forEach(function(enemy){
        enemy.draw()
    })
}

function generateVotes(){
    if(frames % 64 === 0){
        const x = Math.floor(Math.random() * 45)
        votes.push(new Vote(x * 64))
    }
}

function drawVotes(){
    votes.forEach(function(v){
        v.draw()
    })
}

function generateAbuelos(){
    if(frames % 64 === 0){
        const x = Math.floor(Math.random() * 45)
        abuelos.push(new Abuelo(x * 64))
    }
}

function drawAbuelos(){
    abuelos.forEach(function(ab){
        ab.draw()
    })
}



function checkCollition(){
    enemies.forEach((enemy, eId)=>{
        if(peje.checkIfTouch(enemy)){
            //gameOver()
            score --
            enemies.splice(eId,1)
        }        

    })
    votes.forEach(function(v, vId){
        if(peje.checkIfTouch(v)){
            score++
            votes.splice(vId,1)
        }
    })
    abuelos.forEach(function(ab, abId){
        if(peje.checkIfTouch(ab)){
            score++
            abuelos.splice(abId,1)
        }
    })

    console.log(score)
}


//listeners

addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        if(peje.x <= 0) return
        peje.x -= 64;
    }
    if(e.keyCode === 39){
        if(peje.x >= canvas.width - 64) return
        peje.x += 64;
    }
    
})


//the beginnig
start() 