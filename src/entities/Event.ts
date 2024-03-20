import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string

    @Column()
    price!: number

    @Column()
    imgUrl!: string
}