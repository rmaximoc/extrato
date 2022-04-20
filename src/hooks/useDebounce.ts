import { useEffect, useCallback, useRef } from 'react'

const useDebounce = (fn, deps, ms) => {
  const callback = useRef()
  const timeout = useRef()

  /**
   * Altera o callback atual
   */
  const setup = useCallback(() => {
    timeout.current && clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      callback.current()
    }, ms)
  }, [ms])

  /**
   * Remove de callback atual
   */
  const clear = useCallback(() => {
    timeout.current && clearTimeout(timeout.current)
  }, [])

  useEffect(() => {
    callback.current = fn
  }, [fn])

  useEffect(() => {
    setup()
    return clear
  }, [deps])

  return [clear, setup]
}

export { useDebounce }
