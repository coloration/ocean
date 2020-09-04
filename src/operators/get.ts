export function get (
  ori: { signs: any[], actions: any[] } | undefined, 
  config: {
    type: 'raw' | 'string' | 'sign' | 'action', 
    signId: string
  } | undefined,
  val: any
) : Promise<any> {
  ori = ori || { signs: [], actions: [] }

  const sign = ori.signs.find(s => s.id === val)

  if (sign) {
    const type: 'raw' | 'string' | 'sign' | 'action' = sign.type


    if (type === 'sign') {
      const innerSign = ori.signs.find(s => s.id === sign.v)
      return get(ori, undefined, innerSign.id)
    }
    
    return Promise.resolve(formats[type](sign.v))
  }

  return Promise.resolve(null)
}

const formats = {
  raw, string: str, action: str
}

function raw (v: any) {
  return JSON.parse(v)
}

function str (v: any) {
  return v + ''
}