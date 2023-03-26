import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  model: any = {};
  emailValidator = new FormControl('', [Validators.required, Validators.email]);

  cardsArry: any[] = [
    {name : 'Tea Set' , src : 'card1.png', price: '34 $'},
    {name : 'Mug Set' , src : 'card2.png', price: '60 $'},
    {name : 'Dinner Set' , src : 'card3.png', price: '90.5 $'},
    {name : 'Sets' , src : 'card4.jpg', price: '24 $'},
    {name : 'Tea Set' , src : 'card1.png', price: '44 $'},
    {name : 'Mug Set' , src : 'card2.png', price: '49 $'},
    {name : 'Dinner Set' , src : 'card3.png', price: '69.12 $'},
    {name : 'Sets' , src : 'card4.jpg', price: '55.1 $'}
  ]
}
