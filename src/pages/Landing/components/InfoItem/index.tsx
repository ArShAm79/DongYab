/** @jsxImportSource @emotion/react */
import React from 'react'
import removeIcon from '../../../../assets/landing/remove-icon.svg'
import styled from '@emotion/styled'
interface InfoItemProps {
  index: number
  title: string
  price: string
  removeFunction?: () => void
}
const InfoItemBase = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  column-gap: 20px;
  font-family: IRANYekanWeb;
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;
`
const InfoItemText = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
const RemoveIcon = styled('img')`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
const InfoItem: React.FC<InfoItemProps> = ({
  index,
  title,
  price,
  removeFunction
}) => {
  return (
    <InfoItemBase>
      <RemoveIcon src={removeIcon} alt="removeIcon" onClick={removeFunction} />
      <InfoItemText>
        <span>-{index}</span>
        &nbsp;
        <span>:{title}</span>
        &nbsp;
        <span>{price}</span>
        &nbsp; &nbsp;
        <span>T</span>
      </InfoItemText>
    </InfoItemBase>
  )
}
export default InfoItem
