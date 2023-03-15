import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


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

  constructor(private router: Router , private responsive: BreakpointObserver){

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

  showMobile(){
    this.forMobileIcon = true;
  }

  showMobileClose(){
    this.forMobileIcon = false;
  }

  ngOnInit(): void{
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isMobile = false; 
        if (result.matches) {
          this.isMobile = true;
        }     
    });
  }
  
}
