import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  tvId: any;

  tvdetails: any;

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(_ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {
    //.............. movie ...................
    this.tvId = _ActivatedRoute.snapshot.params.id; // ده عشان لما اتك على صورة فى صفحة الهوم يجبلى الاى دى بتاعها فى صفحة الديتيلز
    this._MoviesService.getTvDetails(this.tvId).subscribe((data) => {

      this.tvdetails = data;
      console.log(this.tvdetails)
    });

  }


  ngOnInit(): void {
  }

}
