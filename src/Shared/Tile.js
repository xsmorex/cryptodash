import styled from 'styled-components';
import {lightBlueBackground, subtleBoxShadow, greenBoxShadow, redBoxShadow} from "../Shared/Styles";


export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding:10px;
`

export const SelactableTile = styled(Tile)`
  &:hover{
    cursor: pointer;
    ${greenBoxShadow}
  }
`