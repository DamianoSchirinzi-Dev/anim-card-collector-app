import styled from "styled-components";
import { StyledButtonProps } from "../helpers/types";
import { paddingSizes } from "../helpers/sizes";
import { buttonColors } from "../helpers/colors";

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ size }) => (size ? paddingSizes[size] : paddingSizes.medium)};
  border-radius: 20px;
  font-size: 20px;
  background-color: ${({ color }) => (color ? buttonColors[color] : buttonColors.primary)};
`;

export const StyledControlsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-top: 120px;
`;