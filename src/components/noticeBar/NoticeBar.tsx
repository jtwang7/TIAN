import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import NoticeBarClass from './NoticeBar.module.scss';
import { useTransition, animated } from 'react-spring';
import type { ReactProps } from '../../types/baseTypes';

export interface NoticeBarProps {
  contents: string | string[], // 播报内容
  height?: number, // 框高
  interval?: number, // 轮播间隔
}

export default function NoticeBar({
  contents,
  style,
  height = 50,
  interval = 3000,
}: NoticeBarProps & ReactProps): ReactElement {
  // 播报内容数组
  const contentsArr = useMemo<string[]>(() => {
    let res: string[] = []
    if (typeof contents === 'string') {
      res = [contents]
    }
    if (Array.isArray(contents)) {
      res = contents.map(content => {
        if (typeof content !== 'string') {
          return Object.prototype.toString.call(content)
        } else {
          return content
        }
      })
    }
    return res
  }, [contents])
  // 播报内容的索引
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => ((prev >= contentsArr.length - 1) ? 0 : (prev + 1)))
    }, interval)
    return () => {
      clearInterval(timer)
    }
  }, [])

  // useTransition动画: 监听一个变量index，当变量发生变化时，触发动画
  const transitions = useTransition(index, {
    from: { left: '100vw', opacity: '0' },
    enter: { left: '0vw', opacity: '1' },
    leave: { left: '-100vw', opacity: '0' },
  })

  return (
    <div className={NoticeBarClass['container']} style={{ height: `${height}px`, ...style }}>
      {
        transitions((style, index) => (
          <animated.span
            style={{ lineHeight: `${height}px`, ...style }}
          >
            {contentsArr[index]}
          </animated.span>
        ))
      }
      <div className={NoticeBarClass.cover} style={{width: '100px', height: `${height}px`, left: '0px'}}></div>
      <div className={NoticeBarClass.cover} style={{width: '300px', height: `${height}px`, right: '0px'}}></div>
    </div>
  )
}
