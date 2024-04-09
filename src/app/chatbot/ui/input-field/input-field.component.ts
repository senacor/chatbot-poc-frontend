import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFileUploadComponent } from "../input-file-upload/input-file-upload.component.js";

@Component({
    selector: 'app-input-field',
    standalone: true,
    templateUrl: './input-field.component.html',
    styleUrl: './input-field.component.scss',
    imports: [
        FormsModule,
        InputFileUploadComponent,
    ]
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
