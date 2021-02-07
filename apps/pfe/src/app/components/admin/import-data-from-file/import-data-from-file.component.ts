import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'gl4-import-data-from-file',
  templateUrl: './import-data-from-file.component.html',
  styleUrls: ['./import-data-from-file.component.css']
})
export class ImportDataFromFileComponent implements OnInit {


  @Input() accept = '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';

  uploadComplete = false;

  filename = '';

  data: any[][];

  public content: string | ArrayBuffer;

  constructor(private adminService: AdminService){}

  ngOnInit() {
  }

  onUploadClick(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    this.filename = event.target.files[0].name;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <any[][]>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    reader.readAsBinaryString(target.files[0]);
    this.uploadComplete = true;
  }

  onSubmit(){
    if(this.data[0].length === 12){
      this.data.forEach(professor => {
        this.adminService.addProfessor({
          ID: professor[0],
          lastname : professor[1],
          firstname : professor[2],
          postalCode : professor[3],
          phone: professor[4],
          email : professor[5],
          address : professor[6],
          city : professor[7],
          grade : professor[8],
          nationality : professor[9],
          nationalIdentityCard : professor[10],
          passport : professor[11],
        })
      })
    }
    else if(this.data[0].length === 13) {
      this.data.forEach(student => {
        this.adminService.addStudent({
          ID: student[0],
          lastname : student[1],
          firstname : student[2],
          postalCode : student[3],
          phone: student[4],
          email : student[5],
          address : student[6],
          city : student[7],
          speciality : student[8],
          studyLevel : student[9],
          nationality : student[10],
          nationalIdentityCard : student[11],
          passport: student[12]
        })
      })
    }
    else {
      console.log("Invalid Data !")
    }

  }

}
