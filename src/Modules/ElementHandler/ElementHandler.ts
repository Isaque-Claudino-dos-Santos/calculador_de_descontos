import ElementHandlerInterface from './ElementHandlerInterface'

export default abstract class ElementHandler
  implements ElementHandlerInterface
{
  abstract readonly container: HTMLElement

  appendIn(element: HTMLElement): void {
    element.appendChild(this.container)
  }
}
