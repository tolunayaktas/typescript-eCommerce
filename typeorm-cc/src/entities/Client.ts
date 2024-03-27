import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToMany  } from "typeorm";
import { Person } from "./utils/Person";
import { Transaction } from "./Transaction";
import { Banker } from "./Banker";


@Entity('client')
export class Client extends Person{



    @Column({
        type:"numeric",
    })
    balance: number;

    @Column({
        name: "active",
        default:true,
        
    })
    isActive: boolean;

    @Column({
        type:"simple-json",
        nullable:true
    })
    additionalInfo :{
        age: number;
        hairColor: string;
    }

    @Column({
        type:"simple-array",
        default: []
    })
    familyMembers: string[];

    @OneToMany(
        () => Transaction,
        (transaction) => transaction.client
    )
    transactions: Transaction[];

    @ManyToMany((type) => Banker, 
    {
		cascade: true,
	})
	bankers: Banker[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}