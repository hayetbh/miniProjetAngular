import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-candidat',
  templateUrl: './espace-candidat.component.html',
  styleUrls: ['./espace-candidat.component.css']
})
export class EspaceCandidatComponent implements OnInit {

  constructor(private dbService: NgxIndexedDBService,private router:Router)
  { dbService.currentStore = 'Candidat_Session_Formation'; }
  ngOnInit() {
    this.dbService.getByIndex('id_candidat', localStorage.getItem('Session') ).then(
      person => {
          console.log(person);
          
      },
      error => {
          console.log(error);
      }
  );
  }



}
