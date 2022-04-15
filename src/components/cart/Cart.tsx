import React, { ReactElement, useLayoutEffect } from 'react';
import CartClass from './Cart.module.scss';
import { changeOrderNums } from '../../app/slices/shopSlice';
// types
import type { DrawerProps } from 'antd/lib/drawer/index';
// components
import { Drawer } from 'antd';
import NumberController from '../numberController/NumberController';
import ButtonTypeOne from '../button/typeOne/TypeOne';
// hooks
import { useAppSelector, useAppDispatch } from '../../app/store';



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
  const dispatch = useAppDispatch()

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
          <>
            <div className={CartClass['product-info']} key={good.id}>
              <img alt='product' src={good.imgsUrl[0]} className={'img-style'} />
              <section className={`detail`}>
                <p className={`good-name`}>{good.name}</p>
                <div className={`num-controller`}>
                  <NumberController
                    width={110}
                    height={30}
                    initValue={good.orderNums}
                    onChange={(value) => { dispatch(changeOrderNums({ id: good.id, nums: value })) }}
                  />
                  <span>{`RMB ${good.price}`}</span>
                </div>
              </section>
            </div>
            <div
              style={{
                width: '100%',
                height: '15px',
                borderBottom: '1px solid #323232',
                marginBottom: '15px'
              }}
            ></div>
          </>
        ))
      }
      <div className={CartClass['order-note']}>
        <span className={`title`}>order note</span>
        <textarea className={`text-area`}></textarea>
      </div>
      <section className={CartClass['check-out-container']}>
        <div className={`title-container`}>
          <span>subtotal</span>
          <span>{`RMB 123`}</span>
        </div>
        <p className={`description`}>Shipping, taxes, and discount codes calculated at checkout.</p>
        <ButtonTypeOne
          text={'check out'}
          mode='light'
          style={{
            position: 'absolute',
            left: '0px',
            right: '0px',
            margin: '0 auto',
          }}
        />
      </section>
    </Drawer>
  )
}
