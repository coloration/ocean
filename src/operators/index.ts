import { specify } from './specify'
import { http } from './http'
import { get } from './get'

export type OperatorFunc = (ori: { signs: any[], actions: any[] } | undefined, config: any | undefined, val: any) => Promise<any>
export enum OperatorType {
  set = 'set',
  get = 'get',
  http = 'http'
}
export const operatorMap = new Map<OperatorType, OperatorFunc>([
  [OperatorType.http, http],
  [OperatorType.set, specify],
  [OperatorType.get, get]
])