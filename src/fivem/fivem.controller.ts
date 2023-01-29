import { Controller } from '@nestjs/common';
import { FivemService } from './fivem.service';
import { Get, Param } from '@nestjs/common/decorators';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import ServerTrackedDto from 'src/dto/serverTrackedDto';
import ServerCfxDto from 'src/dto/serverCfxDto';

@ApiTags('FiveM / RedM')
@Controller('fivem')
export class FivemController {
    constructor(private readonly service: FivemService) { }

    @Get('/:address')
    @ApiOperation({
        summary: "Track a FiveM Server",
        description: "Return a JSON response",
    })
    @ApiResponse({
        status: 200,
        schema: {
            example: {
                message: "Todo"
            }
        }
    })
    async trackServer(@Param() address: ServerTrackedDto): Promise<any> {
        return this.service.trackServer(address);
    }

    @Get('/cfx/:code')
    @ApiOperation({
        summary: "Track a FiveM Server by his cfx code",
        description: "Return a JSON response",
    })
    @ApiResponse({
        status: 200,
        schema: {
            example: {
                message: "Todo"
            }
        }
    })
    async trackServerByCfx(@Param() code: ServerCfxDto): Promise<any> {
        return this.service.trackServerByCfx(code);
    }

    @Get('/players/:address')
    @ApiOperation({
        summary: "Track a Source Server's players",
        description: "Return a JSON response",
    })
    @ApiResponse({
        status: 200,
        schema: {
            example: {
                message: "Todo"
            }
        }
    })
    async trackPlayers(@Param() address: ServerTrackedDto): Promise<any> {
        return this.service.trackPlayers(address);
    }
}
