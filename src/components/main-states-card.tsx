import { BarDatum } from '@nivo/bar'
import React from 'react'
import styled from 'styled-components'
import ChartBar from './chart-bar'

const ProfileVisitArea = styled.div`
  width: 50%;
  height: 500px;
  background-color: #fefefe;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 15px;
`

const Title = styled.h3`
  font-weight: 500;
  color: #454b78;
  margin-bottom: 2rem;
`

type Props = {
  data: BarDatum[]
}

const MainStatesCard = ({ data }: Props) => {
  return (
    <ProfileVisitArea>
      <Title>Principais cidades</Title>
      <ChartBar
        data={data}
        layout="horizontal"
        keyChart={['percent']}
        legendBottom="Percentual"
        legendLeft="Estado"
        indexBy="name"
        color={['#9694FE']}
        margin={{ top: 0, right: 0, bottom: 90, left: 110 }}
      />
    </ProfileVisitArea>
  )
}

export default MainStatesCard
