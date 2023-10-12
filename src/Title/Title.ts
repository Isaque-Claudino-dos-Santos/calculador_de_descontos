import ElementHandler from '../Modules/ElementHandler'

export default class Title extends ElementHandler {
  public readonly container = document.createElement('div')
  private readonly fixClassName: string = 'title'
  private readonly h1ClassName: string = `${this.fixClassName}_text`

  constructor() {
    super()
    this.provideClassName()
  }

  private provideClassName(): void {
    this.container.className = this.fixClassName
  }

  addTitle(text: string): void {
    const h1 = document.createElement('h1')
    h1.textContent = text
    h1.className = this.h1ClassName
    this.container.appendChild(h1)
  }
}
