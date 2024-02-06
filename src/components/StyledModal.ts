import styled from "styled-components";
import { breakpoints } from "../helpers/sizes";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
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
  overflow-y: auto; /* Makes the modal content scrollable */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  row-gap: 60px;
  padding: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); 
    row-gap: 30px;
    padding: 60px;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr); 
    row-gap: 30px;
    padding: 60px;
  }
`;