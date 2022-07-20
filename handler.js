export function setupRatingHandler(elements) {
  elements = Array.from(elements);
  elements.forEach(el => {
    el.addEventListener('click', () => {
      elements.forEach(el => el.classList.remove('active'))
      el.classList.add('active')
    })
  })
}

export function setupSubmitHandler(elements, template) {
  const element = Array.from(elements)[0];
  element.addEventListener('click', () => {
    const selectedRating = document.getElementsByClassName('rating-component__rating-list-item active')?.[0];
    document.querySelector('#app').innerHTML = template(selectedRating?.innerHTML ?? 0);
  })
}
