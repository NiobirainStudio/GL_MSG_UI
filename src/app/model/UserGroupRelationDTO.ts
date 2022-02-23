export class UserGroupRelationDTO {
    userId: number;
    groupId: number;
    lastViewed: number;
    muted: boolean;
    privilege: number;

    constructor(USER_ID:number, GROUP_ID:number, LAST_VIEWED: number, MUTED: boolean, PRIVILEGE: number ){
        this.userId = USER_ID;
        this.groupId = GROUP_ID;
        this.lastViewed = LAST_VIEWED;
        this.muted = MUTED;
        this.privilege = PRIVILEGE;
    }
}