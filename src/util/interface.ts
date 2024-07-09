export interface IIcon {
  height?: string;
  width?: string;
}

export interface ICard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface IHeader {
  title: string;
  description?: string;
}
