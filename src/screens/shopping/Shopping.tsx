import { ReactElement } from 'react';
import Logo from './logo.png';
import ShoppingClass from './Shopping.module.scss';
// components
import { Parallax } from 'react-parallax';
import NoticeBar from '../../components/noticeBar/NoticeBar';

interface Props {

}

export default function Shopping({ }: Props): ReactElement {
  const noticeInfos: string[] = [
    'Thank you for your support of our small family business!',
    'To talk health, happiness,and prosperity to every person you meet.',
    'Laughter is always open, youth is always there.',
    'All things are difficult before they are easy.',
  ]


  const image1 = 'https://picsum.photos/1500/1500?random=1'
  return (
    <>
      <NoticeBar contents={noticeInfos} style={{ zIndex: 1 }} interval={5000} height={60} />
      <Parallax
        bgImage={image1}
        bgImageAlt="random image"
        strength={-200}
      >
        <div className={ShoppingClass['section-one']}>
          <img className='logo' alt='logo' src={Logo} />
        </div>
      </Parallax>
      <article className={ShoppingClass['section-two']}>
        <h2 className="title">Welcome to TIAN's small shop</h2>
        <p><em>We honor the beauty and rustic elegance of past eras by creating and curating kitchen and dining goods of uncommon quality.</em></p>
        <p><em>Always made at home, always beautiful. Thank you for supporting our small business.</em></p>
        <p><em>We look forward to creating something for you to treasure.</em></p>
        <p><em>-The TIAN Family</em></p>
      </article>
      <Parallax
        bgImage={image1}
        bgImageAlt="random image"
        strength={-200}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
          }}
        >

        </div>
      </Parallax>
    </>
  )
}
