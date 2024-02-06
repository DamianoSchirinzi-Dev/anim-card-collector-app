import { AnimalCard } from "../components/AnimalCard";
import {ModalBackdrop, ModalContent, GridContainer} from "./StyledModal";
import {ModalProps, AnimalCardProps } from "../helpers/types";
import { colors } from "..//helpers/colors";
import {useRef} from 'react';

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
