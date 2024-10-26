import { ApiProperty, getSchemaPath } from "@nestjs/swagger";
import FrameGoalDto from "./lametricFrameGoalDto";
import FrameSparklineDto from "./lametricFrameSparklineDto";
import FrameTextDto from "./lametricFrameTextDto";

export default class LametricFrameDto {    
    @ApiProperty({
        description: "Frames to display on the LaMetric device",
        type: 'array',
        items: { oneOf: [
            { $ref: getSchemaPath(FrameTextDto) },
            { $ref: getSchemaPath(FrameGoalDto) },
            { $ref: getSchemaPath(FrameSparklineDto) }
        ]}
    })
    frames: (FrameTextDto | FrameGoalDto | FrameSparklineDto)[];
}