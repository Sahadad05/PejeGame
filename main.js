//canvas
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d')
var score = 0;
var score2 = 0;
var time = 3600;
var inicio = false
var boton = document.getElementById("boton")
// var player2 = false

var interval;

//Testing
//ctx.fillRect(0,0,50,50)

//variables
var frames = 0;
var fondo = "./bg.jpg"
var peje = "./peje.png"
var anaya = "./anaya.png"
var voto = "./voto.png"
var viejito = "./viejito.png"
var lavadora = "./lavado.png"
var bejarano ="./bejarano.png"
var mujer ="./feminista.png"
var barreiro ="./barreiro.png"
var shein ="./shein.png"

//var enemies = [];
var votes = []
var abuelos = [];
var mujeres = [];
var barreiros = []
var bejaranos = []
var lavadoras = []
var sheins = []



//clases (constructores)
function Background(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.imagen = new Image()
    this.imagen.src = fondo
    //this.imagen.onload = function(){
      //  this.draw()
    //}.bind(this)
    this.music = new Audio ()
    this.music.src = "./Cancion.mp3"

    this.draw = function(){
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
        ctx.font = '30px Avenir'
        ctx.fillText(score, 180,100,100,100)
        ctx.fillText("Canayin",50,100,100,100)
        ctx.fillText(score2, 900,100,100,100)
        ctx.fillText("Peje", 820,100,100,100)
        ctx.fillText(Math.floor(time / 60 ),canvas.width/2,100)
    }

    }

function Presi(img, x = canvas.width / 3, y = canvas.height - 250){
    this.x = x
    this.y = y
    this.width = 130
    this.height = 180
    this.imagen = new Image()
    this.imagen.src = img
    this.imagen.onload = function(){
        //this.draw()
    }.bind(this)
    
    this.draw = function(){
    if(this.x < 0) this.x = 0
    if(this.x > canvas.width) this.x = canvas.width - 100
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
    
    this.checkIfTouch = function(enemy){
    return (this.x < enemy.x + enemy.width) &&
            (this.x + this.width > enemy.x) &&
            (this.y < enemy.y + enemy.height) &&
            (this.y + this.height > enemy.y);
    }
    
}

// function Enemy(img, x, w, h){
//     this.x = x
//     this.y = 0
//     this.width = w
//     this.height = h
//     this.imagen = new Image()
//     this.imagen.src = img
//     this.imagen.onload = function(){
//         //this.draw()
//     }.bind(this)
    
//     this.draw = function(){
//         this.y++
//         ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
//     }
// }

function Vote(x){
    this.x = x
    this.y = 0
    this.width = 60
    this.height = 80
    this.imagen = new Image()
    this.imagen.src = voto
    this.imagen.onload = function(){
        //this.draw()
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
        //this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
function Mujer(x){
    this.x = x
    this.y = 0
    this.width = 130
    this.height = 90
    this.imagen = new Image()
    this.imagen.src = mujer
    this.imagen.onload = function(){
        //this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
function Bejarano(x){
    this.x = x
    this.y = 0
    this.width = 130
    this.height = 90
    this.imagen = new Image()
    this.imagen.src = bejarano
    this.imagen.onload = function(){
        //this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
function Shein(x){
    this.x = x
    this.y = 0
    this.width = 80
    this.height = 80
    this.imagen = new Image()
    this.imagen.src = shein
    this.imagen.onload = function(){
        //this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
function Lavadora(x){
    this.x = x
    this.y = 0
    this.width = 75
    this.height = 75
    this.imagen = new Image()
    this.imagen.src = lavadora
    this.imagen.onload = function(){
        //this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
function Barreiro(x){
    this.x = x
    this.y = 0
    this.width = 100
    this.height = 100
    this.imagen = new Image()
    this.imagen.src = barreiro
    this.imagen.onload = function(){
        //this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}


//instancias
var board = new Background()
var peje = new Presi(peje,800)
var canayin = new Presi(anaya, 70)
//var bejarano = new Enemy(bejarano)
//var lavado = new Enemy(lavado)

//generateEnemy()
//generateEnemy()
//main functions
function update(){

    ctx.clearRect(0,0,canvas.width,canvas.height)
    frames++
    time--
    board.draw()
    peje.draw()
    // if (player2){
        canayin.draw()//}

    // generateEnemy()
    // drawEnemies()
    checkCollition()
    generateVotes()
    drawVotes()
    generateAbuelos()
    drawAbuelos()
    generateMujeres()
    drawMujeres()
    generateBarreiros()
    drawBarreiros()
    generateBejaranos()
    drawBejaranos()
    generateLavadoras()
    drawLavadoras()
    generateSheins()
    drawSheins()
    checkGameOver()
}

function start(){
    if(interval > 0) return
    ctx.clearRect(0,0,canvas.width,canvas.height)
    board.music.play()
    interval = setInterval(update,1000/60)
    inicio = true
}

function gameOver(){
    clearInterval(interval)
    // ctx.font = "100px Avenir"
    // ctx.fillStyle = "red"
    // ctx.fillText('',230,350)
    //ctx.fillText(enemies.length, 470,450)
    board.music.pause()
}

function checkGameOver(){
    if(time <= 1) {
        gameOver()
        if(score===score2) {
            ctx.fillStyle="red"
            ctx.font ="bold 100px Avenir"
            ctx.fillText("EJ UN COMPLÓ",150,350)
            // ctx.font ="70px Avenir"
            // ctx.fillStyle = "white"

        }
        if(score>score2){
            ctx.fillStyle="red"
            ctx.font ="bold 100px Avenir"
            ctx.fillText("PEJE PIERDE",220,350)
            ctx.fillStyle = "white"
            ctx.font ="70px Avenir"
            ctx.fillText("VOTO POR VOTO",240,450)

        }
        else if(score<score2){ 
            ctx.fillStyle="red"
            ctx.font ="bold 100px Avenir"       
            ctx.fillText("PEJE GANA",250,350)
            ctx.font ="70px Avenir"
            ctx.fillStyle = "white"
            ctx.fillText("Abrazos, no balazos",200,450)
            

        }    
    }         

}
//aux functions

//LAVADORA BEJARANO
// function generateEnemy(){
//     if(frames % 150 === 0){
//         const x = Math.floor(Math.random() * (canvas.width-100))
//         var n = Math.floor(Math.random()*2)
//         var img;
//         var w;
//         var h;
//         if(n===1){
//             img = lavado
//             w = 65
//             h = 65
//         }
//         else {
//             img = bejarano
//             w = 130
//             h = 90
        

//         }
//         enemies.push(new Enemy(img, x, w, h))
//     }
// }

// function drawEnemies(){
//     enemies.forEach(function(enemy){
//         enemy.draw()
//     })
// }

//BEJARANO
function generateBejaranos(){
    if(frames % 600 === 0){
        const x = Math.floor(Math.random() * (canvas.width-100))
        bejaranos.push(new Bejarano(x))
    }
}

function drawBejaranos(){
    bejaranos.forEach(function(bj){
        bj.draw()
    })
}
//SHEIN
function generateSheins(){
    if(frames % 857 === 0){
        const x = Math.floor(Math.random() * (canvas.width-100))
        sheins.push(new Shein(x))
    }
}

function drawSheins(){
    sheins.forEach(function(sh){
        sh.draw()
    })
}
//LAVADORA
function generateLavadoras(){
    if(frames % 600 === 0){
        const x = Math.floor(Math.random() * (canvas.width-100))
        lavadoras.push(new Lavadora(x))
    }
}

function drawLavadoras(){
    lavadoras.forEach(function(l){
        l.draw()
    })
}


//VOTOS
function generateVotes(){
    if(frames % 205 === 0){
        const x = Math.floor(Math.random() * (canvas.width-100))
        votes.push(new Vote(x))
    }
}

function drawVotes(){
    votes.forEach(function(v){
        v.draw()
    })
}

//Mujeres
function generateMujeres(){
    if(frames % 413 === 0){
        const x = Math.floor(Math.random() * (canvas.width-100))
        mujeres.push(new Mujer(x))
    }
}

function drawMujeres(){
    mujeres.forEach(function(m){
        m.draw()
    })
}

//ABUELOS
function generateAbuelos(){
    if(frames % 413 === 0){
        const x = Math.floor(Math.random() * (canvas.width-100))
        abuelos.push(new Abuelo(x))
    }
}

function drawAbuelos(){
    abuelos.forEach(function(ab){
        ab.draw()
    })
}
//Barreiros
function generateBarreiros(){
    if(frames % 857 === 0){
        const x = Math.floor(Math.random() * (canvas.width-100))
        barreiros.push(new Barreiro(x))
    }
}

function drawBarreiros(){
    barreiros.forEach(function(br){
        br.draw()
    })
}



 function checkCollition(){
//     enemies.forEach((enemy, eId)=>{
//         if(canayin.checkIfTouch(enemy)){
//             //gameOver()
//             score --
//             enemies.splice(eId,1)
//         }    
//         if(peje.checkIfTouch(enemy)){
//             //gameOver()
//             score2 --
//             enemies.splice(eId,1)
//         }      

    // })
    votes.forEach(function(v, vId){
        if(canayin.checkIfTouch(v)){
            score++
            votes.splice(vId,1)
        }
        if(peje.checkIfTouch(v)){
            score2++
            votes.splice(vId,1)
        }
    })
    abuelos.forEach(function(ab, abId){
        if(canayin.checkIfTouch(ab)){
            score
            abuelos.splice(abId,1)
        }
        if(peje.checkIfTouch(ab)){
            score2++
            abuelos.splice(abId,1)
        }
    })

    mujeres.forEach(function(m, mId){
        if(canayin.checkIfTouch(m)){
            score++
            mujeres.splice(mId,1)
        }
        if(peje.checkIfTouch(m)){
            score2
            mujeres.splice(mId,1)
        }
    })
    barreiros.forEach(function(br, brId){
        if(canayin.checkIfTouch(br)){
            score--
            barreiros.splice(brId,1)
        }
        if(peje.checkIfTouch(br)){
            score2
            barreiros.splice(brId,1)
        }
    })
    bejaranos.forEach(function(bj, bjId){
        if(canayin.checkIfTouch(bj)){
            score
            bejaranos.splice(bjId,1)
        }
        if(peje.checkIfTouch(bj)){
            score2--
            bejaranos.splice(bjId,1)
        }
    })
    sheins.forEach(function(sh, shId){
        if(canayin.checkIfTouch(sh)){
            score
            sheins.splice(shId,1)
        }
        if(peje.checkIfTouch(sh)){
            score2--
            sheins.splice(shId,1)
        }
    })
    lavadoras.forEach(function(l, lId){
        if(canayin.checkIfTouch(l)){
            score--
            lavadoras.splice(lId,1)
        }
        if(peje.checkIfTouch(l)){
            score2
            lavadoras.splice(lId,1)
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
        if(peje.x >= (canvas.width - 150)) return
        peje.x += 64;
    }
    if(e.keyCode ===65){
        if(canayin.x <= 0) return
        canayin.x -= 64;
        }
    if(e.keyCode === 68){
        if(canayin.x >= canvas.width - canayin.width) return
        canayin.x += 64;
    }
    if(e.keyCode === 13){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        board.music.play() 
        start()
    }
    if(e.keyCode === 27){
        window.location.reload()
    }

  
})



//the beginnig
// start() 
