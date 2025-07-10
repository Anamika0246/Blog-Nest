import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ unique : true})
    content: string;

    @Column()
    userId: number;
}

