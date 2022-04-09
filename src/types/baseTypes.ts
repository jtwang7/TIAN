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