import { ReferenceObject, SchemaObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

const javaResponse: SchemaObject & Partial<ReferenceObject> = {
    type: 'object',
    properties: {
        address: { type: 'string', description: "Server's address" },
        port: { type: 'number', description: "Server's port. Default is 25565", default: 25565 },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        version: {
            type: 'object',
            description: "Server's version. Can contains more versions, text and software",
            properties: {
                name: { type: 'string', description: "Server's version" },
                protocol: { type: 'number', description: "The server's protocol version" },
            },
            required: ['name', 'protocol'],
        },
        players: {
            type: "object",
            description: "Players's information",
            properties: {
                online: { type: "integer", description: "Number of Players connected" },
                max: { type: "integer", description: "Max number of players the server can host" },
                sample: {
                    type: "array",
                    description: "List of some players connected. Can be empty or null depending on the server",
                    items: {
                        type: "object",
                        properties: {
                            name: { type: "string", description: "Player's nickname" },
                            id: { type: "string", description: "Player's ID in UUID" }
                        },
                        required: [
                            "name",
                            "id"
                        ]
                    }
                }
            },
            "required": [
                "online",
                "max",
                "sample"
            ]
        },
        motd: {
            type: 'object',
            description: "Server's Message of the day",
            properties: {
                raw: { type: 'string', description: "The raw MOTD" },
                clean: { type: 'string', description: "The MOTD with formatting codes removed" },
                html: { type: 'string', description: "The MOTD formatted in HTML" },
            },
            required: ['raw', 'clean', 'html'],
        },
        favicon: { type: 'string', description: "Server's icon in base64" },
        srvRecord: { type: 'null', description: "Server's SRV record information, can be null if it is not available", properties: {} },
        ping: { type: 'number', description: "Response time after the ping" },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." },
    },
    required: [
        'address',
        'port',
        'online',
        'version',
        'players',
        'motd',
        'favicon',
        'srvRecord',
        'ping',
        'cacheTime',
        'cacheExpire',
    ],
    example: {
        "address": "mc.hypixel.net",
        "port": 25565,
        "online": true,
        "version": {
            "name": "Requires MC 1.8 / 1.19",
            "protocol": 47
        },
        "players": {
            "online": 37671,
            "max": 200000,
            "sample": []
        },
        "motd": {
            "raw": "§f                §aHypixel Network §c[1.8-1.19]§f\n              §a§lSKYBLOCK 0.18 §7- §2§lGARDEN",
            "clean": "                Hypixel Network [1.8-1.19]\n              SKYBLOCK 0.18 - GARDEN",
            "html": "<span><span style=\"color: #FFFFFF;\">                </span><span style=\"color: #55FF55;\">Hypixel Network </span><span style=\"color: #FF5555;\">[1.8-1.19]</span><span style=\"color: #FFFFFF;\">\n              </span><span style=\"color: #55FF55; font-weight: bold;\">SKYBLOCK 0.18 </span><span style=\"color: #AAAAAA;\">- </span><span style=\"color: #00AA00; font-weight: bold;\">GARDEN</span></span>"
        },
        "favicon": "data:image/png;base64,XXXX=",
        "srvRecord": null,
        "ping": 195,
        "cacheTime": 1677394800,
        "cacheExpire": 1677395100
    }
};

const javaQueryResponse: SchemaObject & Partial<ReferenceObject> = {
    type: "object",
    properties: {
        address: { type: 'string', description: "Server's address" },
        port: { type: 'number', description: "Server's port. Default is 25565", default: 25565 },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        motd: {
            type: 'object',
            description: "Server's Message of the day",
            properties: {
                raw: { type: 'string', description: "The raw MOTD" },
                clean: { type: 'string', description: "The MOTD with formatting codes removed" },
                html: { type: 'string', description: "The MOTD formatted in HTML" },
            },
            required: ['raw', 'clean', 'html'],
        },
        version: {
            type: "string",
            description: "Server's version. Can contains more versions, text and software",
        },
        software: {
            type: "string",
            description: "Server's software (Bukkit, Spigot, Forge, etc...)",
        },
        plugins: {
            type: "array",
            description: "List of all plugins installed (This list can be hidded by the server)",
            items: {
                type: "string"
            }
        },
        mods: {
            type: "array",
            description: "List of all mods installed (Only for modded server)",
            items: {
                type: "string"
            }
        },
        map: {
            type: "string",
            description: "Server's map",
        },
        players: {
            type: "object",
            description: "Players's information",
            properties: {
                online: { type: "integer", description: "Number of Players connected" },
                max: { type: "integer", description: "Max number of players the server can host" },
                list: {
                    type: "array",
                    description: "List of players connected. Can be empty or null depending on the server",
                    items: {
                        type: "string",
                        description: "Player's nickname"
                    }
                }
            }
        },
        hostIP: {
            type: "string",
            description: "Server's IP address",
        },
        hostPort: {
            type: "integer",
            description: "Server's port",
        },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." },
    },
    required: [
        'address',
        'port',
        'online',
        'version',
        'software',
        'plugins',
        'mods',
        'map',
        'players',
        'motd',
        'favicon',
        'srvRecord',
        'ping',
        'hostIP',
        'hostPort',
        'cacheTime',
        'cacheExpire',
    ],
    example: {
        "address": "play.pixworld.fr",
        "port": 25565,
        "online": true,
        "motd": {
            "raw": "§1Another FlameCord server",
            "clean": "Another FlameCord server",
            "html": "<span><span style=\"color: #0000AA;\">Another FlameCord server</span></span>"
        },
        "version": "1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x, 1.19.x",
        "software": "",
        "plugins": [],
        "mods": [],
        "map": "Waterfall_Proxy",
        "players": {
            "online": 8,
            "max": 150,
            "list": [
                "Chouette2603",
                "BlackSnow",
                "AP__DrX",
                "thvk",
                "Charlox29",
                "amandyte",
                "trois17",
                "Meiba06"
            ]
        },
        "hostIP": "0.0.0.0",
        "hostPort": 25565,
        "cacheTime": 1677550897,
        "cacheExpire": 1677551197
    }
};

const bedrockResponse: SchemaObject & Partial<ReferenceObject> = {
    type: "object",
    properties: {
        address: { type: 'string', description: "Server's address" },
        port: { type: 'number', description: "Server's port. Default is 25565", default: 25565 },
        online: { type: 'boolean', description: "Server's status. If the bool is true, the server is online" },
        edition: {
            type: "string",
            description: "Server's type of Minecraft Edition"
        },
        motd: {
            type: "object",
            description: "Server's Message of the day",
            properties: {
                raw: {
                    type: "string",
                    description: "The raw MOTD"
                },
                clean: {
                    type: "string",
                    description: "The MOTD with formatting codes removed"
                },
                html: {
                    type: "string",
                    description: "The MOTD formatted in HTML"
                }
            }
        },
        version: {
            type: "object",
            description: "Server's version. Can contains more versions, text and software",
            properties: {
                name: { type: 'string', description: "Server's version" },
                protocol: { type: 'number', description: "The server's protocol version" }
            }
        },
        players: {
            type: "object",
            description: "Players's information",
            properties: {
                online: { type: "integer", description: "Number of Players connected" },
                max: { type: "integer", description: "Max number of players the server can host" }
            }
        },
        serverGUID: {
            type: "string",
            description: "Server's GUID (Globally Unique Identifier)"
        },
        serverID: {
            type: "string",
            description: "Server's ID"
        },
        gameMode: {
            type: "string",
            description: "Server's current game mode (ex: Survival, Creative, etc)"
        },
        gameModeID: {
            type: "integer",
            description: "ID of the server's current game mode"
        },
        portIPv4: {
            type: "integer",
            description: "Server's IPv4 port"
        },
        portIPv6: {
            type: "integer",
            description: "Server's IPv6 port"
        },
        srvRecord: {
            type: "null",
            description: "Server's SRV record information, can be null if it is not available"
        },
        cacheTime: { type: 'number', description: "UNIX timestamp when the response was cached" },
        cacheExpire: { type: 'number', description: "UNIX timestamp when the response will be remove from cache. Around 5 minutes." }
    },
    required: [
        'address',
        'port',
        'online',
        'edition',
        'motd',
        'version',
        'players',
        'serverGUID',
        'serverID',
        'gameMode',
        'gameModeID',
        'portIPV4',
        'portIPV6',
        'srvRecord',
        'cacheTime',
        'cacheExpire',
    ],
    example: {
        "address": "mps.mc-complex.com:19132",
        "port": 19132,
        "online": true,
        "edition": "MCPE",
        "motd": {
            "raw": "§b---------§8§l[-  §f§lCOMPLEX  §b§lGAMING  §8§l-]§b§l--------§f\n§fᴄʟᴀɴs§f    §b§l§ki§d§l§ki§b§l§ki§b §d#1 ᴘɪxᴇʟᴍᴏɴ ɴᴇᴛᴡᴏʀᴋ §b§l§ki§d§l§ki§b§l§ki§b    §fǫᴜᴇsᴛs",
            "clean": "---------[-  COMPLEX  GAMING  -]--------\nᴄʟᴀɴs    iii #1 ᴘɪxᴇʟᴍᴏɴ ɴᴇᴛᴡᴏʀᴋ iii    ǫᴜᴇsᴛs",
            "html": "<span><span style=\"color: #55FFFF;\">---------</span><span style=\"color: #555555; font-weight: bold;\">[-  </span><span style=\"color: #FFFFFF; font-weight: bold;\">COMPLEX  </span><span style=\"color: #55FFFF; font-weight: bold;\">GAMING  </span><span style=\"color: #555555; font-weight: bold;\">-]</span><span style=\"color: #55FFFF; font-weight: bold;\">--------</span><span style=\"color: #FFFFFF;\">\n</span><span style=\"color: #FFFFFF;\">ᴄʟᴀɴs</span><span style=\"color: #FFFFFF;\">    </span><span class=\"minecraft-formatting-obfuscated\" style=\"color: #55FFFF; font-weight: bold;\">i</span><span class=\"minecraft-formatting-obfuscated\" style=\"color: #FF55FF; font-weight: bold;\">i</span><span class=\"minecraft-formatting-obfuscated\" style=\"color: #55FFFF; font-weight: bold;\">i</span><span style=\"color: #55FFFF;\"> </span><span style=\"color: #FF55FF;\">#1 ᴘɪxᴇʟᴍᴏɴ ɴᴇᴛᴡᴏʀᴋ </span><span class=\"minecraft-formatting-obfuscated\" style=\"color: #55FFFF; font-weight: bold;\">i</span><span class=\"minecraft-formatting-obfuscated\" style=\"color: #FF55FF; font-weight: bold;\">i</span><span class=\"minecraft-formatting-obfuscated\" style=\"color: #55FFFF; font-weight: bold;\">i</span><span style=\"color: #55FFFF;\">    </span><span style=\"color: #FFFFFF;\">ǫᴜᴇsᴛs</span></span>"
        },
        "version": {
            "name": "1.19.60",
            "protocol": 567
        },
        "players": {
            "online": 998,
            "max": 999
        },
        "serverGUID": "-2348988569801821847",
        "serverID": "-2348988569801821847",
        "gameMode": "Survival",
        "gameModeID": 1,
        "portIPv4": 19132,
        "portIPv6": -1,
        "srvRecord": null,
        "cacheTime": 1677570728,
        "cacheExpire": 1677571028
    }
}

export {
    javaResponse,
    javaQueryResponse,
    bedrockResponse
}