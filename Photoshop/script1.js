// JavaScript source code
//let canvas = document.createElement("canvas")
//canvas.width = 300
//canvas.height = 300
//document.querySelector("#canvas").appendChild(canvas)
//file.addEventListener('change', (e) => {
//    console.log(e)
//})

//const img = "./img.jpg"


let file = document.querySelector("#loader")
let canvas = document.querySelector("#canvas")
let brightness = document.querySelector("#brightness")
let contrast = document.querySelector("#contrast")
let saturation = document.querySelector("#saturation")
let blur = document.querySelector("#blur")
let blurBtn = document.querySelector("#blur-btn")

let ctx = canvas.getContext('2d')

let img = new Image();
img.src = "./img.jpg"
img.addEventListener('load', (e) => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
})

//brightness.addEventListener('change', e => {

//})
//contrast.addEventListener('change', e => {

//})
//saturation.addEventListener('change', e => {

//})
brightness.addEventListener('change', e => {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for( let i = 0; i < imgData.data.length; i+=4){
        imgData.data[i] = Math.min(255, imgData.data[i] + parseInt(brightness.value))
        imgData.data[i+1] = Math.min(255, imgData.data[i+1] + parseInt(brightness.value))
        imgData.data[i+2] = Math.min(255, imgData.data[i+2] + parseInt(brightness.value))
    }
    ctx.putImageData(imgData, 0, 0)
})

contrast.addEventListener('change', e => {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let newContrast = (contrast.value / 100) * 255;
    let factor = (255 + newContrast) / (255.01 - newContrast); 

     for (var i = 0; i < imgData.data.length; i+= 4) {
        imgData.data[i] = Math.min(255, factor * (imgData.data[i] - 128.0) + 128.0);
        imgData.data[i+1] = Math.min(255, factor * (imgData.data[i+1] - 128.0) + 128.0);
        imgData.data[i+2] = Math.min(255, factor * (imgData.data[i+2] - 128.0) + 128.0);
    }
    ctx.putImageData(imgData, 0, 0)
})

saturation.addEventListener('change', e => {
    ctx.filter = `saturate(${saturation.value}%)`
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
})

blur.addEventListener('change', e => {
    ctx.filter = `blur(${blur.value}px)`
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
})