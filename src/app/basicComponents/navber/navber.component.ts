import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent implements OnInit {

  model: any = {};
  isMobile: boolean = false;
  forMobileIcon: boolean = false;
  loader: boolean = false;
  isLogin: boolean = false;
  loginUserName: string = '';

  constructor(private router: Router , private responsive: BreakpointObserver , public snackbar: MatSnackBar){

  }

  search(ev: any){
    this.loader = true;
    setTimeout( ()=> {
      this.loader = false;
    }, 2000 )
  }

  pagesRoutes(routeVal: string){
    if(routeVal == 'home'){
      this.router.navigate(['/user/main']);
    }
    else if(routeVal == 'aboutUs'){
      this.router.navigate(['/user/aboutUs']);
    }
    else if(routeVal == 'products'){
      this.router.navigate(['/user/products']);
    }
    else if(routeVal == 'faqs'){
      this.router.navigate(['/user/faqs']);
    }
    else if(routeVal == 'contact'){
      this.router.navigate(['/user/contact']);
    }
    else{
      this.router.navigate(['/user/main']);
    }
  }

  routeCart(){
    this.router.navigate(['/user/cart']);
  }

  logOutUser(){
    // await this.route.navigate(['authentication/login'])
    this.isLogin = false; 
    localStorage.removeItem('user');
     localStorage.removeItem('username');
     this.snackbar.open('Log Out Successfully...!' , 'OK' , {
      duration: 2500
     });
  }

  showMobile(){
    this.forMobileIcon = true;
  }

  showMobileClose(){
    this.forMobileIcon = false;
  }

  loginInfo(){
    const userName = localStorage.getItem('username');
    if(userName){
     this.isLogin = true;
     this.loginUserName = userName
    }
  }

  ngOnInit(): void{
    this.loginInfo();
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isMobile = false; 
        if (result.matches) {
          this.isMobile = true;
        }     
    });
  }
  
}
