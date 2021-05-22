import styled from "styled-components";
import {
  lightBlueBackground,
  subtleBoxShadow,
  greenBoxShadow,
  redBoxShadow,
} from "../Shared/Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding:10px;
`;

export const SelactableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(SelactableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
