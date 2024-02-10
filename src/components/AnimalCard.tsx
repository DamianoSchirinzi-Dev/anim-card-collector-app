import { Reset } from "../helpers/Reset";
import { Card, CardTitle, CardSide } from "../components/Card";
import {
  CardDetails,
  CardPicture,
  CardWrapper,
  StyledBuyButton,
} from "./StyledCard";
import { mainThemeColors } from "../helpers/colors";
import { AnimalCardProps } from "../helpers/types";
import { useRef } from "react";
import { gsap } from "gsap";

export const AnimalCard = (props: AnimalCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonOriginalColor = buttonRef.current?.style["backgroundColor"];

  const handleBuy = () => {
    // Simulate checking if the purchase can be made
    const canPurchase = props.cost <= props.userCoins;

    if (canPurchase) {
      // Proceed with the purchase animation and completion
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          x: -1000,
          opacity: 1,
          duration: 0.3,
          onComplete: () => {
            props.onBuyCard(props.id, props.cost, () => {});
          },
        });
      }
    } else {
      // If purchase cannot be made, directly call the failure handling
      handlePurchaseFail();
    }
  };

  const handlePurchaseFail = () => {
    console.log(buttonOriginalColor);

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { x: 0 },
        { x: 10, repeat: 5, yoyo: true, duration: 0.1 }
      );

      gsap.fromTo(
        buttonRef.current,
        { backgroundColor: "#ff0000"},
        { duration: 0.1 }
      );
      gsap.to(buttonRef.current, { backgroundColor: mainThemeColors.primaryButton, duration: 0.8, delay: 0.2 });
    }
  };

  return (
    <>
      <Reset />
      <CardWrapper ref={cardRef}>
        <Card
          isInShop={props.isInShop}
          colorLight={props.colorLight}
          colorDark={props.colorDark}
        >
          <CardSide side="front">
            <CardPicture src={props.imageUrl} />
            <CardTitle>{props.cardTitle}</CardTitle>
            <CardDetails>
              <h1>Creature Stats</h1>
              <ol>
                <li>
                  <strong>Speed:</strong> {props.speedStat} kmh
                </li>
                <li>
                  <strong>Weight:</strong> {props.weightStat} lbs
                </li>
                <li>
                  <strong>Agressiveness:</strong> {props.aggressivenessStat}
                </li>
                <li>
                  <strong>Intelligence:</strong> {props.intelligenceStat}
                </li>
                <li>
                  <strong>Weaponry:</strong> {props.weaponryStat}
                </li>
              </ol>
            </CardDetails>
          </CardSide>
          <CardSide side="back">
            {!props.isInShop ? (
              <CardDetails>
                <h1>Information</h1>
                <p>{props.information}</p>
              </CardDetails>
            ) : (
              <CardDetails>
                <h2>Please purchase the card to unlock information!</h2>
              </CardDetails>
            )}
          </CardSide>
          {props.isInShop && (
            <StyledBuyButton ref={buttonRef} onClick={handleBuy}>
              Buy Card
            </StyledBuyButton>
          )}
        </Card>
      </CardWrapper>
    </>
  );
};
