import { useNavigate } from "react-router-dom"
import { ButtonStyle } from './Button.style'

interface ButtonProps {
  content: string
  link: string
  color: string
  background: string
}

export function Button({ content, link, color, background }: ButtonProps) {
  const navigate = useNavigate()
  return (
    <ButtonStyle
      onClick={() => navigate(link)}
      color={color}
      background={background}
    > 
      {content}
    </ButtonStyle>
  )
} 