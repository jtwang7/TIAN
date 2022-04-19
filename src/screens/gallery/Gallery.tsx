// images
import Photo1 from './images/olimpia-campean-3TtpGHQN2Xg-unsplash.jpg';
// styles
import GalleryClass from './Gallery.module.scss';
// components
import { Parallax } from 'react-parallax';
import Macy from 'macy';
// types
import type { ReactElement } from 'react';

export interface GalleryProps {
  title?: {
    position: string,
    date: string,
    placeName: string,
  },
}

export default function Gallery({
  title = {
    position: '30°40′N 114°23′E',
    date: 'April 2022',
    placeName: 'WU HAN',
  },
}: GalleryProps): ReactElement {
  return (
    <div className={GalleryClass.root}>
      <Parallax
        bgImage={Photo1}
        bgImageAlt={`Gallery Cover Photograph`}
        bgClassName={`bgClassName`}
        strength={-200}
      >
        <div className={`box`}>
          <section className={`textBox`}>
            <div className={`leftPart`}>
              <p className={`title textCommon`}>Variety is the spice of life</p>
              <p className={`subTitle textCommon`}>The Gallery is a carefully curated platform for photography, where images are evaluated by professional editors and presented to the public. Take part or just browse and get inspired!</p>
              <section className={`iconBox`}></section>
            </div>
            <div className={`rightPart`}>
              <span className={`lng-lat textCommon`}>{title.position}</span>
              <span className={`date textCommon`}>{title.date}</span>
              <span className={`place-name textCommon`}>{title.placeName}</span>
            </div>
          </section>
        </div>
      </Parallax>
      <section className={`photos`}>
        <LazyLoad imgs={} imgHeight={} />
      </section>
    </div>
  )
}
