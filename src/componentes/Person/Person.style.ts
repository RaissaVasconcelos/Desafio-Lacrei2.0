import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  gap: 32px;
  justify-content: baseline;

  h1 {
    width: 28.4rem;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
  }

  img {
    margin-top: 60px;
  }
`

export const SectionText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 64px 64px 0px;
`

export const TextPerson = styled.p`
  width: 521px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: ${(props) => props.theme['black-100']};
  padding-left: 24px;
  border-left: 5px solid #018762;
`

