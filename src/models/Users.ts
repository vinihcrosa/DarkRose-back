import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Stores from "./Store";

@Entity()
export default class Users {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        unique: true
    })
    user_name: string

    @Column({ unique: true })
    user_email: string

    @Column()
    user_password: string

    @OneToMany(type => Users, user => Users, { eager: true })

    stores: Stores[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
