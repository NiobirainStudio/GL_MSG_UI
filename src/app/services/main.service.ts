import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';

import * as signalR from '@aspnet/signalr';
import { MessageDTO } from 'src/app/models/DTO_Models/MessageDTO';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  readonly URL = 'https://localhost:7047/Home';

  private hubConnection: signalR.HubConnection;

  constructor(private http: HttpClient) { }

  public StartConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7047/hub')
      .build();

      this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while connecting to hub ' + err));
  }


  // Join SignalR channels
  public StartGroupChannel(userId: number) {
    this.hubConnection.invoke('AddToGroups', userId)
      .catch(err => console.log("StartGroupChannel " + err));
  }


  // Send data to server and recieve a response
  public PostAndRecieveData<RT, ST>(data: ST, url: string) {
    return this.http.post<RT>(
      this.URL + url, 
      JSON.stringify(data),
      { 
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }
  

    // Listeners
    public ListenOnMessages(callbackFunction: (args: MessageDTO) => void) {
      this.hubConnection.on('GroupMessages', (data) => {
        console.log("Recieved " + data);
        callbackFunction(data);
      });
    }


  // Send data
  public SendTextMessage(userId: number, messageData: string, groupId: number) {
    this.hubConnection.invoke('PostMessage', userId, messageData, 1, groupId)
      .catch(err => console.log("SendMessage " + err));
  }
}
