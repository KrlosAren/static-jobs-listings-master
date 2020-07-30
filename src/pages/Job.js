import getData from '../utils/getData'
class Job {
  constructor(id) {
    // debugger
    const data = getData()
      this.job = data.filter(job => job.id === id)

  }

  render() {
    const tags = this.job.map( tagFilter => [tagFilter.role, tagFilter.level, ...tagFilter.languages, ...tagFilter.tools])
    const view = `
    ${this.job.map(data => `
    <article class="box">
    <img src=${data.logo}><span class="box__content">
    <span class="box__content--title">
    <h1>${data.company}</h1>
    <ul>
    ${data.new === true ?
        `<li>New!</li>`
        : ``}
      ${data.featured === true ?
        `<li>Featured</li>`
        : ``}
        </ul>
        </span>
        <h3>${data.position}</h3>
        <ul class="box__content--position">
        <li>${data.postedAt}</li>
        <li>${data.contract}</li>
        <li>${data.location}</li>
        </ul>
        </span>
        <span class="box__tool">
        `)}
        <ul>
        ${tags[0].map( tags => `
          <li id="filter">${tags}</li>
        `).join('')}
        </ul>
        </span>
        </article>`;
    return view
  }
}

export default Job;


