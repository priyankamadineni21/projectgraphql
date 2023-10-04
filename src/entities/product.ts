import { BaseEntity,Column,CreateDateColumn,Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column({
        type:'decimal'
    })
    price!:string

    @Column({nullable: true})
    discountPerc:string

    @ManyToOne(() => User,(user)=> user.product)
    creator: User

    @CreateDateColumn()
    createdAt:Date
    
    @UpdateDateColumn()
    updatedAt:Date

    @Column()
    dummy: string
}