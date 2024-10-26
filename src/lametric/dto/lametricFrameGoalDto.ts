import { ApiProperty } from "@nestjs/swagger";
import GoalData from "./lametricGoalData";

export default class LametricFrameGoalDto {
    constructor(goalData: GoalData, icon: string) {
        this.goalData = goalData;
        this.icon = icon;
    }

    @ApiProperty({
        description: "Goal data",
        type: GoalData
    })
    goalData: GoalData;

    @ApiProperty({
        description: "Icon to display",
        example: "7285"
    })
    icon: string;
}