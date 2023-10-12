import './styles/index.scss'
import Dropdown from './Dropdown'
import Title from './Title'
import Input from './Input'
import Paragraph from './Paragraph'

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
input.addLabel('Valor do procedimento', 'procedure')
input.addField('procedure')
input.appendIn(mainElement)

const paragraph = new Paragraph()
paragraph.addText('Tipo de desconto: ')
paragraph.addSpan('Pix')
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Porcentagem de desconto: ')
paragraph.addSpan('30%')
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Valor do procedimento: ')
paragraph.addSpan('R$ ')
paragraph.addSpan('360,00')
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Desconto a ser aplicado: ')
paragraph.addSpan('R$ ')
paragraph.addSpan('252,00')
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Procedimento com desconto: ')
paragraph.addSpan('R$ ')
paragraph.addSpan('108,00')
paragraph.appendIn(mainElement)
