import { ReactElement, useState } from 'react';
import type { MouseEventHandler } from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  onClose?: MouseEventHandler<HTMLElement>,
}

export default function CancelButton({
  onClose,
}: Props): ReactElement {
  const [isCancelHover, setCancelHover] = useState(false)
  const onCancelMouseEnter = () => { setCancelHover(true) }
  const onCancelMouseLeave = () => { setCancelHover(false) }
  const hoverCancelStyles = useSpring({
    to: {
      rotate: isCancelHover ? '360deg' : '0deg',
    },
    duration: 2000,
    reverse: true,
    reset: true,
  })

  return (
    <animated.i
      className={`iconfont icon-cancel`}
      onClick={onClose}
      onMouseEnter={onCancelMouseEnter}
      onMouseLeave={onCancelMouseLeave}
      style={{ fontSize: '20px', ...hoverCancelStyles }}
    ></animated.i>
  )
}
