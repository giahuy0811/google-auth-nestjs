/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from "class-validator";

export class TokenVerificationDto {
  @IsString()
  @IsNotEmpty()
  token: string
}