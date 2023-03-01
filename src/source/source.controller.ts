import { CACHE_MANAGER, Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { SourceService } from './source.service';
import ServerTrackedDto from 'src/dto/serverTrackedDto';
import { Cache } from 'cache-manager';
import { sourcePlayersResponse, sourceResponse, sourceRulesResponse } from './source.schema';

/*
CODE CacheKey
- SO : Source Track Source server
- SOP : Source Track Source server players
- SOR : Source Track Source server rules
*/

@ApiTags('Source (Half-Life, Counter-Strike, GMod)')
@Controller('source')
export class SourceController {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly service: SourceService
    ) { }

    @Get('/:address')
    @ApiOperation({
        summary: "Track a Source Server",
        description: "Return a JSON response with information about the server",
    })
    @ApiOkResponse({
        description: 'Server information',
        schema: sourceResponse
    })
    async trackServer(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`SO:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackServer(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`SO:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }

    @Get('/players/:address')
    @ApiOperation({
        summary: "Track a Source Server's players",
        description: "Return a JSON response with information about the players currently on the server",
    })
    @ApiOkResponse({
        description: 'Players connected information',
        schema: sourcePlayersResponse
    })
    async trackPlayers(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`SOP:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackPlayers(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`SOP:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }

    @Get('/rules/:address')
    @ApiOperation({
        summary: "Track a Source Server's rules",
        description: "Return a JSON response with the server rules, or configuration variables in name/value pairs.",
    })
    @ApiOkResponse({
        description: 'Players connected information',
        schema: sourceRulesResponse
    })
    async trackRules(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`SOR:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackRules(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`SOR:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }
}
