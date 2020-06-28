import { IVarial, IAction } from './atom'
import { BoardType } from './enum';

export interface IPackage {
  pid: string,
  boards: IBoard[]
}

export interface IBoard {
  title: string,
  version: string,
  type: BoardType
  bid: string,
  /**
   * 归属
   */
  pid: IPackage['pid'] | null

  varials: IVarial[]
  actions: IAction[]
  layout: null 
}