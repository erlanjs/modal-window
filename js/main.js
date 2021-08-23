let modalBtn = document.querySelector('.modal-btn')
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', ()=> {
    document.querySelector('.modal').style.display = "block"
    document.querySelector('.modal').style.animationIterationCount = "block"
})


closeBtn.addEventListener('click', ()=> {
    document.querySelector('.modal').style.display = "none"

    document.querySelector('.modal').style.animationDelay = "none"
})

window.onclick = (e) => {
    if (e.target === modal)  {
        document.querySelector('.modal').style.display = "none"
    }
}








