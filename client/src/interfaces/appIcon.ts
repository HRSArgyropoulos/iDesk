import { Size } from '../types/sizes';

export interface IIcon {
  src: string;
}

export interface IAppIconWrapper {
  size?: Size;
}

export interface IAppIconProps {
  size?: Size;
  title: string;
  src: string;
}
