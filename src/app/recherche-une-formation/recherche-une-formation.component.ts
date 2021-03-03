import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-recherche-une-formation',
  templateUrl: './recherche-une-formation.component.html',
  styleUrls: ['./recherche-une-formation.component.css']
})
export class RechercheUneFormationComponent implements OnInit {
  @ViewChild('affiche',{static: true}) private myElementContainer:ElementRef;
  v:String;
  table:String[];
  formation:Object[];
  constructor(private dbService: NgxIndexedDBService,private router:Router) { dbService.currentStore = 'formation'; }

  ngOnInit() {
  }
  recherche(text:string)
  {
    this.formation=[];
    this.dbService.getAll().then(
      people => {
         // console.log(people);
         for(var i=0;i<people.length;i++)
         {
           this.v="";
           this.table=[];
         this.v=people[i]["Mots_Cle"];
         this.table=this.v.split(",");
         for(var j=0;j<this.table.length;j++)
         {
           if(this.table[j]==text && text!="")
           {
             alert(this.table[j]);
            this.formation.push(people[i]);
           }
         } 
     

        //  console.log(str.includes(text));
        
         }
         console.log(this.formation);
         this.ngOnInit();
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
