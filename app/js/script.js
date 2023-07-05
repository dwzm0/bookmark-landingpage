const mobileMenuTrigger = document.getElementById('mobile-menu-trigger')
const mobileMenuClose = document.getElementById('mobile-menu-close')
const mobileMenuLinks = document.querySelectorAll('.mobile-nav__item')

if(mobileMenuTrigger) {
    mobileMenuTrigger.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.add('opened', 'lock')
    })
}
 
if(mobileMenuClose) {
    mobileMenuClose.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.remove('opened', 'lock')
    })
}

mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.body.classList.remove('opened', 'lock')
    })
})

const links = document.querySelector('.features__selection').children
const img  = document.querySelector('.features__view-current .view img')
const header = document.querySelector('.features__view-current .text h2')
const text = document.querySelector('.features__view-current .text p')

let width 

const changeBorderOnResize = function() {
    width = window.innerWidth
    
    for (let link of links) {
        console.log(link.style.borderBottom);
        if (window.innerWidth <= 1024 && link.style.borderBottom === '4px solid rgb(250, 87, 87)') {
            link.style.borderBottom = '1px solid hsla(229, 8%, 60%)'
            link.children[0].style.borderBottom = '4px solid hsl(0, 94%, 66%)'
        }else if (window.innerWidth > 1024 && link.children[0].style.borderBottom === '4px solid rgb(250, 87, 87)'){
            link.children[0].style.borderBottom = 'unset'
            link.style.borderBottom = '4px solid hsl(0, 94%, 66%)'
        }
    }
}

window.addEventListener('resize', changeBorderOnResize);
changeBorderOnResize()


const setWrapperBorderRed = function(link){
    link.style.borderBottom = '4px solid hsl(0, 94%, 66%)'
}

const setToDefault = function(link){
    link.style.borderBottom = '1px solid hsla(229, 8%, 60%)'
    link.children[0].style.borderBottom = 'unset'
    link.children[0].style.paddingBottom = '16px'
}

const setParagraphBorderRed = function(link) {
    link.children[0].style.borderBottom = '4px solid hsl(0, 94%, 66%)'
    link.children[0].style.paddingBottom = '12px'
}

const changeView = function(link, viewSrc, viewHeader, viewText) {
    link.addEventListener('click', () => {
        for (let link of links) {
            setToDefault(link)
        }
        width <= 1024 ? setParagraphBorderRed(link) : setWrapperBorderRed(link)
        img.src = viewSrc
        header.textContent = viewHeader
        text.textContent = viewText
    })
}

changeView(links[0], '../../images/illustration-features-tab-1.svg', 'Bookmark in one click', 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
changeView(links[1], '../../images/illustration-features-tab-2.svg', 'Intelligent search', 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.')
changeView(links[2], '../../images/illustration-features-tab-3.svg', 'Share your bookmarks', 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')


const faqItems = document.querySelectorAll('.faq__item')
faqItems.forEach((item) => {
    item.addEventListener('click', () => {
       if (item.children[1].style.display == '') {
            item.children[1].style.display = 'flex'
            item.children[0].children[1].classList.add('arrow-transform')
       }else if (item.children[1].style.display == 'flex') {
            item.children[1].style.display = ''
            item.children[0].children[1].classList.remove('arrow-transform')
       }
      
    })
})

const form = document.querySelector('.cta__form')
const input = document.getElementById('email')
const inputContainer = document.querySelector('.input-container')
const errorIcon = document.querySelector('.icon-error')
const errorLabel = document.querySelector('.input-error')


const changeInputPadding = function() {
    inputContainer.style.paddingBottom = '0px'
    width <= 1024 ? inputContainer.style.paddingBottom = '20px' : inputContainer.style.paddingBottom = '0px'
}

const changeInputPaddingOnFullScreen = function() {
      if (width > 1024) {
      inputContainer.style.paddingBottom = '0px'
    }
}

window.addEventListener('resize', changeInputPadding);
window.addEventListener('resize', changeInputPaddingOnFullScreen);

changeInputPaddingOnFullScreen()

const onInValid = function() {
    changeInputPadding()
    errorIcon.style.display = 'flex'
    errorLabel.style.display = 'flex'
    input.style.border = '1px solid hsl(0, 94%, 66%)'
}

const onValid = function() {
    inputContainer.style.paddingBottom = '0px'
    errorIcon.style.display = 'none'
    errorLabel.style.display = 'none'
    input.style.border = 'none'
    alert(`${input.value} is correct email, you may proceed.`)
    input.value = ""
}


const emailValidation = function(input) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.value.match(mailFormat)){
        if (width <= 1024) {
            onInValid()
        } else if (width > 1024) {
            onInValid()
        }
    }else if (input.value.match(mailFormat)){
        onValid()
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    emailValidation(input)
})



