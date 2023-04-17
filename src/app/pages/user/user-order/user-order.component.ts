import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

 @Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent {
  @ViewChild('nav') slider!: NgImageSliderComponent;

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

cardArry: any=[
  {src : 'atm roll.jpg' , disc : ' Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Vel, ipsam ' , name : 'Lorem ipsum, Lorem ipsum dolor sit amet.' , price : 'USD 49$' , id : 'Order No #548974125425'},
  {src : 'atm roll.jpg' , disc : ' Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Vel, ipsam ' , name : 'Lorem ipsum, Lorem ipsum dolor sit amet.' , price : 'USD 49$' , id : 'Order No #548974125425'},
  {src : 'atm roll.jpg' , disc : ' Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Vel, ipsam ' , name : 'Lorem ipsum, Lorem ipsum dolor sit amet.' , price : 'USD 49$' , id : 'Order No #548974125425'},
  {src : 'atm roll.jpg' , disc : ' Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Vel, ipsam ' , name : 'Lorem ipsum, Lorem ipsum dolor sit amet.' , price : 'USD 49$' , id : 'Order No #548974125425'}
]

prevImg(){
  this.slider.prev();
}

nextImg(){
  this.slider.next();
}

}
