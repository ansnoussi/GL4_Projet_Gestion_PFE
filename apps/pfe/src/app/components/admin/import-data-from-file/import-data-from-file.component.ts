import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as XLSX from 'xlsx';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'gl4-import-data-from-file',
  templateUrl: './import-data-from-file.component.html',
  styleUrls: ['./import-data-from-file.component.css']
})
export class ImportDataFromFileComponent implements OnInit {

  /** File extension that accepted, same as 'accept' of <input type="file" />.
   By the default, it's set to 'image/*'. */
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


    if(1 === 1){
      // Send data to student service
    }
    else {
      // Send data to professor service
    }

  }

  onSubmit(){
    console.log("Debut ajout")
    this.data.forEach(ligne => {
      this.adminService.addProfessor({
        ID: ligne[0],
        lastname: ligne[1],
        firstname: ligne[2],
        postalCode: ligne[3],
        phone: ligne[4],
        email: ligne[5],
        address: ligne[6],
        city: ligne[7],
        grade: ligne[8],
        nationality: ligne[9],
        nationalIdentityCard: ligne[10],
        passport: ligne[11]
      })
    })
    const professors = this.adminService.getProfessors();
    console.log(professors);
  }

}
