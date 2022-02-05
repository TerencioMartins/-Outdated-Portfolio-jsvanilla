let textUp = false;
const botaoCentro = document.querySelector('.centerButton')
botaoCentro.addEventListener('click', () => {
    location.reload()
})

const zeroTwo = document.querySelector('.foto')
const artigo = document.querySelector('.articleCentro')
const titulo = document.querySelector('.tituloCentro')
const aside = document.querySelector('.textoCentro')
zeroTwo.addEventListener('click', () => {
    console.log(textUp);
    switch (textUp) {
        case false:
            document.getElementById("teste3").style.display = "inline-block"
            aside.className = 'textoCentro animate__animated animate__fadeInLeft'
            textUp = true;
            break

        case true:
            
            aside.className ='textoCentro animate__animated animate__fadeOutLeft'
            textUp = false;
            break
    }
})

zeroTwo.addEventListener('mouseenter', () => {
    zeroTwo.classList.add('animate__animated', 'animate__infinite', 'animate__pulse')
})
zeroTwo.addEventListener('mouseleave', () => {
    zeroTwo.classList.remove('animate__animated', 'animate__infinite', 'animate__pulse')
})
const arrow = document.querySelector('.arrow')
arrow.addEventListener('click', () => {
    
})

const pokedex = document.querySelector('.pokedex')
pokedex.addEventListener('mouseenter',() => {
    pokedex.classList.add('animate__animated', 'animate__infinite', 'animate__pulse')
})
pokedex.addEventListener('mouseleave', () => {
    pokedex.classList.remove('animate__animated', 'animate__infinite', 'animate__pulse')
})

const artigo2 = document.querySelector('.articlePokedex')
const titulo2 = document.querySelector('.tituloPokedex')
const div = document.querySelector('.textoPokedex')
pokedex.addEventListener('click', () => {
    console.log(textUp);
    switch (textUp) {
        case false:
            document.getElementById("idPokedex").style.display = "inline-block"
            div.className = 'textoPokedex animate__animated animate__fadeInLeft'
            textUp = true;
            break

        case true:
            
            div.className ='textoPokedex animate__animated animate__fadeOutLeft'
            textUp = false;
            break
    }
})