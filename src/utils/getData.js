import data from './db.json'

const getData = () => {
  const response = data.jobs
  return response
}

export default getData;