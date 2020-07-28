class ViewFilter {
  constructor(container) {
    this.container = document.getElementById(container)
    this.render()
  }

  template() {
    const view = `
      <div class="filter">
        <h3 class="clear">Clear</h3>
      </div>
    `;
    return view;
  }

  render() {
    this.container.innerHTML = this.template()
  }
}


export default ViewFilter;