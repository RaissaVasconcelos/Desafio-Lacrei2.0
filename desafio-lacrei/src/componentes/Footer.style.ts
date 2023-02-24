import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-top: 1px solid ${(props) => props.theme['green-50']};
  margin: auto 64px;
  padding-top: 32px;

  p {
    color: ${(props) => props.theme['black-100']};
    width: 140px;
    height: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 212px;
  gap: 46px;
`

export const ContainerNav = styled.nav`
  display: flex;
  gap: 40px;
  width: 400px;

  a {
    text-decoration: none;
  }
`