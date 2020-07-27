
import './styles/sass/main.scss'

import bgDesktop from './assets/images/bg-header-desktop.svg'
import bgMobile from './assets/images/bg-header-mobile.svg'

import favicon from './assets/images/faceit.svg'

import myhome from './assets/images/myhome.svg'
import manage from './assets/images/manage.svg'
import insure from './assets/images/insure.svg'
import faceit from './assets/images/faceit.svg'
import shortly from './assets/images/shortly.svg'
import account from './assets/images/account.svg'
import photosnap from './assets/images/photosnap.svg'
import eyecamco from './assets/images/eyecam-co.svg'
import loopstudios from './assets/images/loop-studios.svg'
import theairfiltercompany from './assets/images/the-air-filter-company.svg'


import JobsList from './pages/JobsList.js'



const app = document.getElementById('app')

import data from './db.json'
import Job from './pages/Job'




const render = async () => {

  const list = data

  const jobsListArray = []
  list.forEach(job => {
    const newJob = new Job(job)
    jobsListArray.push(newJob.render())

    // return jobsListArray
  })
  console.log(jobsListArray)
    app.innerHTML = jobsListArray.join('')
  // app.innerHTML =  

}

window.addEventListener('load', render)

if (module.hot) {
  module.hot.accept('./pages/JobsList.js', () => {
    render()
  })
}


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