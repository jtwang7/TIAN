import { ReactElement, useEffect, useLayoutEffect, useRef } from 'react'
import { Scene } from "@antv/l7";
import { GaodeMapV2 } from "@antv/l7-maps";

interface Props {

}

export default function Map({ }: Props): ReactElement {
  const scene = useRef<Scene>(null!)
  useLayoutEffect(() => {
    scene.current = new Scene({
      id: "map",
      map: new GaodeMapV2({
        pitch: 0,
        style: "dark",
        center: [114.31667, 30.51667], // 武汉经纬度
        zoom: 10,
        token: 'b421e3960e1a79a627cd55900a7837ec',
        rotateEnable: false, // 禁止地图旋转
        zoomEnable: false, // 禁止地图缩放
        dragEnable: false, // 禁止地图拖拽
      })
    });
    scene.current.on('loaded', () => {
      // 去AntV水印
      const element = document.querySelector('.l7-control-logo') as HTMLElement
      element.style.setProperty('display', 'none')
    })
  }, [])

  return (
    <div id='map' style={{ width: '100vw', height: '100vh', position: 'fixed', inset: '0' }}></div>
  )
}
