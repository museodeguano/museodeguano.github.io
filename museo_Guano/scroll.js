let btn = document.querySelector('#scrollup');

btn.addEventListener('click', () => {
    document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

let btndown = document.querySelector('#scrolldown');

btndown.addEventListener('click', () => {
    document.body.scrollTo({
        top: 10000,
        behavior: 'smooth'
    })
    document.documentElement.scrollTo({
        top: 10000,
        behavior: 'smooth'
    })
})