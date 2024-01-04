import React from 'react'
import styled from 'styled-components'
import { differenceInYears } from 'date-fns'
import Menu from '../../layouts/menu'
import ListEmployee from './list-employee'
import useListAllEmployees from './_hooks/use-list-all-employees'

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: rgb(69 75 120);
`

const Employee = () => {
  const { employee, error, loading } = useListAllEmployees()
  const currentDate = new Date()

  console.log('employee: ', employee)
  if (loading) {
    return <p>carregando...</p>
  }

  if (error) {
    return <p>{`Ocorreu um erro: ${error}`}</p>
  }

  if (!employee) {
    return null
  }

  return (
    <Menu>
      <Title>Funcionários</Title>
      {employee.map((item) => {
        console.log(
          'new Date(item.dataNascimento): ',
          new Date(item.dataNascimento),
        )
        return (
          <ListEmployee
            age={differenceInYears(currentDate, new Date(item.dataNascimento))}
            createdAt={item.created_at}
            gender={item.sexo}
            name={`${item.nome} ${item.sobrenome}`}
          />
        )
      })}
    </Menu>
  )
}

export default Employee
