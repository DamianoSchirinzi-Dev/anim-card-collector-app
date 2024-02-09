import styled from "styled-components";
import { rgba } from "polished";
import { colors, mainThemeColors } from "../helpers/colors";
import { CardPictureProps, CardContainerProps} from "../helpers/types";
import { breakpoints } from "../helpers/sizes";

export const CardWrapper = styled.div`
  height: 52rem;
  width: 35rem;

  @media (max-width: ${breakpoints.largeScreens}) {
    height: 36rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 28rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 26.5rem;
    width: 22rem;
  }
`;

export const CardPicture = styled.div<CardPictureProps>`
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: ${(props) => `
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
  background-image: ${(props) => `
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
  width: 80%%;
  right: .5rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 20.5rem;
    font-size: 1.6rem;
  }
`;

export const CardSideWrapper = styled.div`
  transition: all 0.8s ease;
  height: 52rem;
  font-size: 5rem;
  border-radius: 10px;
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
    width: 10px; 
    background-color: #F5F5F5; 
  }

  /* Style the track of the scrollbar */
  &::-webkit-scrollbar-track {
    background-color: #F5F5F5; 
    border-radius: 10px; 
  }

  /* Style the thumb of the scrollbar */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    &:hover {
      background: #555;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 52rem;
  }    

  @media (max-width: ${breakpoints.mobile}) {
    height: 44rem;
  }
`;

export const CardSideFront = styled(CardSideWrapper)`
  background-color: ${colors.white};
`;

export const CardSideBack = styled(CardSideWrapper)`
  transform: rotateY(-180deg);
  color: ${colors.white};
  background-image: ${(props) => `
      linear-gradient(to right bottom,
      ${colors.tertiaryDark},
      ${colors.greyDark3}
    )`};
`;

export const CardContainer = styled.div<CardContainerProps>`
  perspective: 150rem;
  position: relative;
  max-height: 30rem;

  ${props => !props.isInShop && `
    &:hover ${CardSideFront} {
      transform: rotateY(180deg);
    }

    &:hover ${CardSideBack} {
      transform: rotateY(0deg);
    }
  `}
`;

export const CardDetails = styled.div`
  padding: 2rem 3rem;
  font-size: 2.2rem;

  h1 { 
    font-size: 3rem;
  }

  ol {
    list-style: none;    
  }

  p {
    2.2rem;
  }

  li {
    padding: 0.1rem 0; 
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding-left:10px;
    
    &:last-child {
      border-bottom: none; // Remove bottom border from the last list item
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h1 { 
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
    }
  }  
  
  @media (max-width: ${breakpoints.mobile}) {
    li {
      padding-left:2px;   
    }

    h1 { 
      font-size: 2rem;
    }

    ol, p {
      font-size: 1.5rem;
    }
  }
`;

export const StyledBuyButton = styled.button`
  position: absolute;
  bottom: -560px;
  left: 50%;
  transform: translateX(-10%); 
  padding: 10px 20px; 
  border-radius: 20px;
  border: none; 
  background-color: ${mainThemeColors.primaryButton}; 
  color: white; 
  font-size: 30px;
  font-weight: bold;
  cursor: pointer; 
  z-index: 10; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  transition: background-color 0.3s, transform 0.3s; 

  &:hover {
    background-color: #4359a1; // Slightly darken the button on hover
    transform: translateX(-10%) scale(1.05); // Slightly enlarge the button on hover
  }

  &:active {
    transform: translateX(-10%) scale(0.95); // Mimic a button press on active
  }

  @media (max-width: 600px) {
    font-size: 22px;
    bottom: -550px;
  }

  @media (max-width: 460px) {
    font-size: 15px;
    bottom: -465px;
  }
`;