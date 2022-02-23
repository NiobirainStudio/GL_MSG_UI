import { MessageDTO } from "./MessageDTO";

export class GroupDTO {
    id: number;
    name: string;
    groupType: number;
    description: string;
    lastMessage: MessageDTO;

    constructor(ID: number, NAME: string, TYPE: number, DESC: string, MSG: MessageDTO){
        this.id = ID;
        this.name = NAME;
        this.groupType = TYPE;
        this.description = DESC;
        this.lastMessage = MSG;
    }
}