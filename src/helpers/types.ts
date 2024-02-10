//#region Card
export type CardPictureProps = {
  src: string;
  theme: {
    colorLight: string;
    colorDark: string;
  };
};

export type CardContainerProps = {
  isInShop: boolean;
};

export type CardProps = {
  isInShop: boolean;
  colorLight: any;
  colorDark: any;
  children: any;
};

export type AnimalCardProps = {
  userCoins: number;
  key: number;
  id: number;
  cost: number;
  isInShop: boolean;
  onBuyCard: (id: number, cost: number, onBuyCardFail: () => void) => void;
  onBuyCardFail: () => void;
  imageUrl: string;
  cardTitle: string;
  speedStat: number;
  weightStat: number;
  aggressivenessStat: number;
  intelligenceStat: number;
  weaponryStat: number;
  information: string;
  colorLight: string;
  colorDark: string;
};
//#endregion

//#region Modal
export type ModalProps = {
  cards: any;
  isShop: boolean;
  isOpen: boolean;
  userCoins: number;
  onClose: () => void;
  onBuyCard: (id: number, cost:number, onBuyCardFail: () => void) => void;
};
//#endregion

//#region Main Screen
export type StyledButtonProps = {
  size?: "small" | "medium" | "large";
  color?: "primaryButton" | "secondaryButton";
};
//#endregion
