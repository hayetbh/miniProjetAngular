import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-des-cndidat-inscrit',
  templateUrl: './liste-des-cndidat-inscrit.component.html',
  styleUrls: ['./liste-des-cndidat-inscrit.component.css']
})
export class ListeDesCndidatInscritComponent implements OnInit {
candidat:Object[];
  constructor(private dbService: NgxIndexedDBService,private router:Router)
  { dbService.currentStore = 'candidat'; }


  ngOnInit() {
    if(localStorage.getItem("IsAdmin")==null)
    {
      alert("vous n'êtes pas autorisé");
      this.router.navigate(['']);
    }
    else
    {
    this.dbService.getAll().then(
      forma => { 
        this.candidat=forma;
        //console.log(forma);
      },  
      error => {
          console.log(error);
      }
  );
  }
  }
}
