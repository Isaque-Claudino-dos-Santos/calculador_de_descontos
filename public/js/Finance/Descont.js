const kName = Symbol('name')
const kPercentage = Symbol('percentage')

class Descont {
  constructor(name, valueDescont) {
    this[kName] = name
    this[kPercentage] = valueDescont / 100
  }

  name() {
    return this[kName]
  }

  percentage() {
    return this[kPercentage]
  }

  calc(value) {
    return value * this.percentage()
  }
}
