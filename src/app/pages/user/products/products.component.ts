import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Renderer2 } from '@angular/core';

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
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { name: 'Plates' , desc: 'Lorem ipsum dolor sit amet consectetur.' }
  ];
  constructor( public service: ProductsService , private render: Renderer2) {

  }

  async getCategorysData(){
   this.productsLoader = true;
   let res = await (await this.service.getCategorys()).toPromise();
   if(res.isSuccessFul){
    this.categoryData = res.Data && res.Data.length > 0 ? [...res.Data] : []
    this.productsLoader = false;
   }
   else{
    this.productsLoader = false;
    console.log(res.error)
   }
  }

  selectedProduct(parentData: any, childData: any){
    this.categoryName = parentData.categoryName;
    this.subCategoryName = childData.subCategoryName;
    console.log( parentData , childData );
  }

  openNested(parentList: any){
    parentList.nestedProducts = true;
  }

  closeNested(parentList: any){
    parentList.nestedProducts = false;
  }

  search(ev: any){
    this.searchloader = true;
    setTimeout( ()=> {
      this.searchloader = false;
    }, 2000 )
  }

  onPageChange(ev: any){
    console.log(ev);
  }

  ngOnInit(){
    this.getCategorysData();
  }
}
