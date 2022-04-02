import { Router } from 'express';

const router = Router();
const auth = require('./auth');

router.use('/auth', auth);

router.get('/', (_, res) => {
  res.send('iDesk auth services');
});

export default router;
