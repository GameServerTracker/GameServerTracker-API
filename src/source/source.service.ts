import { Server } from '@fabricio-191/valve-server-query';
import { Injectable, Logger } from '@nestjs/common';
import ServerTrackedDto from 'src/dto/serverTrackedDto';
import { DefaultPort } from 'src/utils/enums';

@Injectable()
export class SourceService {
    async trackServer(serverTracked: ServerTrackedDto): Promise<any> {
        const addressSplited: string[] = serverTracked.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : DefaultPort.Source;

        try {
            if (port < 0 || port > DefaultPort.MaxPort || isNaN(port))
                throw (`Address ${serverTracked.address} has a bad port !`);
            const server: Server = await Server({ ip: hostname, port, timeout: 3000 });
            let data: any = await server.getInfo();
            // Avoid throw TypeError: Do not know how to serialize a BigInt
            data.steamID = String(data.steamID);
            data.appID = String(data.appID);
            data.gameID = String(data.gameID);
            return { ...data, online: true, ping: server.lastPing };
        } catch (err: any) {
            Logger.warn(`[Source server | ${serverTracked.address}] ${err.name}: ${err.message}`);
            return {
                address: serverTracked.address,
                port,
                online: false
            };
        }
    }

    async trackPlayers(serverTracked: ServerTrackedDto): Promise<any> {
        const addressSplited: string[] = serverTracked.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : DefaultPort.Source;

        try {
            if (port < 0 || port > DefaultPort.MaxPort || isNaN(port))
                throw (`Address ${serverTracked.address} has a bad port !`);
            const server: Server = await Server({ ip: hostname, port, timeout: 3000 });
            let data: any = await server.getPlayers();
            return {
                address: serverTracked.address,
                port,
                online: true,
                ping: server.lastPing,
                playersOnline: data.length,
                players: data
            };
        } catch (err: any) {
            Logger.warn(`[Source server | ${serverTracked.address}] ${err.name}: ${err.message}`);
            return {
                address: serverTracked.address,
                port,
                online: false
            };
        }
    }

    async trackRules(serverTracked: ServerTrackedDto): Promise<any> {
        const addressSplited: string[] = serverTracked.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : DefaultPort.Source;

        try {
            if (port < 0 || port > DefaultPort.MaxPort || isNaN(port))
                throw (`Address ${serverTracked.address} has a bad port !`);
            const server: Server = await Server({ ip: hostname, port, timeout: 3000 });
            const rules: any = await server.getRules();
            return {
                address: serverTracked.address,
                port,
                online: true,
                ping: server.lastPing,
                rules
            };
        } catch (err: any) {
            Logger.warn(`[Source server | ${serverTracked.address}] ${err.name}: ${err.message}`);
            return {
                address: serverTracked.address,
                port,
                online: false
            };
        }
    }
}
