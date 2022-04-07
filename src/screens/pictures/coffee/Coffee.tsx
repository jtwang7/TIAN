import React, { ReactElement } from 'react'
import PictureWall from '../PictureWall';
import {
  Thor012,
  Thor019,
  Thor028,
} from '../../../images/home/index';

interface Props {
  
}

export default function Coffee({}: Props): ReactElement {
  const contents = [
    {
      url: Thor012,
    },
    {
      url: Thor019,
    },
    {
      url: Thor028,
    },
  ]
  return (
    <PictureWall
      contents={contents}
    />
  )
}
