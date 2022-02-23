import { Injectable } from '@angular/core';
import { GroupDTO } from '../models/DTO_Models/GroupDTO';
import { UserDTO } from '../models/DTO_Models/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //------------------------------------------------------------//
  // PRIVATE FUNCTIONALITY
  //------------------------------------------------------------//
  private storeData(pref: string, data: string){
    localStorage.setItem(pref, data);
  }
  private getData(pref: string){
    return localStorage.getItem(pref);
  }
  private removeData(pref: string){
    localStorage.removeItem(pref);
  }
  //------------------------------------------------------------//





  //------------------------------------------------------------//
  // USER OPERATIONS
  //------------------------------------------------------------//
  public storeUser(id: number, user: UserDTO){
    this.storeData("u-" + id.toString(), JSON.stringify(user));
    
    // Get user from gids field
    var userIdList = JSON.parse(this.getData('uids') || '{"ids": []}');

    // If the field doesn't exist, create it and push the user id
    if(userIdList.ids.length == 0){
      this.storeData('uids', '{"ids": [' + id + ']}');
    }
    // If the field exists and the id is not there, push it and update the field
    else if (userIdList.ids.filter((element: number) => element == id).length == 0){
      userIdList.ids.push(id);
      this.storeData('uids', JSON.stringify(userIdList));
    }
  }
  
  //------------------------------------------------------------//

  public getUser(id: number){
    return this.getData("u-" + id.toString());
  }

  //------------------------------------------------------------//

  public removeUser(id: number){
    this.removeData("u-" + id.toString());

    // Get users from uids field
    var userIdList = JSON.parse(this.getData('uids') || '{"ids": []}');
    
    // If the field doesn't exist, create it and push the user id
    if(userIdList.ids.length == 0){
      this.storeData('uids', '{"ids": []}');
    }

    // If the field exists filter and update the field
    this.storeData('uids', JSON.stringify(userIdList.ids.filter((element: number) => element == id)));
  }
  //------------------------------------------------------------//





  //------------------------------------------------------------//
  // GROUP OPERATIONS
  //------------------------------------------------------------//
  public storeGroup(id: number, group: GroupDTO){
    this.storeData("g-" + id.toString(), JSON.stringify(group));
    
    // Get groups from gids field
    var groupIdList = JSON.parse(this.getData('gids') || '{"ids": []}');

    // If the field doesn't exist, create it and push the group id
    if(groupIdList.ids.length == 0){
      this.storeData('gids', '{"ids": [' + id + ']}');
    }
    // If the field exists and the id is not there, push it and update the field
    else if (groupIdList.ids.filter((element: number) => element == id).length == 0){
      groupIdList.ids.push(id);
      this.storeData('gids', JSON.stringify(groupIdList));
    }
  }
  
  //------------------------------------------------------------//

  public getGroup(id: number){
    return this.getData("g-" + id.toString());
  }

  //------------------------------------------------------------//

  public removeGroup(id: number){
    this.removeData("g-" + id.toString());

    // Get groups from uids field
    var groupIdList = JSON.parse(this.getData('gids') || '{"ids": []}');
    
    // If the field doesn't exist, create it and push the group id
    if(groupIdList.ids.length == 0){
      this.storeData('gids', '{"ids": []}');
    }

    // If the field exists filter and update the field
    this.storeData('gids', JSON.stringify(groupIdList.ids.filter((element: number) => element == id)));
  }
  //------------------------------------------------------------//





  //------------------------------------------------------------//
  // FILE OPERATIONS
  //------------------------------------------------------------//
  public storeFile(id: number, file: File){
    this.storeData("f-" + id.toString(), JSON.stringify(file));
    
    // Get user from gids field
    var fileIdList = JSON.parse(this.getData('fids') || '{"ids": []}');

    // If the field doesn't exist, create it and push the user id
    if(fileIdList.ids.length == 0){
      this.storeData('fids', '{"ids": [' + id + ']}');
    }
    // If the field exists and the id is not there, push it and update the field
    else if (fileIdList.ids.filter((element: number) => element == id).length == 0){
      fileIdList.ids.push(id);
      this.storeData('fids', JSON.stringify(fileIdList));
    }
  }
  
  //------------------------------------------------------------//

  public getFile(id: number){
    return this.getData("f-" + id.toString());
  }

  //------------------------------------------------------------//

  public removeFile(id: number){
    this.removeData("f-" + id.toString());

    // Get files from uids field
    var fileIdList = JSON.parse(this.getData('fids') || '{"ids": []}');
    
    // If the field doesn't exist, create it and push the file id
    if(fileIdList.ids.length == 0){
      this.storeData('fids', '{"ids": []}');
    }

    // If the field exists filter and update the field
    this.storeData('fids', JSON.stringify(fileIdList.ids.filter((element: number) => element == id)));
  }
  //------------------------------------------------------------//





  //------------------------------------------------------------//
  // ADDITIONAL OPERATIONS
  //------------------------------------------------------------//
  public getExistingUserIds(){
    // Get uids list
    var userIdList = JSON.parse(this.getData('uids') || '{"ids": []}');
    
    // If uids doesn't exist, create it and return empty list;
    if(userIdList.ids.length == 0){
      this.storeData('uids', '{"ids": []}');
      return [];
    }

    // If it exists, return the list
    return userIdList.ids;
  }

  //------------------------------------------------------------//

  public getExistingGroupIds(){
    // Get gids list
    var groupIdList = JSON.parse(this.getData('gids') || '{"ids": []}');
    
    // If gids doesn't exist, create it and return empty list;
    if(groupIdList.ids.length == 0){
      this.storeData('gids', '{"ids": []}');
      return [];
    }

    // If it exists, return the list
    return groupIdList.ids;
  }

  //------------------------------------------------------------//

  public getExistingFileIds(){
    // Get fids list
    var fileIdList = JSON.parse(this.getData('fids') || '{"ids": []}');
    
    // If fids doesn't exist, create it and return empty list;
    if(fileIdList.ids.length == 0){
      this.storeData('fids', '{"ids": []}');
      return [];
    }

    // If it exists, return the list
    return fileIdList.ids;
  }
  //------------------------------------------------------------//
}
