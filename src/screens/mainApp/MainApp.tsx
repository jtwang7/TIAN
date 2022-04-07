import { ReactElement } from 'react'
import MainAppClass from './MainApp.module.scss';
import type { reactProps } from '../../types/baseTypes';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

export default function MainApp({
  children = null,
}: reactProps): ReactElement {
  return (
    <div className={MainAppClass['main-app-container']}>
      <Outlet />
      <Menu />
      <nav className='nav-content'>
        <a href="http://wangjintian.com" className='a1'>LIFE IN TIAN‘s Blog.com</a>
        <a className='a2'>LIFE PHOTOGRAPHY BY WANG JINTIAN</a>
      </nav>
    </div>
  )
}
