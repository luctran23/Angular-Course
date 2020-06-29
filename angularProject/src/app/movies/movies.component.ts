import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "Star war",
    releaseYear: 2010 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
