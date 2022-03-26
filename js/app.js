const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList
        if(style.contains("decrease")) {
            count--
        }else if(style.contains("increase")) {
            count++
        }else {
            count = 0
            value.style.color = "black"
        }
        value.textContent = count
        if(count > 0) {
            value.style.color = "green"
        }else if(count < 0 ) {
            value.style.color = "red"
        }
    })
})