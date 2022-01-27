/* eslint-disable prettier/prettier */
import { Body, ClassSerializerInterceptor, Controller, Post, Req, UseInterceptors } from "@nestjs/common";
import { TokenVerificationDto } from "./tokenVerificationDto";

import { Request } from 'express'
import { GoogleAuthenticationService } from "./googleAuthentication.service";

@Controller('google-authentication')
@UseInterceptors(ClassSerializerInterceptor)

export class GoogleAuthenticationController {
  constructor(
    private readonly googleAuthenticationService: GoogleAuthenticationService
  ) { }

  @Post()
  async authenticate(@Body() tokenData: TokenVerificationDto, @Req() req: Request) {
    const result = await this.googleAuthenticationService.authenticate(tokenData.token)

    console.log("result", result)
    // req.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie])
    return result
  }
}