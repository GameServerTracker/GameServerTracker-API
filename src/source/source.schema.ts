import { ReferenceObject, SchemaObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface"

const sourceResponse: SchemaObject & Partial<ReferenceObject> = {
    type: 'object',
    properties: {
        address: { type: 'string', description: "Server's address" },
        protocol: { type: 'number', description: "Protocol version used by the server" },
        goldSource: { type: 'boolean', description: "The server is using the GoldSource engine or not" },
        name: { type: 'string', description: "Server's name" },
        map: { type: 'string', description: "The name of the currently loaded map on the server" },
        folder: { type: 'string', description: "Game folder's name on the server" },
        game: { type: 'string', description: "Game's name running on the server" },
        appID: { type: 'string', description: "Application's ID" },
        players: {
            type: "object",
            description: "Players's information",
            properties: {
                online: { type: "integer", description: "Number of Players connected" },
                max: { type: "integer", description: "Max number of players the server can host" },
                bots: { type: "integer", description: "Number of bots connected" }
            }
        },
        type: { type: 'string', description: "Server's type", examples: ['dedicated', 'non-dedicated', 'source tv relay'] },
        os: { type: 'string', description: "Operating system of server", examples: ['linux', 'windows', 'mac'] },
        visibility: { type: 'string', description: "Server's visibility", examples: ['private', 'public'] },
        VAC: { type: 'boolean', description: "The server is using the Valve-Anti-Cheat or not" },
        version: { type: 'string', description: "Game's version installed on the server" },
        port: { type: 'number', description: "Server's port. Default is 27015", default: 27015 },
        steamID: { type: 'string', description: "Server's Steam ID" },
        keywords: {
            type: 'array',
            description: "An array of keywords associated with the server",
            items: {
                type: 'string',
                description: "Keywords"
            }
        },
        gameID: { type: 'string', description: "Game's ID" },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        ping: { type: 'number', description: "Response time after the ping" },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." }
    },
    required: [
        'address',
        'protocol',
        'goldSource',
        'name',
        'map',
        'folder',
        'game',
        'appID',
        'players',
        'type',
        'OS',
        'visibility',
        'VAC',
        'version',
        'port',
        'steamID',
        'keywords',
        'gameID',
        'online',
        'ping',
        'cacheTime',
        'cacheExpire'
    ],
    example: {
        "address": "146.59.209.237:27015",
        "protocol": 17,
        "goldSource": false,
        "name": "[FR/QC] 👑 VLife RolePlay V2✨|VEERDOSE|DarkRP|EXCLU🏅",
        "map": "rp_rockford_v2b",
        "folder": "garrysmod",
        "game": "DarkRP",
        "appID": "4000",
        "players": {
            "online": 1,
            "max": 128,
            "bots": 0
        },
        "type": "dedicated",
        "OS": "linux",
        "visibility": "public",
        "VAC": true,
        "version": "2022.06.08",
        "port": 27015,
        "steamID": "85568392924634000",
        "keywords": [
            "gm:darkrp gmc:rp loc:fr ver:230210"
        ],
        "gameID": "4000",
        "online": true,
        "ping": 251,
        "cacheTime": 1677648209,
        "cacheExpire": 1677648509
    }
};

const sourcePlayersResponse: SchemaObject & Partial<ReferenceObject> = {
    type: 'object',
    properties: {
        address: { type: 'string', description: "Server's address" },
        port: { type: 'number', description: "Server's port. Default is 27015", default: 27015 },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        ping: { type: 'number', description: "Response time after the ping" },
        playersOnline: { type: 'number', description: "Number of Players connected" },
        players: {
            type: "array",
            description: "List of players connected",
            items: {
                type: "object",
                description: "Players's information",
                properties: {
                    index: { type: 'number', description: "Index of player chunk starting from 0", default: 0 },
                    name: { type: 'string', description: "Player's name" },
                    score: { type: 'number', description: "Player's score (usually 'frags' or 'kills')" },
                    timeOnline: {
                        type: 'object',
                        description: "Time player has been connected to the server",
                        properties: {
                            hours: { type: 'number', description: 'Hours' },
                            minutes: { type: 'number', description: 'Minutes' },
                            seconds: { type: 'number', description: 'Seconds' },
                            raw: { type: 'number', description: 'Time (in seconds) player has been connected to the server' },
                            start: { type: 'date', description: 'Date in ISO 8601 of last refresh' }
                        },
                        required: [
                            'hours', 'minutes', 'seconds', 'raw', 'start'
                        ]
                    }
                }
            }
        },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." }
    },
    required: [
        'address',
        'port',
        'online',
        'ping',
        'playersOnline',
        'players',
        'cacheTime',
        'cacheExpire'
    ],
    example: {
        "address": "74.91.124.246:27015",
        "port": 27015,
        "online": true,
        "ping": 199,
        "playersOnline": 2,
        "players": [
            {
                "index": 0,
                "name": "Billie Jean",
                "score": 4,
                "timeOnline": {
                    "hours": 3,
                    "minutes": 12,
                    "seconds": 12,
                    "raw": 11532.884765625,
                    "start": "2023-03-01T06:00:46.243Z"
                }
            },
            {
                "index": 0,
                "name": "Bornyist",
                "score": 11,
                "timeOnline": {
                    "hours": 2,
                    "minutes": 29,
                    "seconds": 55,
                    "raw": 8995.3857421875,
                    "start": "2023-03-01T06:00:48.780Z"
                }
            }
        ],
        "cacheTime": 1677650457,
        "cacheExpire": 1677650757
    }
};

export {
    sourceResponse,
    sourcePlayersResponse
}