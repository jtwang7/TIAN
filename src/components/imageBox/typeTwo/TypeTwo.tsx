import { ReactElement, useMemo, useRef } from 'react'
import ImageBoxTypeOneClass from './TypeTwo.module.scss';
import type { reactProps, sizeProps } from '../../../types/baseTypes';
import { useSpring, animated } from 'react-spring';
// hooks
import { useHover } from '../../../hooks/useHover';

interface Props {
  imageUrl?: string,
}

export default function TypeTwo({
  imageUrl = '',
  style,
  children,
}: Props & reactProps & sizeProps): ReactElement {
  const {
    isHover,
    onMouseEnter,
    onMouseLeave,
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
    to: { left: isHover ? '0px' : `-${width}px`},
    duration: 300,
  })

  return (
    <div
      ref={ref}
      className={ImageBoxTypeOneClass['container']}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img className={`img-content`} src={imageUrl} />
      <animated.div
        className={'info'}
        style={modalStyles}
      >
        {children}
      </animated.div>
    </div>
  )
}
