import '../styles/sass/main.scss'

import data from '../db.json'
import Job from '../pages/Job'


const app = document.getElementById('app')
const render = () => {

  const FilterId = null
  const list = FilterId ? listId : data
  const jobsListArray = []
  list.forEach(job => {
    const newJob = new Job(job)
    jobsListArray.push(newJob.render())
  })
  app.innerHTML = jobsListArray.join('')

}

export default render;