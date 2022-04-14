import { ReactElement, useEffect, useRef, useState } from 'react';
import ProductClass from './Product.module.scss';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/lib/carousel';
import { ReactProps } from '../../../types/baseTypes';

interface Props {
  imgsUrl: string[],
  thumbnailWidth?: number,
  mainWidth?: number,
}

export default function Product({
  imgsUrl,
  style,
  thumbnailWidth = 100,
  mainWidth = 700,
}: Props & ReactProps): ReactElement {
  const [id, setId] = useState<number>(0)
  const onClick = (id: number): void => { setId(id) }
  // antd-Carousel实例
  const carouselRef = useRef<CarouselRef>(null!)

  useEffect(() => { carouselRef.current.goTo(id) }, [id])

  return (
    <div className={ProductClass.container} style={style}>
      <div className={'thumbnail-container'} style={{width: `${thumbnailWidth}px`}}>
        {
          imgsUrl.map((url, idx) => (
            <img
              alt={`picture-${idx}`}
              src={url}
              className={`thumbnail-content`}
              onClick={() => { onClick(idx) }}
              style={{border: (idx === id) ? '2px solid #323232' : ''}}
            />
          ))
        }
      </div>
      <div className={'main-image'} style={{width: `${mainWidth}px`}}>
        <Carousel
          effect='fade'
          autoplay={false}
          dotPosition='bottom'
          dots={true}
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
}
