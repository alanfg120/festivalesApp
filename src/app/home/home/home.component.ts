import { Component, OnInit } from '@angular/core';
import { HomeService } from './../service/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  programacion = [];
  participantes = [];
  emprendedores = [];
  mapa1 : string;
  mapa2 : string;

  constructor(public dataService: HomeService) {}

  ngOnInit(): void {
    this.dataService.getdatos().subscribe((data) => {
     this.mapa1 = data.mapa1;
     this.mapa2 = data.mapa2;
     this.programacion = data.programacion;
     this.participantes = data.participantes;
     this.emprendedores = data.emprendimiento;
    });
  }
}
