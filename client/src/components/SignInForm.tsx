import React, { useState } from 'react';
import BaseInput from './shared/BaseInput';
import Button from './shared/Button';
import { ISignInFields } from '../interfaces/forms';
import { signIn as initialValues } from '../models/forms';
import { login } from '../services/auth';
import { login as loginAction } from '../redux/reducers/user/actions';
import { useDispatch } from 'react-redux';

const SignInForm = () => {
  const [values, setValues] = useState<ISignInFields>(initialValues);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    console.log(values);

    // login
    login().then((data) => dispatch(loginAction(data)));
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(values).map((field) => (
        <BaseInput
          required
          label={field}
          key={field}
          type="password"
          handleChange={handleChange}
        />
      ))}
      <Button type="submit" onClick={login}>
        Submit
      </Button>
    </form>
  );
};

export default SignInForm;
