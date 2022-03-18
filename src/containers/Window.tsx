import styled from 'styled-components';

const WindowOuter = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 25px;
  height: auto;
  max-height: 80vh;
  background-color: ${({ theme }) => theme.background.transparent};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow-y: scroll;
`;

interface IWindowProps {
  children: React.ReactNode;
}

const Window = ({ children }: IWindowProps) => {
  return <WindowOuter>{children}</WindowOuter>;
};

export default Window;
