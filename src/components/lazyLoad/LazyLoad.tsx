import React, { ReactElement, useEffect, useRef } from 'react'
import { SRLWrapper } from 'simple-react-lightbox';
import type { ImgsType } from './types';
import ImageBox from './ImageBox';

export interface LazyLoadProps {
  imgs: ImgsType,
  imgHeight?: string,
}

export default function LazyLoad({
  imgs,
  imgHeight = '300px',
}: LazyLoadProps): ReactElement {
  const refs = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = function observerCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement
          if (target.dataset.src) {
            target.src = target.dataset.src
            Reflect.deleteProperty(target.dataset, 'src')
            observer.unobserve(target)
          }
        }
      })
    }
    const observer = new IntersectionObserver(observerCallback, { threshold: 0 })
    refs.current.forEach(element => { observer.observe(element) })
  }, [])

  return (
    <SRLWrapper>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        {imgs.map((img, idx) => (
          <ImageBox
            style={{width: '25%', height: imgHeight, zIndex: '1', cursor: 'pointer' }}
            key={idx}
            content={img}
            ref={(element) => { refs.current.push(element!) }}
          />
        ))}
      </div>
    </SRLWrapper>
  )
}
