import { MessageDTO } from "../DTO_Models/MessageDTO";

export class Message {
    data: string;
    date: Date;
    type: number;
    groupId: number;
    messageId: number;
    userId: number;

    constructor(MESSAGE: MessageDTO){
        this.data = MESSAGE.data;
        this.date = MESSAGE.date;
        this.type = MESSAGE.type;
        this.groupId = MESSAGE.groupId;
        this.messageId = MESSAGE.messageId;
        this.userId = MESSAGE.userId;
    }
}