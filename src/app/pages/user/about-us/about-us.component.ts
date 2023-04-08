import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  @ViewChild('nav') slider!: NgImageSliderComponent;

  deliveryData: any []=[
    {text : 'Delivery Charges 50Rs.'},
    {text : 'Delivery Duration: 1 To 2 Months'},
    {text : 'Cash On Delivery.'},
    {text : 'Parsell Not Exchangable After Delivery Boy Gone.'},
    {text : 'If Wrong Parsell Delivered You Can Exchange It.'},
    {text : 'Office Timing : 9:00 AM To 5:00 PM'},
    {text : 'Complaint Timing : 24/7'}
  ];

  // clientsData: any[] = [
  //   { src: 'wipes.jpg' },
  //   { src: 'pads.jpg' },
  //   { src: 'bike-gloves.png' }
  // ];
  
  trustedData: any[] = [
    { icon: 'local_shipping' , text :'Fast Service'},
    { icon: 'inventory_2' , text :'Trusted Company'},
    { icon: 'workspace_premium' , text :'Quality Products'},
    { icon: 'recommended' , text :'Satisfaction Rivisions'},
    { icon: 'rate_review' , text :'Review Us'},
    { icon: 'currency_exchange' , text :'Budget Oriented'},
    { icon: 'card_membership' , text :'Membership'},
    { icon: 'lan' , text :'Connectivity'},
  ];

  imgsData: Array<object> = [
    { image: '../../../../assets/imgs/bike-gloves.png', thumbImage: '../../../../assets/imgs/bike-gloves.png', alt: 'alt of Gloves', title: 'Gloves' },
    { image: '../../../../assets/imgs/handfree.png', thumbImage: '../../../../assets/imgs/handfree.png', alt: 'alt of Handsfree', title: 'Handsfree' },
    { image: '../../../../assets/imgs/wipes.jpg', thumbImage: '../../../../assets/imgs/wipes.jpg', alt: 'alt of Wipes', title: 'Wipes' },
    { image: '../../../../assets/imgs/pads.jpg', thumbImage: '../../../../assets/imgs/pads.jpg', alt: 'alt of Pads', title: 'Pads' },
    { image: '../../../../assets/imgs/oil-cane.png', thumbImage: '../../../../assets/imgs/oil-cane.png', alt: 'alt of Oil-Cane', title: 'Oil-Cane' },
    { image: '../../../../assets/imgs/mouthfresh.jpg', thumbImage: '../../../../assets/imgs/mouthfresh.jpg', alt: 'alt of Mouthfresh', title: 'Mouthfresh' },
    { image: '../../../../assets/imgs/booster cabel.png', thumbImage: '../../../../assets/imgs/booster cabel.png', alt: 'alt of Booster Cabel', title: 'Booster Cabel' },
    { image: '../../../../assets/imgs/atm roll.jpg', thumbImage: '../../../../assets/imgs/atm roll.jpg', alt: 'alt of Atm Roll', title: 'Atm Roll' }
];

  prevImg(){
    this.slider.prev();
  }

  nextImg(){
    this.slider.next();
  }

}