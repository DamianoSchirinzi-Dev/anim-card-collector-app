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
  const [userCoins, setUserCoins] = useState<number>(10);
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
    const filteredDeck = AnimalData.filter(
      (animal) => !userCardIds.includes(animal.key)
    ).slice(0, 5);

    setShopDeck(filteredDeck);
  };

  const addCardId = (newId: number, cost: number, onFail: () => void) => {
    console.log(userCoins);

    if (userCardIds.includes(newId) || cost > userCoins) {
      onFail();
      return;
    }

    decreaseCoins(cost);
    setUserCardIds((prevIds) => [...prevIds, newId]);
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

  const decreaseCoins = (amount: number) => {
    if (userCoins <= 0) return;

    const newCoins = userCoins - amount;
    setUserCoins(newCoins);
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
        userCoins={userCoins}
        onClose={handleDeckClose}
        onBuyCard={() => {
          console.log("null");
        }}
      />
      <Modal
        cards={shopDeck}
        isShop={true}
        isOpen={isShopOpen}
        userCoins={userCoins}
        onClose={handleShopClose}
        onBuyCard={addCardId}
      />
    </div>
  );
}

export default App;
