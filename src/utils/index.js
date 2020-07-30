import '../styles/sass/main.scss'

import data from '../db.json'
import Job from '../pages/Job'
import {Filter} from '../utils/Filter'



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