import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { IBaseInputProps } from '../../interfaces/input';

const Input = styled.input.attrs(({ type }) => ({
  type,
}))<IBaseInputProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: 1.05em;
  padding: 0.8em 0.5em;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.error.main : theme.primary.main};
  transition: box-shadow 0.2s ease-in-out;
  &:focus {
    box-shadow: 0px 1px 4px
      ${({ error, theme }) =>
        error ? theme.error.main : theme.primary.main};
    outline: none;
  }
  &:focus ~ span,
  &:valid ~ span {
    top: -2px;
    left: 10px;
  }
`;

const InputLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 0.3em;
  transform: translateY(-50%);
  transition: top 0.1s ease-in-out;
  background-color: ${({ theme }) => theme.background.main};
  padding: 0 0.2em;
`;

const InputContainer = styled.div`
  margin: 1.5rem 0;
  position: relative;
`;

const BaseInput = (props: IBaseInputProps) => {
  const { label, handleChange } = props;

  return (
    <InputContainer>
      <Input {...props} onChange={(e) => handleChange(e, label)} />
      <InputLabel>
        <Text variant="span">{label}</Text>
      </InputLabel>
    </InputContainer>
  );
};

export default BaseInput;
