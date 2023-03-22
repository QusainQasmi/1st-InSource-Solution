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
    {name : 'Tea Set' , src : 'card1.png', desc : '$ • American, Restaurant' , rate : '4.5 (413)'},
    {name : 'Mug Set' , src : 'card2.png', desc : '$ • American, Restaurant' , rate : '4.5 (413)'},
    {name : 'Dinner Set' , src : 'card3.png', desc : '$ • American, Restaurant' , rate : '4.5 (413)'},
    {name : 'Sets' , src : 'card4.jpg', desc : '$ • American, Restaurant' , rate : '4.5 (413)'},
    {name : 'Tea Set' , src : 'card1.png', desc : '$ • American, Restaurant' , rate : '4.5 (413)'},
    {name : 'Mug Set' , src : 'card2.png', desc : '$ • American, Restaurant' , rate : '4.5 (413)'},
    {name : 'Dinner Set' , src : 'card3.png', desc : '$ • American, Restaurant' , rate : '4.5 (413)'},
    {name : 'Sets' , src : 'card4.jpg', desc : '$ • American, Restaurant' , rate : '4.5 (413)'}
  ]
}
