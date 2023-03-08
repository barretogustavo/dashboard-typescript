import React from 'react'
import styled from 'styled-components'
import UserCard from './user-card'
import avatar1 from '../assets/avatar/avatar1.jpg'
import avatar2 from '../assets/avatar/avatar2.jpg'
import avatar3 from '../assets/avatar/avatar3.jpg'

const Card = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fefefe;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1.5rem 15px;
`

const CurrentUserCard = () => {
  return (
    <Card>
      <UserCard
        img={avatar1}
        user="Gustavo Barreto"
        username="@gustavobarreto.dev"
      />
    </Card>
  )
}

export default CurrentUserCard
