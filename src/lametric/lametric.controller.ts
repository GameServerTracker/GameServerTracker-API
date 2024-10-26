import { Controller, Get, Query, UseFilters } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LametricService } from './lametric.service';
import LametricServerCheckedDto from './dto/lametricServerCheckedDto';
import LametricFrameDto from './dto/lametricFrameDto';
import LametricRequestIncompleteFilter from './filter/lametricRequestIncomplete.filter';

@ApiTags('Lametric')
@Controller('lametric')
export class LametricController {
  constructor(private readonly lametricService: LametricService) {}

  @Get()
  @ApiOperation({
    summary: 'Get number of player connected',
    description:
      'Return a JSON response which should be read by the lametric clock with :\n- The name of your server\n- The icon of game server\n- The number of player connected.',
  })
  @ApiResponse({
    status: 200,
    description: 'Response if the server is found and online',
    schema: {
      example: {
        frames: [
          {
            text: 'Hypixel',
            icon: '7285',
          },
          {
            text: '47944 / 200000',
            icon: '7285',
          },
        ],
      },
    },
  })
  @UseFilters(LametricRequestIncompleteFilter)
  async trackServer(
    @Query() serverChecked: LametricServerCheckedDto,
  ): Promise<LametricFrameDto> {
    return await this.lametricService.trackServer(serverChecked);
  }
}
