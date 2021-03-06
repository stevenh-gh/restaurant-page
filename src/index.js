// import pageLoad from './pageLoad'
import tabHome from './tabHome'
import tabMenu from './tabMenu'

content = document.querySelector('#content')
content.style.textAlign = 'center'

let container = document.createElement('DIV')
container.setAttribute('id', 'container')
content.appendChild(container)

// content.appendChild(pageLoad('The Odin Restaurant', '#1 restaurant in all of Midgard!', 'Endorsed by the Allfather himself!'))

let { home, homeContent } = tabHome()
let { menu, menuContent } = tabMenu()
container.appendChild(home)
container.appendChild(menu)
content.appendChild(homeContent)
content.appendChild(menuContent)

home.addEventListener('click', () => {
  tabOnClick(homeContent)
})

menu.addEventListener('click', () => {
  tabOnClick(menuContent)
})

function tabOnClick(contentItem) {
  let tabContent = content.querySelectorAll('div .content')
  tabContent.forEach(tc => {
    tc.style.display = 'none'
  })
  contentItem.style.display = 'block'
}

