import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Imovie } from 'src/app/model/movies';
import { MovietabaleService } from 'src/app/services/movietabale.service';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.scss']
})
export class MovietableComponent implements OnInit {
  displayedColumns: string[] = ['poster', 'title', 'release_date', 'rating'];
  dataSource = new MatTableDataSource<Imovie>()
  currentpage: number = 1
  tOtalMovies: number = 0;
  pagesize: number = 20

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _movieservice: MovietabaleService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._movieservice.fetchMovie(this.currentpage)
      .subscribe(res => {
        // console.log(res);
        this.dataSource.data = res.results
        this.tOtalMovies = res.total_results

      })
  }

  onpagechanfe(page:PageEvent){
    console.log(page);
    this.currentpage=page.pageIndex+1;
    this._movieservice.fetchMovie(this.currentpage)
    .subscribe(res => {
      console.log(res);
      this.dataSource.data = res.results
      this.tOtalMovies = res.total_results

    })
  }


  navigateTomovie(row:Imovie){
    console.log(row);
    this._router.navigate(['movies',row.id])
    

  }


  // ngAfterViewInit() {
  //   {
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   }

  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


}

