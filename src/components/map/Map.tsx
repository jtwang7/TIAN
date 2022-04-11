import { ReactElement, useEffect, useLayoutEffect, useRef } from 'react'
import { Scene, PointLayer } from "@antv/l7";
import { GaodeMapV2 } from "@antv/l7-maps";
// types
import { ImgsType } from '../lazyLoad/types';

interface MapProps {
  contents?: ImgsType,
}

export default function Map({
  contents,
}: MapProps): ReactElement {
  const scene = useRef<Scene>(null!)
  useLayoutEffect(() => {
    scene.current = new Scene({
      id: "map",
      map: new GaodeMapV2({
        pitch: 0,
        style: "dark",
        center: [114.31667, 30.51667], // 武汉经纬度
        zoom: 11,
        token: 'b421e3960e1a79a627cd55900a7837ec',
        rotateEnable: false, // 禁止地图旋转
        zoomEnable: false, // 禁止地图缩放
        dragEnable: false, // 禁止地图拖拽
        showLabel: false, // 隐藏文字标注
      })
    });
    scene.current.on('loaded', () => {
      // 去AntV水印
      const element = document.querySelector('.l7-control-logo') as HTMLElement
      element.style.setProperty('display', 'none')
    })
  }, [])

  useEffect(() => {
    if (contents?.length) {
      // 添加Point图层
      scene.current.addImage(
        '00',
        'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg'
      )
      const data = contents.filter(item => (Reflect.has(item, 'coord')))
      const imageLayer = new PointLayer()
        .source(data, {
          parser: {
            type: 'json',
            coordinates: 'coord',
          }
        })
        .shape('00')
        .size(10);
      console.log(imageLayer)
      scene.current.addLayer(imageLayer);
    }
  }, [contents])

  return (
    <div id='map' style={{ width: '100vw', height: '100vh', position: 'fixed', inset: '0' }}></div>
  )
}
