import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsComponent } from '../details/details.component';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild('nav') slider!: NgImageSliderComponent;
  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) { }

  model: any = {};
  saveData: any[] = [];
  emailValidator = new FormControl('', [Validators.required, Validators.email]);

  cardsArry: any[] = [
    { id: 1, productName: 'Pieces 24', categoryName: 'Tea Set', src: 'handfree.png', price: '34 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 2, productName: 'Pieces 20', categoryName: 'Mug Set', src: 'wipes.jpg', price: '60 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 3, productName: 'Pieces 12', categoryName: 'Dinner Set', src: 'pads.jpg', price: '90.5 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 4, productName: 'Pieces 14', categoryName: 'Sets', src: 'oil-cane.png', price: '24 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 5, productName: 'Pieces 16', categoryName: 'Tea Set', src: 'mouthfresh.jpg', price: '44 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 6, productName: 'Pieces 10', categoryName: 'Mug Set', src: 'booster cabel.png', price: '49 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 7, productName: 'Pieces 8', categoryName: 'Dinner Set', src: 'bike-gloves.png', price: '69.12 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 8, productName: 'Pieces 11', categoryName: 'Sets', src: 'atm roll.jpg', price: '55.1 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' }
  ];

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

  saveCart(obj?: any) {
    // let newObj = {};
    // if (this.saveData && this.saveData.length > 0) {
    //   this.saveData.forEach(x => {
    //     if (x.id == obj.id) {
    //       this.snackbar.open('Products Already Add You Cart...!', 'Ok', {
    //         duration: 4000,
    //       });
    //       return;
    //     }
    //     else{
    //       newObj = obj;
    //     }
    //   })
    // }
    // let data = newObj ? newObj : obj;
    this.saveData.push(obj);
    localStorage.setItem('products', JSON.stringify(this.saveData));
    this.snackbar.open('Products Add To Cart Successfully...!', 'Ok', {
      duration: 4000,
    });
  }

  imgsData: Array<object> = [
    { image: '../../../../assets/imgs/bike-gloves.png', thumbImage: '../../../../assets/imgs/bike-gloves.png', alt: 'alt of Gloves', title: 'Gloves' },
    { image: '../../../../assets/imgs/handfree.png', thumbImage: '../../../../assets/imgs/handfree.png', alt: 'alt of Handsfree', title: 'Handsfree' },
    { image: '../../../../assets/imgs/wipes.jpg', thumbImage: '../../../../assets/imgs/wipes.jpg', alt: 'alt of Wipes', title: 'Wipes' },
    { image: '../../../../assets/imgs/pads.jpg', thumbImage: '../../../../assets/imgs/pads.jpg', alt: 'alt of Pads', title: 'Pads' },
    { image: '../../../../assets/imgs/oil-cane.png', thumbImage: '../../../../assets/imgs/oil-cane.png', alt: 'alt of Oil-Cane', title: 'Oil-Cane' },
    { image: '../../../../assets/imgs/mouthfresh.jpg', thumbImage: '../../../../assets/imgs/mouthfresh.jpg', alt: 'alt of Mouthfresh', title: 'Mouthfresh' },
    { image: '../../../../assets/imgs/booster cabel.png', thumbImage: '../../../../assets/imgs/booster cabel.png', alt: 'alt of Booster Cabel', title: 'Booster Cabel' },
    { image: '../../../../assets/imgs/atm roll.jpg', thumbImage: '../../../../assets/imgs/atm roll.jpg', alt: 'alt of Atm Roll', title: 'Atm Roll' },
    { image: '../../../../assets/imgs/bike-gloves.png', thumbImage: '../../../../assets/imgs/bike-gloves.png', alt: 'alt of Gloves', title: 'Gloves' },
    { image: '../../../../assets/imgs/handfree.png', thumbImage: '../../../../assets/imgs/handfree.png', alt: 'alt of Handsfree', title: 'Handsfree' },
    { image: '../../../../assets/imgs/wipes.jpg', thumbImage: '../../../../assets/imgs/wipes.jpg', alt: 'alt of Wipes', title: 'Wipes' },
    { image: '../../../../assets/imgs/pads.jpg', thumbImage: '../../../../assets/imgs/pads.jpg', alt: 'alt of Pads', title: 'Pads' },
    { image: '../../../../assets/imgs/oil-cane.png', thumbImage: '../../../../assets/imgs/oil-cane.png', alt: 'alt of Oil-Cane', title: 'Oil-Cane' },

  ];

  prevImg(){
    this.slider.prev();
  }

  nextImg(){
    this.slider.next();
  }

}
