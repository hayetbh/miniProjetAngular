import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  login:string;
  password:string;
    constructor(private route:ActivatedRoute,private router:Router) { 
      route.params.subscribe(params=>{this.login=params['id']});
      route.params.subscribe(params=>{this.password=params['id2']});
  
    }
  
    ngOnInit() {
      if(this.login!="user-admin"&&this.password!="admin-2019")
      {
        alert("vous n'êtes pas autorisé");
        this.router.navigate(['']);
      }
      else
      {
        if( localStorage.getItem("Session")!=null &&  localStorage.getItem("Session_Formateur")!=null)
        {
          alert("vous n'êtes pas autorisé merci de déconnecter les comptes");
          this.router.navigate(['']);
        }
        localStorage.setItem("IsAdmin","true");
        
      }
    }
  
}
