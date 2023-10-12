import './styles/index.scss'
import Dropdown from './Dropdown'

const mainElement = document.querySelector('main .container') as HTMLElement

const dropdown = new Dropdown()
dropdown.addButton('Tipo de Desconto')
dropdown.addItem('Pix')
dropdown.addItem('Credenciada')
dropdown.addItem('Exames de Lab')
dropdown.addItem('Exames de Imagem')
dropdown.appendIn(mainElement)
