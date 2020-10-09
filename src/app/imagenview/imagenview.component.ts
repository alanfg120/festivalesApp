import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/service/home.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-imagenview',
  templateUrl: './imagenview.component.html',
  styleUrls: ['./imagenview.component.css'],
})
export class ImagenviewComponent implements OnInit {
  image: string;
  loading: boolean;
  constructor(
    public service: HomeService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = +this.rutaActiva.snapshot.params.id;
    const categoria = this.rutaActiva.snapshot.params.categoria;
    const index = +this.rutaActiva.snapshot.params.index;
    this.loading = true;
    this.service.getImagen().subscribe((data) => {
        if (categoria === 'programacion'){
             data.programacion.forEach(e => {
                if (e.id === id){
                  this.image = e.imagen;
                  this.loading = false;
                }
             });
        }
        if (categoria === 'participantes'){
             data.participantes.forEach(e => {
                if (e.id === id){
                  this.image = e.imagenes[index];
                  this.loading = false;
                }
             });
        }
        if (categoria === 'emprendedores'){
             data.emprendimiento.forEach(e => {
                if (e.id === id){
                  this.image = e.imagenes[index];
                  this.loading = false;
                }
             });
        }
    });
  }
}
