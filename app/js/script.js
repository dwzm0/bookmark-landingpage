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