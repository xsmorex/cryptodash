### used

- React
- Styled-components
- CSS Grid
- Context API
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

# Context API
State manager of the app

```javascript
const MyContext = React.createContext(defaultValue);

```
Provider - you wrap the component with it to pass the state  - just wraps the APP
Consumer - re render when the provider's value changes (notifies the consumer)

```javascript
<AppContext.Consumer>
  {({page}) => (
  <ControlButtonElem active={page === name}>
    {toProperCase(name)}
  </ControlButtonElem>)}
</AppContext.Consumer>
```
