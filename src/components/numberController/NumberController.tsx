import { ReactElement, useState } from 'react';
import type { MouseEventHandler, MouseEvent, ChangeEventHandler, ChangeEvent } from 'react';
import NumberControllerClass from './NumberController.module.scss';

interface Props {
  initValue?: number,
  step?: number,
  range?: [number, number],
  mode?: 'dark' | 'light',
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

export default function NumberController({
  onClick,
  onChange,
  initValue = 1,
  step = 1,
  range = [0, Infinity],
  mode = 'light',
}: Props): ReactElement {
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
    onChange?.(e)
  }

  return (
    <section className={NumberControllerClass[`container-${mode}`]}>
      <button className={`button-style`} onClick={handleDecrease}>-</button>
      <input className={`input-style`} type='number' value={value} onChange={handleChange} />
      <button className={`button-style`} onClick={handleIncrease}>+</button>
    </section>
  )
}
