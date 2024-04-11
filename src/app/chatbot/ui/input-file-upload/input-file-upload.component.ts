import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'environments/environment';

interface fileUploadResponse {
  content?: string,
  name?: string,
}

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

  @Output() markFileProvided = new EventEmitter<boolean>();

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
    this.httpClient.post(`${environment.backendOrigin}/chat/fileUpload`, formData)
      .subscribe((r: fileUploadResponse) => {
        this.markFileProvided.emit(true);
        this.isUploading = false;
        this.filename = '';
  });
  }

}
