import React from 'react'
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button<{
  secondary?: boolean
  isDisabled?: boolean
}>`
  ${({ theme, secondary, isDisabled }) => css`
    height: 40px;
    font-size: 1rem;
    display: inline-block;
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
    font-weight: 500;
    padding: 0 0.8rem;
    appearance: none;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    white-space: nowrap;
    ${isDisabled
      ? `background-color: ${theme.colors.primaryDisabled} ;`
      : `background-color: ${
          secondary ? theme.colors.white : theme.colors.primary
        };`}
    color: ${secondary ? theme.colors.primary : theme.colors.white};
  `}
`

type Props = {
  type?: 'button' | 'submit'
  children: string
  secondary?: boolean
  onClick?: () => void
  isDisabled?: boolean
}

const Button = ({
  onClick,
  children,
  secondary,
  isDisabled,
  type = 'button',
}: Props) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      isDisabled={isDisabled}
      secondary={secondary}
      disabled={isDisabled}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button
