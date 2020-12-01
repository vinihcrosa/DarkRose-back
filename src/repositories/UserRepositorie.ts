import { EntityRepository, Repository } from 'typeorm';
import Users from '../models/Users';

@EntityRepository(Users)
export default class UserRepositorie extends Repository<Users> {

}