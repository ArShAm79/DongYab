/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import React from 'react'
import ResultInfoItemContainer from './components/ResultInfoItem/ResultInfoItemContainer'
import PersonResult from '../../types/personResult'

const LandingDashboardResultBase = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 950px;
  @media (max-width: 420px) {
    padding-bottom: 100px;
  }
`
const LandingDashboardResultHeader = styled('div')`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
interface LandingDashboardResultProps {
  totalMoney: string
  personsResult: PersonResult[]
}
const LandingDashboardResult: React.FC<LandingDashboardResultProps> = ({
  totalMoney,
  personsResult
}) => {
  return (
    <LandingDashboardResultBase>
      <LandingDashboardResultHeader>
        T&nbsp;&nbsp;{`مجموع خرج های انجام شده: ${totalMoney} `}
      </LandingDashboardResultHeader>
      <ResultInfoItemContainer personsResult={personsResult} />
      {/* <Button
        size="large"
        title="دریافت فایل اکسل تمامی ریز هزینه های اشخاص"
        icon={downloadIcon}
        onClick={() => createExcelFile(personsResult)}
      /> */}
    </LandingDashboardResultBase>
  )
}
export default LandingDashboardResult
