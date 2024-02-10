import {forwardRef} from 'react'
import {CounterCircle} from './StyledMainPageComponents';

type counter = {
    current: number,
    max: number;
}

export const CoinCounter = forwardRef<HTMLDivElement, counter>(({ current, max }, ref) => (
  <CounterCircle ref={ref}>
    <img src="/images/coins.png" alt="Coins" width={35} height={35} />
    {current}/{max}
  </CounterCircle>
));