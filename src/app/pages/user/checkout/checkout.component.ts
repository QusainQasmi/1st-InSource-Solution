import { Component } from '@angular/core';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  displayedColumns: string[] = ['Action' , 'ProName', 'ProPrice', 'ProQty', 'Total'];
  dataSource = CheckOutData;

  // cityArr : any = [] = [
  //   {'Karachi'},
  //   {'Lahore'},
  //   {'Islamabad'}
  // ]
}

export interface CheckOutElement{
  ProName: string;
  ProPrice: string;
  ProQty: string;
  Total: string;
}
const CheckOutData : CheckOutElement[] = [
  {ProName : 'Shampoo' , ProPrice : '350 : Rs.' , ProQty : '1' , Total : '350 : Rs.'},
  {ProName : 'Oil Cane' , ProPrice : '700 : Rs.' , ProQty : '2' , Total : '1400 : Rs.'},
  {ProName : 'Roll Papper' , ProPrice : '250 : Rs.' , ProQty : '3' , Total : '750 : Rs.'},
  {ProName : 'Tooth Paste' , ProPrice : '700 : Rs.' , ProQty : '4' , Total : '1400 : Rs.'},
  {ProName : 'Mouth Freshner' , ProPrice : '700 : Rs.' , ProQty : '5' , Total : '1400 : Rs.'},
  {ProName : 'Fair & Lovely' , ProPrice : '700 : Rs.' , ProQty : '6' , Total : '1400 : Rs.'}
]

