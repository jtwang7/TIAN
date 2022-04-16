import { ReactElement, useReducer, useState } from 'react';
import DefrayClass from './Defray.module.scss';
import Logo from '../logo.png';
// components
import InfoInput from './InfoInput';


interface Props {

}

export default function Defray({ }: Props): ReactElement {
  const [contactInfoInputStatus, setContactInfoInputStatus] = useState<'error' | 'warning' | ''>('')
  const emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ // 邮箱验证正则
  const nameRegExp = /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/ // 中英文姓名验证
  const phoneRegExp = /^[1][3,4,5,7,8][0-9]{9}$/ // 手机号验证

  const infoInputCommonStyle = { marginBottom: '10px' }

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
              placeholder='Phone (optional)'
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
      </div>
      <div className={`right-bar`}></div>
    </div>
  )
}
