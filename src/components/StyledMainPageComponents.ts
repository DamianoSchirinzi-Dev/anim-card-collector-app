import styled from "styled-components";
import { StyledButtonProps } from "../helpers/types";
import { paddingSizes, breakpoints } from "../helpers/sizes";
import { mainThemeColors } from "../helpers/colors";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  background: linear-gradient(135deg, #6e8efb, #a777e3); // Gradient background
  color: white; // Text color

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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      font-size: 20px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

export const StyledControlsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-top: 120px;

  @media (max-width: ${breakpoints.tablet}) {
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
  font-size: 20px;
  background-color: ${({ color }) => (color ? mainThemeColors[color] : mainThemeColors.primaryButton)};
`;
