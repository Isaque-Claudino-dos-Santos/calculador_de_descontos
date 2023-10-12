import DescontTypeProvider from '../DescontTypeProvider'

export default class DescontProvider {
  private currentDescontName: string = ''
  private readonly desconts: Record<string, DescontTypeProvider> = {}


  add(name: string, percentage: number): void {
    this.desconts[name] = new DescontTypeProvider(name, percentage)
  }

  get(name: string): DescontTypeProvider | null {
    return this.desconts[name]
  }

  current(name?: string): string {
    if (name in this.desconts) this.currentDescontName = name
    return this.currentDescontName
  }

  currentDescont(): DescontTypeProvider | null {
    return this.get(this.current())
  }
}
