import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {


  constructor(private readonly httpClient: HttpClient) { }

  sendMessage(message:Message):Observable<Message> {
    return this.httpClient.post<Message>(
      'http://localhost:3000/sendNewPrompt', {
        message,
      }
    );
  }
}