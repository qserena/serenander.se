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
    localStorage.setItem('language', lang)
    if (lang === 'en') {
        setEnglishLanguage()
    } else {
        setSwedishLanguage()
    }
}

async function readLanguageFromLocalStorage() {
    const lang = localStorage.getItem('language')
    if (lang && lang === 'en') {
        setEnglishLanguage()
    } else {
        setSwedishLanguage()
    }
}

readLanguageFromLocalStorage()
