import React from 'react'
import styled from 'styled-components'
import { AiFillEye } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { RiFlag2Line } from 'react-icons/ri'
import TopCard from '../components/top-card'
import Menu from '../layouts/menu'
import RecentMessagesCard from '../components/rencent-messages-card'
import CurrentUserCard from '../components/current-user-card'
import ProfileVisitsCard from '../components/profile-visits-card'

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

const Dashboard = () => {
  return (
    <Menu>
      <Grid>
        <Container>
          <TopCardArea>
            <TopCard
              label="Visitas"
              data="112.000"
              icon={<AiFillEye />}
              color="#9694FE"
            />
            <TopCard
              label="Seguidores"
              data="183.000"
              icon={<BsFillPersonFill />}
              color="#54C6E8"
            />
            <TopCard
              label="Seguindo"
              data="1.200"
              icon={<MdPersonAddAlt1 />}
              color="#69DAB4"
            />
            <TopCard
              label="Posts Salvos"
              data="122"
              icon={<RiFlag2Line />}
              color="#EF7576"
            />
          </TopCardArea>
          <ProfileVisitsCard />
        </Container>
        <RightSide>
          <CurrentUserCard />
          <RecentMessagesCard />
        </RightSide>
      </Grid>
    </Menu>
  )
}

export default Dashboard
