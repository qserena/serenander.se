const defaultLanguage = 'en'
//const defaultLanguage = 'sv'

async function setSwedishLanguage() {
    // Show Swedish text, hide English text
    document.querySelectorAll('.swedish').forEach((elem) => {
        elem.style.display = 'block'
    })
    document.querySelectorAll('.swedish-inline-block').forEach((elem) => {
        elem.style.display = 'inline-block'
    })
    document.querySelectorAll('.english').forEach((elem) => {
        elem.style.display = 'none'
    })
    document.querySelectorAll('.english-inline-block').forEach((elem) => {
        elem.style.display = 'none'
    })

    // Handle visual appearance of language selector
    document.querySelectorAll('.swedish-option').forEach((elem) => {
        elem.classList.add('selected')
    })
    document.querySelectorAll('.english-option').forEach((elem) => {
        elem.classList.remove('selected')
    })
}

async function setEnglishLanguage() {
    // Hide Swedish text, show English text
    document.querySelectorAll('.swedish').forEach((elem) => {
        elem.style.display = 'none'
    })
    document.querySelectorAll('.swedish-inline-block').forEach((elem) => {
        elem.style.display = 'none'
    })
    document.querySelectorAll('.english').forEach((elem) => {
        elem.style.display = 'block'
    })
    document.querySelectorAll('.english-inline-block').forEach((elem) => {
        elem.style.display = 'inline-block'
    })

    // Handle visual appearance of language selector
    document.querySelectorAll('.swedish-option').forEach((elem) => {
        elem.classList.remove('selected')
    })
    document.querySelectorAll('.english-option').forEach((elem) => {
        elem.classList.add('selected')
    })
}

async function setLanguage(lang) {
    localStorage.setItem('language', lang)
    if (lang === 'en') {
        setEnglishLanguage()
    } else if (lang === 'sv') {
        setSwedishLanguage()
    }
    console.log(lang)
}

async function readLanguageFromLocalStorage() {
    let lang = localStorage.getItem('language')

    if (lang === null || lang === undefined || lang === '') {
        // If no language is set, set default language
        lang = defaultLanguage
    }

    setLanguage(lang)
}

readLanguageFromLocalStorage()
