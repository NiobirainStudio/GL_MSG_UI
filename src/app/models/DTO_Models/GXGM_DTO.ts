export class GXGM_DTO
{
    groupId: number;
    lastId: number;

    constructor(group_id: number, last_id: number){
        this.groupId = group_id;
        this.lastId = last_id;
    }
}