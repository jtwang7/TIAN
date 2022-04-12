import { ReactElement, useEffect } from 'react'
import CarouselItemClass from './CarouselItem.module.scss'
import type { CarouselItemState } from './Carousel'
import { useSpring, animated, easings } from 'react-spring';
import ButtonTypeOne from '../button/typeOne/TypeOne';

export interface CarouselItemProps {
  pixel: number,
  type: 'left' | 'right',
  zIndex: number,
  hoverPixel: number,
  handleMouseEnter?: any,
  handleMouseLeave?: any,
}

export default function CarouselItem({
  src,
  pixel,
  type,
  zIndex,
  hoverPixel,
  title = '',
  subTitle = '',
  buttonText = '',
  handleMouseEnter = undefined,
  handleMouseLeave = undefined,
}: CarouselItemProps & CarouselItemState): ReactElement {
  const [styles, api] = useSpring(() => ({
    from: { left: '0px' },
  }))
  useEffect(() => {
    const hoverConfig = {
      duration: (pixel === hoverPixel) ? 200 : 800,
      easing: easings.easeOutQuart,
    }
    api.start({
      to: { left: (type === 'left') ? `${pixel}px` : `-${pixel}px` },
      config: hoverConfig,
    })
  }, [pixel])

  return (
    <div className={CarouselItemClass['carousel-item-container']} style={{ zIndex }}>
      <animated.div style={styles} className={`carousel-item-content`}>
        <img
          className={`background-image`}
          src={src}
        />
        <div className={`title-container`}>
          <span className='sub-title'>{subTitle}</span>
          <span className='title'>{title}</span>
        </div>
        <ButtonTypeOne
          text={buttonText}
          onClick={() => { }}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          style={{
            bottom: '35%',
            margin: '0 auto',
            left: '0px',
            right: '0px',
            zIndex: 2,
          }}
        />
      </animated.div>
    </div>
  )
}
