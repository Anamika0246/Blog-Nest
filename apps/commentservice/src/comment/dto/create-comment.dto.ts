import { IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "class-transformer";


export class CreateCommentDto {
    @IsNotEmpty()
    text: string;

    @IsNumber()
    @Type(()=> Number)
    postId: number;
}
