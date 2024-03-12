import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  readonly backendURL = process.env['BACKEND_SERVICE_URL'] || "http://localhost:3000";

  constructor(private readonly httpClient: HttpClient) { }
  
  sendMessage(message:Message):Observable<Message> {
    return this.httpClient.post<Message>(
      `${this.backendURL}/sendNewPrompt`, {
        message,
      }
    );
  }

  initializeBot():Observable<Message> {
    return this.httpClient.get<Message>(
      `${this.backendURL}/initBot`
    )
  }
}