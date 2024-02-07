import styled from "styled-components";
import { breakpoints } from "../helpers/sizes";
import { mainThemeColors } from "../helpers/colors";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 5px;
  height: 90%;
  width: 90%;
  overflow-y: auto; 
  padding-top: 25px;
  padding-bottom: 60px;
  
  color: ${mainThemeColors.mainFont};

  .DeckHeader {
    text-align: center;
    font-size: 5.5rem;
  }

  @media (max-width: ${breakpoints.largeScreens}) {
    padding-bottom: 200px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
    padding-bottom: 220px;

    .DeckHeader {
      text-align: center;
      font-size: 4.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-bottom: 270px;

    .DeckHeader {
      font-size: 3.5rem;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  row-gap: 60px;
  padding: 40px;
  justify-items: center;
  align-items: center;

  @media (max-width: ${breakpoints.xLargeScreens}) {
    grid-template-columns: repeat(2, 1fr); 
    row-gap: 50px;
    padding: 60px;
  }

  @media (max-width: ${breakpoints.largeScreens}) {
    grid-template-columns: repeat(1, 1fr); 
    row-gap: 220px;
    padding: 30px;
  }
`;