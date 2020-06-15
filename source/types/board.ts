import { BoardType } from "./enum";

export interface IBoard {
  bid: string
  pid: string[]

  type: BoardType
}