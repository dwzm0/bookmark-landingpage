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

console.log(header)
console.log(text)

links[0].addEventListener('click', () => {
    img.src = ('../../images/illustration-features-tab-1.svg')
    header.textContent = ('Bookmark in one click')
    text.textContent = ('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
})

links[1].addEventListener('click', () => {
    img.src = ('../../images/illustration-features-tab-2.svg')
    header.textContent = ('  Intelligent search')
    text.textContent = (' Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.')
})

links[2].addEventListener('click', () => {
    img.src = ('../../images/illustration-features-tab-3.svg')
    header.textContent = ('Share your bookmarks')
    text.textContent = ('Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')
})

console.log(links);
console.log(links[0]);