export declare type CarouselItemState = {
  src: string,
  title?: string,
  subTitle?: string,
  buttonText?: string,
}

export type CarouselItems = ({ id: number } & CarouselItemState)[]

export interface CarouselProps {
  images: CarouselItems,
  interval?: number,
  auto?: boolean,
  showArrow?: boolean, // 是否始终显示箭头
}

export interface CarouselItemProps {
  pixel: number,
  type: 'left' | 'right',
  zIndex: number,
  hoverPixel: number,
  handleMouseEnter?: any,
  handleMouseLeave?: any,
}