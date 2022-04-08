import React, { ReactElement, useEffect } from 'react'
import PictureWallClass from './PictureWall.module.scss'
import Map from '../../components/map/Map'
import ImageBoxTypeTwo from '../../components/imageBox/typeTwo/TypeTwo'
import {useScroll} from '../../hooks/useScroll';
import {useSpring, animated} from 'react-spring';

export type ImageContentTypes = {
  url: string,
}

export type TitleTypes = {
  position: string,
  date: string,
  placeName: string,
}

export interface PictureWallProps {
  title?: TitleTypes,
  contents?: ImageContentTypes[]
}

export default function PictureWall({
  title,
  contents,
}: PictureWallProps): ReactElement {
  const isShow = useScroll(80)
  const titleOpacity = useSpring({opacity: isShow ? 0 : 1})

  return (
    <div className={PictureWallClass['container']}>
      {/* 地图容器 */}
      <Map />
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
        {
          contents?.map((item, idx) => (
            <ImageBoxTypeTwo
              imageUrl={item.url}
              key={idx}
              className={'picture-content'}
              style={{
                height: '300px',
              }}
            >
              <div className={`description`}>
                <span></span>
              </div>
            </ImageBoxTypeTwo>
          ))
        }
      </section>
    </div>
  )
}