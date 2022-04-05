const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024 //Largura
canvas.height = 576 //Altura

ctx.fillStyle = '#20C4FA'; //Cor de fundo

ctx.fillRect(0, 0, canvas.width, canvas.height) //Desenho da tela

const gravity = 0.2

class Sprite{
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.height = 100
    }
    draw() {
        ctx.fillStyle = 'red'; //Define a cor do sprite
        ctx.fillRect(this.position.x, this.position.y, 50, this.height) //Define tamanho do sprite
    }

    update(){ //atualiza os frame da posicao Y
        this.draw();

        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity >= canvas.height){
            this.velocity.y = 0
        } else this.velocity.y += gravity
    }
}

const player = new Sprite({ //Criacao do player e posicao
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})
//player.draw(); //Exibicao do player na tela

const enemy = new Sprite({ //Criacao do player e posicao
    position: {
        x: 974,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})
//enemy.draw(); //Exibicao do enemy

function animate(){
    window.requestAnimationFrame(animate)
    ctx.fillStyle = '#20C4FA'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.update();
    enemy.update();
}

animate()