import React, { ReactElement, useEffect, useRef, useState } from 'react';
import ProductClass from './Product.module.scss';
import { Carousel } from 'antd';
import type { CarouselRef, CarouselProps } from 'antd/lib/carousel';
import type { ReactProps } from '../../../types/baseTypes';

interface Props {
  imgsUrl: string[],
  thumbnailWidth?: number,
  mainWidth?: number,
}

const Product = React.forwardRef<HTMLDivElement, Props & ReactProps & CarouselProps>(function ({
  imgsUrl,
  style,
  dots = true,
  thumbnailWidth = 100,
  mainWidth = 650,
}, ref): ReactElement {
  const [id, setId] = useState<number>(0)
  const onClick = (id: number): void => { setId(id) }
  // antd-Carousel实例
  const carouselRef = useRef<CarouselRef>(null!)

  useEffect(() => { carouselRef.current.goTo(id) }, [id])

  return (
    <div className={ProductClass.container} style={style} ref={ref}>
      <div className={'thumbnail-container'} style={{ width: `${thumbnailWidth}px` }}>
        {
          imgsUrl.map((url, idx) => (
            <img
              alt={`picture-${idx}`}
              src={url}
              className={`thumbnail-content`}
              onClick={() => { onClick(idx) }}
              style={{ border: (idx === id) ? '2px solid #323232' : '' }}
            />
          ))
        }
      </div>
      <div className={'main-image'} style={{ width: `${mainWidth}px` }}>
        <Carousel
          effect='fade'
          autoplay={false}
          dotPosition='bottom'
          dots={dots}
          ref={carouselRef}
        >
          {
            imgsUrl.map((url, idx) => (
              <img
                key={idx}
                alt=''
                src={url}
              />
            ))
          }
        </Carousel>
      </div>
    </div>
  )
})

export default Product
