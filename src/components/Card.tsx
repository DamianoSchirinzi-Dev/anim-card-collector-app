import { ThemeProvider } from 'styled-components';
import { CardSideBack, CardSideFront, CardHeading, CardHeadingSpan, CardContainer } from "./StyledCard";
import { CardProps } from '../helpers/types';

export const CardSide = (props : any) =>
  props.side && props.side === 'back' ? (
    <CardSideBack>{props.children}</CardSideBack>
  ) : (
    <CardSideFront>{props.children}</CardSideFront>
  );

export const CardTitle = (props : any)  => (
  <CardHeading>
    <CardHeadingSpan>{props.children}</CardHeadingSpan>
  </CardHeading>
);

export const Card = ({ colorLight, colorDark, children } : CardProps) => (
  <ThemeProvider theme={{ colorLight, colorDark }}>
    <CardContainer>{children}</CardContainer>
  </ThemeProvider>
);
