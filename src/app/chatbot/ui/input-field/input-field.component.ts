import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  
  @Input() userInput = "";

  @Output() userInputEvent = new EventEmitter<string>();

  sendNewPrompt(){
    console.log(this.userInput);
    this.userInputEvent.emit(this.userInput);
    this.clearUserInput();
  }

  clearUserInput(){
    this.userInput = "";
  }
}
