import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  
  @Input() userInput = "";

  @Output() userInputEvent = new EventEmitter<string>();

  sendNewPrompt(){
    this.userInputEvent.emit(this.userInput);
    this.clearUserInput();
  }

  clearUserInput(){
    this.userInput = "";
  }
}
