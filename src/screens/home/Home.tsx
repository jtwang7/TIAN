import { ReactElement, useEffect, useState } from 'react';
import HomeClass from './Home.module.scss';
import {
  Thor012,
  Thor028,
  Thor049,
  Thor050,
} from '../../images/home';
// components
import Carousel from '../../components/carousel/Carousel';


interface Props {

}

function Home({ }: Props): ReactElement {
  const images = [
    {
      id: 0,
      src: Thor012,
      title: 'ABCDE',
      subTitle: 'abcde',
      buttonText: 'TIAN',
    },
    {
      id: 1,
      src: Thor028,
      title: 'ABCDE',
      subTitle: 'abcde',
      buttonText: 'TIAN',
    },
    {
      id: 2,
      src: Thor049,
      title: 'ABCDE',
      subTitle: 'abcde',
      buttonText: 'TIAN',
    },
    {
      id: 3,
      src: Thor050,
      title: 'ABCDE',
      subTitle: 'abcde',
      buttonText: 'TIAN',
    },
  ]


  return (
    <>
      <div className={HomeClass['home-container']}>
        <Carousel images={images} />
      </div>
    </>
  )
}

export default Home
