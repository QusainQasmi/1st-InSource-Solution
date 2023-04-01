import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  model: any = {};
  searchloader: boolean = false;
  categoryName: string | any;
  subCategoryName: string | undefined;
  categoryData: any[] = [];
  nestedProducts: boolean = false;
  productsLoader: boolean = false;
  productsData: any[] = [
    {id: 1, productName : 'Pieces 24' , categoryName: 'Tea Set' , src : 'card1.png', price: '34 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 2, productName : 'Pieces 20' , categoryName: 'Mug Set' , src : 'card2.png', price: '60 $' ,desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 3, productName : 'Pieces 12' , categoryName: 'Dinner Set' , src : 'card3.png', price: '90.5 $' ,desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 4, productName : 'Pieces 14' , categoryName: 'Sets' , src : 'card4.jpg', price: '24 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 5, productName : 'Pieces 16' , categoryName: 'Tea Set' , src : 'card1.png', price: '44 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 7, productName : 'Pieces 10' , categoryName: 'Mug Set' , src : 'card2.png', price: '49 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 8, productName : 'Pieces 8' , categoryName: 'Dinner Set' , src : 'card3.png', price: '69.12 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 9, productName : 'Pieces 11' , categoryName: 'Sets' , src : 'card4.jpg', price: '55.1 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 10, productName : 'Pieces 14' , categoryName: 'Sets' , src : 'card4.jpg', price: '24 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 11, productName : 'Pieces 16' , categoryName: 'Tea Set' , src : 'card1.png', price: '44 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 12, productName : 'Pieces 10' , categoryName: 'Mug Set' , src : 'card2.png', price: '49 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 13, productName : 'Pieces 8' , categoryName: 'Dinner Set' , src : 'card3.png', price: '69.12 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 14, productName : 'Pieces 14' , categoryName: 'Sets' , src : 'card4.jpg', price: '24 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 15, productName : 'Pieces 16' , categoryName: 'Tea Set' , src : 'card1.png', price: '44 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 16, productName : 'Pieces 10' , categoryName: 'Mug Set' , src : 'card2.png', price: '49 $' , desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 17, productName : 'Pieces 8' , categoryName: 'Dinner Set' , src : 'card3.png', price: '69.12 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
    {id: 18, productName : 'Pieces 11' , categoryName: 'Sets' , src : 'card4.jpg', price: '55.1 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'}
  ];
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
      this.categoryData = res.Data && res.Data.length > 0 ? [...res.Data] : []
      this.productsLoader = false;
    }
    else {
      this.productsLoader = false;
      console.log(res.error)
    }
  }

  selectedProduct(parentData: any, childData: any) {
    this.categoryName = parentData.categoryName;
    this.subCategoryName = childData.subCategoryName;
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
    this.getCategorysData();
  }
}
