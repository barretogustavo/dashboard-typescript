import React from 'react'
import { BarDatum, defaultProps, ResponsiveBar } from '@nivo/bar'

type Props = {
  data: BarDatum[]
  layout?: 'horizontal' | 'vertical'
  keyChart?: [string]
  legendBottom?: string
  legendLeft?: string
  indexBy?: string
  color?: [string]
  margin?: { top: number; right: number; bottom: number; left: number }
}

const ChartBar = ({
  data,
  layout,
  keyChart,
  legendBottom,
  legendLeft,
  indexBy,
  color,
  margin,
}: Props) => {
  return (
    <ResponsiveBar
      data={data}
      layout={layout}
      keys={keyChart}
      indexBy={indexBy}
      margin={margin}
      valueScale={{ type: 'linear' }}
      animate
      padding={0.3}
      colors={color}
      labelTextColor="#fff"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        legend: legendBottom,
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        legend: legendLeft,
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  )
}

ChartBar.defaultProps = {
  layout: 'vertical',
  keyChart: ['visits'],
  legendBottom: 'Visitas',
  legendLeft: 'Semanas',
  indexBy: 'month',
  color: ['#435DBE'],
  margin: { top: 0, right: 0, bottom: 90, left: 50 },
}

export default ChartBar
