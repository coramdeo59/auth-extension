import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
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
    async signIn(
        @Res({ passthrough: true }) response: Response, 
        @Body() signInDto: SignInDto 
    ) {
        const accessToken = await this.authService.signIn(signInDto);
        response.cookie('accessToken', accessToken, {
            secure: true,
            httpOnly: true,
            sameSite: 'lax',
        });
        return { message: 'Signed in successfully' }; 
    }

}