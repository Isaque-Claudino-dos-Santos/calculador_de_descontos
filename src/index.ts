import './styles/index.scss'
import Dropdown from './Dropdown'
import Title from './Title'
import Input from './Input'

const headerElement = document.querySelector('header .container') as HTMLElement
const mainElement = document.querySelector('main .container') as HTMLElement

const title = new Title()
title.addTitle('Calculadora de Desconto')
title.appendIn(headerElement)

const dropdown = new Dropdown()
dropdown.addButton('Tipo de Desconto')
dropdown.addItem('Pix')
dropdown.addItem('Credenciada')
dropdown.addItem('Exames de Lab')
dropdown.addItem('Exames de Imagem')
dropdown.appendIn(mainElement)

const input = new Input()
input.addLabel('Valor do procedimento','procedure')
input.addField('procedure')
input.appendIn(mainElement)