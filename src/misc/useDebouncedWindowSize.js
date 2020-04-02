import { useState, useLayoutEffect } from 'react'
import { useDebounce } from 'use-debounce'
import $ from 'jquery'
import _ from 'lodash'

const DEFAULT_DELAY_MS = 250

// NOTE
// Two custom hooks with slightly different methods
// for debouncing a Window resize.
// This first one uses useDebounce hook which is very cool because it can
// easily debounce local state changes, prop changes, Redux state changes...

export const useDebouncedWindowSize1 = (delay = DEFAULT_DELAY_MS) => {
	const [windowSize, setWindowSize] = useState([0, 0])
	const [debouncedWindowSize] = useDebounce(windowSize, delay)

	useLayoutEffect(() => {
		const handleResize = (e) => {
			setWindowSize([$(window).width(), $(window).height()])
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return debouncedWindowSize
}

// NOTE
// This second one is more efficient because it debounces the resize handler,
// so it remeasures the window less often.  But the net result to the component
// consuming the hook, and the number of its re-renders, will be the same.

export const useDebouncedWindowSize2 = (delay = DEFAULT_DELAY_MS) => {
	const [windowSize, setWindowSize] = useState([0, 0])

	useLayoutEffect(() => {
		const handleResize = _.debounce((e) => {
			setWindowSize([$(window).width(), $(window).height()])
		}, delay)

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [delay])

	return windowSize
}
