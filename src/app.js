

import render from './utils/index.js'
import Filter from './utils/Filter.js'
// import Observer from './utils/Observer'

window.addEventListener('load', render)
window.addEventListener('load', Filter)
// window.addEventListener('load', Observer)




if (module.hot) {
  module.hot.accept('./utils/index.js', () => {
    render()
  })
}