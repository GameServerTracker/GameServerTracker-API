import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Default')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: "Ping the API",
  })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        message: 'GameServerTracker API is OK !'
      }
    }
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
