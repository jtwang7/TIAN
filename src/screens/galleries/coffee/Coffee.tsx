import React, { ReactElement } from 'react'
import type { TitleTypes } from '../Galleries'
import Galleries from '../Galleries'
import {
  Thor012,
  Thor019,
  Thor028,
} from '../../../images/home/index'


interface Props {

}

export default function Coffee({ }: Props): ReactElement {
  const title: TitleTypes = {
    position: '30°40′N 114°23′E',
    date: 'April 2022',
    placeName: 'WU HAN',
  }
  const contents = undefined

  return (
    <Galleries
      title={title}
      contents={contents}
    />
  )
}
