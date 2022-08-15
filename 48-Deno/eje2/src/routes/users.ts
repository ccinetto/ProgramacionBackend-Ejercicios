import { Router } from '../../deps.ts';
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
  findAllUsers,
} from '../handlers/index.ts';

const router = new Router().prefix('/users')

router.get('/', findAllUsers)
router.get('/:id', findUser)
router.delete('/:userId', deleteUser)
router.patch('/', updateUser)
router.post('/', createUser);


export default router.routes();