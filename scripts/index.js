const button = document.querySelectorAll('.item__button img')
const buttons = Array.from(button)
const text = document.querySelectorAll('.item__text')
const texts = Array.from(text)

buttons.forEach((el) => {
    el.addEventListener('click', (e) => {
        let index = buttons.indexOf(e.target)
        texts[index].style.height = 'max-content'
    })
})
