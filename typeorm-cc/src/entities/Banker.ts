import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";



@Entity('banker')
export class Banker extends Person{

    @PrimaryColumn()
    id: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column({
        unique:true
    })
    email: string;

    @Column({
        unique:true,
        length:10
    })
    cardNumber: string;

    @Column({
        unique:true,
        length:10
    })
    employeeNumber: string

    @ManyToMany(
        () => Client,
        {
            cascade: false
        }
    )
    @JoinTable({
        name: "bankerClients",
        joinColumn: {
            name: "banker",
            referencedColumnName: 'id'
        },
        inverseJoinColumn:{
            name: "client",
            referencedColumnName: "id"
        }
    })
    clients: Client[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}