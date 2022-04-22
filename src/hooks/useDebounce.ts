import { useEffect, useCallback, useRef } from 'react'

interface UseDebouceProps {
  fn: () => void;
  dependencies: string;
  ms: number;
}

const useDebounce = ({ fn, dependencies, ms }: UseDebouceProps) => {
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
  }, [dependencies])

  return [clear, setup]
}

export { useDebounce }
