import MainAppClass from './MainApp.module.scss';
// types
import type { ReactProps } from '../../types/baseTypes';
import type { routesType } from '../../components/menu/Menu';
// components
import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Loading from '../../components/loading/Loading';
import NoticeBar from '../../components/noticeBar/NoticeBar';
import BackTop from '../../components/backTop/BackTop';
// hooks
import { ReactElement, useState, useEffect } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useLocation } from 'react-router-dom';

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

  // 滚动hook
  const isShow = useScroll(80)

  // 通告栏内容
  const noticeInfos: string[] = [
    'Thank you for your support of our small family business!',
    'To talk health, happiness,and prosperity to every person you meet.',
    'Laughter is always open, youth is always there.',
    'All things are difficult before they are easy.',
  ]

  return (
    <>
      {isLoading && <Loading />}
      <div className={MainAppClass['main-app-container']}>
        <Outlet />
        <section>
          <NoticeBar contents={noticeInfos} style={{ position: 'fixed' }} interval={5000} height={60} />
          <Menu routes={routes} />
          <nav className='nav-content' >
            <a href="http://wangjintian.com" className='a1'>LIFE IN TIAN‘s Blog.com</a>
            <a className='a2'>LIFE PHOTOGRAPHY BY WANG JINTIAN</a>
          </nav>
        </section>
        {/* Back to Top */}
        <BackTop isShow={isShow} />
      </div>
    </>
  )
}
