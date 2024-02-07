import styled from "styled-components";
import { StyledButtonProps } from "../helpers/types";
import { paddingSizes, breakpoints, buttonFontSizes } from "../helpers/sizes";
import { mainThemeColors } from "../helpers/colors";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  background: linear-gradient(135deg, #6e8efb, #a777e3); // Gradient background
  color: ${mainThemeColors.mainFont}; // Text color
  
  font-size: 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; // Font family
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Subtle shadow for depth

  div {
    padding-right: 40px;
  }

  h1,
  h3 {
    margin: 0; // Remove default margins
    padding: 0.5em 0; // Vertical padding for rhythm
    transition: transform 0.3s ease; // Smooth transition for hover effect
  }

  h1:hover,
  h3:hover {
    transform: scale(1.05); // Slightly enlarge text on hover
  }

  @media (max-width: ${breakpoints.largeScreens}) {
    h1 {
      font-size: 20px;
    }

    h3 {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledControlsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-top: 120px;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 40px;

    gap: 40px;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ size }) => (size ? paddingSizes[size] : paddingSizes.medium)};
  border-radius: 20px;
  font-size: ${({ size }) => (size ? buttonFontSizes[size] : buttonFontSizes.medium)};
  font-weight: 600;
  color: #4a4a4a; // Ensures text color is white for better visibility on gradient background
  background-image: ${({ color }) => 
    color ? `linear-gradient(45deg, ${mainThemeColors[color]}, ${mainThemeColors.primaryButton})` 
          : `linear-gradient(120deg, yellow, ${mainThemeColors.secondaryButton})`};
  border: none; // Removes the default border
  cursor: pointer; // Changes cursor to pointer to indicate it's clickable
  outline: none; // Removes the outline to clean up focus state
  transition: background-position 0.5s, box-shadow 0.3s, transform 0.2s; // Smooth transitions for hover and click effects
  background-size: 200% 100%; // Extends the background for the hover effect
  background-position: right bottom; // Starts the gradient from the right bottom
  
  &:hover {
    background-position: left top; // Shifts the background position for a dynamic hover effect
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); // Adds shadow for depth
  }

  &:active {
    transform: scale(0.95); // Simulates a button press by scaling down
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); // Reduces shadow size for pressed effect
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 70px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 50px;
  }
`;