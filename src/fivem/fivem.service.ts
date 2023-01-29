import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
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
}
