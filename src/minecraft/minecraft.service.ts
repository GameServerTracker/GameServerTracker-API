import { Injectable, Logger } from '@nestjs/common';
import ServerTrackedDto from 'src/dto/serverTrackedDto';
import * as minecraftServer from 'minecraft-server-util';
import { DefaultPort } from 'src/utils/enums';

@Injectable()
export class MinecraftService {
    async trackServer(server: ServerTrackedDto) {
        const addressSplited: string[] = server.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : DefaultPort.Minecraft;
        const options: minecraftServer.JavaStatusOptions = { timeout: 2000, enableSRV: true };

        try {
            if (port < 0 || port > DefaultPort.MaxPort || isNaN(port))
                throw (`Address ${server.address} has a bad port !`);
            const data: minecraftServer.JavaStatusResponse = await minecraftServer.status(hostname, port, options);
            data['ping'] = data.roundTripLatency;
            delete data.roundTripLatency;
            return {
                address: server.address,
                port,
                online: true,
                ...data
            };
        } catch (err: any) {
            Logger.warn(`[MC server | ${server.address}] ${err.name}: ${err.message}`);
            return {
                address: server.address,
                port,
                online: false
            };
        }
    }

    async trackServerQuery(server: ServerTrackedDto) {
        const addressSplited: string[] = server.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : DefaultPort.Minecraft;
        const options: minecraftServer.QueryOptions = { timeout: 2000, enableSRV: true, sessionID: 42 };

        try {
            if (port < 0 || port > DefaultPort.MaxPort || isNaN(port))
                throw (`Address ${server.address} has a bad port !`);
            const data: minecraftServer.FullQueryResponse = await minecraftServer.queryFull(hostname, port, options);
            return {
                address: server.address,
                port,
                online: true,
                ...data
            };
        } catch (err: any) {
            Logger.warn(`[MC server Query | ${server.address}] ${err.name}: ${err.message}`);
            return {
                address: server.address,
                port,
                online: false
            };
        }
    }

    async trackBedrockServer(server: ServerTrackedDto) {
        const addressSplited: string[] = server.address.split(':');
        const hostname = addressSplited[0];
        const port: number = addressSplited[1] != undefined ? +addressSplited[1] : DefaultPort.MinecraftBedrock;
        const options: minecraftServer.BedrockStatusOptions = { timeout: 2000, enableSRV: true };

        try {
            if (port < 0 || port > DefaultPort.MaxPort || isNaN(port))
                throw (`Address ${server.address} has a bad port !`);
            const response: minecraftServer.BedrockStatusResponse = await minecraftServer.statusBedrock(hostname, port, options);
            const data: any = { ...response };
            data.serverGUID = String(data.serverGUID);
            return {
                address: server.address,
                port,
                online: true,
                ...data
            };
        } catch (err: any) {
            Logger.warn(`[MC Bedrock server | ${server.address}] ${err.name}: ${err.message}`);
            return {
                address: server.address,
                port,
                online: false
            };
        }
    }
}
