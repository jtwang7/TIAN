import { ReactElement } from 'react';
import { Parallax } from 'react-parallax';

interface Props {

}

export default function Shopping({ }: Props): ReactElement {
  const image1 = 'https://picsum.photos/1500/1500?random=1'
  return (
    <>
      
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
