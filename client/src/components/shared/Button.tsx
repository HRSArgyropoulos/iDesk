import styled from 'styled-components';
import {
  IButtonProps,
  ISubmitButtonProps,
} from '../../interfaces/button';

const StyledButton = styled.button`
  font-family: ${({ theme }) =>
    `${theme.fontFamily.body}, ${theme.fontFamily.fallback}`};
  font-weight: 600;
  font-size: 0.9em;
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primary.contrastText};
  padding: 0.7rem 3rem;
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.primary.main : theme.secondary.main};
`;

const SubmitButton = styled.input.attrs<ISubmitButtonProps>(
  ({ text }) => ({
    type: 'submit',
    value: text,
  })
)<ISubmitButtonProps>`
  font-family: ${({ theme }) =>
    `${theme.fontFamily.body}, ${theme.fontFamily.fallback}`};
  font-weight: 600;
  font-size: 0.9em;
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primary.contrastText};
  padding: 0.7rem 3rem;
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.primary.main : theme.secondary.main};
`;

const Button = ({
  children,
  onClick,
  color = 'primary',
  type,
}: IButtonProps) => {
  if (type === 'submit') return <SubmitButton text="Submit" />;
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
