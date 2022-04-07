import React, { ReactElement, useMemo, useRef } from 'react'
import ImageBoxTypeOneClass from './TypeOne.module.scss';
import type { reactProps, sizeProps } from '../../../types/baseTypes';
import { useSpring, animated } from 'react-spring';
// hooks
import { useHover } from '../../../hooks/useHover';

interface Props {
  imageUrl?: string,
}

export default function TypeOne({
  imageUrl = '',
  style,
  children,
}: Props & reactProps & sizeProps): ReactElement {
  const {
    isHover: isFirstHover,
    onMouseEnter: onFirstMouseEnter,
    onMouseLeave: onFirstMouseLeave,
  } = useHover()
  const {
    isHover: isSecondHover,
    onMouseEnter: onSecondMouseEnter,
    onMouseLeave: onSecondMouseLeave,
  } = useHover()
  const ref = useRef<HTMLDivElement>(null!)
  // 容器宽度
  const width = useMemo(() => {
    if (ref.current) {
      return ref.current.clientWidth
    } else {
      return 9999
    }
  }, [ref.current])
  // HOVER ANIMATION
  const modalStyles = useSpring({
    to: { left: !isFirstHover ? `-${width}px` : !isSecondHover ? `-${width-20}px` : '0px' },
    duration: 300,
  })

  return (
    <div
      ref={ref}
      className={ImageBoxTypeOneClass['container']}
      style={style}
      onMouseEnter={onFirstMouseEnter}
      onMouseLeave={onFirstMouseLeave}
    >
      <img className={`img-content`} src={imageUrl} />
      <animated.div
        className={'info'}
        style={modalStyles}
        onMouseEnter={onSecondMouseEnter}
        onMouseLeave={onSecondMouseLeave}
      >
        {children}
      </animated.div>
    </div>
  )
}
