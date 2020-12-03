import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas = [];/* [
    {
      titulo: "Ready Player One",
      anio: 2018,
      director: "Steven Spielberg",
      imagen: "https://ae01.alicdn.com/kf/HTB1le4dluuSBuNjy1Xcq6AYjFXap/Decoraci-n-de-pared-de-lona-personalizada-p-ster-de-pel-cula-Ready-Player-One-Wall.jpg"
    },
    {
      titulo: "TRON Legacy",
      anio: 2010,
      director: "Joseph Kosinski",
      imagen: "https://images-na.ssl-images-amazon.com/images/I/91NeDaqrX3L._SL1500_.jpg"
    }
  ]; */
  
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    // this.peliculasService.getPeliculas();
  }

}
