import { Injectable, Logger } from '@nestjs/common';
import { IMinecraftData } from 'minecraft-server-ping/dist/interfaces';
import ServerTrackedDto from 'src/dto/serverTrackedDto';
import * as minecraftServer from 'minecraft-server-ping';

@Injectable()
export class MinecraftService {
    async trackServer(server: ServerTrackedDto) {
        const addressSplited: string[] = server.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : 25565;
        const optionPing: any = { timeout: 2000 }

        try {
            if (port < 0 || port > 65536 || isNaN(port))
                throw (`Address ${server.address} has a bad port !`);
            const data: IMinecraftData = await minecraftServer.ping(hostname, port, optionPing);
            return {
                hostname,
                port,
                online: true,
                ...data
            };
        } catch (err: any) {
            Logger.warn(`[MC server | ${server.address}] ${err.name}: ${err.message}`);
            return {
                hostname,
                port,
                online: false
            };
        }
    }
}
