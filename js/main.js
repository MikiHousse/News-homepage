function burgerMenu() {
    const menu = document.querySelector('#menu')
    const burger = document.querySelector('.burger')
    const overlay = document.querySelector('.burger-overlay')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        overlay.classList.toggle('hidden')
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    })
}

burgerMenu()