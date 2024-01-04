import React from 'react'
import styled from 'styled-components'
import Menu from '../../layouts/menu'

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: rgb(69 75 120);
`

const Chat = () => {
  return (
    <Menu>
      <Title>Chat</Title>
    </Menu>
  )
}

export default Chat
