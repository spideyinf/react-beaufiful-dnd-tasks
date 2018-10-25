import styled from 'styled-components'

const ButtonWrapper = styled.button`
  min-width: 120px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover,
  &:active {
    outline: none;
    color: white;
    filter: brightness(110%);
  }
`

export { ButtonWrapper }
