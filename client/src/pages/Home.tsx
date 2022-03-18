import Desktop from '../containers/Desktop';
import Shelf from '../containers/Shelf';
import AppIcon from '../components/shared/AppIcon';
import MailIcon from '../icons/mail.svg';
import OuterWindow from '../containers/Window';
import Text from '../components/shared/Text';

const Home = () => {
  return (
    <Desktop>
      <OuterWindow>
        <Text variant="h2">Find my phone</Text>
      </OuterWindow>
      <Shelf>
        {Array.from(Array(5)).map((_, index) => (
          <AppIcon
            size="large"
            title="Mail"
            src={MailIcon}
            key={index}
          />
        ))}
      </Shelf>
    </Desktop>
  );
};

export default Home;
