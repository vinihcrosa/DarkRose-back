import { json } from 'body-parser';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Users from './Users';

@Entity('stores')
export default class Stores {
    @PrimaryGeneratedColumn('increment')
    store_id: number

    @Column()
    store_name: string

    @ManyToOne(type => Users, stores => Stores)
    user: Users

    @Column({ type: 'json' })
    store_settings: { primaryColor: string }
}