import { BarDatum } from '@nivo/bar'
import React from 'react'
import styled from 'styled-components'
import ChartBar from './chart-bar'

const ProfileVisitArea = styled.div`
  width: 100%;
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

const ProfileVisitsCard = ({ data }: Props) => {
  return (
    <ProfileVisitArea>
      <Title>Visitas ao perfil</Title>
      <ChartBar data={data} />
    </ProfileVisitArea>
  )
}

export default ProfileVisitsCard
