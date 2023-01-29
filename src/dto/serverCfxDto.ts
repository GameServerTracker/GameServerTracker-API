import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export default class ServerCfxDto {
    @ApiProperty({
        description: "Server's Cfx code"
    })
    @IsNotEmpty() @IsString()
    code: string;
}