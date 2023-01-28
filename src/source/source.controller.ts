import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { SourceService } from './source.service';
import ServerTrackedDto from 'src/dto/serverTrackedDto';

@ApiTags('Source')
@Controller('source')
export class SourceController {
    constructor(private readonly service: SourceService) { }

    @Get('/:address')
    @ApiOperation({
        summary: "Track a Source Server",
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
