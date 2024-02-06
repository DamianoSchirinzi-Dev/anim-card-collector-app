import { Reset } from "../helpers/Reset";
import {
  Card,
  CardTitle,  
  CardSide,
} from "../components/Card";
import {CardDetails, CardPicture, CardWrapper } from "./StyledCard";
import { AnimalCardProps } from "../helpers/types";

export const AnimalCard = (props: AnimalCardProps) => {
    return(
        <>
      <Reset />
      <CardWrapper>
        <Card colorLight={props.colorLight} colorDark={props.colorDark}>
          <CardSide side="front">
            <CardPicture src={props.imageUrl} />
            <CardTitle>{props.cardTitle}</CardTitle>
            <CardDetails>
              <h1>Creature Stats</h1>
              <ol>
                <li><strong>Speed:</strong> {props.speedStat} kmh</li>
                <li><strong>Weight:</strong> {props.weightStat} lbs</li>
                <li><strong>Agressiveness:</strong> {props.aggressivenessStat}</li>
                <li><strong>Intelligence:</strong> {props.intelligenceStat}</li>
                <li><strong>Weaponry:</strong> {props.weaponryStat}</li>
              </ol>
            </CardDetails>
          </CardSide>
          <CardSide side="back">
            <CardDetails>
              <h1>Information</h1>
              <p>{props.information}</p>
            </CardDetails>
          </CardSide>
        </Card>
      </CardWrapper>
    </>
    )
}