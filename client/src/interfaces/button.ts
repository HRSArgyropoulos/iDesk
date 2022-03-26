export interface IButtonProps {
  color?: string;
  type?: 'submit';
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ISubmitButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
