import React, { ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import CartClass from './Cart.module.scss';
// types
import type { DrawerProps } from 'antd/lib/drawer/index';
import type { GoodType } from '../../components/card/good/types';
// components
import { Drawer } from 'antd';
// hooks
import { useAppSelector } from '../../app/store';

export interface CartProps {
  visible?: boolean,
}

export default function Cart({
  width,
  onClose,
  visible = false,
  placement = 'right', // 抽屉布局位置
}: CartProps & DrawerProps): ReactElement {
  const { cartOrders } = useAppSelector(state => state.shop)

  // header style
  const headerStyle = {
    textTransform: 'uppercase',
    fontFamily: 'right-on',
    height: '120px',
    lineHeight: '120px',
  } as React.CSSProperties
  // title style
  useLayoutEffect(() => {
    if (visible) {
      const title = document.querySelector('.ant-drawer-title') as HTMLDivElement
      title.style.setProperty('font-size', '40px')
    }
  }, [visible])

  return (
    <Drawer
      placement={placement}
      width={width}
      closable={false}
      onClose={onClose}
      visible={visible}
      mask
      maskClosable
      maskStyle={{ backgroundColor: '#fff', opacity: '0.3' }}
      title='cart'
      headerStyle={headerStyle}
    >
      {
        cartOrders.map((good) => (
          <div className={CartClass['product-info']} key={good.id}>
            <img alt='product' src={good.imgsUrl[0]} className={'img-style'} />
            <section className={`detail`}>
              <p className={`good-name`}>{good.name}</p>
              <div>
                <span>{`RMB ${good.price}`}</span>
              </div>
            </section>
          </div>
        ))
      }
    </Drawer>
  )
}
