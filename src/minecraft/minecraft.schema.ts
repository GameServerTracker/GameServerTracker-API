
let javaResponse: any = {
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
                protocol: { type: 'number' },
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
                raw: { type: 'string' },
                clean: { type: 'string' },
                html: { type: 'string' },
            },
            required: ['raw', 'clean', 'html'],
        },
        favicon: { type: 'string', description: "Server's icon in base64" },
        srvRecord: { type: 'null', properties: {} },
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
}

export {
    javaResponse
}