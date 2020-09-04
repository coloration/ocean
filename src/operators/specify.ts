export async function specify (
  ori: { signs: any[], actions: any[] } | undefined, 
  config: {
    type: 'raw' | 'string' | 'sign' | 'action', 
    signId: string, 
  },
  val: any
) {
  ori = ori || { signs: [], actions: [] }
  config = config || { type: 'string', signId: '' }

  const sign = ori.signs.find(s => s.id === config.signId)

  if (sign) {
    sign.type = config.type
    sign.v = formats[config.type](val)
  }

  return sign
}

const formats = {
  raw, string: str, sign: raw, action: raw
}

function raw (v: any) {
  return JSON.parse(v)
}

function str (v: any) {
  return v + ''
}