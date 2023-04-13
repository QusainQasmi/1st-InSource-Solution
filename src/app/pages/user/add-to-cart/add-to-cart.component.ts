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
    let duplicateData = this.dataSource;
    let amount = Number(obj.price);
    let count = 1;
    duplicateData.forEach(x => {
      if(addBool){
        x.price =+ amount;
        count = count + 1;
        x['qty'] = count; 
      }
      else{
        if(count == 1){
          this.snackbar.open('Quantity Must Be Equal To 1...!' , 'Ok' , {
            duration: 3000
          }) 
        }
        else{
          x.price - amount;
          count = count - 1;
        }
      }
    })
    this.dataSource = duplicateData;
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
   const data = JSON.parse(localStorage.getItem('products')||'');
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
    this.dataSource.forEach(x => {
      x['qty'] = 1;
    })
    console.log(this.dataSource)
  }

}