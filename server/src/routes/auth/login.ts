import * as express from 'express';
import { loginUser } from '../../db/actions/user';
const { createToken } = require('../../utils/jwt');

const router = express.Router();

const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  // login the user in
  loginUser({ email, password })
    .then(async (userDoc) => {
      // remove password from response
      const { _id, firstName, lastName, displayName, email, role } =
        userDoc;
      const user = {
        _id,
        firstName,
        lastName,
        displayName,
        email,
        role,
      };
      // create access token for this user
      const accessToken = await createToken(user);

      // send email and token back (+ token in response headers)
      res
        .header('auth-token', accessToken)
        .json({ accessToken, user });
    })
    .catch((error) =>
      res.status(error.status).json({ message: error.message })
    );
};

router.post('/', login);

module.exports = router;
