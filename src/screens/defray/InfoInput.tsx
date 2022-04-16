import { ReactElement, useRef, useState } from 'react';
import InfoInputClass from './InfoInput.module.scss';
import { Input } from 'antd';
// types
import type { InputProps } from 'antd/lib/input/Input';
import type { ChangeEventHandler } from 'react';

export interface InfoInputProps extends InputProps {
  regCheck?: RegExp,
  optional?: boolean,
  errorMessage?: string,
  warningMessage?: string,
}

export default function InfoInput({
  width,
  height,
  style,
  regCheck,
  placeholder = '',
  allowClear = true,
  optional = false,
  errorMessage = '',
  warningMessage = '',
}: InfoInputProps): ReactElement {
  const [value, setValue] = useState<string>('')
  const [status, setStatus] = useState<'error' | 'warning' | ''>('')
  const clickIn = useRef(false)
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => { setValue(e.target.value) }
  const onFocus = () => { clickIn.current = true }
  const onBlur = () => {
    if (!optional && clickIn.current) {
      if (value === '') {
        return setStatus('error')
      }
      if (regCheck && !regCheck.test(value)) {
        return setStatus('warning')
      }
      return setStatus('')
    }
  }
  return (
    <div className={InfoInputClass.container} style={{width, height, ...style}}>
      <Input
        placeholder={placeholder}
        allowClear={allowClear}
        value={value}
        status={status}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        size='large'
      />
      {status === 'error' && (<span className={`error`}>{errorMessage}</span>)}
      {status === 'warning' && (<span className={`warning`}>{warningMessage}</span>)}
    </div>
  )
}
