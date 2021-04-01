import pageLoad from './pageLoad'

function tabHome() {
  let home = document.createElement('DIV')
  home.setAttribute('class', 'tab')
  home.setAttribute('id', 'home')
  home.textContent = 'Home'

  let content = document.createElement('DIV')
  content.setAttribute('class', 'content')
  content.setAttribute('id', 'homeContent')
  content.appendChild(pageLoad('The Odin Restaurant', '#1 restaurant in all of Midgard!', 'Endorsed by the Allfather himself!'))

  return { home, homeContent: content }
}
export default tabHome