/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './gg.strategy';
import { GoogleAuthenticationController } from './googleAuthentication.controller';
import { GoogleAuthenticationService } from './googleAuthentication.service';

@Module({
  imports: [],
  controllers: [AppController, GoogleAuthenticationController],
  providers: [AppService, GoogleStrategy, GoogleAuthenticationService],

})
export class AppModule { }
