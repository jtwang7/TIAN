import { ReactElement } from 'react';
import CartIconClass from './CartIcon.module.scss';
import icon from './cart-icon.png';
// types
import { ReactProps, SizeProps } from '../../types/baseTypes';
import { MouseEventHandler } from 'react';

interface CartIconProps {
  count: number,
  onClick?: MouseEventHandler<HTMLDivElement>,
}

export default function CartIcon({
  count,
  onClick,
  width = '35px',
  height = '35px',
  style = {},
}: CartIconProps & ReactProps & SizeProps): ReactElement {

  return (
    <div
      className={CartIconClass.container}
      style={{
        width,
        height,
        ...style,
      }}
      onClick={onClick}
    >
      <img className={`iconfont`} alt='iconfont' src={icon} />
      {count ? <div className={'badge'}>{count}</div> : null}
    </div>
  )
}
