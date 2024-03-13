import { Component } from '@angular/core';
import { Message } from '../../models/message';
import { MessageCardComponent } from '../../ui/message-card/message-card.component';
import { CommonModule } from "@angular/common";
import { InputFieldComponent } from '../../ui/input-field/input-field.component';
import { OpenaiService } from '../../services/openai.service';
import { take  } from 'rxjs';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [
    MessageCardComponent,
    InputFieldComponent,
    CommonModule
  ],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss',
})
export class ChatboxComponent {
  testing = true;

  messages: Message[] = [];

  constructor(private readonly openaiService: OpenaiService){
    if(this.testing){
      this.messages.push({
        role: "system",
        content: "Hallo!"
      })
    }
    else{
      this.openaiService.initializeBot().pipe(take(1)).subscribe({
        next: message => this.messages.push(message)
      })
    }
    
  }

  sendNewMessage(input:string){
    const message = {
      content: input,
      role: "user"
    };
    this.messages.push(message);
    if(!this.testing){
      this.openaiService.sendMessage(this.messages)
      .pipe(take(1))
      .subscribe({
        next: response => {
          this.messages.push(response);
        }
      });
    }
    else{
      this.messages.push({
        role: 'bot',
        content: 'Test Message'
      })
    }
    
  }
}
