import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../category/category.service';

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
  displayedColumns: string[] = ['actions' , 'noti'];
  dataSource = new MatTableDataSource<notificationElements>(data);
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;

  constructor(public dialog: MatDialog , public service: CategoryService ,public snackbar: MatSnackBar) {}

  search(ev: any){
    this.loader = true;
    setTimeout( ()=> {
      this.loader = false;
    }, 2000 )
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
    const res = await (await this.service.deleteCategory(obj.id)).toPromise();
    if(res.isSuccessFul){
      this.snackbar.open('Notifications Delete SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      // this.getTableData();
    }
    else{
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  async saveData(){
    this.saveLoader = true;
    const obj = {
      categoryName: this.model.categoryName
    }
    const res = await (await this.service.saveCategory(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('Notifications Add SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      // this.getTableData();
    }
    else{
      this.saveLoader = false;
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  async editData(data: any){
    this.saveLoader = true;
    const obj = {
      id: data.id,
      categoryName: data.categoryName
    }
    const res = await (await this.service.editCategory(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('Notifications Edit SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      // this.getTableData();
    }
    else{
      this.saveLoader = false;
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    // this.getTableData();
  }

}

export interface notificationElements {
  id: number;
  notification: string;
}

const data: notificationElements[] = [
  {id: 1, notification: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatibus.', },
  {id: 2, notification: 'Lorem  adipisicing elit. Officia, voluptatibus.',},
  {id: 3, notification: ' sit amet consectetur adipisicing elit. Officia, voluptatibus.', }
]
