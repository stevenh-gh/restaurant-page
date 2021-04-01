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
  content.appendChild(makeFood('Golden Crab',
    'https://static.wikia.nocookie.net/gensin-impact/images/5/56/Item_Delicious_Golden_Crab.png/revision/latest?cb=20201226191148',
    'Increases all party members\' DEF by 242~308 and healing effects by 6~10% for 300s.'))
  content.appendChild(makeFood('Golden Fried Chicken',
    'https://static.wikia.nocookie.net/gensin-impact/images/6/68/Item_Delicious_Golden_Fried_Chicken.png/revision/latest?cb=20210317180609',
    'Increases all party members\' ATK by 224~320 and CRIT Rate by 6~10% for 300s.'))
  content.appendChild(makeFood('Jade Parcels',
    'https://static.wikia.nocookie.net/gensin-impact/images/8/87/Item_Delicious_Jade_Parcels.png/revision/latest?cb=20201104072405',
    'Increases all party members\' ATK by 224~320 and CRIT Rate by 6~10% for 300s.'))
  content.appendChild(makeFood('Moon Pie',
    'https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Delicious_Moon_Pie.png/revision/latest?cb=20201226064541',
    'Increases all party members\' Shield Strength by 25~35% and DEF by 165~235 for 300s.'))

  content.style.display = 'none'
  return { menu, menuContent: content }
}
export default tabMenu