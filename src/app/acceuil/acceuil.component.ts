import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
formation:Object[];


  constructor(private dbService: NgxIndexedDBService,private router:Router)
  { dbService.currentStore = 'formation'; }

 
  IsCandiat:boolean;
  NotIsCandiat:boolean;
  ngOnInit() {

    console.log(localStorage.getItem('Session'));
    if(localStorage.getItem('Session')==null)
    {
      this.NotIsCandiat=true;
      this.IsCandiat=false;
    }
    else
    {
      this.NotIsCandiat=false;
      this.IsCandiat=true;
    }

    this.dbService.getAll().then(
      forma => { 
        this.formation=forma;
        //console.log(forma);
       
      },  
      error => {
          console.log(error);
      }
  );


  }
  detaille(id:number)
  {
    this.router.navigate(['/Detaille_Formation/',id]);
;  }

}
