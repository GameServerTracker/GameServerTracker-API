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

const fivemPlayersResponse: SchemaObject & Partial<ReferenceObject> = {
    type: 'object',
    properties: {
        address: { type: 'string', description: "Server's address" },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        playersOnline: { type: 'number', description: "Number of Players connected" },
        players: {
            type: 'array',
            description: 'An array of all players connected on server',
            items: {
                type: 'object',
                properties: {
                    endpoints: { type: 'string', description: "Player's endpoint", default: "127.0.0.1" },
                    id: { type: 'number', description: "Player's ID" },
                    identifiers: { type: 'array', description: "Player's identifiers", items: {} },
                    name: { type: 'string', description: "Player's name" },
                    ping: { type: 'number', description: "Player's ping" },
                },
                required: ['endpoints', 'id', 'identifiers', 'name', 'ping']
            },
        },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." }
    },
    required: [
        'address',
        'online',
        'playersOnline',
        'players',
        'cacheTime',
        'cacheExpire'
    ],
    example: {
        "address": "192.223.26.51:15000",
        "online": true,
        "playersOnline": 2,
        "players": [
            {
                "endpoint": "127.0.0.1",
                "id": 82,
                "identifiers": [
                    "license:9b510e4fd9ea81065ff5ff95dbec0f5cbbf9a70a",
                    "discord:855375608708464651",
                    "fivem:3966756",
                    "license2:9b510e4fd9ea81065ff5ff95dbec0f5cbbf9a70a"
                ],
                "name": "qwetti",
                "ping": 253
            },
            {
                "endpoint": "127.0.0.1",
                "id": 106,
                "identifiers": [
                    "license:b0b4d13aadbb79f8f4ab557aea934a9cd14c89ec",
                    "xbl:2535435310984194",
                    "live:1055518852711614",
                    "discord:412397129638739978",
                    "fivem:5839602",
                    "license2:88ff199d67171af80acb08c04ce12115b8a45763"
                ],
                "name": "ur cooked",
                "ping": 80
            }
        ],
        "cacheTime": 1677655256,
        "cacheExpire": 1677655556
    }
};

export {
    fivemResponse,
    fivemPlayersResponse
};