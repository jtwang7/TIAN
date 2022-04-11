import { ReactElement, useEffect, useState } from 'react'
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

interface Props {

}

export default function Root({ }: Props): ReactElement {
  const routes: routesType = [
    { name: 'HOME', path: '/home' },
    { name: 'COFFEE', path: '/coffee' },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp routes={routes} />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='coffee' element={<Coffee />}></Route>
        </Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}
