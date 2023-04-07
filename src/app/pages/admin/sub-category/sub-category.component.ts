import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SubCategoryService } from './sub-category.service';
import { CategoryService } from '../category/category.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})

export class SubCategoryComponent {
  model: any = {};
  loader: boolean = false;
  listData: any = [{}];
  saveLoader: boolean = false;
  displayedColumns: string[] = ['actions' , 'qus', 'ans' ];
  dataSource = new MatTableDataSource<any>();
  categoryData: any[] = [] 
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;

  constructor(public dialog: MatDialog , public service: SubCategoryService ,public snackbar: MatSnackBar , public categoryService: CategoryService) {}

  search(ev: any){
    this.loader = true;
    setTimeout( ()=> {
      this.loader = false;
    }, 2000 )
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
    const res = await (await this.service.deleteSubCategory(obj.id)).toPromise();
    if(res.isSuccessFul){
      this.snackbar.open('Sub-Category Delete SuccessFully...!' , 'OK' , {
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

  async getTableData(){
    this.tableLoader = true;
    const res = await (await this.service.getConfig()).toPromise();
    if(res.isSuccessFul){
      this.listData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.dataSource = this.listData;
      this.tableLoader = false;
    }
    else{
      this.tableLoader = false;
    }
  }

  async getCategory(){
    this.tableLoader = true;
    const res = await (await this.categoryService.getConfig()).toPromise();
    if(res.isSuccessFul){
      this.categoryData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
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
      subCategoryName: this.model.subCategoryName,
      categoryId : this.model.categoryId
    }
    const res = await (await this.service.saveSubCategory(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('Sub-Category Add SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      this.getTableData();
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
      categoryId: data.categoryId,
      subCategoryName: data.subCategoryName
    }
    const res = await (await this.service.editSubCategory(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('Sub-Category Edit SuccessFully...!' , 'OK' , {
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
    this.getTableData();
    this.getCategory();
  }
}
