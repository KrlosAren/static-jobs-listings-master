class Categories {
  constructor(content) {
    this.content = content
  }

  template(filters) {
    const listTag = [...new Set(filters)]
    const view = `
    <div class="filter">
    <span class="filter__tag">
    ${listTag.map(element => `
        <h3 id="tag">${element}</h3>
        `).join('')}
        </span>
      <span class="filter__clear" id="clear">Clear</span>
    </div>
      `;
    return view
  }
}

export default Categories;


      // <span id="removeFilter">&#10006;</span>