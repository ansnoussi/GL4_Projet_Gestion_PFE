import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpRequest } from '@angular/common/http';
import { catchError, last, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FileUpload } from '../../../models/FileUpload';

@Component({
  selector: 'gl4-uploader-rapport-pfe',
  templateUrl: './uploader-rapport-pfe.component.html',
  styleUrls: ['./uploader-rapport-pfe.component.css']
})
export class UploaderRapportPFEComponent implements OnInit {

  /** Name used in form which will be sent in HTTP request. */
  @Input() param = 'file';
  /** Target URL for file uploading. */
  @Input() target = 'https://file.io';
  /** File extension that accepted, same as 'accept' of <input type="file" />.
   By the default, it's set to 'image/*'. */
  @Input() accept = '*';
  /** Allow you to add handler after its completion. Bubble up response text from remote. */
  @Output() complete = new EventEmitter<string>();

  uploadComplete = false;

  public file : FileUpload;

  constructor(private _http: HttpClient){}

  ngOnInit() {
  }

  onUploadClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      this.file = { data: fileUpload.files[0], state: 'in', inProgress: false, progress: 0, canRetry: false, canCancel: true };
      this.uploadFile();
    };
    fileUpload.click();
  }

  cancelFile(file: FileUpload) {
    file.sub.unsubscribe();
    this.removeFile();
  }

  retryFile(file: FileUpload) {
    this.uploadFile();
    file.canRetry = false;
  }

  private uploadFile() {
    const fd = new FormData();
    fd.append(this.param, this.file.data);

    const req = new HttpRequest('POST', this.target, fd, {
      reportProgress: true
    });

    this.file.inProgress = true;
    this.file.sub = this._http.request(req).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      tap(message => { }),
      last(),
      catchError((error: HttpErrorResponse) => {
        this.file.inProgress = false;
        this.file.canRetry = true;
        return of(`${this.file.data.name} upload failed.`);
      })
    ).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.uploadComplete = true;
          this.complete.emit(event.body);
        }
      }
    );
  }


  private removeFile() {
    this.file = null;
  }


}

