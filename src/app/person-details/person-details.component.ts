import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  personId: any;
  persondetails: any;
  trending: any;
  
  personDetails: any;
  savedData: any;
  alsoKnownFor: any[] = [];
  page: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {

    //.............. pepole ...................
    this.knownfor(this.personId);
    // this.people.savepage();
    
    // .........................................................
  }

 

  knownfor(personId:any) {
    personId = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getPepoleDetails(personId).subscribe((data) => {

      this.persondetails = data;
      console.log("person Details", this.persondetails);
      this.trending = this.personId.trendingPerson;
      this.personDetails = this.trending.filter((e: any) => {
        return personId == e.id;
      })
      console.log("trending Details:", this.trending);
      console.log(personId);
      console.log("person:", this.personDetails);
    });

  }

  ngOnInit(): void {
  }

}
