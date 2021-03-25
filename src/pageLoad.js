function pageLoad(title, h3, h4) {
  let elementTitle, em, elementh3, elementh4

  content = document.querySelector('#content')

  elementTitle = document.createElement('H1')
  elementTitle.textContent = title

  em = document.createElement('EM')
  elementh3 = document.createElement('H3')
  elementh3.textContent = h3

  elementh4 = document.createElement('H4')
  elementh4.textContent = h4

  em.appendChild(elementh3)
  content.appendChild(elementTitle)
  content.appendChild(em)
  content.appendChild(elementh4)
}

export default pageLoad