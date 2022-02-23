export class UserDTO {
    id:number;
    accountName: string;
    nickName: string;
    email: string;
    userIcon: string;
    description: string;

    constructor(ID:number, ACCOUNT_NAME: string, NICK_NAME: string, EMAIL: string, USER_ICON: string, DESCRIPTION: string){
        this.id = ID;
        this.accountName = ACCOUNT_NAME;
        this.nickName = NICK_NAME;
        this.email = EMAIL;
        this.userIcon = USER_ICON;
        this.description = DESCRIPTION;
    }
}