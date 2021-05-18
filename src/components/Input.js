import styled from "styled-components"
import theme from "./theme"

const Input = styled.input`
  font-size: 1rem;
  border-color: ${theme.colors.gray};
  border-image: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  padding: 0.4rem 0.6rem;
`

export default Input
