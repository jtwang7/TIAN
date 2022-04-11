import React, { ReactElement } from 'react'
import './Loading.css'
import LoadingClass from './Loading.module.scss'
// classnames
import classnames from 'classnames';
// types
import { ReactProps } from '../../types/baseTypes';


export default function Loading({ 
  style,
  className = '',
}:  ReactProps): ReactElement {
  const containerClassName = classnames({
    [LoadingClass['container']]: true,
    [className]: className !== '',
  })

  return (
    <div className={containerClassName} style={style} >
      <div className="lds-heart"><div></div></div>
    </div>
  )
}
