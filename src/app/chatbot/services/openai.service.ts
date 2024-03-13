import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { setAuthHeaders } from '../../../utils/auth/auth-headers';
import { environment } from '../../../environments/environment';

console.log(environment.backendOrigin);

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {


  constructor(private readonly httpClient: HttpClient) { }
  
  sendMessage(message:Message):Observable<Message> {
    //const serviceRequestConfig = setAuthHeaders(environment.backendOrigin, "POST", message);
    return this.httpClient.post<Message>(
      `${environment.backendOrigin}/sendNewPrompt`, {
        message,
      }
    );
  }

  initializeBot():Observable<Message> {
    //const serviceRequestConfig = setAuthHeaders(environment.backendOrigin, "GET");
    return this.httpClient.get<Message>(
      `${environment.backendOrigin}/initBot`
    )
  }
}