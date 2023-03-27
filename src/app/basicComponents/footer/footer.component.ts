import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  listArry: any[] = [
    { name: 'Brand Identity' , icon: 'done' },
    { name: 'Package Design'  , icon: 'done'},
    { name: 'Pattern Design'  , icon: 'done'},
    { name: 'T-shirt Print'  , icon: 'done'},
    { name: 'Book Covers'  , icon: 'done'},
    { name: 'CD-DVD Covers' , icon: 'done' }
  ]
  listArry1: any[] = [
    { name: 'Home', icon: 'done' },
    { name: 'About us', icon: 'done' },
    { name: 'Services', icon: 'done' },
    { name: 'Products', icon: 'done' },
    { name: 'Category', icon: 'done' },
    { name: 'FAQs', icon: 'done' }
  ]
  listArry2: any[] = [
    { name: '+ 785 945 568 584', icon: 'phone' },
    { name: '+ 854 694 035', icon: 'phone' },
    { name: 'shahkakTraders@gmail.com', icon: 'email' },
    { name: 'shakak123@gmail.com', icon: 'email' },
    { name: '28/A Street, New York, USA', icon: 'home' }

  ]


}

