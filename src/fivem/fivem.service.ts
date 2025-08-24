import { Injectable, Logger } from '@nestjs/common';
import ServerCfxDto from 'src/dto/serverCfxDto';
import ServerTrackedDto from 'src/dto/serverTrackedDto';

@Injectable()
export class FivemService {

  private readonly fivemApiUrl: string = 'https://servers-frontend.fivem.net/api/servers/single/';

  async trackServer(serverTracked: ServerTrackedDto): Promise<any> {
    try {
      const response: Response = await fetch(
        `http://${serverTracked.address}/dynamic.json`,
        {
          method: 'GET',
          signal: AbortSignal.timeout(2000),
        }
      )
      const data = await response.json();
      return {
        address: serverTracked.address,
        online: true,
        ...data,
      };
    } catch (err: any) {
      Logger.warn(
        `[FiveM server | ${serverTracked.address}] ${err.name}: ${err.message}`,
      );
      return {
        address: serverTracked.address,
        online: false,
      };
    }
  }

  async trackInfo(serverTracked: ServerTrackedDto): Promise<any> {
    try {
      const response: Response = await fetch(
        `http://${serverTracked.address}/info.json`,
        {
          method: 'GET',
          signal: AbortSignal.timeout(2000),
        }
      )
      const data = await response.json();
      return {
        address: serverTracked.address,
        online: true,
        ...data,
      };
    } catch (err: any) {
      Logger.warn(
        `[FiveM server | ${serverTracked.address}] ${err.name}: ${err.message}`,
      );
      return {
        address: serverTracked.address,
        online: false,
      };
    }
  }

  async trackServerByCfx(cfx: ServerCfxDto): Promise<any> {
    try {
      let response: Response = await fetch(
        `${this.fivemApiUrl}${cfx.code}`,
        {
          method: 'GET',
          headers: {
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'accept-language': 'en-US,en;q=0.7',
            priority: 'u=0, i',
            'sec-ch-ua':
              '"Not)A;Brand";v="8", "Chromium";v="138", "Brave";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'sec-gpc': '1',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
          },
        },
      );
      const data = await response.json();
      return {
        cfx: cfx.code,
        online: true,
        ...data,
      };
    } catch (err: any) {
      Logger.warn(
        `[FiveM CFX][${cfx.code}] ${err.name}: ${err.message}`,
      );
      return {
        cfx: cfx.code,
        online: false,
      };
    }
  }

  async trackPlayers(serverTracked: ServerTrackedDto): Promise<any> {
    try {
       const response: Response = await fetch(
        `http://${serverTracked.address}/players.json`,
        {
          method: 'GET',
          signal: AbortSignal.timeout(2000),
        }
      )
      const data = await response.json();
      return {
        address: serverTracked.address,
        online: true,
        playersOnline: data.length,
        players: data,
      };
    } catch (err: any) {
      Logger.warn(
        `[FiveM][${serverTracked.address}] ${err.name}: ${err.message}`,
      );
      return {
        address: serverTracked.address,
        online: false,
      };
    }
  }
}
