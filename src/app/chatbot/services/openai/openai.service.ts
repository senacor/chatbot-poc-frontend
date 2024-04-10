import { Injectable } from '@angular/core';
import { Message } from '../../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {


  constructor(private readonly httpClient: HttpClient) { }
  
  sendMessage(message:Message):Observable<Message[]> {
    return this.httpClient.post<Message[]>(
      `${environment.backendOrigin}/chat/newMessage`, {
        ...message,
      }
    );
  }

  initializeBot():Observable<Message[]> {
    return this.httpClient.get<Message[]>(
      `${environment.backendOrigin}/chat/init`
    )
  }
}