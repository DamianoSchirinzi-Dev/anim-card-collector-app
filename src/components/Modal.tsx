import { AnimalCard } from "../components/AnimalCard";
import {
  ModalBackdrop,
  ModalContent,
  GridContainer,
  CloseSymbol,
} from "./StyledModal";
import { ModalProps, AnimalCardProps } from "../helpers/types";
import { colors } from "..//helpers/colors";
import { useRef, useEffect } from "react";
import {gsap} from 'gsap';

export const Modal = ({ cards, isShop, onBuyCard, isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Reset styles in case they were modified by closing animation
      gsap.set(modalRef.current, {
        x: 0,
        opacity: 1,
      });

      // Animate modal from a starting state when it opens
      gsap.from(modalRef.current, {
        x: -1000,
        opacity: 0,
        duration: 0.4,
      });
    }
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      gsap.to(modalRef.current, {
        x: -1000,
        opacity: 0,
        duration: .2,
        onComplete: onClose, // Call onClose after the animation completes
      });
    }
  };

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={handleClose}>
      <CloseSymbol>x</CloseSymbol>
      <ModalContent ref={modalRef}>
        {!isShop ? (
          <h1 className="DeckHeader">Your Deck</h1>
        ) : (
          <h1 className="DeckHeader">Shop</h1>
        )}
        <GridContainer>
          {cards.map((data: AnimalCardProps) => (
            <AnimalCard
              key={data.key}
              id={data.id}
              cost={data.cost}
              isInShop={isShop}
              onBuyCard={onBuyCard}
              imageUrl={data.imageUrl}
              cardTitle={data.cardTitle}
              speedStat={data.speedStat}
              weightStat={data.weightStat}
              aggressivenessStat={data.aggressivenessStat}
              intelligenceStat={data.intelligenceStat}
              weaponryStat={data.weaponryStat}
              information={data.information}
              colorLight={colors.black}
              colorDark={colors.black}
            />
          ))}
        </GridContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};
