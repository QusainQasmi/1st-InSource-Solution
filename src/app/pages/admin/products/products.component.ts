import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  model: any = {};
  loader: boolean = false;
  listData: any = [{}];
  saveLoader: boolean = false;
  displayedColumns: string[] = ['actions' , 'name', 'description' , 'categoryName' , 'subcategoryName' , 'price' , 'stock'];
  dataSource = new MatTableDataSource<any>();
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;
  categoryData: any[] = [];
  subCategoryData: any[] = [];
  data: any[] = [];
  images: any[] = [];

  constructor(public dialog: MatDialog , public service: ProductsService ,public snackbar: MatSnackBar) {}

  async getTableData(searchVal?: any){
    this.tableLoader = true;
    const res = await (await this.service.getAllProducts(searchVal)).toPromise();
    if(res.isSuccessFul){
      this.listData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.dataSource = this.listData;
      this.tableLoader = false;
    }
    else{
      this.tableLoader = false;
    }
  }

  search(value?: any){
    this.loader = true;
    if(value){
      this.getTableData(value);
    }
    else{
      this.getTableData();
    }
    this.loader = false;
  }

  onEdit(obj?: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70vw';
    dialogConfig.disableClose = true;
    if(obj && obj.id){
     this.model = obj;
     this.images = this.model.image_url;
     this.updateData();
     this.dialog.open(this.form , dialogConfig)
    }
    else{
      this.dialog.open(this.form , dialogConfig);
      this.images = [];
      this.model = {};
    }
  }

  async onRemove(obj: any){
    const res = await (await this.service.deleteProducts(obj.id)).toPromise();
    if(res.isSuccessFul){
      this.snackbar.open('product Delete SuccessFully...!' , 'OK' , {
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

  async getCategory(){
    this.tableLoader = true;
    const res = await (await this.service.getCategorys()).toPromise();
    if(res.isSuccessFul){
      this.data = [];
      this.categoryData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.categoryData.forEach(x => {
        if(x.subCategory){
          this.data = [...this.data , ...x.subCategory]
        }
      })
      this.tableLoader = false;
    }
    else{
      this.tableLoader = false;
    }
  }

  updateData(){
   this.subCategoryData = this.data.filter(x => x.categoryId == this.model.category);
  }

  async saveData(data?: any){
    let obj = {};
    this.saveLoader = true;
    if(data){
      obj = {
        id: data.id,
        name: this.model.name,
        description: this.model.description,
        price: this.model.price,
        stock: this.model.stock,
        categoryId: this.model.category,
        subCategoryId: this.model.subCategory,
        images: this.images
      }
    }
    else{
      obj = {
        name: this.model.name,
        description: this.model.description,
        price: this.model.price,
        stock: this.model.stock,
        categoryId: this.model.category,
        subCategoryId: this.model.subCategory,
        images: this.images
      }
    }
    const res = await (await this.service.addProducts(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open(res.Data.message , 'OK' , {
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

  onFileSelect(ev: any){
    let arr: any[] = [];
    for( let i = 0; i < ev.target.files.length; i++ ){
      const file: File = ev.target.files[i];
      const reader: FileReader = new FileReader();
      reader.onloadend = (e) => {
        const base64String = reader.result as string;
        arr.push(base64String);
      };
      reader.readAsDataURL(file);
    }
    this.images = arr;
  }

  ngAfterViewInit() {}

  ngOnInit(){
    this.getTableData();
    this.getCategory();
  }

}