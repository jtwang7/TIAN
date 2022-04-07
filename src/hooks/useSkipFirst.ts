import { useEffect, useRef } from 'react';

export const useSkipFirst = (fn: () => void | (() => void), dependencies: any[]) => {
  const isFirst = useRef<boolean>(false)
  useEffect(() => {
    if (!isFirst.current) {
      isFirst.current = true
    } else {
      fn()
    }
  }, [...dependencies])
}