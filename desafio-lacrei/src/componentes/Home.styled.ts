import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  max-width: 1366px;
  justify-content: baseline;
  justify-content: space-between;
  gap: 8px;
  margin: 64px 64px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 69px;
  margin-top: 16px;

  button {
    padding: 0.6rem 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    border: 2px solid ${(props) => props.theme['green-100']};
    color: ${(props) => props.theme['green-100']};
  }
`

export const SectionText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  h1 {
    width: 28.4rem;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
  }

  p {
    width: 403px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: ${(props) => props.theme['black-100']};
  }
`