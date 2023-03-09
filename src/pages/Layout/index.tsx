/** @jsxImportSource @emotion/react */

import React from 'react'
import leftImg from '../../assets/background/left-background-img.svg'
import rightImg from '../../assets/background/right-background-img.svg'
import styled from '@emotion/styled'
interface LayoutProps {
  children?: React.ReactNode
}
const LayoutBody = styled('div')`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #1cc976;
`
const LeftPartImage = styled('img')`
  position: absolute;
  top: 0;
  left: 6px;
`
const RightPartImage = styled('img')`
position:absolutel
top:0;
right:6px;`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutBody>
      <LeftPartImage alt="left-part" src={leftImg} />
      {children}
      <RightPartImage alt="right-part" src={rightImg} />
    </LayoutBody>
  )
}
export default Layout
