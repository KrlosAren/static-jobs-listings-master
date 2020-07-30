
class Categories {
  constructor(content) {
    this.content = content
  }

  template(filters) {
    const view = `
    <div class="filter">
    <div class="filter__categories">
      ${filters.map(element => `
      <div>
      <h3>${element}</h3>
      <span id="removeFilter">&#10006;</span>
      </div>
      `).join('')}
    </div>
    <div class="filter__clear">
      <h3 class="clear">Clear</h3>
    </div>
    </div>

  `;
    return view
  }
}


export default Categories;



{/* <div class="filter">
${filters.map(element => `
<div class="filter__content">
  <span class="filter__content--name">${element}</span>
  <span class="filter__content--x">&#10006;</span>
</div>
`).join('')}
<h3 class="clear">Clear</h3>
</div> */}