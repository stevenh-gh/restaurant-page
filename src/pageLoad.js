function pageLoad(title, h3, h4) {
  let pageLoad, elementTitle, em, elementh3, elementh4

  pageLoad = document.createElement('DIV')

  elementTitle = document.createElement('H1')
  elementTitle.textContent = title

  em = document.createElement('EM')
  elementh3 = document.createElement('H3')
  elementh3.textContent = h3

  elementh4 = document.createElement('H4')
  elementh4.textContent = h4

  em.appendChild(elementh3)
  pageLoad.appendChild(elementTitle)
  pageLoad.appendChild(em)
  pageLoad.appendChild(elementh4)

  return pageLoad
}

export default pageLoad