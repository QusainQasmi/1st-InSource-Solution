import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  deliveryData: any []=[
    {text : 'Delivery Charges 50Rs.'},
    {text : 'Delivery Duration: 1 To 2 Months'},
    {text : 'Cash On Delivery.'},
    {text : 'Parsell Not Exchangable After Delivery Boy Gone.'},
    {text : 'If Wrong Parsell Delivered You Can Exchange It.'},
    {text : 'Office Timing : 9:00 AM To 5:00 PM'},
    {text : 'Complaint Timing : 24/7'}
  ];

  clientsData: any[] = [
    { src: 'PC_hotel.png' },
    { src: 'Honda Logo.png' },
    { src: 'PIA Logo.png' }
  ];
  
  trustedData: any[] = [
    { icon: 'local_shipping' , text :'Fast Service'},
    { icon: 'inventory_2' , text :'Trusted Company'},
    { icon: 'workspace_premium' , text :'Quality Products'},
    { icon: 'recommended' , text :'Satisfaction Rivisions'},
    { icon: 'rate_review' , text :'Review Us'},
    { icon: 'currency_exchange' , text :'Budget Oriented'},
    { icon: 'card_membership' , text :'Membership'},
    { icon: 'lan' , text :'Connectivity'},
  ]
}
