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
  const [isDeckOpen, setisDeckOpen] = useState<boolean>(false);
  const [isShopOpen, setisShopOpen] = useState<boolean>(false);
  const [userCardIds, setUserCardIds] = useState<number[]>([0, 2, 3]);
  const [userCoins, setUserCoins] = useState<number>(12);
  const [userDeck, setUserDeck] = useState<any[]>([]);
  const [shopDeck, setShopDeck] = useState<any[]>([]);

  useEffect(() => {
    console.log("useEffect!");
    populateUserDeck();
    populateShopDeck();
  }, [userCardIds]);

  //region Deck Handlers
  const populateUserDeck = () => {
    const filteredDeck = AnimalData.filter((animal) =>
      userCardIds.includes(animal.key)
    );

    setUserDeck(filteredDeck);
  };

  const populateShopDeck = () => {
    const filteredDeck = AnimalData.filter((animal) =>
      !userCardIds.includes(animal.key)
    );

    setShopDeck(filteredDeck);
  };

  const addCardId = (newId: number) => {
    if (userCardIds.includes(newId)) {
      return;
    }
    setUserCardIds((prevIds) => [...prevIds, newId]);

    console.log("Bought new card!");
  };
  //#endregion

  //#region HandleModals
  const handleDeckOpen = () => setisDeckOpen(true);
  const handleDeckClose = () => setisDeckOpen(false);

  const handleShopOpen = () => setisShopOpen(true);
  const handleShopClose = () => setisShopOpen(false);
  //#endregion

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
        <div className="topButtonMenu">
          <StyledButton
            size="medium"
            color="secondaryButton"
            onClick={handleDeckOpen}
          >
            Open Deck
          </StyledButton>
          <StyledButton
            size="medium"
            color="secondaryButton"
            onClick={handleShopOpen}
          >
            Buy Cards
          </StyledButton>
        </div>
        <StyledButton size="large" onClick={incrementCoins}>
          Get Coins
        </StyledButton>
      </StyledControlsSection>
      <Modal
        cards={userDeck}
        isShop={false}
        isOpen={isDeckOpen}
        onClose={handleDeckClose}
        onBuyCard={() => {console.log("null")}}
      />
      <Modal
        cards={shopDeck}
        isShop={true}
        isOpen={isShopOpen}
        onClose={handleShopClose}
        onBuyCard={addCardId}
      />
    </div>
  );
}

export default App;
