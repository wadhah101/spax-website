import { useEffect } from 'react'

export const useOnClickOutside = <T extends HTMLElement>(
  ref: React.MutableRefObject<T>,
  handler: (...arg) => unknown
): void => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)
    return () => document.removeEventListener('click', listener)
  }, [ref, handler])
}
