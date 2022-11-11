import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { Beer } from 'src/app/interfaces/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.sass']
})
export class BeerListComponent implements OnInit {
  beers:Beer[];
  currentPageNumber: number = 1 ;
  pageLength:number = 10;
  lastPage:boolean = false;
  constructor(private beerService : BeerService) { 
  }

  ngOnInit(): void {
    this.beerService.getBeerList(this.currentPageNumber,this.pageLength).subscribe((beerslist:Beer[]) =>{
      this.beers = beerslist;
    });
  }

  updatePage(PageNumber: number){
    this.currentPageNumber = PageNumber;
    this.beerService.getBeerList(this.currentPageNumber,this.pageLength).subscribe((beerslist:Beer[]) =>{
      if(beerslist.length < this.pageLength){
        this.lastPage = true;
      }
      this.beers = beerslist;
    });
  }
}