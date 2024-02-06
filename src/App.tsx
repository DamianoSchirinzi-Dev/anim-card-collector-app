import "./App.css";
import { Modal } from "./components/Modal";
import { useState } from "react";
import {
  StyledControlsSection,
  StyledButton,
  StyledNav
} from "./components/StyledMainPageComponents";

const AnimalData = [
  {
    key: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Giant Panda",
    speedStat: 23,
    weightStat: 400,
    aggressivenessStat: 87,
    intelligenceStat: 65,
    weaponryStat: 82,
    information:
      "The panda, also known as the giant panda, is a bear species primarily recognized for its distinctive black and white coloring. Originating from central China, pandas inhabit mountainous regions like Sichuan and Tibet. They have a diet mainly consisting of bamboo, although they can eat other foods such as honey, eggs, fish, yams, and shrub leaves, due to their classification as omnivores.",
  },
  {
    key: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Giant Panda",
    speedStat: 23,
    weightStat: 400,
    aggressivenessStat: 87,
    intelligenceStat: 65,
    weaponryStat: 82,
    information:
      "The panda, also known as the giant panda, is a bear species primarily recognized for its distinctive black and white coloring. Originating from central China, pandas inhabit mountainous regions like Sichuan and Tibet. They have a diet mainly consisting of bamboo, although they can eat other foods such as honey, eggs, fish, yams, and shrub leaves, due to their classification as omnivores.",
  },
  {
    key: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Giant Panda",
    speedStat: 23,
    weightStat: 400,
    aggressivenessStat: 87,
    intelligenceStat: 65,
    weaponryStat: 82,
    information:
      "The panda, also known as the giant panda, is a bear species primarily recognized for its distinctive black and white coloring. Originating from central China, pandas inhabit mountainous regions like Sichuan and Tibet. They have a diet mainly consisting of bamboo, although they can eat other foods such as honey, eggs, fish, yams, and shrub leaves, due to their classification as omnivores.",
  },
  {
    key: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Giant Panda",
    speedStat: 23,
    weightStat: 400,
    aggressivenessStat: 87,
    intelligenceStat: 65,
    weaponryStat: 82,
    information:
      "The panda, also known as the giant panda, is a bear species primarily recognized for its distinctive black and white coloring. Originating from central China, pandas inhabit mountainous regions like Sichuan and Tibet. They have a diet mainly consisting of bamboo, although they can eat other foods such as honey, eggs, fish, yams, and shrub leaves, due to their classification as omnivores.",
  },
  {
    key: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Giant Panda",
    speedStat: 23,
    weightStat: 400,
    aggressivenessStat: 87,
    intelligenceStat: 65,
    weaponryStat: 82,
    information:
      "The panda, also known as the giant panda, is a bear species primarily recognized for its distinctive black and white coloring. Originating from central China, pandas inhabit mountainous regions like Sichuan and Tibet. They have a diet mainly consisting of bamboo, although they can eat other foods such as honey, eggs, fish, yams, and shrub leaves, due to their classification as omnivores.",
  },
  {
    key: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Giant Panda",
    speedStat: 23,
    weightStat: 400,
    aggressivenessStat: 87,
    intelligenceStat: 65,
    weaponryStat: 82,
    information:
      "The panda, also known as the giant panda, is a bear species primarily recognized for its distinctive black and white coloring. Originating from central China, pandas inhabit mountainous regions like Sichuan and Tibet. They have a diet mainly consisting of bamboo, although they can eat other foods such as honey, eggs, fish, yams, and shrub leaves, due to their classification as omnivores.",
  },
  {
    key: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Giant Panda",
    speedStat: 23,
    weightStat: 400,
    aggressivenessStat: 87,
    intelligenceStat: 65,
    weaponryStat: 82,
    information:
      "The panda, also known as the giant panda, is a bear species primarily recognized for its distinctive black and white coloring. Originating from central China, pandas inhabit mountainous regions like Sichuan and Tibet. They have a diet mainly consisting of bamboo, although they can eat other foods such as honey, eggs, fish, yams, and shrub leaves, due to their classification as omnivores.",
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCoins, setUserCoins] = useState(12);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
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
        <StyledButton size="medium" color="primaryButton" onClick={handleOpen}>
          Open Deck
        </StyledButton>
        <StyledButton size="large" color="secondaryButton" onClick={handleOpen}>
          Get Coins
        </StyledButton>
        <StyledButton size="medium" color="primaryButton" onClick={handleOpen}>
          Open Shop
        </StyledButton>
      </StyledControlsSection>
      <Modal cards={AnimalData} isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}

export default App;
