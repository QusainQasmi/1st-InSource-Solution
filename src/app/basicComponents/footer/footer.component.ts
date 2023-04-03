import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  listArry: any[] = [
    { name: 'Dinner Sets' , icon: 'done' },
    { name: 'Mugs Sets'  , icon: 'done'},
    { name: 'Plates'  , icon: 'done'},
    { name: 'Water Sets'  , icon: 'done'},
    { name: 'Bowls' , icon: 'done' }
  ]
  listArry1: any[] = [
    { name: 'Home', icon: 'done' ,route: '/user/main'},
    { name: 'About us', icon: 'done' ,route: '/user/aboutUs'},
    { name: 'Products', icon: 'done' ,route: '/user/products'},
    { name: 'Contact', icon: 'done' ,route: '/user/contact'},
    { name: 'FAQs', icon: 'done' ,route: '/user/faqs'}
  ]
  listArry2: any[] = [
    { name: '+ 785 945 568 584', icon: 'phone' },
    { name: '+ 854 694 035', icon: 'phone' },
    { name: 'shahkakTraders@gmail.com', icon: 'email' },
    { name: 'shakak123@gmail.com', icon: 'email' },
    { name: '28/A Street, New York, USA', icon: 'home' }

  ]


}

