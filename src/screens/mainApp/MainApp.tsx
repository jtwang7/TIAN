import { ReactElement, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainAppClass from './MainApp.module.scss';
// types
import type { ReactProps } from '../../types/baseTypes';
import type { routesType } from '../../components/menu/Menu';
// components
import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Loading from '../../components/loading/Loading';

interface MainAppProps {
  routes: routesType,
}

export default function MainApp({
  routes,
}: MainAppProps & ReactProps): ReactElement {
  // 监听路由变化：添加 loading 动画
  const location = useLocation()
  const [isLoading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [location])

  return (
    <>
      {isLoading && <Loading />}
      <div className={MainAppClass['main-app-container']}>
        <Outlet />
        <Menu routes={routes} />
        <nav className='nav-content'>
          <a href="http://wangjintian.com" className='a1'>LIFE IN TIAN‘s Blog.com</a>
          <a className='a2'>LIFE PHOTOGRAPHY BY WANG JINTIAN</a>
        </nav>
      </div>
    </>
  )
}
