import { Controller } from '@nestjs/common';
import { FivemService } from './fivem.service';
import { Get, Param } from '@nestjs/common/decorators';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import ServerTrackedDto from 'src/dto/serverTrackedDto';

@ApiTags('FiveM')
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
}
