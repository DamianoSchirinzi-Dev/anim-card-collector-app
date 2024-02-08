import "./App.css";
import { AnimalData } from "./helpers/FakeData";
import { Modal } from "./components/Modal";
import { CoinCounter } from "./components/CoinCounter";
import { useState, useEffect } from "react";
import {
  StyledControlsSection,
  StyledButton,
  StyledNav,
} from "./components/StyledMainPageComponents";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userCardIds, setUserCardIds] = useState<number[]>([0, 2, 3]);
  const [userDeck, setUserDeck] = useState<any[]>([]);
  const [userCoins, setUserCoins] = useState<number>(12);

  useEffect(() => {
    console.log("useEffect!");
    populateUserDeck();
  }, [userCardIds]);

  const populateUserDeck = () => {
    const filteredDeck = AnimalData.filter((animal) =>
      userCardIds.includes(animal.key)
    );

    setUserDeck(filteredDeck);
  };

  const addCardId = (newId: number) => {
    if (userCardIds.includes(newId)) {
      return;
    }
    setUserCardIds((prevIds) => [...prevIds, newId]);

    console.log(userCardIds);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
  };

  const handleClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };

  const incrementCoins = () => {
    if (userCoins >= 100) return;

    setUserCoins(userCoins + 1);
  };

  return (
    <div className="mainContainer">
      <StyledNav>
        <img src="../images/CREATURE.png" width={150} height={150}></img>
        <CoinCounter current={userCoins} max={100} />
      </StyledNav>
      <StyledControlsSection>
        <StyledButton
          size="medium"
          color="secondaryButton"
          onClick={handleOpen}
        >
          Open Deck
        </StyledButton>
        <StyledButton size="large" onClick={incrementCoins}>
          Get Coins
        </StyledButton>
        <StyledButton
          size="medium"
          color="secondaryButton"
          onClick={() => {
            addCardId(7);
          }}
        >
          Temp Buy Button
        </StyledButton>
      </StyledControlsSection>
      <Modal cards={userDeck} isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}

export default App;
