import { ReactElement, useMemo, useRef } from 'react'
import ImageBoxTypeOneClass from './TypeTwo.module.scss';
import type { reactProps, sizeProps } from '../../../types/baseTypes';
import type {ImageBoxProps} from '../imageBoxTypes';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
// hooks
import { useHover } from '../../../hooks/useHover';

interface Props extends ImageBoxProps {

}

export default function TypeTwo({
  imageUrl,
  style,
  children,
  className = '',
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

  const containerClassName = classNames({
    [ImageBoxTypeOneClass['container']]: true,
    [className]: true,
  })

  return (
    <div
      ref={ref}
      className={containerClassName}
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
