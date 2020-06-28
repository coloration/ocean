export enum VarialType {
  constant = 1,
  raw = 2,
}

export enum ActionType {
  format = 1,
  native = 2
}

export enum ActionWay {
  atom = 1,
  pipe = 2
}

export enum BoardType {
  normal = 1,

  // 里面的action varial 可以服用到其他 board 但是没有自己的 render
  library = 2
}