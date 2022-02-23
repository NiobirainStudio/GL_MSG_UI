import { GroupDTO } from "../DTO_Models/GroupDTO";
import { Message } from "./Message";

export class Group {
    id: number;
    name: string;
    groupType: number;
    description: string;
    lastMessage: Message;
    messages: Array<Message> = [];

    constructor(GROUP: GroupDTO){
        this.id = GROUP.id;
        this.name = GROUP.name;
        this.groupType = GROUP.groupType;
        this.description = GROUP.description;
        this.lastMessage = GROUP.lastMessage;
        this.messages;
    }
}