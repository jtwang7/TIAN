import { ReactElement, useRef } from 'react'
import GoodClass from './Good.module.scss';
// components
import { Carousel } from 'antd';
// types
import type { ReactProps, SizeProps, Override } from '../../../types/baseTypes';
import type { GoodType } from './types';
import type { CarouselRef } from 'antd/lib/carousel';

interface Props {
  good: GoodType, // 商品
  width?: number, // 容器宽度
}
export type GoodProps = ReactProps & Override<SizeProps, Props>

export default function Good({
  good,
  width,
  style,
}: GoodProps): ReactElement {
  // antd-Carousel实例
  const carouselRef = useRef<CarouselRef>(null!)
  // Hover Carousel切换至下一张图
  const onMouseEnter = () => { carouselRef.current.next() }
  return (
    <div className={GoodClass.container} style={{ ...style, width: `${width}px` }}>
      <div
        className={`carousel-container`}
        onMouseEnter={onMouseEnter}
      >
        <Carousel
          effect='fade'
          autoplay={false}
          dotPosition='bottom'
          dots={true}
          ref={carouselRef}
        >
          {
            good.imgsUrl.map((url, idx) => (
              <img
                key={idx}
                alt=''
                src={url}
                style={{ width: '100%', objectFit: 'cover' }}
              />
            ))
          }
        </Carousel>
      </div>
      <p>{good.name}</p>
      <p>{`RMB ${good.price}`}</p>
      {!good.nums ? (<div className={`sold-out`}>Sold Out</div>) : null}
    </div>
  )
}
