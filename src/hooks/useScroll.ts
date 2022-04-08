import { useEffect, useRef, useState } from "react"


export const useScroll = (threshold: number): boolean => {
  const scrollTop = useRef<number>(0)
  const [status, setStatus] = useState<boolean>(false)
  useEffect(() => {
    function handleScroll() {
      scrollTop.current = window.pageYOffset
      if (scrollTop.current >= threshold) {
        setStatus(true)
      } else {
        setStatus(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return status
}