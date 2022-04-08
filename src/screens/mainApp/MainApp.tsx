import { ReactElement } from 'react'
import MainAppClass from './MainApp.module.scss';
import type { reactProps } from '../../types/baseTypes';
import type { routesType } from '../../components/menu/Menu';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

interface MainAppProps {
  routes: routesType,
}

export default function MainApp({
  routes,
  children = null,
}: MainAppProps & reactProps): ReactElement {
  return (
    <div className={MainAppClass['main-app-container']}>
      <Outlet />
      <Menu routes={routes} />
      <nav className='nav-content'>
        <a href="http://wangjintian.com" className='a1'>LIFE IN TIAN‘s Blog.com</a>
        <a className='a2'>LIFE PHOTOGRAPHY BY WANG JINTIAN</a>
      </nav>
    </div>
  )
}
