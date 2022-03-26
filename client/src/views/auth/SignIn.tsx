import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../../components/shared/Text';
import SignInForm from '../../components/SignInForm';

const SignIn = () => {
  return (
    <Wrapper>
      <InformationWrapper>
        <SignInHeader variant="h1">Sign in</SignInHeader>
      </InformationWrapper>
      <SignInWrapper>
        <Text variant="h3">
          Enter your credentials below to sign in to your iDesk
          account
        </Text>
        <SignInForm />
        <ReferToRegisterWrapper>
          <Text variant="span">
            You do not have an account yet? You can register
          </Text>{' '}
          <Link to={'/auth/register'}>here</Link>.
        </ReferToRegisterWrapper>
      </SignInWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
`;

const InformationWrapper = styled.div`
  background-color: #e1e5f2;
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignInWrapper = styled.div`
  background-color: ${({ theme }) => theme.background.main};
  flex: 2;
  display: flex;
  height: 100%;
  padding: 100px 1rem;
  flex-direction: column;
`;

const SignInHeader = styled(Text)`
  margin-left: 25px;
`;

const ReferToRegisterWrapper = styled.div``;

export default SignIn;
