import styled from 'styled-components'

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
    color: ${(props) => props.theme['color-green']};
}

`

export const NavContainer = styled.nav`
  display: flex;
  gap: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: ${(props) => props.theme['black-100']};

  flex: none;
  order: 0;
  flex-grow: 0;
`