async function setSwedishLanguage() {
    document.querySelectorAll('.english').forEach((elem) => {
        elem.style.display = 'none'
    })
    document.querySelectorAll('.swedish').forEach((elem) => {
        elem.style.display = 'block'
    })
}

async function setEnglishLanguage() {
    document.querySelectorAll('.swedish').forEach((elem) => {
        elem.style.display = 'none'
    })
    document.querySelectorAll('.english').forEach((elem) => {
        elem.style.display = 'block'
    })
}

async function changeLanguage(lang) {
    if (lang === 'en') {
        setEnglishLanguage()
    } else {
        setSwedishLanguage()
    }
}

setSwedishLanguage()
