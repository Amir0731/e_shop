import React from 'react'
import { InputRadio, TopAdvImg } from './style'

export default function AdvImg({ img, onChecked }) {
  return (
    <>
      <TopAdvImg src={img.src} style={{ display: img.checked ? 'inline-block' : 'none' }} />
      <InputRadio type="radio" id={"radio" + img.id} onChange={() => onChecked(img)} name='checkedImg' checked={img.checked} />
    </>
  )
}
