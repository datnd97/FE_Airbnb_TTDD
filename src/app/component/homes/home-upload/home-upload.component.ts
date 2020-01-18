import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from '../../../service/upload.service';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../../../service/home.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-upload',
  templateUrl: './home-upload.component.html',
  styleUrls: ['./home-upload.component.css']
})
export class HomeUploadComponent implements OnInit {

  constructor(private homeService: HomeService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      result => {
        this.id = result.id;
      }
    );
  }
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};
  id: number;
  formData = new FormData();
  completedCount = 0;
  total = 0;
  // show file:
  showFile = false;
  fileUploads: any;
  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.progress.percentage = 0;
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.formData.append('name', this.selectedFiles.item(i));
      this.completedCount++;
      this.total++;
      this.homeService.addUpload(this.formData, this.id).subscribe(
          result => {
              this.progress.percentage = (this.completedCount / this.total) * 100;
          },
        error => console.log('that bai')
      );
    }
    this.selectedFiles = undefined;
  }
  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.getFile(this.id);
    }
  }
  getFile(id: number) {
    this.homeService.getListUpload(this.id).subscribe(result => this.fileUploads = result);
  }

  // getHome(id: number) {
  //   this.homeService.getHome(id).subscribe(
  //     result => this.home = result,
  //     error => console.log('Khong tim thay'));
  // }
//   this.homeService.getListHome().subscribe(
//     result => {
//   this.listHome = result;
// },
// error => {
//   alert('Error get Home list');
// }
// );
}

