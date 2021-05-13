import {AppContext} from "../App/AppProvider";

export default function ({firstVisit}){

  return(
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit? <div>
          Welcome to CryptoDash, plese select your favourite coins to begin.{' '}
        </div> : null
      }
    </AppContext.Consumer>
  );

}

export function Welcome() {
  return <h1>Welcome to the dashboard</h1>;
}