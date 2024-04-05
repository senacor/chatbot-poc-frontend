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

  _isDisabled: boolean = false;

  @Input()
  set isDisabled(value: boolean) {
    this._isDisabled = value;
  }

  sendNewPrompt(){
    if (this._isDisabled) {
      return;
    }
    this.userInputEvent.emit(this.userInput);
    this.clearUserInput();
  }

  clearUserInput(){
    this.userInput = "";
  }
}
