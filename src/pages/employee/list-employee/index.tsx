import React from 'react'
import { MdEdit } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import styled, { css } from 'styled-components'

const Row = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  width: 100%;
  height: 80px;
  padding: 0.5rem 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  color: #3b3b3b;
  margin-bottom: 1rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonAction = styled.button<{ isDelete?: boolean }>`
  ${({ isDelete }) => css`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${isDelete ? '#f52b07' : '#1713fa'};
    color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
  `}
`

const ButtonArea = styled.div`
  display: flex;
  gap: 0.5rem;
`

type Props = {
  name: string
  age: number
  gender: string
  createdAt: string
}

const ListEmployee = ({ name, age, gender, createdAt }: Props) => {
  return (
    <Row>
      <Column>
        <p>nome:</p>
        <h3>{name || 'N/D'}</h3>
      </Column>
      <Column>
        <p>idade</p>
        <h3>{`${age} anos` || 'N/D'}</h3>
      </Column>
      <Column>
        <p>sexo:</p>
        <h3>{gender === 'H' ? 'Homem' : 'Mulher'}</h3>
      </Column>
      <Column>
        <p>usuário criado em:</p>
        <h3>{createdAt || 'N/D'}</h3>
      </Column>
      <Column>
        <p>ações:</p>
        <ButtonArea>
          <ButtonAction type="button">
            <MdEdit />
          </ButtonAction>
          <ButtonAction isDelete type="button">
            <FaRegTrashAlt />
          </ButtonAction>
        </ButtonArea>
      </Column>
    </Row>
  )
}

export default ListEmployee
