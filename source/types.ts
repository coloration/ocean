export interface IAction {
  cache: number  
  response: any
}

export interface IStream {

}



export enum VarialType {
  string = 'string',
  raw = 'raw',
  template = 'template',
}

export interface IVarial {
  type: VarialType,

  format: (input: string) => IVarial
  deps: IStream[]

  actions: IAction[]

  dispatch: () => Promise<IVarial>
}

export interface IConstVarial extends IVarial {}

export interface IReactiveVarial extends IVarial {}






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