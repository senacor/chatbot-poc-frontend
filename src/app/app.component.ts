import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ChatboxComponent } from './chatbot/views/chatbox/chatbox.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChatboxComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  useLegacyPrompt: boolean = false;
  isFileProvided: boolean = false;

  markFileProvided = (isFileProvided: boolean) => {
    this.isFileProvided = isFileProvided;
  }
}
