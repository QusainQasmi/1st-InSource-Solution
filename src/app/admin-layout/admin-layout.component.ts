import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  @ViewChild ('leftSidenav', { static: true } ) leftSidenav: any;
  opened = true
  searchText: any;
  filteredData: any[] = [];
  searchVal: any;
  forms: any[] = [
    {
      pagesName:'Customers',
      icon: 'groups',
      route:'admin/customer' 
    },
    {
      pagesName:'Category',
      icon: 'category',
      route:'admin/category'
    },
    {
      pagesName:'Products',
      icon: 'production_quantity_limits',
      route:'admin/products' 
    },
    {
      pagesName:'Orders',
      icon: 'list_alt',
      route:'admin/order' 
    },
    {
      pagesName:'Sub Category',
      icon: 'category',
      route:'admin/subCategory'
    },
    {
      pagesName:'FAQ Settings',
      icon: 'quiz',
      route:'admin/faqsetting' 
    },
    {
      pagesName:'Notifications Settings',
      icon: 'notifications',
      route:'admin/notificationSetting' 
    },
    
  ];

  constructor(public route:Router, public matSnackbar:MatSnackBar) { }

  get userInit(){
    let init:string;
    init = localStorage.getItem("adminName") || '';
    return init
  }

  navigate(item:any){
    this.route.navigate([item.route])
  }

  async logOut(){
   await this.route.navigate(['adminLogin'])
    localStorage.removeItem('admin');
    localStorage.removeItem('adminName');
  }

  ngOnInit(): void {
    
    if(!localStorage.getItem('adminName')){
      this.route.navigate(['adminLogin']);
      this.matSnackbar.open('You have Already been Logout or Session Expire!', 'Ok' , {
        duration: 3500
      })
    }
   
  }

}
