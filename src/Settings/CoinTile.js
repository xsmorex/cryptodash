import {AppContext} from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import { SelactableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";

export default function({coinKey}){



  return <AppContext.Consumer>
    {({coinList}) => {
      let coin = coinList[coinKey];

      const TileClass = SelactableTile;

      return <TileClass>
        <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
        <CoinImage coin={coin} />
      </TileClass>

    }}
  </AppContext.Consumer>
}