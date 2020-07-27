class Job {
  constructor(data) {
    this.detail = data
  }

  render() {
    this.filter = this.detail.role.concat(',', this.detail.level)
      .concat(',', this.detail.languages)
      .concat(',', this.detail.tools)
      .split(',').filter(Boolean)
    const view = `
  <article class="box">
    <img src=${this.detail.logo}><span class="box__content">
      <span class="box__content--title">
        <h1>${this.detail.company}</h1>
        <ul>
          ${this.detail.new === true ?
        `<li>New!</li>`
        : ``}
          ${this.detail.featured === true ?
        `<li>Featured</li>`
        : ``}
        </ul>
      </span>
      <h3>${this.detail.position}</h3>
      <ul class="box__content--position">
        <li>${this.detail.postedAt}</li>
        <li>${this.detail.contract}</li>
        <li>${this.detail.location}</li>
      </ul>
    </span>
    <span class="box__tool">
      <ul>
        ${this.filter.map(selection => `
          <li id="filter">${selection}</li>
        `).join('')}
      </ul>
    </span>
  </article>
`;
    return view
  }
}

export default Job;


