import { VarialType } from './enum'

export interface IVarial<T = any> {
  vid: string
  name: string
  bid: string | null
  pid: string | null
  type: VarialType

  value: T

  listeners: ((v: T) => void)[] | null

  getValue: () => T
  setValue: (vars?: IVarial[]) => T
}