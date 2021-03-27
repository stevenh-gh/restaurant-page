function tabMenu() {
  let menu = document.createElement('DIV')
  menu.setAttribute('class', 'tab')
  menu.setAttribute('id', 'menu')
  menu.innerText = 'Menu'

  let content = document.createElement('DIV')
  content.setAttribute('class', 'content')
  content.setAttribute('id', 'menuContent')
  content.innerText = 'some content here...'


  return { menu, content }
}
export default tabMenu