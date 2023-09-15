const kDesconts = Symbol('desconts')
const kGetDescont = Symbol('getDescont')

class HandleDesconts {
  [kDesconts] = {}

  getDescont(name) {
    return this[kDesconts][name]
  }

  add(descont) {
    this[kDesconts][descont.name()] = descont
    return this
  }
}
