import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationSettingService } from './notification-setting.service';

@Component({
  selector: 'app-notification-setting',
  templateUrl: './notification-setting.component.html',
  styleUrls: ['./notification-setting.component.scss']
})
export class NotificationSettingComponent {

  model: any = {};
  loader: boolean = false;
  listData: any = [{}];
  saveLoader: boolean = false;
  displayedColumns: string[] = ['actions' , 'notification'];
  dataSource = new MatTableDataSource<any>();
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;

  constructor(public dialog: MatDialog , public service: NotificationSettingService ,public snackbar: MatSnackBar) {}

  search(searchVal: any){
    this.loader = true;
    if(searchVal){
      this.getTableData(searchVal);
    }
    else{
      this.getTableData();
    }
    this.loader = false;
  }

  onEdit(obj?: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60vw';
    dialogConfig.disableClose = true;
    if(obj && obj.id){
     this.model = obj;
     this.dialog.open(this.form , dialogConfig)
    }
    else{
      this.dialog.open(this.form , dialogConfig);
      this.model = {};
    }
  }

  async onRemove(obj: any){
    const res = await (await this.service.delete(obj.id)).toPromise();
    if(res.isSuccessFul){
      this.snackbar.open('Notifications Delete SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.getTableData();
    }
    else{
      this.snackbar.open(res.Data.message , 'OK' , {
        duration: 3000
      });
    }
  }

  async saveData(){
    this.saveLoader = true;
    const obj = {
      notification: this.model.notification
    }
    const res = await (await this.service.save(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('Notifications Add SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      this.getTableData();
    }
    else{
      this.saveLoader = false;
      this.snackbar.open(res.Data.message , 'OK' , {
        duration: 3000
      });
    }
  }

  async editData(data: any){
    this.saveLoader = true;
    const obj = {
      id: data.id,
      notification: data.notification
    }
    const res = await (await this.service.edit(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('Notifications Edit SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      this.getTableData();
    }
    else{
      this.saveLoader = false;
      this.snackbar.open(res.Data.message , 'OK' , {
        duration: 3000
      });
    }
  }

  async getTableData(search?: any){
    this.tableLoader = true;
    const res = await (await this.service.getConfig(search)).toPromise();
    if(res.isSuccessFul){
      // this.recordCount = res.Headers.get('recordcount');
      this.listData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.dataSource = this.listData;
      this.tableLoader = false;
    }
    else{
      this.tableLoader = false;
      // console.log(res.Error);
    }
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getTableData();
  }

}