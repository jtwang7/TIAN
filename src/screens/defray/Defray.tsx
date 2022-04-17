import { ReactElement, useState } from 'react';
import DefrayClass from './Defray.module.scss';
import Logo from '../logo.png';
// components
import InfoInput from './InfoInput';
import ButtonTypeOne from '../../components/button/typeOne/TypeOne';
import Badge from '../../components/badge/Badge';
// hooks
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../app/store';
// actions
import { updateCustomerInfo } from '../../app/slices/shopSlice';
// types
import type { ChangeEventHandler } from 'react';
import type { CustomerInfo } from '../../app/slices/shopSlice';


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
  const { cartOrders, subtotal, customerInfo } = useAppSelector(state => state.shop)
  const dispatch = useAppDispatch()

  // apply-disabled status
  const [applyDisabled, setApplyDisabled] = useState<boolean>(true)

  /** <InfoInput /> onChange */
  const handleChange: (key: keyof CustomerInfo) => ChangeEventHandler<HTMLInputElement> = (key) => (e) => {
    dispatch(updateCustomerInfo({
      key,
      value: e.target.value,
    }))
  }
  const handleEmailChange = handleChange('email')
  const handleFirstNameChange = handleChange('firstName')
  const handleLastNameChange = handleChange('lastName')
  const handleSocialAccountChange = handleChange('socialAccount')
  const handlePhoneChange = handleChange('phone')
  const handleAddressChange = handleChange('address')
  const handleApartmentChange = handleChange('apartment')
  const handleCityChange = handleChange('city')

  /** check customer information */
  const handleCheck = () => {
    function exclude<T extends {}>(obj: T, keys: string[]) {
      const data = {}
      for (let [key, value] of Object.entries(obj)) {
        if (keys.includes(key)) {
          continue
        } else {
          Reflect.set(data, key, value)
        }
      }
      return data
    }
    const res = exclude<CustomerInfo>(customerInfo, ['firstName', 'apartment'])
    if (Object.values(res).every(item => (item !== ''))) {
      console.log('存储到数据库')
    } else {
      console.log('数据未填写完整')
    }
  }


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
            value={customerInfo.email}
            onChange={handleEmailChange}
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
              value={customerInfo.firstName}
              onChange={handleFirstNameChange}
            />
            <InfoInput
              placeholder='Last name'
              errorMessage='Please enter last name'
              warningMessage='Please enter correct type'
              optional={false}
              regCheck={nameRegExp}
              width='49%'
              style={infoInputCommonStyle}
              value={customerInfo.lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className={`input-row-group`}>
            <InfoInput
              placeholder='Wechat account or QQ'
              errorMessage='Please enter your Wechat or QQ'
              optional={false}
              width='49%'
              style={infoInputCommonStyle}
              value={customerInfo.socialAccount}
              onChange={handleSocialAccountChange}
            />
            <InfoInput
              placeholder='Phone'
              errorMessage='Please enter your phone number'
              warningMessage='Please enter correct type'
              optional={false}
              regCheck={phoneRegExp}
              width='49%'
              style={infoInputCommonStyle}
              value={customerInfo.phone}
              onChange={handlePhoneChange}
            />
          </div>
          <InfoInput
            placeholder='Address'
            errorMessage='Please enter address'
            optional={false}
            style={infoInputCommonStyle}
            value={customerInfo.address}
            onChange={handleAddressChange}
          />
          <InfoInput
            placeholder='Apartment, suite, etc. (optional)'
            errorMessage='Please enter Apartment, suite, etc.'
            optional={true}
            style={infoInputCommonStyle}
            value={customerInfo.apartment}
            onChange={handleApartmentChange}
          />
          <InfoInput
            placeholder='City'
            errorMessage='Please enter a city'
            optional={false}
            style={infoInputCommonStyle}
            value={customerInfo.city}
            onChange={handleCityChange}
          />
        </section>
        <section className={`button-row-group`}>
          <ButtonTypeOne
            text='Save'
            mode='light'
            style={{ width: '100px', height: '35px', position: 'relative' }}
            onClick={handleCheck}
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
            style={{ width: '76%' }}
          />
          <ButtonTypeOne
            text='Apply'
            disabled={applyDisabled}
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
