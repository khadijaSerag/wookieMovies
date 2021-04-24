import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  imgPrefix: any = "https://image.tmdb.org/t/p/w500/";
  channel: any;
  term: any = "";


  usersTv: any[] = [];
  trendingMovies: any[] = [];
  trendingTvs: any[] = [];
  trendingPersons: any[] = [];

  constructor(public _MoviesService: MoviesService) {

    this.channel = _MoviesService.getTrending("movie").subscribe(
      (data) => {
        this.trendingMovies = data.results;
      }
    )

    _MoviesService.getTrending("tv").subscribe(
      (data) => {
        this.trendingTvs = data.results;
      }
    )

    _MoviesService.getTrending("person").subscribe(
      (data) => {
        this.trendingPersons = data.results;
      }
    )
  }

  ngOnInit(): void {

  }

  startDragging(event:any){
    console.log(event);
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }


  ngOnDestroy() {
    this.channel.unsubscribe();
    console.log("tv component destroied");
  }

}
