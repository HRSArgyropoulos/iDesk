import styled from 'styled-components';
import {
  IAppIconProps,
  IAppIconWrapper,
  IIcon,
} from '../../interfaces/appIcon';
import Text from './Text';

const AppIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const AppIconWrapper = styled.div<IAppIconWrapper>`
  width: ${({ size }) =>
    size === 'small' ? '35px' : size === 'medium' ? '50px' : '75px'};
  height: ${({ size }) =>
    size === 'small' ? '35px' : size === 'medium' ? '50px' : '75px'};
  border: 1px solid black;
  padding: 10%;
  border-radius: 15px;
`;

const Icon = styled.img.attrs(({ src }: IIcon) => {
  src;
})`
  width: 100%;
`;

const AppIcon = ({ size = 'small', title, src }: IAppIconProps) => {
  return (
    <AppIconContainer>
      <AppIconWrapper size={size}>
        <Icon src={src} />
      </AppIconWrapper>
      <Text>{title}</Text>
    </AppIconContainer>
  );
};

export default AppIcon;
