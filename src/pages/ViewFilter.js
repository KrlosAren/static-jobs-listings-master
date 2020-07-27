function ViewFilter(filter) {
  debugger
  const view = `
    <div class="filter">
      ${filter.map( section =>`
        <span>${section}</span>
      `).join('')}
      <h3 class="clear">Clear</h3>
    </div>
  `;
  return view
} 

export default ViewFilter;