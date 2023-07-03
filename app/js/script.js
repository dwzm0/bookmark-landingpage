const mobileMenuTrigger = document.getElementById('mobile-menu-trigger')
const mobileMenuClose = document.getElementById('mobile-menu-close')

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
