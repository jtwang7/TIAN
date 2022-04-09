import { ReactElement, useState, useEffect } from 'react'
import backtopImg from './back-top.png'
import BackTopClass from './BackTop.module.scss';
import { SizeProps } from '../../types/baseTypes';
import { useSpring, animated } from 'react-spring';

interface Props {
  scrollTop?: number,
  scrollTopThreshold?: number,
  isShow?: boolean,
}
type BackTopProps = Props & SizeProps

function BackTop({ isShow, width, height }: BackTopProps): ReactElement;
function BackTop({ scrollTop, scrollTopThreshold, width, height }: BackTopProps): ReactElement;
function BackTop({
  isShow,
  scrollTop,
  scrollTopThreshold = 100,
  width = '30px',
  height = '30px',
}: BackTopProps): ReactElement {
  const [opacity, setOpacity] = useState<0 | 1>(0)
  useEffect(() => {
    if (isShow !== undefined) {
      setOpacity(isShow ? 1 : 0)
    }
    if (scrollTop !== undefined) {
      setOpacity((scrollTop > scrollTopThreshold) ? 1 : 0)
    }
  }, [isShow, scrollTop])
  const styles = useSpring({ opacity })
  const onClick = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <animated.div
      className={BackTopClass['back-top-container']}
      style={{
        width,
        height,
        ...styles,
      }}
      onClick={onClick}
    >
      <img alt='iconfont' src={backtopImg} />
    </animated.div>
  )
}

export default BackTop;