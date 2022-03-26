import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Window from '../containers/Window';

const Background = styled.div`
  background-color: ${({ theme }) => theme.background.main};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const Auth = () => {
  return (
    <>
      <Background />
      <Window>
        <Outlet />
      </Window>
    </>
  );
};

export default Auth;
