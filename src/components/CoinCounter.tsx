import {CounterCircle} from './StyledMainPageComponents';

type counter = {
    current: number,
    max: number;
}

export const CoinCounter = ({ current, max }: counter)  => (
  <CounterCircle>
    <img src="/images/coins.png" alt="Coins" width={35} height={35} />
    {current}/{max}
  </CounterCircle>
);