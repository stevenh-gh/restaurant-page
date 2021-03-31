function makeFood(foodName, imageUrl, description) {
  let foodItem = document.createElement('DIV')
  foodItem.setAttribute('class', 'foodDiv')

  let fName = document.createElement('DIV')
  fName.setAttribute('class', 'fName')
  fName.innerText = foodName
  let fDesc = document.createElement('DIV')
  fDesc.setAttribute('class', 'fDesc')
  fDesc.innerText = description

  let imageDiv = document.createElement('DIV')
  imageDiv.setAttribute('class', 'imageDiv')
  let image = document.createElement('IMG')
  image.setAttribute('src', imageUrl)
  image.setAttribute('class', 'foodImg')
  imageDiv.appendChild(image)

  foodItem.appendChild(fName)
  foodItem.appendChild(fDesc)
  foodItem.appendChild(imageDiv)

  return foodItem
}

function tabMenu() {
  let menu = document.createElement('DIV')
  menu.setAttribute('class', 'tab')
  menu.setAttribute('id', 'menu')
  menu.innerText = 'Menu'

  let content = document.createElement('DIV')
  content.setAttribute('class', 'content')
  content.setAttribute('id', 'menuContent')

  content.appendChild(makeFood('Adeptus\' Temptation',
    'https://static.wikia.nocookie.net/gensin-impact/images/6/66/Item_Delicious_Adeptus%27_Temptation.png/revision/latest?cb=20201209234129',
    'Increases all party members\' ATK by 260~372 and CRIT Rate by 8~12% for 300s.'))


  content.style.display = 'none'
  return { menu, menuContent: content }
}
export default tabMenu