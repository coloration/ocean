export interface IPackage {
  pid: string,
  boards: IBoard
}

export interface IBoard {
  title: string,
  version: string,
  bid: string,
  pid: string | null
}