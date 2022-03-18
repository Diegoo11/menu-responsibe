console.log('Tu lo lograras Diegoo11')

const menu = document.querySelector('.bar')

const changeTaskState = event => {
    menu.classList.toggle('viewbar');
    let flecha = document.querySelector('.boton')
    flecha.classList.toggle('contraboton')
    let opcions = document.querySelector('.hidenopcions')
    opcions.classList.toggle('opcions')
    
};

menu.addEventListener('click', changeTaskState)

let treeline = document.querySelector('.treeline')

const openline = ()=>{
    let box = document.querySelector('.box')
    box.classList.remove('hidenbox')
}

treeline.addEventListener('click', openline)

window.addEventListener('click', (e)=>{
    if(e.srcElement.id != 'box'&& e.srcElement.id != 'treeline'){
        box.classList.add('hidenbox')
    }
})


const btnLeft = document.getElementById('left')
const btnRigth = document.getElementById('rigth')
let contador = []
let porcentaje = 0
const imgs = document.querySelectorAll('.img')
btnRigth.onclick = ()=>more()
btnLeft.onclick = ()=>less()
function more(){
    porcentaje = porcentaje + 100
}

function less(){
    porcentaje = porcentaje -100
}

function obsGalery(){
    let timer = setInterval(()=>{
        if(porcentaje>400){
            porcentaje = 0
        }
        if(porcentaje<0){
            porcentaje = 400
        }
        imgs.forEach(img => {img.setAttribute("style",`transform: translateX(-${porcentaje}%)`)})
    },100)
}
obsGalery()
console.log('claro que si')

function moveGalery (num){
    let timer = setInterval(more, num)
}

moveGalery(5000)

let btnsG = document.querySelectorAll('.photocircule')

function obserber(){
    let timer =setInterval(obs,400)
}
function obs(){
    if(porcentaje === 0){btnsId(1)}
    if(porcentaje === 100){btnsId(2)}
    if(porcentaje === 200){btnsId(3)}
    if(porcentaje === 300){btnsId(4)}
    if(porcentaje === 400){btnsId(5)}
}

obserber()

function btnsId (x){
    btnsG.forEach(btn=> btn.classList.remove('photomarcado'))
    let btnId = document.getElementById(`btn${x}`)
    btnId.classList.add('photomarcado')
}
////////////////////////////////////////////////////////////////////////////////////////
btnsG.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        let numberId = e.srcElement.id
        let posicion = document.getElementById(numberId).getAttribute('data-number')
        porcentaje = Number(`${posicion}00` -100)
    })
})

