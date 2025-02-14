import { IsEmail, MinLength } from "class-validator"; // Ensure correct import

export class SignUpDto {
    
    @IsEmail()
    email: string;

    @MinLength(10) 
    password: string;

}