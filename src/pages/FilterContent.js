const FilterContent = (filter) => {
  const view = `
    <div>
      <span>${filter.textContent}</span>
      <span>&#10006;</span>
    </div>
  `;
  return view
}

export default FilterContent