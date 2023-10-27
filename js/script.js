/* ARTHUR DE OLIVEIRA PINTO 27/10/2023*/
let wordlen = document.querySelector('.tampalavra')
let cont = document.querySelector('.container')
let palmostr = document.querySelector('.palavra_mostrada')
let reload = document.querySelector('.reload')
let tipo = document.createElement("div")
let erros = document.createElement("div")
let chosenLetters = document.querySelector('.LetrasEscolhidas')
let msgword = document.querySelector('.msg_word')
let arr = ""
let errorcount = 0
let showword = ""
let universalword = ""
let canva = document.getElementById("cv")
let ctx = canva.getContext("2d")
const otherletters = ['Ç', 'Á', 'Ã', 'É', 'Í', 'Ó', 'Ú']
const bod = document.body
tipo.classList.add("tipo")
erros.classList.add("erro")
bod.appendChild(tipo)
bod.appendChild(erros)

let msg = document.createElement("div")
msg.classList.add("Mensagem")
msg.style.display = "none"
bod.appendChild(msg)


for (let i = 0; i < 26; i++) {
    let button = document.createElement("button")
    button.classList.add("btn")
    button.innerHTML = String.fromCharCode(65 + i)
    cont.appendChild(button)
}

const fetchWord = async () => {
    const jsonn = await fetch(`./dados.json`)
    const data = await jsonn.json()
    const obj = data.palavras[Math.floor(Math.random() * data.palavras.length)]

    return obj
}

const funcCanva = () => {
    if (errorcount == 1) {
        let centerX = 100
        let centerY = 40
        let radius = 15
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.stroke()
    }
    if (errorcount == 2) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 55)
        ctx.lineTo(100, 100)
        ctx.stroke()
    }
    if (errorcount == 3) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 100)
        ctx.lineTo(140, 160)
        ctx.stroke()
    }
    if (errorcount == 4) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 100)
        ctx.lineTo(60, 160)
        ctx.stroke()
    }
    if (errorcount == 5) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 75)
        ctx.lineTo(140, 100)
        ctx.stroke()
    }
    if (errorcount == 6) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 75)
        ctx.lineTo(60, 100)
        ctx.stroke()

        setTimeout(() => {
            ctx.clearRect(0, 0, canva.width, canva.height)
        }, 2000);

    }
}

function modString(x) {
    let str = ""
    for (i = 0; i < x; i++) {
        str += '-'
    }

    return str
}

const main = async () => {
    errorcount = 0
    const obj = await fetchWord()
    const word = obj.palavra
    universalword = word

    ctx.beginPath()
    ctx.lineWidth = 8
    ctx.strokeStyle = "white"
    ctx.moveTo(20, 200)
    ctx.lineTo(20, 20)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 8
    ctx.strokeStyle = "white"
    ctx.moveTo(16, 20)
    ctx.lineTo(110, 20)
    ctx.stroke()

    tipo.innerHTML = `${obj.tipo}`
    erros.innerHTML = `Erros: ${errorcount}`
    wordlen.innerHTML = `O tamanho da palavra: ${word.length} letras`
    showword = modString(word.length)
    palmostr.innerHTML = showword
}

function verifyOtherLetter(letter,x) {
    let showwordArray = showword.split('');

    console.log(universalword)
    if (letter.toLowerCase() == 'c') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'c' || universalword[i].toLowerCase() == 'ç') {
                showwordArray[i] = universalword[i].toLowerCase()
                showword = showwordArray.join('')
                palmostr.innerHTML = showword
                x++
            }
        }
    } else if (letter.toLowerCase() == 'a') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'a' || universalword[i].toLowerCase() == 'ã' || universalword[i].toLowerCase() == 'á') {
                showwordArray[i] = universalword[i].toLowerCase()
                showword = showwordArray.join('')
                palmostr.innerHTML = showword
                x++
            }
        }
    } else if (letter.toLowerCase() == 'e') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'e' || universalword[i].toLowerCase() == 'é') {
                showwordArray[i] = universalword[i].toLowerCase()
                showword = showwordArray.join('')
                palmostr.innerHTML = showword
                x++
            }
        }
    } else if (letter.toLowerCase() == 'i') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'i' || universalword[i].toLowerCase() == 'í') {
                showwordArray[i] = universalword[i].toLowerCase()
                showword = showwordArray.join('')
                palmostr.innerHTML = showword
                x++
            }
        }
    } else if (letter.toLowerCase() == 'o') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'o' || universalword[i].toLowerCase() == 'ó' || universalword[i].toLowerCase() == 'õ') {
                showwordArray[i] = universalword[i].toLowerCase()
                showword = showwordArray.join('')
                palmostr.innerHTML = showword
                x++
            }
        }
    } else if (letter.toLowerCase() == 'u') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'u' || universalword[i].toLowerCase() == 'ú') {
                showwordArray[i] = universalword[i].toLowerCase()
                showword = showwordArray.join('')
                palmostr.innerHTML = showword
                x++
            }
        }
    }
    return x
}

function verifyWord(character, word) {

    let showwordArray = showword.split('');
    let x = 0;

    console.log(universalword)
    if (character == 'A' || character == 'C' || character == 'E' || character == 'I' || character == "O" || character == "U") {
        x = verifyOtherLetter(character,x)
    } else {

        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() == character.toLowerCase()) {
                showwordArray[i] = character.toLowerCase()
                showword = showwordArray.join('')
                palmostr.innerHTML = showword
                x++
            }
        }
    }

    if (showword.toLowerCase() == universalword.toLocaleLowerCase()) {
        msg.innerHTML = "PARABÉNS VOCÊ VENCEU"
        chosenLetters.innerHTML = arr = ""
        msg.style.display = "block";
        setTimeout(() => {
            msg.style.display = "none";
            ctx.clearRect(0, 0, canva.width, canva.height)
        }, 2000);
    }

    if (x == 0) {
        errorcount++
        funcCanva()
        erros.innerHTML = `Erros: ${errorcount}`
    }

    if (errorcount == 6) {
        msg.innerHTML = "Que Pena Você Perdeu"
        chosenLetters.innerHTML = arr = ""
        msg.style.display = "block";
        palmostr.innerHTML = universalword
        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
    }

}

reload.addEventListener('click', () => {
    main()
    msg.style.display = "none"
    chosenLetters.innerHTML = arr = ""
})

let butWord = document.querySelectorAll('.btn')
butWord.forEach((button) => {
    button.addEventListener('click', (event) => {
        const letra = event.target.textContent

        if (arr.indexOf(letra) !== -1) {
            msgword.innerHTML = "Letra Já escolhida"
            setTimeout(() => {
                msgword.innerHTML = ""
            }, 3000)
        } else {
            arr += `${letra} - `
            chosenLetters.innerHTML = arr
            verifyWord(letra, universalword)
        }
    })
})

main()
