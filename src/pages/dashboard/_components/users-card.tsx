import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import UserCard from './user-card'
import avatar1 from '../../../assets/avatar/avatar1.jpg'
import { Data } from '../../../types'

const Card = styled.div`
  width: 100%;
  background-color: #fefefe;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1.5rem 15px;
`

const Title = styled.h3`
  font-weight: 500;
  color: #454b78;
  margin-bottom: 2rem;
`

const Button = styled.button`
  width: 100%;
  padding: 20px 2rem;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 5px;
  border: none;
  background-color: #ebf3ff;
  color: #454b78;
  cursor: pointer;
`

type Props = {
  usersData: Data[]
  setCurrentUserId: React.Dispatch<React.SetStateAction<number>>
}

const UsersCard = ({ usersData, setCurrentUserId }: Props) => {
  const navigate = useNavigate()

  return (
    <Card>
      <Title>Usuários</Title>
      {usersData.map((item) => (
        <UserCard
          onClick={() => setCurrentUserId(item.id)}
          img={avatar1}
          user={item.name}
          username={item.username}
        />
      ))}
      <Button onClick={() => navigate('/chat')}>Iniciar Conversa</Button>
    </Card>
  )
}

export default UsersCard
