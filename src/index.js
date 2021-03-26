import pageLoad from './pageLoad'
import tabHome from './tabHome'

content = document.querySelector('#content')
content.appendChild(pageLoad('The Odin Restaurant', '#1 restaurant in all of Midgard!', 'Endorsed by the Allfather himself!'))
content.appendChild(tabHome())