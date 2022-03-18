import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: ${({ theme }) =>
    `${theme.fontFamily.body}, ${theme.fontFamily.fallback}`};
  font-size: 0.9em;
  cursor: pointer;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primary.contrastText};
  padding: 0.7rem 1.5rem;
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.primary.main : theme.secondary.main};
`;

/* interface IProps extends HTMLProps<HTMLButtonElement> {
  children: string;
} */

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: string;
}

const Button = ({ children, onClick, color = 'primary' }: IProps) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
