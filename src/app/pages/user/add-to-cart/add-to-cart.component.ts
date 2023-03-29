import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  displayedColumns: string[] = ['name', 'price', 'qty', 'total'];
  dataSource = Data;

  constructor(public snackbar: MatSnackBar){

  }

  setQty(obj: any , addBool: boolean){
    let count = Number(obj.qty) ?? 0;
    let addNum = 1;
    if(addBool){
      count += addNum;
    }
    else{
      if(count == 0){
        this.snackbar.open('Quantity Must Be Greater Than 0' , 'OK' , {
          duration: 3000
        });
      }
      else{
        count = count - addNum;
      }
    }
    this.dataSource.forEach((x ,i) => {
      if(x.id == obj.id){
        x.qty = count
      }
    })
  }

}

export interface cartData {
  id: number,
  name: string;
  price: string;
  qty: number;
  total: string;
}

const Data: cartData[] = [
  { id: 1 , name: "70 Pieces Dinner Set", price: '45.3 $', qty: 1, total: '45.3 $'},
  { id: 2 , name: "12 Pieces Dinner Set", price: '12.9 $', qty: 1, total: '12.9 $'},
  { id: 3 , name: "24 Pieces Dinner Set", price: '27.6 $', qty: 1, total: '27.6 $'},
  { id: 4 , name: "48 Pieces Dinner Set", price: '35 $', qty: 1, total: '35 $'},
  { id: 5 , name: "30 Pieces Dinner Set", price: '31.7 $', qty: 1, total: '31.7 $'}
];

