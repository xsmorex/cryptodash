import styled, {css} from 'styled-components';

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 180px auto 100px 100px;  
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css `
    text-shadow: 0px 0px 60px #03ff03;
  `}
`

function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}){
  return <ControlButtonElem active={active}>
    {toProperCase(name)}
  </ControlButtonElem>
}


export default function() {
  return <Bar>
      <Logo>Cryptodash</Logo>
      <div/>
      <ControlButton active name="dashboard"></ControlButton>
      <ControlButton name="settings"></ControlButton>
  </Bar>
}