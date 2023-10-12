import ElementHandler from '../Modules/ElementHandler'

export default class Input extends ElementHandler {
  public readonly container: HTMLElement = document.createElement('div')
  public readonly fixClassName: string = 'input'
  public readonly labelClassName: string = `${this.fixClassName}_label`
  public readonly inputClassName: string = `${this.fixClassName}_field`

  constructor() {
    super()
    this.provideClassName()
  }

  private provideClassName() {
    this.container.className = this.fixClassName
  }

  addLabel(text: string, htmlFor: string): void {
    const label = document.createElement('label')
    label.textContent = text
    label.htmlFor = htmlFor
    label.className = this.labelClassName
    this.container.appendChild(label)
  }

  addField(
    id: string,
    type: string = 'text',
    callback: (element: HTMLInputElement) => void = () => {}
  ): void {
    const input = document.createElement('input')
    input.type = type
    input.id = id
    input.className = this.inputClassName
    input.onload = (e) => e.preventDefault()
    callback(input)
    this.container.appendChild(input)
  }
}
