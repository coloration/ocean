export interface IAction {
  /** action 得到的 response 缓存多久 */
  cache: number  

  /** action 执行后得到的结果 */
  response: any
}

export interface IStream {

}


export enum VarialType {
  string = 'string',
  raw = 'raw',
  template = 'template',
}

export type VariailObserver = (varial: IVarial) => any

/** 变量: 观察者, 由 Trigger 触发通知, 通知 Render */
export interface IVarial {

  type: VarialType,

  obs: VariailObserver[]

  register: (ob: VariailObserver) => void 

  remove: (ob: VariailObserver) => void

  notify: () => Promise<IVarial>
}

export interface IConstVarial extends IVarial {}

export interface IReactiveVarial extends IVarial {

  /** 缓存结果 */
  response: IVarial
  /** 缓存时间 */
  responseCache: number
}



export interface ITrigger {
  varials: IVarial[]

  trigger: () => void
}


export enum EnvironmentType {

}

export interface ICompiler {

}


export interface IControl {

}


export interface IRender {
  compiler: ICompiler,
  env: EnvironmentType,

}

export interface IXmlRender extends IRender {

}

export interface IRssRender extends IXmlRender {

}

export interface IJsonRender extends IRender {

}