
const Observer = () => {
  const filterContent = document.getElementById('filterContent')
  const observer = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      console.log(mutation.type)
      if(mutation.type === 'childList') {
          const clear = document.getElementById('clear')
          clear.addEventListener('click', () => {
          filterContent.style.display = 'none'
        })
      }
  
    })
  });

  const observerOptions = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: false,
    attributeOldValue: false,
    characterDataOldValue: false
  };

  observer.observe(filterContent, observerOptions)
}

export default Observer;