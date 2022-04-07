import React, { ReactElement } from 'react'
import PictureWallClass from './PictureWall.module.scss'
import Map from '../../components/map/Map'
import ImageBoxTypeTwo from '../../components/imageBox/typeTwo/TypeTwo';

export type ImageContentTypes = {
  url: string,
}
export interface PictureWallProps {
  contents?: ImageContentTypes[]
}

export default function PictureWall({
  contents,
}: PictureWallProps): ReactElement {
  return (
    <div className={PictureWallClass['container']}>
      <Map />
      <section className={`pictures-content`}>
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
