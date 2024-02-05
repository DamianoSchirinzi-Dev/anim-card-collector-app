import styled from "styled-components";
import { AnimalCard, AnimalCardProps } from "../components/AnimalCard";
import { colors } from "..//helpers/colors";
import {useRef} from 'react';

const ModalBackdrop = styled.div`
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

const ModalContent = styled.div`
  background: white;
  border-radius: 5px;
  height: 90%;
  width: 90%;
  overflow-y: auto; /* Makes the modal content scrollable */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  row-gap: 60px;
  padding: 50px; // Padding around the grid
`;

type ModalProps = {
  cards: any;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ cards, isOpen, onClose }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={handleClose}>
      <ModalContent ref={modalRef}>
        <GridContainer>
          {cards.map((data: AnimalCardProps) => (
            <AnimalCard
              key={data.key}
              imageUrl={data.imageUrl}
              cardTitle={data.cardTitle}
              speedStat={data.speedStat}
              weightStat={data.weightStat}
              aggressivenessStat={data.aggressivenessStat}
              intelligenceStat={data.intelligenceStat}
              weaponryStat={data.weaponryStat}
              information={data.information}
              colorLight={colors.tertiaryDark}
              colorDark={colors.greyDark3}
            />
          ))}
        </GridContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};
