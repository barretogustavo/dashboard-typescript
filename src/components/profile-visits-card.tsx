import React from 'react'
import styled from 'styled-components'
import { chartData } from '../mocks'
import ChartBar from './chart-bar'

const Card = styled.div``

const ProfileVisitArea = styled.div`
  width: 100%;
  height: 400px;
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

const ProfileVisitsCard = () => {
  return (
    <Card>
      <ProfileVisitArea>
        <Title>Visitas ao perfil</Title>
        <ChartBar data={chartData} />
      </ProfileVisitArea>
    </Card>
  )
}

export default ProfileVisitsCard
