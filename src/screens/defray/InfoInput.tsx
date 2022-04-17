import React, { ReactElement, useRef, useState } from 'react';
import InfoInputClass from './InfoInput.module.scss';
import { Input } from 'antd';
// types
import type { InputProps } from 'antd/lib/input/Input';
import type { ChangeEventHandler, Ref } from 'react';
import type { InputRef } from 'antd';

export interface InfoInputProps extends Omit<InputProps, 'value'> {
  value?: string,
  regCheck?: RegExp,
  optional?: boolean,
  errorMessage?: string,
  warningMessage?: string,
}

const InfoInput = React.forwardRef(({
  width,
  height,
  style,
  regCheck,
  value = '',
  onChange: handleChange,
  placeholder = '',
  allowClear = true,
  optional = false,
  errorMessage = '',
  warningMessage = '',
}: InfoInputProps, ref: Ref<InputRef>): ReactElement => {
  const [status, setStatus] = useState<'error' | 'warning' | ''>('')
  const clickIn = useRef(false)
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => { handleChange?.(e); }
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
    <div className={InfoInputClass.container} style={{ width, height, ...style }}>
      <Input
        ref={ref}
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
})

export default InfoInput
