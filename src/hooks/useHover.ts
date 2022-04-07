import { useState } from "react"

export const useHover = () => {
  const [isHover, setHover] = useState<boolean>(false)
  const onMouseEnter = () => { setHover(true) }
  const onMouseLeave = () => { setHover(false) }
  return {
    isHover,
    onMouseEnter,
    onMouseLeave,
  }
}