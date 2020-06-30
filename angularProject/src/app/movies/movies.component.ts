import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
//import { fakeMovies } from '../fake-movies';
import { MovieService } from '../movie.service';



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
  //movies = fakeMovies;
  movies: Movie[];

  constructor(private movieService: MovieService) {
 
   }
   getMoviesFromService(): void {
     this.movies = this.movieService.getMovies();
   }
  ngOnInit(): void {
    this.getMoviesFromService();
  }

  //Action when select a movie in the list movie
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log( `selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }
}
