import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';


@Controller('authentication')
export class AuthenticationController {

    constructor(private authService: AuthenticationService) { }
    
    @Post('sign-up')
    signUp(@Body() SignUpDto: SignUpDto) {
        return this.authService.signUp(SignUpDto)
        
    }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    signIn(@Body() SignInDto: SignInDto) {
        return this.authService.signIn(SignInDto)
    }

}