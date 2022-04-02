import { User } from '../models/user';

const loginUser = async ({ email, password }) => {
  // check if email exists
  const userDoc = await User.findOne({ email }).exec();
  if (!userDoc)
    throw {
      status: 401,
      message: 'Email or password is incorrect',
    };

  // check if user's email is verified
  if (!userDoc.verified) {
    throw {
      status: 401,
      message: 'Your email is not yet verified.',
    };
  }

  // check if user is approved
  if (!userDoc.approved) {
    throw {
      status: 401,
      message:
        'You are not approved by the admin yet. Please try again later',
    };
  }

  // check if password does not match this user's email
  if (!(await userDoc.checkPassword(password)))
    throw {
      status: 401,
      message: 'Email or password is incorrect',
    };

  return userDoc;
};

export { loginUser };
