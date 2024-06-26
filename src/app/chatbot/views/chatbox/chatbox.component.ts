import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, QueryList, SimpleChanges, ViewChild } from '@angular/core';
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
export class ChatboxComponent implements AfterViewInit	 {
  @ViewChild('chatbox', { static: true })
  chatBox!: ElementRef;

  messages: Message[] = [];

  constructor(private readonly openaiService: OpenaiService){
      this.openaiService.initializeBot().pipe(take(1)).subscribe({
        next: messages => this.messages = messages
      })
    
  }
  ngAfterViewInit(): void {
    this.chatBox.nativeElement.scrollBottom = this.chatBox.nativeElement.scrollHeight;
  }

  sendNewMessage(input:string){
    const message = {
      content: input,
      role: "user"
    };
    this.messages.push(message);
    this.openaiService.sendMessage(this.messages)
    .pipe(take(1))
    .subscribe({
      next: response => {
        this.messages.push(response);
      }
    });
  }
}
