import { ReferenceObject, SchemaObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

const fivemResponse: SchemaObject & Partial<ReferenceObject> = {
    type: 'object',
    properties: {
        address: { type: 'string', description: "Server's address" },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        clients: { type: 'number', description: "Number of Players connected" },
        hostname: { type: 'boolean', description: "Host's name" },
        iv: { type: 'string', description: "Server's iv" },
        mapname: { type: 'string', description: "The name of the currently loaded map on the server" },
        sv_maxclients: { type: 'string', description: "Max number of players the server can host" },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." }
    },
    required: [
        'address',
        'online',
        'clients',
        'gametype',
        'hostname',
        'iv',
        'mapname',
        'sv_maxclients',
        'cacheTime',
        'cacheExpire'
    ],
    example: {
        "address": "192.223.26.51:15000",
        "online": true,
        "clients": 64,
        "gametype": "Minigames, Races, and Free Mode",
        "hostname": "^5Mega's Games (US): ^5Minigames ^9|^4 Sumo ^9|^1 Races ^9|^3 Freeroam",
        "iv": "827481538",
        "mapname": "Various",
        "sv_maxclients": "2048",
        "cacheTime": 1677654674,
        "cacheExpire": 1677654974
    }
};

export {
    fivemResponse
};