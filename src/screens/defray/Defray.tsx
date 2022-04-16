import { ReactElement, useState } from 'react';
import DefrayClass from './Defray.module.scss';
import Logo from '../logo.png';
// components
import InfoInput from './InfoInput';
import ButtonTypeOne from '../../components/button/typeOne/TypeOne';
import Badge from '../../components/badge/Badge';
// hooks
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../app/store';


interface Props {

}

export default function Defray({ }: Props): ReactElement {
  const emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ // 邮箱验证正则
  const nameRegExp = /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/ // 中英文姓名验证
  const phoneRegExp = /^[1][3,4,5,7,8][0-9]{9}$/ // 手机号验证

  const infoInputCommonStyle = { marginBottom: '10px' }

  // 路由跳转
  const navigate = useNavigate()
  const backToCart = () => { navigate('../shopping') }

  // redux state
  const { cartOrders, subtotal } = useAppSelector(state => state.shop)

  return (
    <div className={DefrayClass.container}>
      <div className={`left-bar`}>
        <img alt="logo" src={Logo} className={`logo`} />
        <section className={`common-style`}>
          <span className={`sub-title`}>Contact information</span>
          <InfoInput
            placeholder='Email'
            errorMessage='Please enter email'
            warningMessage='Please enter correct type'
            optional={false}
            regCheck={emailRegExp}
          />
        </section>
        <section className={`common-style`}>
          <span className={`sub-title`}>Shipping address</span>
          <div className={`input-row-group`}>
            <InfoInput
              placeholder='First name (optional)'
              errorMessage='Please enter first name'
              warningMessage='Please enter correct type'
              optional={true}
              regCheck={nameRegExp}
              width='49%'
              style={infoInputCommonStyle}
            />
            <InfoInput
              placeholder='Last name'
              errorMessage='Please enter last name'
              warningMessage='Please enter correct type'
              optional={false}
              regCheck={nameRegExp}
              width='49%'
              style={infoInputCommonStyle}
            />
          </div>
          <div className={`input-row-group`}>
            <InfoInput
              placeholder='Wechat account or QQ'
              errorMessage='Please enter your Wechat or QQ'
              optional={false}
              width='49%'
              style={infoInputCommonStyle}
            />
            <InfoInput
              placeholder='Phone'
              errorMessage='Please enter your phone number'
              warningMessage='Please enter correct type'
              optional={false}
              regCheck={phoneRegExp}
              width='49%'
              style={infoInputCommonStyle}
            />
          </div>
          <InfoInput
            placeholder='Address'
            errorMessage='Please enter address'
            optional={false}
            style={infoInputCommonStyle}
          />
          <InfoInput
            placeholder='Apartment, suite, etc. (optional)'
            errorMessage='Please enter Apartment, suite, etc.'
            optional={true}
            style={infoInputCommonStyle}
          />
          <InfoInput
            placeholder='City'
            errorMessage='Please enter a city'
            optional={false}
            style={infoInputCommonStyle}
          />
        </section>
        <section className={`button-row-group`}>
          <ButtonTypeOne
            text='Continue to shipping'
            mode='light'
            style={{ width: '280px', height: '40px', position: 'relative' }}
          />
          <span
            className={`text-button`}
            onClick={backToCart}
          >Return to Cart</span>
        </section>
      </div>
      <div className={`right-bar`}>
        <section className={`products`}>
          {
            cartOrders.map((product, idx) => (
              <section className={`product`}>
                <Badge
                  key={idx}
                  node={(<img alt='' src={product.imgsUrl[0]} style={{ width: '100%' }} />)}
                  count={product.orderNums}
                  width={70}
                  height={90}
                />
                <div className={`description`}>
                  <span className={`text`}>{product.name}</span>
                  <span className={`text`} style={{ fontWeight: 'bold' }}>{`RMB ${product.price * product.orderNums}`}</span>
                </div>
              </section>
            ))
          }
        </section>
        <section className={`apply-group`}>
          <InfoInput
            placeholder='Gift card or discount code'
            optional={true}
            style={{width: '76%'}}
          />
          <ButtonTypeOne 
            text='Apply'
            mode='light'
            style={{ width: '20%', minWidth: '80px', height: '40px', position: 'relative' }}
          />
        </section>
        <section className={`subtotal`}>
          <div className={`item`}><span>Subtotal</span><span>{`RMB ${subtotal}`}</span></div>
          <div className={`item`}><span>Discount</span><span>{`-RMB ${0}`}</span></div>
        </section>
        <div className={`total`}>
          <span>Total</span>
          <span className={`total-money`}>{`RMB ${subtotal - 0}`}</span>
        </div>
      </div>
    </div>
  )
}
