import { BaseEntity,Column,CreateDateColumn,Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product";
@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    username!:string

    @Column()
    password!:string

    @Column()
    email!:string
    
    @OneToMany(() => Product,(product) => product.creator)
    product:Product[];

    @CreateDateColumn()
    createdAt:Date
    
    @UpdateDateColumn()
    updatedAt:Date
}