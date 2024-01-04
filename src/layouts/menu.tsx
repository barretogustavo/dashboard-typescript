import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsGridFill, BsFillChatLeftDotsFill } from 'react-icons/bs'
import { FaChartArea, FaThList, FaShareAlt } from 'react-icons/fa'
import { RiChatHistoryFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 235px 1fr;
`

const Aside = styled.aside`
  position: relative;
  z-index: 2;
  background-color: #fefefe;
  box-shadow: 0px 8px 16px rgba(24, 24, 24, 0.09);
  padding: 2rem 1rem;

  nav {
    padding-top: 2rem;
  }
`

const LabelLink = styled.a<{ isActive?: boolean }>`
  ${({ isActive }) => css`
    color: ${isActive ? '#fff' : '#435ebe'};
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: ${isActive ? '#435ebe' : 'none'};

    &:hover {
      background-color: #435ebe;
      color: #fff;
    }
  `}
`

const LogoArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.1875rem;
  color: #435ebe;

  & > h2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`

const Header = styled.header`
  color: #435ebe;
  height: 80px;
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fefefe;
  box-shadow: 0px 8px 16px rgba(24, 24, 24, 0.09);
`

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    font-weight: 500;
  }

  & > svg {
    font-size: 2rem;
    cursor: pointer;
  }
`

const Children = styled.div`
  height: calc(100vh - 86px);
  overflow: auto;
  padding: 1.25rem 2rem;
  background-color: #f1f7fe;
`

type Props = {
  children: React.ReactNode
}

const Menu = ({ children }: Props) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Container>
      <Aside>
        <LogoArea>
          <FaShareAlt />
          <h2>SocialDash</h2>
        </LogoArea>
        <nav>
          <LabelLink
            isActive={pathname === '/dashboard'}
            onClick={() => navigate('/dashboard')}
          >
            <BsGridFill />
            Dashboard
          </LabelLink>
          <LabelLink>
            <FaChartArea />
            Estatísticas
          </LabelLink>
          <LabelLink>
            <FaThList />
            Perfis
          </LabelLink>
          <LabelLink
            isActive={pathname === '/chat'}
            onClick={() => navigate('/chat')}
          >
            <BsFillChatLeftDotsFill />
            Chat
          </LabelLink>
          <LabelLink>
            <RiChatHistoryFill />
            Histórico
          </LabelLink>
        </nav>
      </Aside>
      <section>
        <Header>
          <ProfileArea>
            <p>Gustavo Barreto</p>
            <CgProfile />
          </ProfileArea>
        </Header>
        <Children>{children}</Children>
      </section>
    </Container>
  )
}

export default Menu
