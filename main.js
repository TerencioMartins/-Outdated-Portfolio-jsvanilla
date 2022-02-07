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

const pokedex = document.querySelector('.pokedex')
pokedex.addEventListener('mouseenter',() => {
    pokedex.className = ('pokedex')
    pokedex.classList.add('animate__animated', 'animate__infinite', 'animate__pulse')
})
pokedex.addEventListener('mouseleave', () => {
    pokedex.classList.remove('animate__animated', 'animate__infinite', 'animate__pulse')
})

const animeImg = document.querySelector('.animeImg')

animeImg.addEventListener('mouseenter',() => {
    animeImg.className = ('animeImg')
    animeImg.classList.add('animate__animated', 'animate__infinite', 'animate__pulse')
})
animeImg.addEventListener('mouseleave', () => {
    animeImg.classList.remove('animate__animated', 'animate__infinite', 'animate__pulse')
})

const artigo2 = document.querySelector('.articlePokedex')
const titulo2 = document.querySelector('.tituloPokedex')
const artigoAnime = document.querySelector('.articleAnime')
const tituloAnime = document.querySelector('.tituloAnime')
const imgAnime = document.querySelector('.animeImg')
const div = document.querySelector('.textoPokedex')
const textoAnime = document.querySelector('.textoAnime')
pokedex.addEventListener('click', () => {
    console.log(textUp);
    switch (textUp) {
        case false:
            document.getElementById("idPokedex").style.display = "inline-block"
            div.className = 'textoPokedex animate__animated animate__fadeInLeft'
            imgAnime.className = "animeImg animate__animated animate__fadeOutRight"
            textUp = true;
            break

        case true:
            div.className ='textoPokedex animate__animated animate__fadeOutLeft'
            imgAnime.className = "animeImg animate__animated animate__fadeInRight"
            // document.getElementById("idPokedex").style.display = "none"
            textUp = false;
            break
    }
})
imgAnime.addEventListener('click', () => {
    console.log(textUp);
    switch (textUp) {
        case false:
            document.getElementById("idAnime").style.display = "inline-block"
            textoAnime.className = 'textoAnime animate__animated animate__fadeInRight'
            pokedex.className = "pokedex animate__animated animate__fadeOutLeft"
            textUp = true;
            break

        case true:
            
            textoAnime.className ='textoAnime animate__animated animate__fadeOutRight'
            pokedex.className = "pokedex animate__animated animate__fadeInLeft"
            // document.getElementById("idAnime").style.display = "none"
            textUp = false;
            break
    }
})
