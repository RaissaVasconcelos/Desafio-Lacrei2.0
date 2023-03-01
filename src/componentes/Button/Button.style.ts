import styled from 'styled-components'

interface ButtonProps {
  color: string
  background: string
}

export const ButtonStyle = styled.button<ButtonProps>`
  padding: 0.6rem 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 200px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  border: 2px solid ${(props) => props.theme['green-100']};
  color: ${(props) => props.color};
  background-color:  ${(props) => props.background};
`