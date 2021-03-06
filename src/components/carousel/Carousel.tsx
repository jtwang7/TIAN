import { ReactElement, useEffect, useRef, useState } from 'react'
import CarouselClass from './Carousel.module.scss'
import CarouselItem from './CarouselItem'
import _ from 'lodash';
import { useSpring, animated } from 'react-spring';
import { useHover } from '../../hooks/useHover';
// types
import type { CarouselProps, CarouselItems } from './types';

export default function Carousel({
  images,
  auto = true,
  showArrow = false,
  interval = 5000,
}: CarouselProps): ReactElement {
  const hoverPixel = 80
  const [type, setType] = useState<'left' | 'right'>('right')
  const [pixel, setPixel] = useState<number>(0)
  const [carouselItems, setCarouselItems] = useState<CarouselItems>(images)
  const target = useRef<boolean>(false)
  const timer = useRef<NodeJS.Timer | null>(null)

  // ARROW SPRING
  const { isHover: isBoxHover, onMouseEnter: onBoxMouseEnter, onMouseLeave: onBoxMouseLeave } = useHover()
  const arrowStyle = useSpring({
    opacity: showArrow ? '1' : (isBoxHover ? '1' : '0')
  })

  // AUTO PLAY
  const setAutoPlay = (auto: boolean): void | (() => void) => {
    if (auto) {
      clearAutoPlay() // 先清空计时器再设置
      timer.current = setInterval(() => {
        onClick()
      }, interval)
    }
  }
  const clearAutoPlay = () => {
    timer.current && clearInterval(timer.current)
  }

  // HOVER ACTION
  const onMouseEnterByLeft = () => {
    if (!target.current) {
      setPixel(hoverPixel)
      setType('left')
      clearAutoPlay()
    }
  }
  // “<”的hover逻辑
  const onMouseEnterByRight = () => {
    if (!target.current) {
      setPixel(hoverPixel)
      setType('right')
      clearAutoPlay()
    }
  }
  // “>”的hover逻辑
  const onMouseLeave = () => {
    if (!target.current) {
      setPixel(0)
      setAutoPlay(auto)
    }
  }
  // 按钮的no hover逻辑
  useEffect(() => {
    try {
      setCarouselItems(prev => {
        const current = _.cloneDeep(prev)
        const lastOne = current.pop()
        const arr = current.reverse()
        return [...arr, lastOne!]
      })
    } catch (err) {
      console.log(err)
    }
  }, [type])

  // CLICK ACTION
  const onClick = () => {
    if (!target.current) {
      target.current = true
      setPixel(document.body.clientWidth)
      setTimeout(() => {
        // !先重置pixel, 后更新数组
        setPixel(0)
        setCarouselItems(prev => {
          const current = _.cloneDeep(prev)
          const lastOne = current.pop()
          current.unshift(lastOne!)
          return current
        })
        setAutoPlay(auto)
        target.current = false
      }, 1000)
    }
  }

  useEffect(() => {
    setAutoPlay(auto)
    return () => {
      clearAutoPlay()
    }
  }, [auto])

  return (
    <div
      className={CarouselClass['carousel']}
      onMouseEnter={onBoxMouseEnter}
      onMouseLeave={onBoxMouseLeave}
    >
      {/* 左切换按钮 */}
      <animated.a
        className={`icon-container`}
        style={{ width: `${hoverPixel}px`, left: '0px', ...arrowStyle }}
        onMouseEnter={onMouseEnterByLeft}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <i className={`iconfont icon-left`}></i>
      </animated.a>
      {/* 右切换按钮 */}
      <animated.a
        className={`icon-container`}
        style={{ width: `${hoverPixel}px`, right: '0px', ...arrowStyle }}
        onMouseEnter={onMouseEnterByRight}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <i className={`iconfont icon-right`}></i>
      </animated.a>
      {/* 
        图片切换的逻辑：
        图片数组通过 map 生成对应组件 <CarouselItem />, 其中 index(z-index) 以数组索引为值传递。
        因此最终展示的始终是数组最后一个元素, 当前展示图片的下一张图片始终是倒数第二个元素, 以此类推。
        每次 hover 触发时, 若两次 hover 的按钮不同, 则需要逆序前(n-1)个元素保证倒数第二个元素是正确的图片。
        click 触发时, 利用计时器等待动画完成, 然后将最后一个元素移动到数组开头。
      */}
      {
        carouselItems.map((item, idx, arr) => (
          <CarouselItem
            key={item.id}
            src={item.src}
            pixel={(idx === arr.length - 1) ? pixel : 0}
            type={type}
            zIndex={idx}
            title={item.title}
            subTitle={item.subTitle}
            buttonText={item.buttonText}
            hoverPixel={hoverPixel}
            handleMouseEnter={() => { clearAutoPlay() }}
            handleMouseLeave={() => { setAutoPlay(auto) }}
          />
        ))
      }
    </div>
  )
}
