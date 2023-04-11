import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

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

  constructor(public service: ProductsService, private render: Renderer2 , public dialog: MatDialog) {

  }

  async getCategorysData() {
    this.productsLoader = true;
    let res = await (await this.service.getCategorys()).toPromise();
    if (res.isSuccessFul) {
      this.categoryData = res.Data && res.Data.length > 0 ? [...res.Data] : [];
      if(this.categoryData && this.categoryData.length > 0){
        this.categoryName = this.categoryData[0].categoryName ?? '';
        if(this.categoryData && this.categoryData[0] && this.categoryData[0].subCategory && this.categoryData[0].subCategory[0]){
          this.subCategoryName = this.categoryData[0].subCategory[0].subCategoryName ?? '';
        }
      }
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

  ngOnInit() {
    this.getProductsCardsData();
    this.getCategorysData();
  }

  ngAfterViewInit(){
    
  }
}
