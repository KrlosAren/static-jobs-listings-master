const URL = 'http://localhost:4500/data'


const getData = async () => {
  try{
    const response = await fetch(URL)
    const data =  await response.json()
    return data
  }catch(error) {
    console.error('Fetch Error', error)
  }
}


export default getData;