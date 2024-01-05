import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillEye } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { RiFlag2Line } from 'react-icons/ri'
import axios from 'axios'
import { AgeRangeData, Data, StateData } from '../../types'
import Menu from '../../layouts/menu'
import AgeRangeCard from './_components/age-range-card'
import TopCard from './_components/top-card'
import ProfileVisitsCard from './_components/profile-visits-card'
import MainStatesCard from './_components/main-states-card'
import UsersCard from './_components/users-card'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: rgb(69 75 120);
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

  // useEffect(() => {
  //   const profileVisitsUrl = `http://localhost:5000/users/${currentUserId}?_embed=profileVisits`
  //   const mainStateUrl = `http://localhost:5000/users/${currentUserId}?_embed=mainStates`
  //   const ageRange = `http://localhost:5000/users/${currentUserId}?_embed=ageRange`

  //   axios.get(profileVisitsUrl).then((response) => setData(response.data))
  //   axios.get(mainStateUrl).then((response) => setStateData(response.data))
  //   axios.get(ageRange).then((response) => setAgeRangeData(response.data))
  // }, [currentUserId])

  // if (!data || !users || !statesData || !ageRangeData) {
  //   return <p>Loading...</p>
  // }

  return (
    <Menu>
      <Title>Dashboard</Title>
      <Grid>
        <Container>
          <TopCardArea>
            <TopCard
              label="Visitas"
              data={1}
              icon={<AiFillEye />}
              color="#9694FE"
            />
            <TopCard
              label="Seguidores"
              data={1}
              icon={<BsFillPersonFill />}
              color="#54C6E8"
            />
            <TopCard
              label="Seguindo"
              data={1}
              icon={<MdPersonAddAlt1 />}
              color="#69DAB4"
            />
            <TopCard
              label="Posts Salvos"
              data={1}
              icon={<RiFlag2Line />}
              color="#EF7576"
            />
          </TopCardArea>
          <ProfileVisitsCard data={[]} />
          <Row>
            <MainStatesCard data={[]} />
            <AgeRangeCard data={[]} />
          </Row>
        </Container>
        <RightSide>
          {/* <CurrentUserCard currentUserData={[{}]} /> */}
          <UsersCard usersData={[]} setCurrentUserId={setCurrentUserId} />
        </RightSide>
      </Grid>
    </Menu>
  )
}

export default Dashboard
