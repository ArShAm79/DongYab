/** @jsxImportSource @emotion/react */

import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import TextField from '../TextField'
import addButton from '../../../../assets/landing/add-button.svg'
import Item from '../../../../types/items'
import numberToString from '../../../../helpers/numberToString'

const MainContainer = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  background: #d9d9d9;
  border-radius: 35.5px;
  padding: 13px 20px 13px 15px;
  column-gap: 10px;
  @media (max-width: 420px) {
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
  }
`
const AddButton = styled('img')`
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
const Title = styled('span')`
  display: none;
  color: #000;
  font-weight: 800;
  @media (max-width: 420px) {
    display: flex;
  }
`
interface TextFieldContianerProps {
  namePlacerHolder: string
  pricePlacerHolder: string
  label: string
  nameIcon: string
  priceIcon: string
  addInfoFunction?: () => void
  data: Item[]
  setData: React.Dispatch<React.SetStateAction<Item[]>>
}
const TextFieldContianer: FC<TextFieldContianerProps> = ({
  nameIcon,
  priceIcon,
  namePlacerHolder,
  pricePlacerHolder,
  data,
  setData,
  label
}) => {
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')

  const setPriceFunction = (number: string) => {
    return numberToString(
      Number(
        number
          .split('')
          .map((item) => (/^\d+$/.test(item) ? item : ''))
          .join('') || '0'
      )
    )
  }

  const addData = () => {
    if (title !== '' && price !== '') {
      if (data.some((item) => item.title === title)) {
        return
      } else {
        setData([...data, { title, price }])
      }
      settitle('')
      setprice('')
    }
  }

  return (
    <MainContainer>
      <Title>{label}</Title>
      <TextField
        placeholder={namePlacerHolder}
        icon={nameIcon}
        size="large"
        value={title}
        onChange={(info) => settitle(info)}
      />
      <TextField
        isPrice
        placeholder={pricePlacerHolder}
        icon={priceIcon}
        value={price}
        onChange={(info) => setprice(setPriceFunction(info))}
      />
      <AddButton src={addButton} alt="addButton" onClick={addData} />
    </MainContainer>
  )
}
export default TextFieldContianer
