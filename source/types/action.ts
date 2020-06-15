import { ActionType, ActionWay } from "./enum"
import { IVarial } from "./varial"

export interface IAction<K = any> {
  type: ActionType
  way: ActionWay
  prev: IAction | null
  next: IAction | null
  cache: number | null
  response: K
  depVars: IVarial[] | null

  act: (vars?: IVarial[]) => Promise<K>
}


