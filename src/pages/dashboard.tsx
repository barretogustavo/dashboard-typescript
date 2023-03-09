import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillEye } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { RiFlag2Line } from 'react-icons/ri'
import axios from 'axios'
import { BarDatum } from '@nivo/bar'
import TopCard from '../components/top-card'
import Menu from '../layouts/menu'
import UsersCard from '../components/users-card'
import CurrentUserCard from '../components/current-user-card'
import ProfileVisitsCard from '../components/profile-visits-card'
import { AgeRangeData, Data, StateData } from '../types'
import MainStatesCard from '../components/main-states-card'
import AgeRangeCard from '../components/age-range-card'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const TopCardArea = styled.div`
  display: flex;
  gap: 1rem;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Row = styled.div`
  display: flex;
  gap: 1rem;
`

const Dashboard = () => {
  const [currentUserId, setCurrentUserId] = useState(1)
  const [data, setData] = useState<Data>()
  const [statesData, setStateData] = useState<StateData>()
  const [ageRangeData, setAgeRangeData] = useState<AgeRangeData>()
  const [users, setUsers] = useState<Data[]>()

  useEffect(() => {
    const url = 'http://localhost:5000/users'

    axios.get(url).then((response) => setUsers(response.data))
  }, [])

  useEffect(() => {
    const profileVisitsUrl = `http://localhost:5000/users/${currentUserId}?_embed=profileVisits`
    const mainStateUrl = `http://localhost:5000/users/${currentUserId}?_embed=mainStates`
    const ageRange = `http://localhost:5000/users/${currentUserId}?_embed=ageRange`

    axios.get(profileVisitsUrl).then((response) => setData(response.data))
    axios.get(mainStateUrl).then((response) => setStateData(response.data))
    axios.get(ageRange).then((response) => setAgeRangeData(response.data))
  }, [currentUserId])

  if (!data || !users || !statesData || !ageRangeData) {
    return <p>Loading...</p>
  }

  return (
    <Menu>
      <Grid>
        <Container>
          <TopCardArea>
            <TopCard
              label="Visitas"
              data={data.totalVisits}
              icon={<AiFillEye />}
              color="#9694FE"
            />
            <TopCard
              label="Seguidores"
              data={data.followers}
              icon={<BsFillPersonFill />}
              color="#54C6E8"
            />
            <TopCard
              label="Seguindo"
              data={data.following}
              icon={<MdPersonAddAlt1 />}
              color="#69DAB4"
            />
            <TopCard
              label="Posts Salvos"
              data={data.savedPosts}
              icon={<RiFlag2Line />}
              color="#EF7576"
            />
          </TopCardArea>
          <ProfileVisitsCard data={data.profileVisits[0].visits} />
          <Row>
            <MainStatesCard data={statesData.mainStates[0].state} />
            <AgeRangeCard data={ageRangeData.ageRange[0].range} />
          </Row>
        </Container>
        <RightSide>
          <CurrentUserCard currentUserData={data} />
          <UsersCard usersData={users} setCurrentUserId={setCurrentUserId} />
        </RightSide>
      </Grid>
    </Menu>
  )
}

export default Dashboard
