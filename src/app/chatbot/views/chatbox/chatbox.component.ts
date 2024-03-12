import { Component, ViewChild } from '@angular/core';
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
  styleUrl: './chatbox.component.scss'
})
export class ChatboxComponent {

  @ViewChild('chatbox')

  messages: Message[] = [];

  constructor(private readonly openaiService: OpenaiService){
    this.messages.push({
      role: 'bot',
      content: "Test message",
     })
    /*
    this.openaiService.sendMessage({
      content: "Hallo du bist ein Banker",
      role: "system"
    }).pipe(take(1)).subscribe({
      next: response => {
        this.messages.push(response);
      }
    });
    */
  }

  sendNewMessage(input:string){
    const message = {
      content: input,
      role: "user"
    };
    this.messages.push(message);
    /*
    this.openaiService.sendMessage(message)
      .pipe(take(1))
      .subscribe({
        next: response => {
          this.messages.push(response);
        }
      });
      */
     this.messages.push({
      role: 'bot',
      content: "Test message",
     })
  }
}
