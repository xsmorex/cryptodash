import {AppContext} from "../App/AppProvider";
import { SelactableTile } from "../Shared/Tile";

export default function({coinKey}){



  return <AppContext.Consumer>
    {({coinList}) => {
      let coin = coinList[coinKey];

      const TileClass = SelactableTile;

      return <TileClass>
        {coinKey}.
        {coin.CoinName}
      </TileClass>


    }}
  </AppContext.Consumer>
}