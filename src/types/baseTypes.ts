import * as React from 'react';

export declare interface ReactProps {
  style?: React.CSSProperties,
  className?: string,
  children?: React.ReactNode,
}

export declare interface SizeProps {
  width?: number | string,
  height?: number | string,
  padding?: string,
  margin?: string,
}

export declare interface PositionProps {
  position:
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'inherit'
  | 'sticky'
  | 'static',
  inset?: number | string,
  top: number | string,
  left: number | string,
  right: number | string,
  bottom: number | string,
}

// 类型重写(覆盖)
// 将P中所有与S键相关的属性过滤，然后用S重新写入
export type Override<P, S> = Omit<P, keyof S> & S