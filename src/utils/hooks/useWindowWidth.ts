import { useLayoutEffect, useRef } from "react";

export function useWindowWidth(): number {
    let ref = useRef<number>(window.innerWidth)


    useLayoutEffect(() => {
        const handlerResize = () => {
            ref.current = window.innerWidth
        }

        document.addEventListener('resize', handlerResize)

        return () => {
            document.removeEventListener('resize', handlerResize)
        }
    }, [])

    return ref.current
}