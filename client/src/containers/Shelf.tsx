import styled from 'styled-components';
import { IShelf } from '../interfaces/shelf';

const ShelfContainer = styled.div`
  max-width: 100%;
  margin: 1rem 0.5rem;
  padding: 0.5rem 2rem;
  background: ${({ theme }) => theme.background.transparent};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  column-gap: 2px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Shelf = ({ children }: IShelf) => {
  return <ShelfContainer>{children}</ShelfContainer>;
};

export default Shelf;
