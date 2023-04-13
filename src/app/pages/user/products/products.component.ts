import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit , AfterViewInit {

  model: any = {};
  searchloader: boolean = false;
  categoryName: string | any;
  subCategoryName: string | undefined;
  categoryData: any[] = [];
  nestedProducts: boolean = false;
  productsLoader: boolean = false;
  pageLoader: boolean = false;
  productsData: any[] = [];
  sortByData: any[] = [
    { name: 'Sort By Popularity', id: 1 },
    { name: 'Sort By Average Rating', id: 2 },
    { name: 'Sort By Latest', id: 3 },
  ];
  saveProducts: any[] = [];

  constructor(public service: ProductsService, private render: Renderer2 , public dialog: MatDialog,public snackbar: MatSnackBar) {

  }

  async getCategorysData() {
    this.productsLoader = true;
    let res = await (await this.service.getCategorys()).toPromise();
    if (res.isSuccessFul) {
      this.categoryData = res.Data && res.Data.length > 0 ? [...res.Data] : [];
      this.productsLoader = false;
    }
    else {
      this.productsLoader = false;
      console.log(res.error)
    }
  }

  async getProductsCardsData() {
    this.pageLoader = true;
    let res = await (await this.service.getAllProducts()).toPromise();
    if (res.isSuccessFul) {
      this.productsData = res.Data && res.Data.length > 0 ? [...res.Data] : []
      this.pageLoader = false;
    }
    else {
      this.pageLoader = false;
    }
  }

  selectedProduct(parentData?: any, childData?: any) {
    this.categoryName = parentData && parentData.categoryName ? parentData.categoryName : '';
    this.subCategoryName = childData && childData.subCategoryName ? childData.subCategoryName : '';
    console.log(parentData, childData);
  }

  openNested(parentList: any) {
    parentList.nestedProducts = true;
  }

  openDetail(obj?: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '65vw';
    dialogConfig.disableClose = true;
    dialogConfig.data = obj;
    if(obj){
     const dialogRef = this.dialog.open(DetailsComponent , dialogConfig);
     dialogRef.afterClosed().subscribe( res => {
      if(res){
        console.log(res);
      }
     })
    }
  }
  
  closeNested(parentList: any) {
    parentList.nestedProducts = false;
  }

  search(ev: any) {
    this.searchloader = true;
    setTimeout(() => {
      this.searchloader = false;
    }, 2000)
  }

  onPageChange(ev: any) {
    console.log(ev);
  }

  addCart(data: any){
    if(localStorage.getItem('products')){
      this.saveProducts = JSON.parse(localStorage.getItem('products') || '');
    }
    else{
      this.saveProducts = [];
    }
    if(this.saveProducts && this.saveProducts.length > 0){
      const Index = this.saveProducts.findIndex( x => x.id == data.id );
      if(Index > -1){
        this.snackbar.open('Products Already Add Your Cart...!' , 'Ok' , {
          duration: 4000
        });
      }
      else{
        this.saveProducts.push(data);
        this.snackbar.open('Products Add Your Cart...!' , 'Ok' , {
          duration: 4000
        })
      }
    }
    else{
      this.snackbar.open('Products Add Your Cart...!' , 'Ok' , {
        duration: 4000
      })
      this.saveProducts.push(data);
    }
    localStorage.setItem('products' , JSON.stringify(this.saveProducts));
  }

  ngOnInit() {
    this.getProductsCardsData();
    this.getCategorysData();
    this.categoryName = 'All Categories';
    this.subCategoryName = 'All Sub Categories';
  }

  ngAfterViewInit(){
    
  }
}
