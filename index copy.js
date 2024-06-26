// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang)
    // Hide elements that don't correspond to the user's preferred language

    //location.reload()
}

// Function to change language
async function changeLanguage(lang) {
    // const rootElement = document.getElementById('root')
    // rootElement.lang = lang

    if (lang === 'en') {
        console.log('englischhh')
        // document
        //     .querySelectorAll('.swedish')
        //     .forEach((elem) => (elem.style.display = 'none'))

        document.querySelectorAll('.swedish').forEach((elem) => {
            elem.style.setProperty('display', 'none')
        })

        // const eng = document.querySelectorAll('.swedish')
        // console.log(eng)
        // const swed = eng[0]
        // console.log(swed)
        // const cssStyleDecl = swed.style
        // console.log(cssStyleDecl)
        // cssStyleDecl.setProperty('display', 'none')
    } else {
        console.log('swedischhh')
        document.querySelectorAll('.english').forEach((elem) => {
            elem.style.display = 'none'
        })
    }

    //await setLanguagePreference(lang)

    // const langData = await fetchLanguageData(lang)
    // updateContent(langData)
}

// // Call updateContent() on page load
// window.addEventListener('DOMContentLoaded', async () => {
//     const userPreferredLanguage = localStorage.getItem('language') || 'en'
//     // const langData = await fetchLanguageData(userPreferredLanguage);
//     // updateContent(langData);
// })
