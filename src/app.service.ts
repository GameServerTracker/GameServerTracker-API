import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: "GameServerTracker API is OK ! Please look the swagger on /api-docs"
    };
  }
}
