import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import UserCard from './user-card'
import avatar1 from '../assets/avatar/avatar1.jpg'
import avatar2 from '../assets/avatar/avatar2.jpg'
import avatar3 from '../assets/avatar/avatar3.jpg'

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

const RecentMessagesCard = () => {
  const navigate = useNavigate()

  return (
    <Card>
      <Title>Mensagens recentes</Title>
      <UserCard img={avatar1} user="João Silva" username="@joãosilva" />
      <UserCard img={avatar2} user="Pedro Pedreira" username="@pedropedreira" />
      <UserCard img={avatar3} user="Michael Souza" username="@michaelsouza" />
      <Button onClick={() => navigate('/chat')}>Iniciar Conversa</Button>
    </Card>
  )
}

export default RecentMessagesCard
