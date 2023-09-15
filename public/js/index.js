const desconts = new HandleDesconts()

desconts
  .add(new Descont('pix', 5))
  .add(new Descont('bloodTest', 50))
  .add(new Descont('accredited', 25))
  .add(new Descont('imageTest', 25))

const descontResponseElement = document.querySelector('#descontResponse')
const testPriceElement = document.querySelector('#testPrice')
const descontTypeElement = document.querySelectorAll('[name="descontType"]')

const descontTextElement = document.createElement('p')

descontResponseElement.appendChild(descontTextElement)

const handleDescont = (nameDescont, value) => {
  const descont = desconts.getDescont(nameDescont)

  descontTextElement.textContent =
    `Desconto: ${descont.percentage() * 100}% ` +
    `Descontado: R$${descont.calc(value)} ` +
    `Valor com desconto: R$${value - descont.calc(value)}`
}

let currentDescontName = ''

descontTypeElement.forEach((event) => {
  event.onclick = () => {
    currentDescontName = event.id
    handleDescont(currentDescontName, Number(testPriceElement.value))
  }
})

testPriceElement.addEventListener('input', function (event) {
  event.preventDefault()
  const current = event.target
  const value = Number(current.value)
  if (currentDescontName == '') return

  handleDescont(currentDescontName, value)
})
