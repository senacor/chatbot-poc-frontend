import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {

  @Input({required: true}) message!: Message;
}
