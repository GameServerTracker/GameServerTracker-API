# Game Server Tracker - API

  <p align="center">A API which shows several information on a server Minecraft / Source (Gmod, CS, CSGO) / FiveM</p>

## Description

Game Server Tracker is a NestJS API that provides users with information about game servers such as online status, online players, game modes, and more.
The API supports multiple types of game servers, including Minecraft (Java and Bedrock Edition), Source (Half-Life, Counter-Strike, Team Fortress 2, GMod, etc.), and FiveM/RedM.
 This API is useful for players who want to know the status of servers before joining, as well as game server administrators who want to monitor their server activity.

This API was inspired by the Lametric Clock app project : [GameServerTracker-LametricApp](https://github.com/BliTz037/GameServerTracker-LametricApp)

## Available Servers
- Minecraft Java Edition
- Minecraft Bedrock Edition
- Source (All servers using the Source game engine like : Half-Life, Counter-Strike, Team Fortress 2, GMod, etc)
- FiveM / RedM (By Address or CFX code)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

*TODO : Write test-unit*
```bash
# test coverage
$ yarn run test:cov
```

## Documentation

You can found the documentation here to test the API : [Swagger](http://localhost:3000/api-docs/)

## Credit

- Author - [BliTz_37 - A guy from Tek](https://github.com/BliTz037/)
