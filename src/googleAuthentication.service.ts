/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

import { Auth, google } from 'googleapis'

@Injectable()
export class GoogleAuthenticationService {
  oauthClient: Auth.OAuth2Client;
  constructor(
  ) {
    const clientID = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_SECRET
    this.oauthClient = new google.auth.OAuth2(clientID, clientSecret)
  }
  async authenticate(token: string) {
    const tokenInfo = await this.oauthClient.getTokenInfo(token)
    console.log("tokenInfo", tokenInfo)
    const email = tokenInfo.email
    const userData = await this.getUserData(token)
    console.log("userData", userData)
    return tokenInfo
  }

  async getUserData(token: string) {
    const userInfoClient = google.oauth2('v2').userinfo

    this.oauthClient.setCredentials({
      access_token: token
    })

    const userInfoRes = await userInfoClient.get({
      auth: this.oauthClient
    })

    return userInfoRes.data
  }
}