const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1024 //Largura
canvas.height = 576 //Altura

ctx.fillStyle = '#20C4FA' //Cor de fundo

ctx.fillRect(0, 0, canvas.width, canvas.height) //Desenho da tela

const gravity = 0.2

class Sprite{
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.height = 100
    }
    draw() {
        ctx.fillStyle = 'red' //Define a cor do sprite
        ctx.fillRect(this.position.x, this.position.y, 50, this.height) //Define tamanho do sprite
    }

    update(){ //atualiza os frame da posicao Y
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height){
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
//player.draw() //Exibicao do player na tela

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
//enemy.draw() //Exibicao do enemy

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate)
    ctx.fillStyle = '#20C4FA'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    if (keys.a.pressed && lastKey === 'a') {
        player.velocity.x = -5
    } else if (keys.d.pressed && lastKey === 'd'){
        player.velocity.x = 5
    }
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 'w':
            player.velocity.y = -6
            break
    }
    console.log(event)
})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = false
            lastKey = 'a'
            break
    }
})