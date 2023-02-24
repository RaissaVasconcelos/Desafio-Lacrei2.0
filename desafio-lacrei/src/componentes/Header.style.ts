import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: 60px;
  background: #EEEEEE;
  padding: 8px 64px;
  width: 100%;
  
  div {
    max-width: 1366px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: ${(props) => props.theme['green-100']};
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const NavbarLink = styled(NavLink)`
  color: ${(props) => props.theme['black-200']};
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: ${(props) => props.theme['green-100']}
  };
`
