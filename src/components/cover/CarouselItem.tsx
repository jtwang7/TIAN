import React, { ReactElement } from 'react'
import CarouselItemClass from './CarouselItem.module.scss'
import type { CarouselItemState } from './Carousel'

export interface CarouselItemProps {
  index: number, // z-index
  transitionDuration: number, // 过渡动画时长(ms)
  pixel?: number, // 偏移距离
}

export default function CarouselItem({
  src,
  title,
  subTitle,
  transitionDuration,
  index,
  pixel = 0,
}: CarouselItemProps & CarouselItemState): ReactElement {
  return (
    <div className={CarouselItemClass['carousel-item-container']} style={{ zIndex: index }}>
      <div className={`title-container`}>
        <span className='title'>{title}</span>
        <span className='sub-title'>{subTitle}</span>
      </div>
      <img
        className={`background-image`}
        src={src}
        style={{ transitionDuration: `${transitionDuration}ms`, transform: `translateX(${pixel}px)` }}
      />
    </div>
  )
}
