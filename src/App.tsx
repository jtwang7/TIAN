import { ReactElement } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainApp from './screens/mainApp/MainApp';
import Home from './screens/home/Home';
import Map from './screens/map/Map';

interface Props {
  
}

export default function Root({}: Props): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='coffee' element={<Map />}></Route>
        </Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}
