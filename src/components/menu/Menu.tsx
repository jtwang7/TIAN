import React, { ReactElement, useRef,useMemo, useState, useEffect } from 'react';
import MenuClass from './Menu.module.scss';
import '../../styles/iconfont/iconfont.css';
import '../../styles/rpg-awesome/css/rpg-awesome.css';
import classnames from 'classnames';
// hooks
import { useSpring, animated } from 'react-spring';
import { useToggle } from '../../hooks/useToggle';
// types
import { ReactProps } from '../../types/baseTypes';

export type routeType = {
  name: string,
  path: string,
  icon?: string,
  children?: routeType[],
}
export declare type routesType = routeType[]
interface MenuItemProps {
  route: routeType,
  key?: number | string,
}
interface MenuProps {
  routes?: routesType,
}


function MenuItem({
  route,
  key,
}: MenuItemProps): ReactElement {
  const [isShow, showToggle] = useToggle(true)
  const subMenuStyle = useSpring({
    top: isShow ? '0px' : '-100vh',
  })

  // 获取subMenuItem实例
  const subItemRef = useRef<HTMLDivElement>(null!)
  // 获取subMenuItem高度
  const subItemHeight = useMemo(() => {
    return subItemRef.current?.offsetHeight
  }, [subItemRef.current])
  useEffect(() => {
    if (subItemHeight) {
      subItemRef.current.style.setProperty('height', isShow ? `${subItemHeight}px` : `0px`)
    }
  }, [isShow, subItemHeight])

  return (
    (!route.children) ? (
      <li key={`${key}`}>
        <i className={classnames({ 'ra': true, ['ra-style']: true, [route.icon!]: true })}></i>
        <a href={route.path}>{route.name}</a>
      </li>
    ) : (
      <div
        key={`${key}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          overflow: 'hidden',
        }}
      >
        <li onClick={showToggle} style={{ zIndex: '1' }}>
          <a
            href={'javascript: 0'}
            style={{
              marginLeft: '20px',
              fontFamily: 'dtl_albertina_tregular',
              fontWeight: 'normal',
            }}
          >{route.name}</a>
          <i className={`iconfont icon-right drop-down`} style={isShow ? { transform: 'rotate(90deg)' } : {}} ></i>
        </li>
        <animated.div
          ref={subItemRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            position: 'relative',
            zIndex: '0',
            padding: '0 20px',
            transition: 'height .3s ease-in-out',
            ...subMenuStyle,
          }}
        >
          {
            route.children.map((item, idx) => (
              <li key={`${key}-${idx}`}>
                <i className={classnames({ 'ra': true, ['ra-style']: true, [item.icon!]: true })}></i>
                <a href={item.path}>{item.name}</a>
              </li>
            ))
          }
        </animated.div>
      </div>
    )

  )
}

function Menu({ routes, style }: MenuProps & ReactProps): ReactElement {
  const [isShow, setShow] = useState<boolean>(false)
  const onClose = () => { setShow(false) }
  const onOpen = () => { setShow(true) }
  const styles = useSpring({ translateX: !isShow ? '-100%' : '0' })

  // HOVER
  const [isHover, setHover] = useState<boolean>(false)
  const onMouseEnter = () => { setHover(true) }
  const onMouseLeave = () => { setHover(false) }
  const hoverIconStyles = useSpring({ rotate: isHover ? '90deg' : '0' })
  const hoverStyles = useSpring({ color: isHover ? '#D3FF7C' : '#fff' })

  const [isCancelHover, setCancelHover] = useState<boolean>(false)
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
    <>
      <div
        className={MenuClass['menu-btn-container']}
        style={style}
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
        <ul style={{ marginTop: '10px' }}>
          {
            routes?.map((route, idx) => (<MenuItem route={route} key={idx} />))
          }
        </ul>
        <footer className={`footer`}>
          <animated.i
            className={`iconfont icon-cancel`}
            onClick={onClose}
            onMouseEnter={onCancelMouseEnter}
            onMouseLeave={onCancelMouseLeave}
            style={{ fontSize: '20px', ...hoverCancelStyles }}
          ></animated.i>
        </footer>
      </animated.div>
    </>
  )
}


export default Menu
