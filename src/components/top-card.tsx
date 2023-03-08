import React from 'react'
import styled, { css } from 'styled-components'

const Card = styled.div`
  height: 100px;
  width: 24%;
  background-color: #fefefe;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1.5rem 15px;
`

const Label = styled.p`
  color: #c0c0c0;
  font-size: 0.9rem;
`

const IconArea = styled.div<{ color: string }>`
  ${({ color }) => css`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 5px;
    background-color: ${color};
  `}
`

const DataArea = styled.div`
  display: flex;
  flex-direction: column;
`

const Value = styled.p`
  color: #445887;
  margin-top: 5px;
  font-weight: bold;
  font-size: 1rem;
`

type Props = {
  label: string
  data: string | number
  icon: React.ReactElement
  color: string
}

const TopCard = ({ label, data, icon, color }: Props) => {
  return (
    <Card>
      <IconArea color={color}>{icon}</IconArea>
      <DataArea>
        <Label>{label}</Label>
        <Value>{data}</Value>
      </DataArea>
    </Card>
  )
}

export default TopCard
