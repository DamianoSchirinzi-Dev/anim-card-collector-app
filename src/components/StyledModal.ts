import styled from "styled-components";
import { breakpoints } from "../helpers/sizes";
import { mainThemeColors } from "../helpers/colors";

export const CloseSymbol = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 25px;
  cursor: pointer;
  pointer-events: none; /* Ignores mouse events */
  font-size: 60px;
  z-index: 10012; /* Ensure it's above ModalBackdrop but below ModalContent */
  color: white;

  @media (max-width: ${breakpoints.xLargeScreens}) {
    padding-right: 16px;
  }

  @media (max-width: ${breakpoints.largeScreens}) {
    font-size: 50px;

  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 10px;
  }

  @media (max-width: ${breakpoints.largeScreens}) {
    padding-right: 14px;
  }  
`;

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
  padding-top: 30px;
  padding-bottom: 60px;
  
  color: ${mainThemeColors.mainFont};

  .DeckHeader {
    text-align: center;
    font-size: 5.8rem;
  }

  @media (max-width: ${breakpoints.largeScreens}) {
    padding-bottom: 200px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 75%;
    padding-bottom: 220px;

    .DeckHeader {
      font-size: 4.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-bottom: 220px;

    .DeckHeader {
      font-size: 4rem;
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