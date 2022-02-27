/*
let loginBtn, registerBtn, loginPopUp, registerPopUp, cancelBtn, submitBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    loginBtn = document.querySelectorAll('.log')
    registerBtn = document.querySelectorAll('.reg')
    loginPopUp = document.querySelector('.login-popup')
    registerPopUp = document.querySelector('.register-popup')
    cancelBtn = document.querySelectorAll('.btn-cancel')
    submitBtn = document.querySelectorAll('.btn-add')
}

const prepareDOMEvents = () => {
    for(let i = 0; i < loginBtn.length; i++) {
        loginBtn[i].addEventListener('click', () => {
            showLoginPopUp()
        })
    }
    for(let i = 0; i < registerBtn.length; i++) {
        registerBtn[i].addEventListener('click', () => {
            showRegisterPopUp()
        })
    }
    for(let i = 0; i < cancelBtn.length; i++) {
        cancelBtn[i].addEventListener('click', () => {
            closePopUps()
        })
    }
    for(let i = 0; i < submitBtn.length; i++) {
        submitBtn[i].addEventListener('click', () => {
            submit()
        })
    }
}

const showLoginPopUp = () => {
    closePopUps()
    loginPopUp.style.display = 'flex'
}

const showRegisterPopUp = () => {
    closePopUps()
    registerPopUp.style.display = 'flex'
}

const closePopUps = () => {
    history.back()
    loginPopUp.style.display = 'none'
    registerPopUp.style.display = 'none'
}

const submit = () => {
    console.log('ok')
}

document.addEventListener('DOMContentLoaded', main)

*/
