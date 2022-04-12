import { ReactElement } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// types
import type { routesType } from './components/menu/Menu';
// components
import MainApp from './screens/mainApp/MainApp';
import Home from './screens/home/Home';
import Coffee from './screens/galleries/coffee/Coffee';
import Restaurant from './screens/galleries/restaurant/Restaurant';

interface Props {

}

export default function Root({ }: Props): ReactElement {
  const routes: routesType = [
    { name: 'HOME', icon: 'ra-wooden-sign', path: '/home' },
    {
      name: 'GALLERIES', path: '/galleries', children: [
        { name: 'COFFEE', icon: 'ra-coffee-mug', path: '/galleries/coffee' },
        { name: 'RESTAURANT', icon: 'ra-knife-fork', path: '/galleries/restaurant' },
      ]
    },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp routes={routes} />}>
          {/* 默认展示的内嵌组件 */}
          <Route index element={<Home />}></Route>
          {/* 内嵌组件 */}
          <Route path='home' element={<Home />}></Route>
          <Route path='galleries/'>
            {/* 默认展示的内嵌组件 */}
            <Route index element={<Restaurant />}></Route>
            {/* 内嵌组件 */}
            <Route path='coffee' element={<Coffee />}></Route>
            <Route path='restaurant' element={<Restaurant />}></Route>
          </Route>
        </Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}
