import { Ocean, IGlobalModule } from '../Ocean'
import { useState, useCallback, useEffect } from 'react'
import { PlainObject } from '@coloration/kit'

const mapCache = new Map<Function, PlainObject>()

export function useModule<T = any, K = any> (
  moduleName: string,
  mapper?: (state: T) => K
) {

  if (mapper && !mapCache.has(mapper)) {
    mapCache.set(mapper, mapper(Ocean.get(moduleName).module.state as any))
  }

  const [mappedState, trigger] = useState<K>((mapper ? mapCache.get(mapper) : undefined) as any)
  const dispatch = useCallback(<T>(actionType: string, payload: T) => {
    Ocean.dispatch(moduleName, actionType, payload)
  }, []) 
 
  useEffect(() => {
    function tracker (state: T, _mod: IGlobalModule) {

      const cache = mapCache.get(mapper)
      const mapped = mapper(state)

      for (let key in cache) {

        if (Object.is(cache[key], mapped[key])) continue
        
        trigger(mapped)
        mapCache.set(mapper, mapped)

        break
      }
    }
    Ocean.track(tracker, moduleName)

    return () => {
      Ocean.untrack(tracker, moduleName)
    }
  }, [])
  return { state: mappedState, dispatch }
}