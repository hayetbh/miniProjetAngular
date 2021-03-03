import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-espace-formateur',
  templateUrl: './espace-formateur.component.html',
  styleUrls: ['./espace-formateur.component.css']
})
export class EspaceFormateurComponent implements OnInit {

  login:String;
  password:String;
  emailvalide:boolean;
  passvalide:boolean=false;
  
  constructor(private dbService: NgxIndexedDBService,private router:Router) { dbService.currentStore = 'formateur'; }

  ngOnInit() {
   
  }


  onSubmit(form: NgForm) {
    
    this.login =form.value["username"];
    this.password =form.value["password"];
    this.dbService.getByIndex('email',this.login).then(
      person => {
         // console.log();
          if( person!=undefined)
          {
            this.emailvalide=false;
                
                  if(person.password==this.password)
                  {
                    console.log(person);
                    this.passvalide=false;
                    localStorage.setItem('Session_Formateur',person.id);
                    this.router.navigate(['']);
                    
                  }
                  else
                  {
                    this.passvalide=true;
                    this.router.navigate(['/login'])
                  }
        }

        else
        {
     this.emailvalide=true;
     this.router.navigate(['/login'])

        }

          
      },
      error => {
          console.log(error);
      }
  );
}



}
