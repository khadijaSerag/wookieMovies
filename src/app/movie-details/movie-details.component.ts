import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: any;

  moviedetails: any;

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(_ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {
    //.............. movie ...................
    this.movieId = _ActivatedRoute.snapshot.params.id; // ده عشان لما اتك على صورة فى صفحة الهوم يجبلى الاى دى بتاعها فى صفحة الديتيلز
    this._MoviesService.getMovieDetails(this.movieId).subscribe((data) => {

      this.moviedetails = data;
      console.log(this.moviedetails)
    });

  }

  ngOnInit(): void {
  }

}
