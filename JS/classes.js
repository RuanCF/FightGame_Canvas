class Sprite {
    constructor({
        position,
        velocity,
        imageSrc
    }) {
        this.position = position
        this.velocity = velocity
        this.height = 100
        this.image = new Image()
        this.image.src = imageSrc
    }
    
    draw() {
        ctx.fillStyle = 'red' //Define a cor do sprite
        ctx.fillRect(this.position.x, this.position.y, 50, this.height) //Define tamanho do sprite
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

    update() { //atualiza os frame da posicao Y
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity
    }
}