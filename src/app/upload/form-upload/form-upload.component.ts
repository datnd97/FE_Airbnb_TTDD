import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

import { Observable } from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const id = 1;
    this.progress.percentage = 0;
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.currentFileUpload = this.selectedFiles.item(i);
      console.log(this.currentFileUpload);
      this.uploadService.pushFileToStorage(this.currentFileUpload, id).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      });

    }
  }
}
