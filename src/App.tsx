import Button from './components/shared/Button';

import useTheme from './hooks/useTheme';

const App = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <Button onClick={() => toggleTheme('dark')}>
        Change to dark
      </Button>
      <Button onClick={() => toggleTheme('light')}>
        Change to light
      </Button>
    </>
  );
};

export default App;
