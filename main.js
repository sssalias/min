const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


canvas.width = window.screen.width
canvas.height = window.screen.height

const srcWays = [
    'https://i.pinimg.com/736x/30/8b/fb/308bfbf90100e8cce6e0599900bb4d6d.jpg',
    'https://www.meme-arsenal.com/memes/9264dbcdaf5ff274b989e2c93ce6898d.jpg',
    'https://playerok.com/file-storage/images/1ee2fb5c-04c8-6390-d776-f8e6fdc494a5.jpg?timestamp=1690816815',
    'https://sun9-73.userapi.com/impf/c837134/v837134208/12cb6/r5awaFMdFeg.jpg?size=850x850&quality=96&sign=03e75fe7515f520ad5631ea9c041fa64&c_uniq_tag=kSW34LAOjdjknQPc-JYsUussoxS1V7OOZ3ubLwMilEY&type=album',
    'https://i.pinimg.com/originals/17/3e/83/173e83e60752455e66633ff6991cd830.jpg'
]


const getRandomCoords = () => {
    return {
        x: Math.floor(Math.random() * 1600),
        y: Math.floor(Math.random() * 500)
    }
}

const getRandomImg = () => srcWays[Math.floor(Math.random() * (srcWays.length))]

const handleClick = (event) => {

    // const coords = getRandomCoords()
    const imgSrc = getRandomImg()
    const img = new Image()
    img.src = imgSrc
    img.onload = () => {
        ctx.drawImage(img, event.clientX - 250 / 2, event.clientY - 250 / 2, 250, 250)
    }
    // console.log();
}



canvas.addEventListener('click', handleClick)
