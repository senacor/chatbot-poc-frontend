import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'environments/environment.development';

interface fileUploadResponse {
  content?: string,
  name?: string,
}

@Component({
  selector: 'app-input-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './input-file-upload.component.html',
  styleUrl: './input-file-upload.component.scss'
})
export class InputFileUploadComponent {

  constructor(private httpClient: HttpClient) {}

  @Output() userInputEvent = new EventEmitter<string>();

  onFileInputChange(event: Event) {
    if (!(event?.target instanceof HTMLInputElement)) {
      return;
    }
    const file = event?.target?.files?.[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    this.httpClient.post(`${environment.backendOrigin}/chat/fileUpload`, formData)
      .subscribe((r: fileUploadResponse) => this.userInputEvent.emit(`Der Inhalt der Datei mit dem Namen '${r.name}' lautet wie folgt:\n${r.content}`));
  }

}
