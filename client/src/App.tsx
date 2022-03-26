import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
const Auth = React.lazy(() => import('./layouts/Auth'));

// pages
const Home = React.lazy(() => import('./views/Home'));
// auth pages
const SignIn = React.lazy(() => import('./views/auth/SignIn'));

import { useSelector } from 'react-redux';
import { RootState } from './redux/reducers';

// show fallback component while component
// is getting fetched and painted
const SuspenseComponent = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Component />
    </Suspense>
  );
};

const App = () => {
  const user = useSelector((state: RootState) => state.user);

  console.log(user);
  return (
    <Routes>
      <Route path="/" element={SuspenseComponent(Home)} />
      <Route path="auth" element={SuspenseComponent(Auth)}>
        <Route path="sign-in" element={SuspenseComponent(SignIn)} />
      </Route>
    </Routes>
  );
};

export default App;
