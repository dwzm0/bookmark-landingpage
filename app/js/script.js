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

const changeView = function(link, viewSrc, viewHeader, viewText) {
    link.addEventListener('click', () => {
        img.src = viewSrc
        header.textContent = viewHeader
        text.textContent = viewText
    })
}

changeView(links[0], '../../images/illustration-features-tab-1.svg', 'Bookmark in one click', 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
changeView(links[1], '../../images/illustration-features-tab-2.svg', 'Intelligent search', 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.')
changeView(links[2], '../../images/illustration-features-tab-3.svg', 'Share your bookmarks', 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')
