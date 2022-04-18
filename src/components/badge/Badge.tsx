import React, { ReactElement } from 'react';
import BadgeClass from './Badge.module.scss';
// types
import { ReactProps, SizeProps } from '../../types/baseTypes';
import { MouseEventHandler } from 'react';

interface Props {
  node: string | React.ReactNode,
  count: number,
  onClick?: MouseEventHandler<HTMLDivElement>,
}

export type BadgeProps = Props & ReactProps & SizeProps


function Badge({ node, count, onClick, width, height, style }: Omit<BadgeProps, 'node'> & { node: string }): ReactElement;
function Badge({ node, count, onClick, width, height, style }: Omit<BadgeProps, 'node'> & { node: React.ReactNode }): ReactElement;
function Badge({
  node,
  count,
  onClick,
  width = '35px',
  height = '35px',
  style = {},
}: BadgeProps): ReactElement {

  return (
    <div
      className={BadgeClass.container}
      style={{
        width,
        height,
        ...style,
      }}
      onClick={onClick}
    >
      {
        (typeof node === 'string') ? (
          <img className={`iconfont`} alt='iconfont' src={node} />
        ) : (
          <div className={`node-container`}>
            {node}
          </div>
        )
      }
      {count ? <div className={'badge'}>{count}</div> : null}
    </div>
  )
}

export default Badge;
