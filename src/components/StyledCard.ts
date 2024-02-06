import styled from 'styled-components';
import { rgba } from 'polished';
import { colors } from '../helpers/colors';
import {CardPictureProps} from '../helpers/types'

export const CardWrapper = styled.div`
  height: 52rem;
  width: 35rem;
 
  @media (max-width: 360px) {
    height: 36rem;
    width: 24rem;
  }
`;

export const CardPicture = styled.div<CardPictureProps>`
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: ${props => `
      linear-gradient(
      to right bottom,
      ${props.theme.colorLight},
      ${props.theme.colorDark}
    ),
    url(${props.src})`};
`;


export const CardHeadingSpan = styled.span`
  padding: 1rem 1.5rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-image: ${props => `
  linear-gradient(
    to right bottom,
    ${rgba(props.theme.colorLight, 0.85)},
    ${rgba(props.theme.colorDark, 0.85)}
  )
  `};
  border-radius: 10px;
`;

export const CardHeading = styled.h4`
  font-size: 3rem;
  font-weight: 300;
  text-align: right;
  text-transform: uppercase;
  color: ${colors.white};
  position: absolute;
  top: 18rem;
  width: 75%;
  right: 1.2rem;
`;

export const CardSideWrapper = styled.div`
  transition: all 0.8s ease;
  height: 52rem;
  font-size: 5rem;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0 1.5rem 4rem ${rgba(colors.black, 0.15)};
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: scroll;
  backface-visibility: hidden;

  /* Style the scrollbar itself (width, background-color) */
  &::-webkit-scrollbar {
    width: 10px; // Adjust the width of the scrollbar
    background-color: #F5F5F5; // Adjust the background color of the scrollbar
  }

  /* Style the track of the scrollbar */
  &::-webkit-scrollbar-track {
    background-color: #F5F5F5; // Adjust track background color
    border-radius: 10px; // Optional: if you want rounded corners
  }

  /* Style the thumb of the scrollbar */
  &::-webkit-scrollbar-thumb {
    background-color: #888; // Adjust thumb color
    &:hover {
      background: #555; // Color when hovering
    }
`;

export const CardSideFront = styled(CardSideWrapper)`
  background-color: ${colors.white};
`;

export const CardSideBack = styled(CardSideWrapper)`
  transform: rotateY(-180deg);
  color: ${colors.white};
  background-image: ${props => `
      linear-gradient(to right bottom,
      ${props.theme.colorLight},
      ${props.theme.colorDark}
    )`};
`;

export const CardContainer = styled.div`
  perspective: 150rem;
  position: relative;
  max-height: 52rem;

  &:hover ${CardSideFront} {
    transform: rotateY(180deg);
  }

  &:hover ${CardSideBack} {
    transform: rotateY(0deg);
  }
`;

export const CardDetails = styled.div`
  padding: 2rem 3rem;
  font-size: 2rem;

  ol, li {
    list-style: none;
  }

  li {
    padding: 0.1rem 0; // Add padding to top and bottom of list item for spacing
    border-bottom: 1px solid #ccc; // Add a bottom border as a separator

    &:last-child {
      border-bottom: none; // Remove bottom border from the last list item
    }
`;