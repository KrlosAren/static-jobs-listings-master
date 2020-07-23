
// import  './pug/index.pug';
import '../styles/sass/main.scss';


import Data from './components/getData'


const render =  async () => {
  const app = document.getElementById('app')
  const data = await Data()
  debugger
  
 const job = data.find(  id => {
    return id.id === 1
  })

  

 
}

export default render;

// company: "Photosnap"
// contract: "Full Time"
// featured: true
// id: 1
// languages: (3) ["HTML", "CSS", "JavaScript"]
// level: "Senior"
// location: "USA Only"
// logo: "./images/photosnap.svg"
// new: true
// position: "Senior Frontend Developer"
// postedAt: "1d ago"
// role: "Frontend"