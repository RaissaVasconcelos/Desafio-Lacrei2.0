import { useNavigate } from "react-router-dom"
import { ButtonStyle } from './Button.style'

interface ButtonProps {
  content: string
  link: string
  color: string
  background: string,
  testid: string
}

export function Button({ content, link, color, background, testid }: ButtonProps) {
  const navigate = useNavigate()
  return (
    <ButtonStyle
      onClick={() => navigate(link)}
      color={color}
      background={background}
      data-testid={testid}
    > 
      {content}
    </ButtonStyle>
  )
} 