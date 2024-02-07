import "./App.css";
import { AnimalData } from "./helpers/FakeData";
import { Modal } from "./components/Modal";
import { useState } from "react";
import {
  StyledControlsSection,
  StyledButton,
  StyledNav,
} from "./components/StyledMainPageComponents";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCoins, setUserCoins] = useState(12);

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
    setUserCoins(userCoins + 1);
  };

  return (
    <div className="mainContainer">
      <StyledNav>
        <h1>Animal Card Collector</h1>
        <div>
          <h3>🤑 User Coins: {userCoins}</h3>
        </div>
      </StyledNav>
      <StyledControlsSection>
        <StyledButton size="medium" color="secondaryButton" onClick={handleOpen}>
          Open Deck
        </StyledButton>
        <StyledButton
          size="large"
          onClick={incrementCoins}
        >
          Get Coins
        </StyledButton>
        <StyledButton size="medium" color="secondaryButton" onClick={handleOpen}>
          Open Shop
        </StyledButton>
      </StyledControlsSection>
      <Modal cards={AnimalData} isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}

export default App;
