import {css} from 'styled-components'

export const ButtonOrSpan = css`
  width: calc(${props => props.theme.navSize} * 0.5);
  height: calc(${props => props.theme.navSize} * 0.5);
  background-color: ${props => props.theme.bgAccent};
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 300ms;
  :hover{
    filter: brightness(1.2);
  }
  svg {
    fill: ${props => props.theme.textColor};
    width: 20px;
    height: 20px;
  }
`