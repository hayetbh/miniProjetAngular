import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(  private router:Router) {  }

  IsFormateur:boolean;
  IsCandiat:boolean;
  NotIsCandiat:boolean;
 public ngOnInit() {


    if(localStorage.getItem('Session')!=null)
    {
      this.NotIsCandiat=false;
      this.IsCandiat=true;
    }
    else if(localStorage.getItem('Session_Formateur')!=null)
    {
      this.NotIsCandiat=false;
      this.IsFormateur=true;
    }
    else
    {
      this.NotIsCandiat=true;
      this.IsCandiat=false;
      this.IsFormateur=false;
    }
  }

  Logout()
  {

    localStorage.removeItem('Session'); 
    localStorage.removeItem('Session_Formateur');
    this.router.navigate(['/login']);

  }
}
