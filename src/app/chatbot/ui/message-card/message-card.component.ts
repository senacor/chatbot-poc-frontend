import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';
import { CommonModule } from "@angular/common";
import { BoldTextPipe } from 'app/shared/pipes/bold-text.pipe';


@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [
    CommonModule,
    BoldTextPipe,
  ],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {

  @Input({required: true}) message!: Message;


}
