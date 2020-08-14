import '../styles/sass/main.scss'

import data from '../../db.json'
import Job from '../pages/Job'

import myhome from '../assets/myhome.svg'
import manage from '../assets/manage.svg'
import insure from '../assets/insure.svg'
import faceit from '../assets/faceit.svg'
import shortly from '../assets/shortly.svg'
import account from '../assets/account.svg'
import photosnap from '../assets/photosnap.svg'
import eyecamco from '../assets/eyecam-co.svg'
import loopstudios from '../assets/loop-studios.svg'
import theairfiltercompany from '../assets/the-air-filter-company.svg'



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