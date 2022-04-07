import React, { ReactElement, useState } from 'react';
import MenuClass from './Menu.module.scss';
import '../../styles/iconfont/iconfont.css';
import { useSpring, animated } from 'react-spring';

interface MenuProps {

}

export default function Menu({ }: MenuProps): ReactElement {
  const [isShow, setShow] = useState<boolean>(false)
  const onClose = () => { setShow(false) }
  const onOpen = () => { setShow(true) }
  const styles = useSpring({ translateX: !isShow ? '-100%' : '0' })

  // HOVER
  const [isHover, setHover] = useState<boolean>(false)
  const onMouseEnter = () => { setHover(true) }
  const onMouseLeave = () => { setHover(false) }
  const hoverIconStyles = useSpring({ rotate: isHover ? 90 : 0 })
  const hoverStyles = useSpring({ color: isHover ? '#D3FF7C' : '#fff' })

  return (
    <>
      <div
        className={MenuClass['menu-btn-container']}
        onClick={onOpen}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <animated.i
          className={'iconfont icon-caidan'}
          style={{
            fontSize: '25px',
            paddingTop: '3px',
            transformOrigin: 'center 55%',
            ...hoverIconStyles,
            ...hoverStyles,
          }}
        ></animated.i>
        <animated.span className={MenuClass['menu-text']} style={{ ...hoverStyles }}>MENU</animated.span>
      </div>
      <animated.div className={MenuClass['menu-slider-container']} style={{ width: '200px', ...styles }}>
        <ul>
          <li><a>HOME</a></li>
          <li><a>ABOUT</a></li>
        </ul>
        <footer className={`footer`}>
          <i className={`iconfont icon-cancel`} onClick={onClose}></i>
        </footer>
      </animated.div>
    </>
  )
}
