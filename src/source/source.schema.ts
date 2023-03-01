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
}

export {
    sourceResponse
}