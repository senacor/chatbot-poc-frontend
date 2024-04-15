import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from 'app/chatbot/models/message';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-input-file-upload',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './input-file-upload.component.html',
  styleUrl: './input-file-upload.component.scss'
})
export class InputFileUploadComponent {

  constructor(private httpClient: HttpClient) {}

  @Output() updateMessages = new EventEmitter<Message[]>();
  @Output() markFileProvided = new EventEmitter<boolean>();

  @Input() useLegacyPrompt: boolean = false;

  isDisabled: boolean = false;
  isUploading: boolean = false;
  filename: string = '';

  onFileInputChange(event: Event) {
    this.isUploading = true;
    if (!(event?.target instanceof HTMLInputElement)) {
      return;
    }
    const file = event?.target?.files?.[0];
    if (!file) {
      return;
    }
    this.filename = file.name;
    const formData = new FormData();
    formData.append('file', file);
    this.httpClient.post<Message[]>(`${environment.backendOrigin}/chat/fileUpload?useLegacyPrompt=${this.useLegacyPrompt}`, formData)
      .subscribe({
        next: (messages: Message[]) => {
        this.updateMessages.emit(messages);
        this.markFileProvided.emit(true);
        this.isUploading = false;
        this.filename = '';
      },
      error: (e) => {
        console.error(e);
        alert(e.error ?? 'Fehler');
        this.isUploading = false;
        this.filename = '';
      }
    })
  }

}
