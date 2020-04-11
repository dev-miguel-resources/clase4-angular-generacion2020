import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

//SERVICES
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  //DECLARACIONES
  public movie = null;


  constructor(
    public location: Location,
    private router: ActivatedRoute,
    public movieService: MovieService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.getMovieDetail(routeParams.movie);
    });
  }

  public getMovieDetail(movieId: string){
    this.movieService.getMovieById(movieId)
      .pipe(
        take(1)
      )
      .subscribe(
        res => {
          this.movie = res;
          console.log(this.movie);
        },
        err => {
          console.log(err);
        },
        () => {
          //petición finalizada
        });
  }

}
