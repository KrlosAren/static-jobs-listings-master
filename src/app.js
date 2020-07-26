// import render from './js/main.js'
// window.addEventListener('load', render)

import './styles/sass/main.scss'


const containerFilter = document.querySelector('.filter')

const clearButton = document.getElementById('clear')

const filter = Array.from(document.querySelectorAll('#filter')  )
filter.forEach(category =>{
  category.addEventListener('click', () =>{
    const filter = []
    containerFilter.style.display = 'flex'
    const sessionStorage = window.sessionStorage
    filter.push(category.textContent)
    sessionStorage.setItem('filter', JSON.stringify(filter))
  })


  clearButton.addEventListener('click', () => {
    containerFilter.style.display = 'none'
  })
})
