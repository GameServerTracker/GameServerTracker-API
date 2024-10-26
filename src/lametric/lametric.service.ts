import { Injectable } from '@nestjs/common';
import { FivemService } from 'src/fivem/fivem.service';
import { MinecraftService } from 'src/minecraft/minecraft.service';
import { SourceService } from 'src/source/source.service';
import LametricFrameDto from './dto/lametricFrameDto';
import LametricServerCheckedDto from './dto/lametricServerCheckedDto';
import { LametricIconServer, LametricServerTypeParams } from 'src/utils/enums';
import LametricFrameTextDto from './dto/lametricFrameTextDto';

@Injectable()
export class LametricService {
  constructor(
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
    const frame: LametricFrameDto = {
      frames: [new LametricFrameTextDto(serverChecked.name, icon)],
    };

    let result = await this.actionDict[serverChecked.type](
      serverChecked.address,
    );
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
