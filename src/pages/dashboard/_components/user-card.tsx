import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.h3`
  font-size: 1rem;
  color: #454b78;
`

const Username = styled.p`
  font-size: 0.9rem;
  color: #454b78;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

type Props = {
  img: string
  user: string
  username: string
  onClick?(
    e:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void
}

const UserCard = ({ img, user, username, onClick }: Props) => {
  return (
    <Row onClick={onClick}>
      <Avatar src={img} alt="Imagem do usuário" />
      <Column>
        <Name>{user}</Name>
        <Username>{username}</Username>
      </Column>
    </Row>
  )
}

UserCard.defaultProps = {
  onClick: () => null,
}

export default UserCard
