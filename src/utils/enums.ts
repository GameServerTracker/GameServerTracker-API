enum DefaultPort {
    Minecraft = 25565,
    MinecraftBedrock = 19132,
    Source = 27015,
    MaxPort = 65536
}

enum LametricIconServer {
    Minecraft = "7285",
    Source = "28166",
    FiveM = "3687",
    Unknown = "11366"
};

enum LametricServerTypeParams {
    FiveM = "FiveM",
    FiveMByCfxCode = "FiveMCfxCode",
    Source = "Source",
    Minecraft = "Minecraft",
    MinecraftBedrock = "MinecraftBedrock"
};

enum CacheKeys {
    FiveM = "FM",
    FiveMCfxCode = "FMCFX",
    FiveMPlayers = "FMP",
    Minecraft = "MC",
    MinecraftQuery = "MCQ",
    MinecraftBedrock = "MCB",
    Source = "SO",
    SourcePlayers = "SOP",
    SourceRules = "SOR"
}

export {
    DefaultPort,
    LametricIconServer,
    LametricServerTypeParams,
    CacheKeys
}