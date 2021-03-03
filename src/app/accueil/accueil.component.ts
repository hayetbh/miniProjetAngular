import { Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements  OnInit{
 
  model = {
    left: true,
    middle: false,
    right: false
};

focus: any;
focus1: any;
constructor() { }

ngOnInit() {}
}