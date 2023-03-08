import React from 'react'
import { BarDatum, ResponsiveBar } from '@nivo/bar'

type Props = {
  data: BarDatum[]
}

const ChartBar = ({ data }: Props) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['visits']}
      indexBy="month"
      margin={{ top: 0, right: 0, bottom: 50, left: 50 }}
      valueScale={{ type: 'linear' }}
      animate
      padding={0.3}
      colors={['#435DBE']}
      labelTextColor="#fff"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        legend: 'Semana',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        legend: 'Visitas',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  )
}

export default ChartBar
