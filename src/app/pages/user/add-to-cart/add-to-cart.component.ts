import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @ViewChild('orderForm') orderForm: TemplateRef<any> | any;
  dataSource : any[] = [
    {id: 1, src: 'card3.png', productName: 'Pieces 23', categoryName: 'Dinner Sets', desc: 'Lorem ipsum dolor sit amet. dolor sit amet.', price: '45.76 $', qty:'1' , amount: 45.76},
    {id: 2, src: 'card3.png', productName: 'Pieces 13',categoryName: 'Mug Sets', desc: 'Lorem ipsum dolor sit amet. dolor sit amet.', price: '32.46 $', qty:'1' , amount: 32.46},
    {id: 3, src: 'card3.png', productName: 'Pieces 18',categoryName: 'Water Sets', desc: 'Lorem ipsum dolor sit amet. dolor sit amet.', price: '44.31 $', qty:'1' , amount: 44.31},
    {id: 4, src: 'card3.png', productName: 'Pieces 20',categoryName: 'Bowls', desc: 'Lorem ipsum dolor sit amet. dolor sit amet.', price: '50 $', qty:'1' ,amount: 50},
    {id: 5, src: 'card3.png', productName: 'Pieces 9',categoryName: 'Tea Sets', desc: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet.', price: '52.1 $', qty:'1' , amount: 52.1}

  ];
  model: any = {};


  constructor(public snackbar: MatSnackBar , public dialog: MatDialog , public router : Router){

  }

  setQty(obj?: any , addBool?: boolean){
    let amount = Number(obj.amount);
    let rowAmount = Number(obj.price.split(' ' , 1)[0]);
    let count = Number(obj.qty) ?? 0;
    let addNum = 1;
    if(addBool){
      count += addNum;
      rowAmount += amount;
      rowAmount = Number(rowAmount.toFixed(2))
    }
    else{
      if(count == 0){
        this.snackbar.open('Quantity Must Be Greater Than 0' , 'OK' , {
          duration: 3000
        });
         rowAmount = 0;
         rowAmount.toFixed(2)
      }
      else{
        count = count - addNum;
        rowAmount = rowAmount - amount;
        rowAmount = Number(rowAmount.toFixed(2))
      }
    }
    this.dataSource.forEach((x ,i) => {
      if(x.id == obj.id){
        x.qty = count
        x.price = `${rowAmount} $`
      }
    })
  }

  openDetail(obj?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '65vw';
    dialogConfig.disableClose = true;
    dialogConfig.data = obj;
    if (obj) {
      const dialogRef = this.dialog.open(DetailsComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(res => {
        if (res) {
          console.log(res);
        }
      })
    }
  }

  routeToCheckout(){
    this.router.navigate(['user/checkout']);
  }

  ngOnInit() {

  }

}