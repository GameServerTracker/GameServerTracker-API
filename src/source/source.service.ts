import { Server } from '@fabricio-191/valve-server-query';
import { Injectable, Logger } from '@nestjs/common';
import ServerTrackedDto from 'src/dto/serverTrackedDto';

@Injectable()
export class SourceService {
    async trackServer(serverTracked: ServerTrackedDto): Promise<any> {
        const addressSplited: string[] = serverTracked.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : 27015;

        try {
            if (port < 0 || port > 65536 || isNaN(port))
                throw (`Address ${serverTracked.address} has a bad port !`);
            const server: Server = await Server({ ip: hostname, port, timeout: 3000 });
            let data: any = await server.getInfo();
            // Avoid throw TypeError: Do not know how to serialize a BigInt
            data.steamID = String(data.steamID);
            data.appID = String(data.appID);
            data.gameID = String(data.gameID);
            return data;
        } catch (err: any) {
            Logger.warn(`[Source server | ${serverTracked.address}] ${err.name}: ${err.message}`);
            return {
                hostname,
                port,
                online: false
            };
        }
    }
}
