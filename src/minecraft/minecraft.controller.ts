import { Controller } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger/dist/decorators';
import { MinecraftService } from './minecraft.service';
import { Get, Inject, Param } from '@nestjs/common/decorators';
import ServerTrackedDto from 'src/dto/serverTrackedDto';
import { Cache } from 'cache-manager';
import { bedrockResponse, javaQueryResponse, javaResponse } from './minecraft.schema';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CacheKeys } from 'src/utils/enums';

/*
CODE CacheKey
- MC : Minecraft Track Minecraft Java server
- MCQ : Minecraft Track Minecraft Java server with Query Request
- MCB : Minecraft Track Minecraft Bedrock server
*/

@ApiTags('Minecraft')
@Controller('minecraft')
export class MinecraftController {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly service: MinecraftService
    ) { }

    @Get('/:address')
    @ApiOperation({
        summary: "Track a Minecraft Server Java Edition",
        description: "Return a JSON response with information about the server Minecraft Java Edition by ping request",
    })
    @ApiOkResponse({
        description: 'Server information',
        schema: javaResponse
    })
    async trackServer(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`MC:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackServer(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`${CacheKeys.Minecraft}:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }

    @Get('/query/:address')
    @ApiOperation({
        summary: "Track a Minecraft Server Java Edition with a query request",
        description: "Return a JSON response with information about the server Minecraft Java Edition by query request",
    })
    @ApiOkResponse({
        description: 'Server information',
        schema: javaQueryResponse
    })
    async trackServerQuery(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`${CacheKeys.MinecraftQuery}:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackServerQuery(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`MCQ:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }

    @Get('/bedrock/:address')
    @ApiOperation({
        summary: "Track a Minecraft Server Bedrock Edition",
        description: "Return a JSON response with information about the server Minecraft Bedrock Edition by ping request",
    })
    @ApiOkResponse({
        description: 'Server information',
        schema: bedrockResponse
    })
    async trackBedrockServer(@Param() address: ServerTrackedDto): Promise<any> {
        const cache: any = await this.cacheManager.get(`${CacheKeys.MinecraftBedrock}:${address.address}`);
        let result: any;

        if (cache)
            return cache;
        result = await this.service.trackBedrockServer(address);
        result["cacheTime"] = Math.floor(Date.now() / 1000);
        result["cacheExpire"] = Math.floor(Date.now() / 1000) + (5 * 60);
        this.cacheManager.set(`MCB:${address.address}`, result, 5 * 60 * 1000);
        return result;
    }
}
