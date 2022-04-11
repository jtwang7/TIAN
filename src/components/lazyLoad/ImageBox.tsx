import React, { useMemo, useRef } from 'react'
import ImageBoxClass from './ImageBox.module.scss';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
// hooks
import { useHover } from '../../hooks/useHover';
// types
import type { ReactProps } from '../../types/baseTypes';
import { ImgTypeOne, ImgTypeTwo } from './types';


interface ImageBoxProps {
  content: (ImgTypeOne | ImgTypeTwo),
  key?: any,
}

const ImageBox = React.forwardRef<HTMLImageElement, (ImageBoxProps & ReactProps)>(({
  content,
  key,
  style,
  className = '',
}, imgRef) => {
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
    to: { left: isHover ? '0px' : `-${width}px` },
    duration: 300,
  })

  const containerClassName = classNames({
    [ImageBoxClass['container']]: true,
    [className]: true,
  })

  return (
    <div
      key={key}
      ref={ref}
      className={containerClassName}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        ref={imgRef}
        alt={content.alt}
        data-src={content.src}
        className={`img-content`}
      />
      {
        content.type === 'two' ? (
          <animated.div
            className={'info'}
            style={modalStyles}
          >
            <span>{content.alt}</span>
            <span>{content.name}</span>
            <span>地址: {content.place}</span>
            <span>拍摄时间: {content.date}</span>
            <span>{content.desc}</span>
          </animated.div>
        ) : null
      }
    </div>
  )
})

export default ImageBox