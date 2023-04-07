import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  model: any = {};
  listData: any = [{}];
  loader: boolean = false;
  saveLoader: boolean = false;
  displayedColumns: string[] = ['actions' , 'name'];
  dataSource = new MatTableDataSource<any>();
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;
  recordCount: any;

  constructor(public dialog: MatDialog , public service: CategoryService ,public snackbar: MatSnackBar) {}

  search(searchVal: any){
    this.loader = true;
    if(searchVal){
      this.getTableData(null , null , searchVal)
    }
    else{
      this.getTableData(1 , 20)
    }
    this.loader = false;
  }

  onEdit(obj?: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '35vw';
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
      this.snackbar.open('Category Delete SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.getTableData(1,20);
    }
    else{
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  // onPageChange(ev: any){
  //   if(ev){
  //     this.getTableData(ev.page , ev.pageSize)
  //   }
  //   console.log(ev)
  // }

  async getTableData(page: any , pageSize: any , search?: any){
    this.tableLoader = true;
    const res = await (await this.service.getConfig(page , pageSize , search)).toPromise();
    if(res.isSuccessFul){
      this.recordCount = res.Headers.get('recordcount');
      this.listData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.dataSource = this.listData;
      this.tableLoader = false;
    }
    else{
      this.tableLoader = false;
      // console.log(res.Error);
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
      this.snackbar.open('Category Add SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      this.getTableData(1,20);
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
      this.snackbar.open('Category Edit SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      this.getTableData(1,20);
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
    this.getTableData(1 , 20);
  }

}
