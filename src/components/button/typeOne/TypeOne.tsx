import React, { ReactElement } from 'react'
import TypeOneClass from './TypeOne.module.scss'
import { useSpring, animated } from 'react-spring'

interface ButtonTypeOneProps {
  text: string,
  style?: React.CSSProperties,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  handleMouseEnter?: React.MouseEventHandler<HTMLDivElement>,
  handleMouseLeave?: React.MouseEventHandler<HTMLDivElement>,
}

export default function TypeOne({
  text,
  style = {},
  onClick = undefined,
  handleMouseEnter = undefined,
  handleMouseLeave = undefined,
}: ButtonTypeOneProps): ReactElement {
  const [aniStyles, api] = useSpring(() => ({
    from: { bottom: '-100%' }, // base value
    config: {
      duration: 300,
    }
  }))
  const onMouseEnter = () => {
    api.start({
      reset: true, // from => to
      to: { bottom: '0' },
    })
  }
  const onMouseLeave = () => {
    api.start({
      reset: false, // previous value => to
      to: { bottom: '100%' },
    })
  }

  return (
    <div
      className={TypeOneClass['type-one-container']}
      style={{ width: '180px', height: '40px', ...style }}
      onMouseEnter={(e) => {onMouseEnter(); handleMouseEnter?.(e)}}
      onMouseLeave={(e) => {onMouseLeave(); handleMouseLeave?.(e)}}
      onClick={onClick}
    >
      <span>{text}</span>
      <animated.div className={`background-container`} style={aniStyles}></animated.div>
    </div>
  )
}
