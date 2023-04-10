import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
  
  imgBorder: boolean = false;
  imgsData: any =[
    {src : 'atm roll.jpg'},
    {src : 'booster cabel.png'},
    {src : 'bike-gloves.png'},
    {src : 'booster cabel.png'},
    {src : 'bike-gloves.png'},
    {src : 'booster cabel.png'},
    {src : 'bike-gloves.png'},
    {src : 'atm roll.jpg'},
    {src : 'bike-gloves.png'},
    {src : 'atm roll.jpg'},
    {src : 'booster cabel.png'},
    {src : 'atm roll.jpg'},
    {src : 'bike-gloves.png'},
    {src : 'atm roll.jpg'},
    {src : 'booster cabel.png'},
    {src : 'atm roll.jpg'},
    {src : 'booster cabel.png'},
    {src : 'bike-gloves.png'},
  ];

  setImg(obj?: any){
    event?.stopImmediatePropagation();
    if(obj.imgBorder){
      obj.imgBorder = false;
    }
    else{
      obj.imgBorder = true;
    }
  }

}
