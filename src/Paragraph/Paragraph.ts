import ElementHandler from '../Modules/ElementHandler'

export default class Paragraph extends ElementHandler {
  public container: HTMLParagraphElement = document.createElement('p')
  private readonly fixClassName: string = 'paragraph'

  constructor() {
    super()
    this.newInstance()
  }

  private provideClassName() {
    this.container.className = this.fixClassName
  }

  newInstance(): void {
    this.container = document.createElement('p')
    this.provideClassName()
  }

  addText(text: string): void {
    this.container.textContent += text
  }

  addSpan(text: string, options: Partial<HTMLElement> = {}): void {
    const span = document.createElement('span')
    span.textContent = text
    Object.assign(span, { ...options })
    this.container.appendChild(span)
  }
}
