import { Router } from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';

const userRoutes = Router();

userRoutes.post('/', async (req, res) => {
  try {
    const repo = getRepository(Users);

    const user = await repo.save(req.body);

    return res.send(user);
  } catch (err) {
    console.log(err)
    return res.status(401).json({ error: err.message })
  }
})

userRoutes.get('/', async (req, res) => {
  const repo = getRepository(Users);

  const user = await repo.find();

  return res.json(user);
})

export default userRoutes;