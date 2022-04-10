const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1024 //Largura
canvas.height = 576 //Altura

ctx.fillStyle = '#20C4FA' //Cor de fundo

ctx.fillRect(0, 0, canvas.width, canvas.height) //Desenho da tela

const gravity = 0.3

const background = new Sprite({
    position: {
      x: 0,
      y: 0
    },
    imageSrc: './imgs/background.png'
  })

// const shop = new Sprite({
//     position: {
//         x: 600,
//         y: 128
//     },
    // imageSrc: './img/shop.png',
    // scale: 2.75,
    // framesMax: 6
//})

const player = new Fighter({ //Criacao do player e posicao
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

const enemy = new Fighter({ //Criacao do player e posicao
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

    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}

let lastKey

function animate() {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = '#20C4FA'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    //shop.update()
    c.fillStyle = 'rgba(255, 255, 255, 0.15)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    enemy.velocity.x = 0

    /////////////////////
    //movimento player
    ////////////////////
    if (keys.a.pressed && player.lastKey === 'a') {
        player.velocity.x = -5
    } else if (keys.d.pressed && lastKey === 'd') {
        player.velocity.x = 5
    }
    
    /////////////////////
    //movimento inimigo
    ////////////////////
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){

    }
}

animate()

window.addEventListener('keydown', (event) => {
    if (!player.dead) {
        switch (event.key) {
            case 'd':
                //player.velocity.x = 10
                keys.d.pressed = true
                lastKey = 'd'
                break
            case 'a':
                //player.velocity.x = -10
                keys.a.pressed = true
                lastKey = 'a'
                break
            case 'w':
                //player.velocity.y = -7
                player.velocity.y = -20
                break
        }
    }

    if (!enemy.dead) {
        switch (event.key) {
            case 'ArrowLeft':
                enemy.velocity.x = -10
                break
            case 'ArrowRight':
                enemy.velocity.x = 10
                break
            case 'ArrowUp':
                enemy.velocity.y = -7
                //ArrowDown atack
        }
    }
})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
    }
    switch (event.key) {
        case 'ArrowLeft':
            enemy.velocity.x = 0
            break
        case 'ArrowRight':
            enemy.velocity.x = 0
            break
    }
})