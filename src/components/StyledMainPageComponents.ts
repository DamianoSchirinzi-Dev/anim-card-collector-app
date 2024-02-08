import styled, { keyframes } from "styled-components";
import { StyledButtonProps } from "../helpers/types";
import {
  paddingSizes,
  breakpoints,
  buttonFontSizes,
  mobileButtonFontSizes,
} from "../helpers/sizes";
import { mainThemeColors } from "../helpers/colors";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(102, 51, 153, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 10px rgba(102, 51, 153, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(102, 51, 153, 0);
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: linear-gradient(135deg, #6e8efb, #a777e3); // Gradient background
  color: ${mainThemeColors.mainFont}; // Text color

  font-size: 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; // Font family
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Subtle shadow for depth

  @media (max-width: ${breakpoints.largeScreens}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 1.3rem;

    gap: 100px;
  }

  @media (max-width: ${breakpoints.largeScreens}) {
    gap: 40px;
  }
`;

export const CounterCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-image: linear-gradient(
    90deg,
    #5b7ffc,
    #cfa8ff
  ); // Blue to lilac gradient
  color: #333;
  font-size: 22px;
  font-weight: 700;
  border: 3px solid #324dab;
  cursor: pointer;
  transition: transform 0.3s ease;

  // Apply the pulse animation
  animation: ${pulseAnimation} 2s infinite;

  &:hover {
    transform: scale(1.1); // Slightly enlarge on hover
    box-shadow: 0 0 20px rgba(91, 127, 252, 0.5); // Add a glow effect on hover
  }

  &:active {
    transform: scale(0.9); // Shrink on click
    box-shadow: 0 0 15px rgba(91, 127, 252, 0.7); // Add a stronger glow effect on click
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80px;
    height: 80px;
    padding: 16px;
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

  @media (max-width: ${breakpoints.tablet}) {
    gap: 30px;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ size }) => (size ? paddingSizes[size] : paddingSizes.medium)};
  border-radius: 20px;
  font-size: ${({ size }) =>
    size ? buttonFontSizes[size] : buttonFontSizes.medium};
  font-weight: 600;
  color: #4a4a4a; // Ensures text color is white for better visibility on gradient background
  background-image: ${({ color }) =>
    color
      ? `linear-gradient(45deg, ${mainThemeColors[color]}, ${mainThemeColors.primaryButton})`
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
    font-size: ${({ size }) =>
      size ? mobileButtonFontSizes[size] : mobileButtonFontSizes.medium};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 50px;
  }
`;
