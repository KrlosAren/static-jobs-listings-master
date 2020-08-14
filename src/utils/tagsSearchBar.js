import data from '../../db.json'
import {returnArray} from '../utils/returnArray.js'
import differenceOf2Arrays from '../utils/differenceTwoArrays'
import tagValueTrue from '../utils/tagValueTrue.js'

const tagsSearchBar = (currentTags) => {
  const value = currentTags.length
  const listFilterData = []
  data.jobs.forEach(job => {
    listFilterData.push([job.role, job.level, ...job.languages, ...job.tools])
  })
  const listOfValidation = []
  listFilterData.forEach(list => {
    listOfValidation.push(differenceOf2Arrays(list, currentTags))
  })
  const listIdFilter = tagValueTrue(listOfValidation)
  return returnArray(listIdFilter, value)
}

export {tagsSearchBar}