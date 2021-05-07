### used

- React
- Styled-components
- CSS Grid

- CryptoCompare API
- HighCharts
- Asynch/await
- Fuzzy Search
- Loadash
- Webkit inspector
- localStorage
- Google Fonts

### `yarn start`

Notes

shift alt f
```javascript
function Welcome(props) {
return <h1>Hello, {props.name} </h1>
}
function App() {
  return (
      <Welcome name={"Cr"} />
  );
}
```

# styled-components 
```javascript
const MyButton = styled.div`
  color:green;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div>
      <Welcome/>
      <MyButton>Hello</MyButton>
      <MyButton primary>Hello</MyButton>
      <TomatoButton primary>Hello</TomatoButton>
    </div>
  );
}
```