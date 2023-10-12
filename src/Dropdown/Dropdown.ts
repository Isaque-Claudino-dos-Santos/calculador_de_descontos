export default class Dropdown {
  private readonly container = document.createElement('div')
  private readonly items = document.createElement('nav')
  private readonly containerClassName: string = 'dropdown'
  private readonly buttonClassName: string = 'dropdown_button'
  private readonly itemsClassName: string = 'dropdown_items'
  private readonly itemsOffClassName: string = 'dropdown_items_off'
  private readonly itemClassName: string = 'dropdown_item'

  constructor() {
    this.provideClassName()
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
      this.items.classList.toggle(this.itemsOffClassName)
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
    item.onclick = (e) => onclick(e)
    this.items.appendChild(item)
    this.container.appendChild(this.items)
  }

  public appendIn(element: HTMLElement): void {
    element.appendChild(this.container)
  }
}
