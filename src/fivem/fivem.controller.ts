import { Controller } from '@nestjs/common';
import { FivemService } from './fivem.service';
import { Get, Inject, Param } from '@nestjs/common/decorators';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager';
import ServerTrackedDto from 'src/dto/serverTrackedDto';
import ServerCfxDto from 'src/dto/serverCfxDto';
import { fivemCfxResponse, fivemPlayersResponse, fivemResponse } from './fivem.schema';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

/*
CODE CacheKey
- FM : FiveM Track server by Address
- FMCFX : FiveM Track server by CFX Code
- FMP : FiveM Track Players
*/

@ApiTags('FiveM / RedM')
@Controller('fivem')
export class FivemController {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly service: FivemService
    ) { }

    @Get('/:address')
    @ApiOperation({
        summary: "Track a FiveM Server",
        description: "Return a JSON response with information about the server",
    })
    @ApiOkResponse({
        description: 'Server information',
        schema: fivemResponse
    })
    async trackServer(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`FM:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackServer(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`FM:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }

    @Get('/cfx/:code')
    @ApiOperation({
        summary: "Track a FiveM Server by his cfx code",
        description: "Return a JSON response with information about the server from FiveM's API",
    })
    @ApiOkResponse({
        description: 'Server information',
        schema: fivemCfxResponse
    })
    async trackServerByCfx(@Param() code: ServerCfxDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`FMCFX:${code.code}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackServerByCfx(code);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`FMCFX:${code.code}`, result, 5 * 60 * 1000);
        return result;
    }

    @Get('/players/:address')
    @ApiOperation({
        summary: "Track a FiveM Server's players",
        description: "Return a JSON response with information about the players currently on the server",
    })
    @ApiOkResponse({
        description: 'Players connected information',
        schema: fivemPlayersResponse
    })
    async trackPlayers(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`FMP:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackPlayers(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`FMP:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }
}
