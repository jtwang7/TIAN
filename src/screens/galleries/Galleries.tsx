import { ReactElement } from 'react'
import GalleriesClass from './Galleries.module.scss'
// hooks
import { useScroll } from '../../hooks/useScroll';
import { useSpring, animated } from 'react-spring';
// types
import type { ImgsType } from '../../components/lazyLoad/types';
// components
import LazyLoad from '../../components/lazyLoad/LazyLoad';
import BackTop from '../../components/backTop/BackTop';
import Map from '../../components/map/Map'


export type TitleTypes = {
  position: string,
  date: string,
  placeName: string,
}

export interface PictureWallProps {
  title?: TitleTypes,
  contents?: ImgsType,
}

export default function PictureWall({
  title,
  contents,
}: PictureWallProps): ReactElement {
  const isShow = useScroll(80)
  const titleOpacity = useSpring({ opacity: isShow ? 0 : 1 })


  return (
    <>
      <div className={GalleriesClass['container']}>
        {/* 地图容器 */}
        <Map contents={contents} />
        {/* 照片容器 */}
        <section className={`pictures-content`}>
          <div className={`title-block`}>
            {/* 标题 */}
            <animated.header className={`place-label`} style={titleOpacity}>
              <span className={`lng-lat`}>{title?.position}</span>
              <span className={`date`}>{title?.date}</span>
              <span className={`place-name`}>{title?.placeName}</span>
            </animated.header>
          </div>
          <div className={`pictures-block`}>
            {contents && <LazyLoad imgs={contents} />}
          </div>
        </section>
        {/* Back to Top */}
        <BackTop isShow={isShow} />
      </div>
    </>
  )
}
