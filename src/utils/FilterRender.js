import Job from '../pages/Job.js'

const renderFilter = (ids) => {
  const filterJobRender = []
  const app = document.getElementById('app')
  ids.forEach(job => {
    const newJob = new Job(job)
    filterJobRender.push(newJob.render())
  })
  app.innerHTML = filterJobRender.join('')
}

export default renderFilter