import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ContactAdminService } from './contact-admin.service';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.scss']
})
export class ContactAdminComponent {

  model: any = {};
  loader: boolean = false;
  listData: any = [{}];
  saveLoader: boolean = false;
  displayedColumns: string[] = ['actions' , 'name', 'email' , 'message' , 'phoneNo'];
  dataSource = new MatTableDataSource<any>();
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;

  constructor(public dialog: MatDialog , public service: ContactAdminService ,public snackbar: MatSnackBar) {}

  search(val: any){
    this.loader = true;
    if(val){
      this.getTableData(val);
    }
    else{
      this.getTableData();
    }
    this.loader = false;
  }

  onEdit(obj?: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50vw';
    dialogConfig.disableClose = true;
    if(obj && obj.id){
     this.model = obj;
     this.dialog.open(this.form , dialogConfig)
    }
  }

  async onRemove(obj: any){
    const res = await (await this.service.delete(obj.id)).toPromise();
    if(res.isSuccessFul){
      this.snackbar.open('Contact Person Delete SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.getTableData();
    }
    else{
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  async getTableData(serachVal?: any){
    this.tableLoader = true;
    const res = await (await this.service.getConfig(serachVal)).toPromise();
    if(res.isSuccessFul){
      this.listData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.dataSource = this.listData;
      this.tableLoader = false;
    }
    else{
      this.tableLoader = false;
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit(){
    this.getTableData();
  }


}
