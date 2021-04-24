import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  channel: any;
  term: any = "";

  constructor(public _MoviesService: MoviesService) { }

  ngOnInit(): void {
  }

}
