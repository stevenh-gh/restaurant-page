import pageLoad from './pageLoad'
import tabHome from './tabHome'
import tabMenu from './tabMenu'

content = document.querySelector('#content')
content.style.textAlign = 'center'

content.appendChild(pageLoad('The Odin Restaurant', '#1 restaurant in all of Midgard!', 'Endorsed by the Allfather himself!'))

let container = document.createElement('DIV')
container.setAttribute('id', 'container')
content.appendChild(container)

let { home, homeContent } = tabHome()
let { menu, menuContent } = tabMenu()
container.appendChild(home)
container.appendChild(menu)

home.addEventListener('click', () => {
  container.appendChild(homeContent)
})

menu.addEventListener('click', () => {
  container.appendChild(menuContent)
})