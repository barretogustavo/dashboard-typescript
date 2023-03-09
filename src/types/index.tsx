import { BarDatum } from '@nivo/bar'

export type Data = {
  id: number
  name: string
  username: string
  totalVisits: number
  followers: number
  following: number
  savedPosts: number
  profileVisits: { userId: number; visits: BarDatum[] }[]
}
