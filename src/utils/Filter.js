import Categories from '../pages/Categories'
import { tagsSearchBar } from '../utils/tagsSearchBar'

import FilterRender from '../utils/FilterRender'
import clear from '../utils/Clear.js'


const Filter = () => {
  const filterContent = document.getElementById('filterContent')
  const filterTags = new Categories()
  const filterCategories = []


  window.addEventListener('click', (event) => {
    const clickTarget = event.target


    if (clickTarget.id === 'filter') {
      filterCategories.push(clickTarget.textContent)
      filterContent.innerHTML = filterTags.template(filterCategories)
      const listId = tagsSearchBar(filterCategories)
      FilterRender(listId)
    }

    if (clickTarget.id === 'clear') {
      clear()
    }
    
    if (clickTarget.id === 'tag') {
      debugger
      const valuesTag = []
      const tags = document.querySelectorAll('#tag')
      tags.forEach( tag => valuesTag.push(tag.textContent))
      const newFilter = valuesTag.filter( value => {
        return value !== clickTarget.textContent
      })
      clickTarget.remove()
      const listNew = tagsSearchBar(newFilter)
      newFilter.length === 0 ? clear() : FilterRender(listNew)
    }
  })
}

export { Filter }
