import { ReactElement, useEffect, useState } from 'react';
import type { MouseEventHandler, MouseEvent, ChangeEvent } from 'react';
import NumberControllerClass from './NumberController.module.scss';
import type { SizeProps } from '../../types/baseTypes'

export interface NumberControllerProps {
  initValue?: number,
  step?: number,
  range?: [number, number],
  mode?: 'dark' | 'light',
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onChange?: (value: number) => void,
}

export default function NumberController({
  onClick,
  onChange,
  width = 60,
  height = 30,
  initValue = 1,
  step = 1,
  range = [0, Infinity],
  mode = 'light',
}: NumberControllerProps & SizeProps): ReactElement {
  const [value, setValue] = useState<number>(initValue)
  const handleOutOfRange = (value: number, range: [number, number]) => {
    let res = 0;
    switch (true) {
      case (value < range[0]):
        res = range[0]
        break
      case (value > range[1]):
        res = range[1]
        break
      case (value >= range[0] && value <= range[1]):
        res = value
        break
    }
    return res
  }
  const handleDecrease = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(prev => (handleOutOfRange((prev - step), range)))
    onClick?.(e)
  }
  const handleIncrease = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(prev => (handleOutOfRange((prev + step), range)))
    onClick?.(e)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value)
    setValue(val)
  }

  function cssNumberToString(value: number | string) {
    if (typeof value === 'number') {
      return `${value}px`
    }
    if (typeof value === 'string') {
      return value
    }
  }

  // 监听<input />内容变化
  useEffect(() => {
    onChange?.(value)
  }, [value])

  return (
    <section
      className={NumberControllerClass[`container-${mode}`]}
      style={{
        width: cssNumberToString(width),
        height: cssNumberToString(height),
      }}
    >
      <button className={`button-style`} onClick={handleDecrease}>-</button>
      <input className={`input-style`} type='number' value={value} onChange={handleChange} />
      <button className={`button-style`} onClick={handleIncrease}>+</button>
    </section>
  )
}
