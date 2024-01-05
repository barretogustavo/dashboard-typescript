import styled, { css } from 'styled-components'

type AlignItens = 'center' | 'flex-start' | 'flex-end'
type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'

type Flex = {
  alignItems?: AlignItens
  justifyContent?: JustifyContent
}

export const Row = styled.div<
  Flex & {
    padding?: string
    margin?: string
    width?: string
    gap?: string
    cursor?: string
    wrap?: string
  }
>`
  ${({
    gap,
    wrap,
    cursor,
    margin,
    padding,
    width = '100%',
    justifyContent,
    alignItems = 'flex-start',
  }) => css`
    width: ${width};
    display: flex;
    align-items: ${alignItems};
    ${margin && `margin: ${margin};`}
    ${padding && `padding: ${padding};`}
    ${gap && `gap: ${gap};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${cursor && `cursor: ${cursor};`}
    ${wrap && `flex-wrap: ${wrap};`}
  `}
`

type ColumnType = {
  width?: string
  margin?: string
} & Flex

export const Column = styled.div<ColumnType>`
  ${({ width = '100%', margin, alignItems, justifyContent }) => css`
    display: flex;
    flex-direction: column;
    width: ${width};
    ${margin && `margin: ${margin};`};
    ${justifyContent && `align-items: ${alignItems};`};
    ${justifyContent && `justify-content: ${justifyContent};`};
  `}
`
