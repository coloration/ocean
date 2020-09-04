import { IVarial, ITrigger } from '../types'

export class Trigger implements ITrigger {

  varials: IVarial[]

  constructor (opt: { varials: IVarial[]}) {
    this.varials = opt.varials || []
  }

  trigger () {
    this.varials.forEach(vari => vari.notify())
  }
}