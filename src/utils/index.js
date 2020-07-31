import '../styles/sass/main.scss'

import data from './db.json'
import Job from '../pages/Job'

import myhome from '../assets/images/myhome.svg'
import manage from '../assets/images/manage.svg'
import insure from '../assets/images/insure.svg'
import faceit from '../assets/images/faceit.svg'
import shortly from '../assets/images/shortly.svg'
import account from '../assets/images/account.svg'
import photosnap from '../assets/images/photosnap.svg'
import eyecamco from '../assets/images/eyecam-co.svg'
import loopstudios from '../assets/images/loop-studios.svg'
import theairfiltercompany from '../assets/images/the-air-filter-company.svg'

import bgMobile from '../assets/images/bg-header-mobile.svg'
import bgDesktop from '../assets/images/bg-header-desktop.svg'
import remove from '../assets/images/icon-remove.svg'


const app = document.getElementById('app')

const render = async () => {
  const list =  data.jobs
  const jobsListArray = []
  list.forEach(job => {
    // debugger
    const newJob = new Job(job.id)
    jobsListArray.push(newJob.render())
  })
  
  app.innerHTML = jobsListArray.join('')
  
}

export default render;