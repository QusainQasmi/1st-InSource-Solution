import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
  
  imgBorder: boolean = false;
  imgsData: any =[
    {src : 'card1.png'},
    {src : 'card2.png'},
    {src : 'card3.png'},
    {src : 'card2.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'},
    {src : 'card1.png'}
  ];

  setImg(obj?: any , isMove?: boolean){
    event?.stopImmediatePropagation();
    if(isMove){
      obj.imgBorder = true;
    }
    else{
      obj.imgBorder = false;
    }
  }

}
