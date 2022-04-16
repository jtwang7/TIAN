import { ReactElement } from 'react';
import icon from './cart-icon.png';
import Badge from '../badge/Badge';
import type { BadgeProps } from '../badge/Badge';

export interface CartIconProps extends Omit<BadgeProps, 'node'> { }

export default function CartIcon({
  count,
  onClick,
  width,
  height,
  style,
}: CartIconProps): ReactElement {

  return (
    <Badge
      node={icon}
      count={count}
      onClick={onClick}
      width={width}
      height={height}
      style={style}
    />
  )
}
