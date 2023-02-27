let hearts = document.querySelectorAll('.heart')

setTimeout(() => {
    hearts[2].classList.add('heart-active')
    setTimeout(() => {
        hearts[1].classList.add('heart-active')
    setTimeout(() => {
        hearts[0].classList.add('heart-active')
        },500)
    },500)
},500)