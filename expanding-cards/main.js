const expandingCardsItems = document.querySelectorAll('.expanding-cards__item')
let expandedItem = expandingCardsItems[0]

expandingCardsItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (expandedItem == item) return
    if (expandedItem) {
      expandedItem.classList.remove('expanding-cards__item--expanded')
    }
    expandedItem = item
    item.classList.add('expanding-cards__item--expanded')
  })
})
