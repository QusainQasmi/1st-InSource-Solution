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
  emailValidator = new FormControl('', [Validators.required, Validators.email]);

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

  prevImg(){
    this.slider.prev();
  }

  nextImg(){
    this.slider.next();
  }

}
