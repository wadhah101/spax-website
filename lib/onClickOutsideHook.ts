import { useEffect } from 'react'

export const useOnClickOutside = <T extends HTMLElement>(
	ref: React.MutableRefObject<T>,
	handler: (e: Event) => unknown
): void => {
	useEffect(() => {
		const listener: EventListener = (event) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			handler(event)
		}
		document.addEventListener('click', listener)
		return () => document.removeEventListener('click', listener)
	}, [ref, handler])
}
