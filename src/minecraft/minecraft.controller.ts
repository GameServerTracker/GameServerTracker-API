import { Controller } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { MinecraftService } from './minecraft.service';
import { Get, Param } from '@nestjs/common/decorators';
import ServerTrackedDto from 'src/dto/serverTrackedDto';

@ApiTags('Minecraft')
@Controller('minecraft')
export class MinecraftController {
    constructor(private readonly service: MinecraftService) { }

    @Get('/:address')
    @ApiOperation({
        summary: "Track a Minecraft Server Java Edition",
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
