import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import ServerCfxDto from 'src/dto/serverCfxDto';
import ServerTrackedDto from 'src/dto/serverTrackedDto';

@Injectable()
export class FivemService {
    async trackServer(serverTracked: ServerTrackedDto): Promise<any> {
        try {
            const response: AxiosResponse = await axios.get(`http://${serverTracked.address}/dynamic.json`, { timeout: 2000 });
            return {
                address: serverTracked.address,
                online: true,
                ...response.data
            };
        } catch (err: any) {
            Logger.warn(`[FiveM server | ${serverTracked.address}] ${err.name}: ${err.message}`);
            return {
                address: serverTracked.address,
                online: false
            };
        }
    }

    async trackServerByCfx(cfx: ServerCfxDto): Promise<any> {
        try {
            const response: AxiosResponse = await axios.get(`https://servers-frontend.fivem.net/api/servers/single/${cfx.code}`, { timeout: 2000, headers: { 'User-Agent': 'GST API' } });
            return {
                cfx: cfx.code,
                online: true,
                ...response.data
            };
        } catch (err: any) {
            Logger.warn(`[FiveM server | CFX ${cfx.code}] ${err.name}: ${err.message}`);
            console.log(err);
            return {
                cfx: cfx.code,
                online: false
            };
        }
    }

    async trackPlayers(serverTracked: ServerTrackedDto): Promise<any> {
        try {
            const { data }: any = await axios.get(`http://${serverTracked.address}/players.json`, { timeout: 2000 });
            return {
                address: serverTracked.address,
                online: true,
                playersOnline: data.length,
                players: data
            };
        } catch (err: any) {
            Logger.warn(`[FiveM server | ${serverTracked.address}] ${err.name}: ${err.message}`);
            return {
                address: serverTracked.address,
                online: false
            };
        }
    }
}
