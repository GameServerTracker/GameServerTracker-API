import { Inject, Injectable } from '@nestjs/common';
import { FivemService } from 'src/fivem/fivem.service';
import { MinecraftService } from 'src/minecraft/minecraft.service';
import { SourceService } from 'src/source/source.service';
import LametricFrameDto from './dto/lametricFrameDto';
import LametricServerCheckedDto from './dto/lametricServerCheckedDto';
import {
  CacheKeys,
  LametricIconServer,
  LametricServerTypeParams,
} from 'src/utils/enums';
import LametricFrameTextDto from './dto/lametricFrameTextDto';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class LametricService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly minecraftService: MinecraftService,
    private readonly sourceService: SourceService,
    private readonly fivemService: FivemService,
  ) {}

  readonly actionDict: {
    [id in LametricServerTypeParams]: (address: string) => Promise<any>;
  } = {
    Minecraft: (address: string) =>
      this.minecraftService.trackServer({ address: address }),
    MinecraftBedrock: (address: string) =>
      this.minecraftService.trackBedrockServer({ address: address }),
    Source: (address: string) =>
      this.sourceService.trackServer({ address: address }),
    FiveM: (address: string) =>
      this.fivemService.trackServer({ address: address }),
    FiveMCfxCode: (code: string) =>
      this.fivemService.trackServerByCfx({ code: code }),
  };

  readonly cacheDict: {
    [id in LametricServerTypeParams]: string;
  } = {
    Minecraft: CacheKeys.Minecraft,
    MinecraftBedrock: CacheKeys.MinecraftBedrock,
    Source: CacheKeys.Source,
    FiveM: CacheKeys.FiveM,
    FiveMCfxCode: CacheKeys.FiveMCfxCode,
  };

  readonly serverIconDict: {
    [serverType in LametricServerTypeParams]: LametricIconServer;
  } = {
    Minecraft: LametricIconServer.Minecraft,
    MinecraftBedrock: LametricIconServer.Minecraft,
    Source: LametricIconServer.Source,
    FiveM: LametricIconServer.FiveM,
    FiveMCfxCode: LametricIconServer.FiveM,
  };

  async trackServer(
    serverChecked: LametricServerCheckedDto,
  ): Promise<LametricFrameDto> {
    const icon: LametricIconServer = this.serverIconDict[serverChecked.type];
    const cache: any = await this.cacheManager.get(
      `${this.cacheDict[serverChecked.type]}:${serverChecked.address}`,
    );
    const frame: LametricFrameDto = {
      frames: [new LametricFrameTextDto(serverChecked.name, icon)],
    };
    let result: any;

    if (cache) {
      result = cache;
    } else {
      result = await this.actionDict[serverChecked.type](serverChecked.address);
      this.cacheManager.set(
        `${this.cacheDict[serverChecked.type]}:${serverChecked.address}`,
        result,
        5 * 60 * 1000,
      );
    }
    if (!result.online) {
      frame.frames.push(new LametricFrameTextDto('OFFLINE', icon));
      return frame;
    }

    switch (serverChecked.type) {
      case LametricServerTypeParams.Minecraft:
      case LametricServerTypeParams.MinecraftBedrock:
      case LametricServerTypeParams.Source:
        frame.frames.push(
          new LametricFrameTextDto(
            `${result.players.online} / ${result.players.max}`,
            icon,
          ),
        );
        break;
      case LametricServerTypeParams.FiveM:
        frame.frames.push(
          new LametricFrameTextDto(
            `${result.clients}/${result.Data.sv_maxclients}`,
            icon,
          ),
        );
        break;
      case LametricServerTypeParams.FiveMByCfxCode:
        frame.frames.push(
          new LametricFrameTextDto(
            `${result.Data.clients}/${result.Data.sv_maxclients}`,
            icon,
          ),
        );
        break;
    }
    return frame;
  }
}
