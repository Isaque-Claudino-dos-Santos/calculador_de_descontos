import './styles/index.scss'
import Dropdown from './Dropdown'
import Title from './Title'
import Input from './Input'
import Paragraph from './Paragraph'
import DescontProvider from './Providers/DescontProvider'

const headerElement = document.querySelector('header .container') as HTMLElement
const mainElement = document.querySelector('main .container') as HTMLElement

const descontsData = [
  ['Pix', 5],
  ['Credenciada', 25],
  ['Exames de Lab', 50],
  ['Exames de Imagem', 25],
]
const descontProvider = new DescontProvider()

for (const descont of descontsData) {
  const name = descont[0]
  const percentage = descont[1]
  if (typeof name !== 'string' || typeof percentage !== 'number') break
  descontProvider.add(name, percentage)
}

descontProvider.current(descontsData[0][0] as string)

function filterInput(value: string): string {
  const validPattern = new RegExp(/^([0-9]+)(,|\.)?([0-9]+)?$/)
  const currentValue = value.slice(value.length - 1, value.length)

  if (!validPattern.test(value)) return value.slice(0, value.length - 1)
  if (currentValue === ',') return value.replace(',', '.')
  return value
}

function handlerCalculations() {
  let value = Number(
    document.querySelector<HTMLInputElement>('#procedure').value
  )
  if (isNaN(value)) value = 0
  const descont = descontProvider.currentDescont()
  if (!descont) return
  const porcentage = document.querySelector('#porcentage')
  const procedureValue = document.querySelector('#procedureValue')
  const descontToApply = document.querySelector('#descontToApply')
  const procedureWithDescont = document.querySelector('#procedureWithDescont')
  const descontType = document.querySelector('#descotType')

  descontType.textContent = descont.name
  porcentage.textContent = `${descont.percentage * 100}%`
  procedureValue.textContent = String(value)
  descontToApply.textContent = String(descont.descont(value))
  procedureWithDescont.textContent = String(descont.descontSubValue(value))
}

const title = new Title()
title.addTitle('Calculadora de Desconto')
title.appendIn(headerElement)

const dropdown = new Dropdown()
dropdown.addButton('Tipo de Desconto')
for (const descont of descontsData) {
  if (typeof descont[0] === 'string')
    dropdown.addItem(descont[0], (event) => {
      const target = event.target as HTMLElement
      descontProvider.current(target.textContent)
      handlerCalculations()
    })
}
dropdown.appendIn(mainElement)

const input = new Input()
input.addLabel('Valor do procedimento', 'procedure')
input.addField('procedure', 'text', (element) => {
  element.oninput = (e) => {
    element.value = filterInput(element.value)
    handlerCalculations()
  }
})
input.appendIn(mainElement)

const paragraph = new Paragraph()
paragraph.addText('Tipo de desconto: ')
paragraph.addSpan('Nenhum Desconto', { id: 'descotType' })
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Porcentagem de desconto: ')
paragraph.addSpan('0%', { id: 'porcentage' })
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Valor do procedimento: ')
paragraph.addSpan('R$ ')
paragraph.addSpan('0', { id: 'procedureValue' })
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Desconto a ser aplicado: ')
paragraph.addSpan('R$ ')
paragraph.addSpan('0', { id: 'descontToApply' })
paragraph.appendIn(mainElement)

paragraph.newInstance()
paragraph.addText('Procedimento com desconto: ')
paragraph.addSpan('R$ ')
paragraph.addSpan('0', { id: 'procedureWithDescont' })
paragraph.appendIn(mainElement)
