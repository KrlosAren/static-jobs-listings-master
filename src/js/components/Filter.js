import getData from './js/getData.js'


const Data = async () => {
  const jobs = getData()
  console.log(jobs)
}

export default Data; 