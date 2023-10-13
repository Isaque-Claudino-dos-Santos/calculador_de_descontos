import ElementHandler from '../Modules/ElementHandler'

export default class Dropdown extends ElementHandler {
  public readonly container = document.createElement('div')
  private readonly items = document.createElement('nav')
  private readonly containerClassName: string = 'dropdown'
  private readonly buttonClassName: string = 'dropdown_button'
  private readonly itemsOffClassName: string = 'dropdown_items_off'
  private readonly itemsClassName: string = `dropdown_items ${this.itemsOffClassName}`
  private readonly itemClassName: string = 'dropdown_item'

  constructor() {
    super()
    this.provideClassName()
  }

  private toggleDropdown() {
    this.items.classList.toggle(this.itemsOffClassName)
  }

  private provideClassName(): void {
    this.container.className = this.containerClassName
    this.items.className = this.itemsClassName
  }

  public addButton(text: string): void {
    const button = document.createElement('button')
    button.className = this.buttonClassName
    button.textContent = text
    button.addEventListener('click', () => {
      this.toggleDropdown()
    })
    this.container.appendChild(button)
  }

  public addItem(
    text: string,
    onclick: (event: MouseEvent) => void = () => {}
  ): void {
    const item = document.createElement('a')
    item.className = `${this.itemClassName} ${this.itemsOffClassName}`
    item.textContent = text
    item.onclick = (e) => {
      onclick(e)
      this.toggleDropdown()
    }
    this.items.appendChild(item)
    this.container.appendChild(this.items)
  }
}
