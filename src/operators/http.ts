// import { Asker } from '@coloration/asker'
import { xml1, xml2, xml1Url, xml2Url } from '@/mock/xml'

export async function http (
  ori: undefined, 
  config: undefined,
  url: string
) {
  return url === xml1Url ? xml1 : xml2
}