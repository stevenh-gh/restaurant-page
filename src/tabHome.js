function tabHome() {
  let home = document.createElement('DIV')
  home.setAttribute('class', 'tab')
  home.setAttribute('id', 'home')
  home.textContent = 'Home'

  let content = document.createElement('DIV')
  content.setAttribute('class', 'content')
  content.setAttribute('id', 'homeContent')
  content.textContent = 'some content here...'


  return { home, content }
}
export default tabHome