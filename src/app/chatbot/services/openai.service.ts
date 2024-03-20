import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

console.log(environment.backendOrigin);

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {


  constructor(private readonly httpClient: HttpClient) { }
  
  sendMessage(messages:Message[]):Observable<Message> {
    return this.httpClient.post<Message>(
      `${environment.backendOrigin}/chat/newMessage`, {
        messages,
      }
    );
  }

  initializeBot():Observable<Message[]> {
    return this.httpClient.get<Message[]>(
      `${environment.backendOrigin}/chat/init`
    )
  }
}