import React, { useState, useCallback } from 'react'

export const useToggle = (initState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initState)
  const toggle = useCallback(() => {
    setState(prev => !prev)
  }, [])
  return [state, toggle]
}