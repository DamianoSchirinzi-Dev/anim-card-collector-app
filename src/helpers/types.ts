
//#region Card
export type CardPictureProps = {
  src: string;
  theme: {
    colorLight: string;
    colorDark: string;
  };
};

export type CardProps = {
  colorLight: any;
  colorDark: any;
  children: any;
};

export type AnimalCardProps = {
  key: number;
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
  isOpen: boolean;
  onClose: () => void;
};
//#endregion

//#region Main Screen
export type StyledButtonProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
}
//#endregion