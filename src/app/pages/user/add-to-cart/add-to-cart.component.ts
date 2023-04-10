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
  dataSource : any[] = [];
  model: any = {};
  noRecordMsg: boolean = false;


  constructor(public snackbar: MatSnackBar , public dialog: MatDialog , public router : Router){

  }

  setQty(obj?: any , addBool?: boolean){
    let rowAmount = Number(obj.price.split(' ' , 1)[0]);
    let amount = Number(obj.amount) || rowAmount;
    let count = 1;
    let addNum = 1;
    if(addBool){
      count += Number(addNum);
      rowAmount += amount;
      rowAmount = Number(rowAmount.toFixed(2));
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
        x['qty'] = count
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
   const data = JSON.parse(JSON.stringify(localStorage.getItem('products')||''));
   if(data){
     this.dataSource = data ? [...data] : [];
     if(this.dataSource && this.dataSource.length < 1){
       this.noRecordMsg = true;
      }
      else{
        this.noRecordMsg = false;
      }
    }
    else{
      this.noRecordMsg = true;
    }
  }

}