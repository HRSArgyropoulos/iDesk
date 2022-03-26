import styled from 'styled-components';
import backgroundImage from '../images/light/main.jpg';
import { IDesktop } from '../interfaces/desktop';

const Background = styled.div`
  height: 100%;
`;

const BackgroundImage = styled.img.attrs({
  src: `${backgroundImage}`,
})`
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

const BackgroundContainer = styled.div`
  width: 100%;
`;

const Desktop = ({ children }: IDesktop) => {
  return (
    <Background>
      <BackgroundImage />
      <BackgroundContainer>{children}</BackgroundContainer>
    </Background>
  );
};

export default Desktop;
