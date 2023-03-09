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

export type StateData = {
  id: number
  name: string
  username: string
  totalVisits: number
  followers: number
  following: number
  savedPosts: number
  mainStates: {
    userId: number
    state: {
      name: string
      percent: number
    }[]
  }[]
}

export type AgeRangeData = {
  id: number
  name: string
  username: string
  totalVisits: number
  followers: number
  following: number
  savedPosts: number
  ageRange: {
    userId: number
    range: {
      age: string
      percent: number
    }[]
  }[]
}
