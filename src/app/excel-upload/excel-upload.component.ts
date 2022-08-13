import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.scss']
})
export class ExcelUploadComponent implements OnInit {

  fileUploadUrl = "http://localhost:8080/file/upload"
  constructor(private _http : HttpClient) { 
  }

  ngOnInit(): void {
  }

  file : any;

  selectFile(event :any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.file);

    this._http.post(this.fileUploadUrl, formData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
