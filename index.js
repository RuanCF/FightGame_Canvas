const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.with = 1024; //Largura
canvas.height = 600; //Altura

ctx.fillStyle = '#20C4FA'; //Cor de fundo

ctx.fillRect(0, 0, canvas.width, canvas.height) //Desenho da tela

class Sprite{
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
    }
    draw() {
        ctx.fillStyle = 'red'; //Define a cor do sprite
        ctx.fillRect(this.position.x, this.position.y, 50, 150) //Define tamanho do sprite
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
player.draw(); //Exibicao do player na tela

const enemy = new Sprite({ //Criacao do player e posicao
    position: {
        x: 970,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})
enemy.draw(); //Exibicao do enemy

function animate(){
    window.requestAnimationFrame(animate)
    console.log(Go)
}

animate()