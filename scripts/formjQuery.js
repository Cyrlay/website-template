const main = () => {
    prepareDOMEvents()
    checkURL()
}

const prepareDOMEvents = () => {
    $('.log').click(() => {
        showLoginPopUp()
    })

    $('.reg').click(() => {
        showRegisterPopUp()
    })

    $('.btn-cancel').click(() => {
        closePopUps()
    })

    $('.btn-add').click(() => {
        console.log('ok')
    })
}

const showLoginPopUp = () => {
    closePopUps()
    $('main').addClass('blur-filter')
    setTimeout(() => {
        $('.login-popup').css('display', 'flex')
    }, 100)
}

const showRegisterPopUp = () => {
    closePopUps()
    $('main').addClass('blur-filter')
    setTimeout(() => {
        $('.register-popup').css('display', 'flex')
    }, 100)

}

const closePopUps = () => {
    history.back()
    $('main').removeClass('blur-filter')
    $('.login-popup').css('display', 'none')
    $('.register-popup').css('display', 'none')
}

const checkURL = () => {
    let pageURL = $(location).attr("href")

    if (pageURL.indexOf('#login') > -1) {
        showLoginPopUp()
    } else if (pageURL.indexOf('#register') > -1) {
        showRegisterPopUp()
    } else {
        return null
    }
}

$(document).ready(main)
