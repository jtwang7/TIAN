import { ReactElement } from 'react';
// components
import { Parallax } from 'react-parallax';
import NoticeBar from '../../components/noticeBar/NoticeBar';

interface Props {

}

export default function Shopping({ }: Props): ReactElement {
  const noticeInfos: string[] = [
    'THANK YOU FOR YOUR SUPPORT OF OUR SMALL FAMILY BUSINESS!',
  ]


  const image1 = 'https://picsum.photos/1500/1500?random=1'
  return (
    <>
      <NoticeBar contents={noticeInfos} style={{zIndex: 1}} />
      <Parallax
        bgImage={image1}
        bgImageAlt="random image"
        strength={-200}
      >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
      </Parallax>
    </>
  )
}
