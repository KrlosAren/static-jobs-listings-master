import data from '../db.json'
import Job from './Job.js'


// const jobsList = data

const ListJobs = () => {
  // debugger
  const jobsList = data
  jobsList.forEach( job =>{
    const listJobsNew = new Job(job)
    return listJobsNew
  })
}


export default ListJobs;