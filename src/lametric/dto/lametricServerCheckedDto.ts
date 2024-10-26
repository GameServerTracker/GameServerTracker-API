import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LametricServerTypeParams } from 'src/utils/enums';

export default class LametricServerCheckedDto {
  @ApiProperty({
    description: 'Name of game server',
    example: 'Hypixel',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Type of game server',
    example: LametricServerTypeParams.Minecraft,
    enum: [
      LametricServerTypeParams.Minecraft,
      LametricServerTypeParams.MinecraftBedrock,
      LametricServerTypeParams.Source,
      LametricServerTypeParams.FiveM,
      LametricServerTypeParams.FiveMByCfxCode,
    ],
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(LametricServerTypeParams)
  type: LametricServerTypeParams;

  @ApiProperty({
    description: "Server's address",
    example: 'mc.hypixel.net',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    description: 'Enable sparkline',
    enum: ['true', 'false'],
  })
  @IsOptional()
  @IsString()
  sparkline: string = 'false';
}
