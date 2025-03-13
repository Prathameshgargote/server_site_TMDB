import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imovie, singlemovie } from 'src/app/model/movies';
import { MovietabaleService } from 'src/app/services/movietabale.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieObj!:singlemovie
  movieId!:string
  constructor(
    private activeroute:ActivatedRoute,
    private _movieservice:MovietabaleService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.movieId=this.activeroute.snapshot.params['id']
    console.log(this.movieId);

    this._movieservice.getmoviebyId(this.movieId)
     .subscribe(res=>{
      console.log(res);
      this.movieObj=res
     })



    
  }



  onback(){
this.router.navigate(['movies'])
  }

}
