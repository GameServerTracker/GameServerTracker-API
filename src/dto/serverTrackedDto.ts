import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export default class ServerTrackedDto {
    @ApiProperty({
        description: "Server's address"
    })
    @IsNotEmpty() @IsString()
    address: string;
}