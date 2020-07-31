import render from '../utils/index.js'
import {Filter} from '../utils/Filter'

const clear = () => {
    filterContent.innerHTML = ''
    render()
    Filter()
}

export default clear