import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react'
import CarouselClass from './Carousel.module.scss'
import CarouselItem from './CarouselItem'
import _ from 'lodash';


export type CarouselItemState = { src: string, title: string, subTitle: string }
export type CarouselItems = ({ id: number } & CarouselItemState)[]
export interface CarouselProps {
  images: CarouselItems,
}

export default function Carousel({ images }: CarouselProps): ReactElement {
  const transitionDuration = 300 // 过渡动画时长(ms)
  const transformPixel = 80 // hover时的坐标偏移量
  // 图片数组
  const [carouselItems, setCarouselItems] = useState<CarouselItems>(images)
  const ref = useRef<HTMLDivElement | null>(null) // 组件实例
  // 组件宽度
  const elementWidth = useMemo(() => {
    return ref.current ? +ref.current.clientWidth : 0
  }, [ref.current])

  /**鼠标悬浮在“<”“>”按钮上, 图片小部分偏移 */
  const [type, setType] = useState<'left' | 'right'>('left') // 悬浮在“<”还是“>”上
  const [isHover, setHover] = useState<boolean>(false) // 鼠标是否处于悬浮区域
  const [pixel, setPixel] = useState<number>(0) // 设置偏移距离
  const onMouseEnterByLeft = () => { setHover(true); setType('left') } // “<”的hover逻辑
  const onMouseEnterByRight = () => { setHover(true); setType('right') } // “>”的hover逻辑
  const onMouseLeave = () => { setHover(false) } // 按钮的no hover逻辑
  useEffect(() => {
    try {
      if (isHover) {
        if (type === 'left') {
          setPixel(transformPixel)
        }
        if (type === 'right') {
          setPixel(-transformPixel)
        }
      } else {
        setPixel(0)
      }
    } catch (err) {
      console.log(err)
    }
  }, [isHover])
  useEffect(() => {
    try {
      setCarouselItems(prev => (reverseList(prev)))
    } catch (err) {
      console.log(err)
    }
  }, [type])

  /**“<”“>”按钮点击逻辑 */
  const onClick = (type: 'left' | 'right') => () => {
    if (type === 'left') {
      setPixel(elementWidth)
      setTimeout(() => {
        setCarouselItems(prev => (itemSwitch(prev)))
        setPixel(0)
      }, transitionDuration)
    }
    if (type === 'right') {
      setPixel(-elementWidth)
      setTimeout(() => {
        setCarouselItems(prev => (itemSwitch(prev)))
        setPixel(0)
      }, transitionDuration)
    }
  }
  const onClickByLeft = useMemo(() => (_.throttle(onClick('left'), transitionDuration)), [elementWidth, transitionDuration]) 
  const onClickByRight = useMemo(() => (_.throttle(onClick('right'), transitionDuration)), [elementWidth, transitionDuration]) 

  /**
   * 反转图片数组
   * @param arr 图片数组
   * @returns 逆序的图片数组(除最后一张图片)
   */
  function reverseList(arr: CarouselItems): CarouselItems {
    const before: CarouselItems = arr.slice(0, arr.length - 1)
    const lastOne: CarouselItemState = arr.slice(-1)[0]
    before.reverse()
    return [...before, lastOne] as CarouselItems
  }
  /**
   * 
   * @param arr 图片数组
   * @returns 更新后的图片数组
   */
  function itemSwitch(arr: CarouselItems): CarouselItems {
    const item = arr.pop()
    const res = [item!, ...arr]
    return res
  }

  useEffect(() => {
    console.log(carouselItems)
  }, [carouselItems])

  return (
    <div
      className={CarouselClass['carousel']}
      ref={ref}
    >
      {/* 左切换按钮 */}
      <a
        className={`icon-container`}
        style={{ width: `${transformPixel}px`, left: '0px' }}
        onMouseEnter={onMouseEnterByLeft}
        onMouseLeave={onMouseLeave}
        onClick={onClickByLeft}
      >
        <i className={`iconfont icon-left`}></i>
      </a>
      {/* 右切换按钮 */}
      <a
        className={`icon-container`}
        style={{ width: `${transformPixel}px`, right: '0px' }}
        onMouseEnter={onMouseEnterByRight}
        onMouseLeave={onMouseLeave}
        onClick={onClickByRight}
      >
        <i className={`iconfont icon-right`}></i>
      </a>
      {/* 
        图片切换的逻辑：
        图片数组通过 map 生成对应组件 <CarouselItem />, 其中 index(z-index) 以数组索引为值传递。
        因此最终展示的始终是数组最后一个元素, 当前展示图片的下一张图片始终是倒数第二个元素, 以此类推。
        每次 hover 触发时, 若两次 hover 的按钮不同, 则需要逆序前(n-1)个元素保证倒数第二个元素是正确的图片。
        click 触发时, 利用计时器等待动画完成, 然后将最后一个元素移动到数组开头。
      */}
      {
        carouselItems.map((item, idx) => (
          <CarouselItem
            key={item.id}
            src={item.src}
            subTitle={item.subTitle}
            title={item.title}
            transitionDuration={transitionDuration}
            index={idx}
            pixel={idx === (carouselItems.length - 1) ? pixel : 0}
          />
        ))
      }
    </div>
  )
}
