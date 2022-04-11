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
    { name: 'COFFEE', icon: 'ra-coffee-mug', path: '/coffee' },
    { name: 'RESTAURANT', icon: 'ra-knife-fork', path: '/restaurant' },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp routes={routes} />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='coffee' element={<Coffee />}></Route>
          <Route path='restaurant' element={<Restaurant />}></Route>
        </Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}
