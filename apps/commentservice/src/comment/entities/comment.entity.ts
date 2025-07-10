import { IsNotEmpty } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @IsNotEmpty()
    postId: number;

}

