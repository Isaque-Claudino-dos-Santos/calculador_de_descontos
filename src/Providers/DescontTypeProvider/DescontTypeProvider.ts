export default class DescontTypeProvider {
  public readonly percentage: number
  
  constructor(public readonly name: string, percentage: number) {
    this.percentage = percentage / 100
  }

  descont(value: number): number {
    return value * this.percentage
  }

  descontSubValue(value: number): number {
    return value - value * this.percentage
  }
}
