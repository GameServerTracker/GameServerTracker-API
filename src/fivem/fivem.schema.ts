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

const fivemCfxResponse: SchemaObject & Partial<ReferenceObject> = {
    type: 'object',
    properties: {
        cfx: { type: 'string', description: "Server's CFX code" },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        EndPoint: { type: 'string', description: "Server's CFX code used as an Endpoint" },
        Data: {
            type: 'object', description: "Server's Data",
            properties: {
                clients: { type: 'number', description: "Number of Players connected" },
                gametype: { type: 'string', description: "Server game's type" },
                hostname: { type: 'string', description: "Server's hostname" },
                mapname: { type: 'string', description: "The name of the currently loaded map on the server" },
                sv_maxclients: { type: 'string', description: "Max number of players the server can host" },
                enhancedHostSupport: { type: 'boolean', description: "Enhanced host support" },
                requestSteamTicket: { type: 'string', description: "Server accept request steam ticket or not" },
                resources: {
                    type: 'array',
                    description: 'An array of all ressources on server',
                    items: {
                        type: 'string', description: "Ressource's name"
                    },
                },
                server: { type: 'string', description: "Server's software used" },
                vars: {
                    type: 'object',
                    description: 'An object of several variables of server',
                },
                selfReportedClients: { type: 'number', description: "Number of Players connected" },
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
                ownerID: { type: 'number', description: "Server owner's ID" },
                private: { type: 'boolean', description: "Server is private or not" },
                fallback: { type: 'boolean', description: "Server is fallback or not" },
                connectEndPoints: {
                    type: 'array',
                    description: 'An array of all endpoints available to connect on server',
                    items: {
                        type: 'string', description: "Endpoint's address"
                    },
                },
                upvotePower: { type: 'number', description: "Server's up vote power" },
                burstPower: { type: 'number', description: "Server's up burst power" },
                support_status: { type: 'string', description: "Support's status" },
                svMaxclients: { type: 'string', description: "Max number of players the server can host" },
                ownerName: { type: 'string', description: "Server owner's name" },
                ownerProfile: { type: 'string', description: "Server owner's profile on forum.cfx.re" },
                ownerAvatar: { type: 'string', description: "Server owner's avatar on forum.cfx.re" },
                lastSeen: { type: 'date', description: 'Date in ISO 8601 of last seen' },
                iconVersion: { type: 'number', description: "Server icon's version" }
            },
            required: [
                "clients",
                "gametype",
                "hostname",
                "mapname",
                "sv_maxclients",
                "enhancedHostSupport",
                "requestSteamTicket",
                "resources",
                "server",
                "vars",
                "selfReportedClients",
                "players",
                "ownerID",
                "private",
                "fallback",
                "connectEndPoints",
                "upvotePower",
                "burstPower",
                "support_status",
                "svMaxclients",
                "ownerName",
                "ownerProfile",
                "ownerAvatar",
                "lastSeen",
                "iconVersion"
            ]
        },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." }
    },
    required: [
        "cfx",
        "online",
        "EndPoint",
        "Data",
        "cacheTime",
        "cacheExpire"
    ],
    example: {
        "cfx": "45yo89",
        "online": true,
        "EndPoint": "45yo89",
        "Data": {
            "clients": 51,
            "gametype": "Minigames, Races, and Free Mode",
            "hostname": "^5Mega's Games (US): ^5Minigames ^9|^4 Sumo ^9|^1 Races ^9|^3 Freeroam",
            "mapname": "Various",
            "sv_maxclients": 2048,
            "enhancedHostSupport": true,
            "requestSteamTicket": "off",
            "resources": [
                "hardcap",
                "_cfx_internal",
                "ivpack"
            ],
            "server": "FXServer-master SERVER v1.0.0.6228 win32",
            "vars": {
                "gamename": "gta5",
                "locale": "en-US",
                "onesync_enabled": "true",
                "sv_enforceGameBuild": "2802",
            },
            "selfReportedClients": 51,
            "players": [
                {
                    "endpoint": "127.0.0.1:1234",
                    "id": 82,
                    "identifiers": [
                        "license:9b510e4fd9ea81065ff5ff95dbec0f5cbbf9a70a",
                        "discord:855375608708464651",
                        "fivem:3966756",
                        "license2:9b510e4fd9ea81065ff5ff95dbec0f5cbbf9a70a"
                    ],
                    "name": "qwetti",
                    "ping": 246
                },
                {
                    "endpoint": "127.0.0.1:1234",
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
                    "ping": 87
                }
            ],
            "ownerID": 46512,
            "private": false,
            "fallback": false,
            "connectEndPoints": [
                "192.223.26.51:15000"
            ],
            "upvotePower": 168,
            "burstPower": 0,
            "support_status": "supported",
            "svMaxclients": 2048,
            "ownerName": "MegaGTAVMaster",
            "ownerProfile": "https://forum.cfx.re/u/MegaGTAVMaster",
            "ownerAvatar": "https://forum.cfx.re/user_avatar/forum.cfx.re/megagtavmaster/128/2049360_2.png",
            "lastSeen": "2023-03-01T07:49:41.9488692Z",
            "iconVersion": -1146343723
        },
        "cacheTime": 1677657024,
        "cacheExpire": 1677657324
    }
}

export {
    fivemResponse,
    fivemPlayersResponse,
    fivemCfxResponse
};