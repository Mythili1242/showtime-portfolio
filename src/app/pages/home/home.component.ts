import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

constructor(private service:MovieApiServiceService){}

bannerResult:any=[];
trendingMovieResult:any=[];
actionMovieResult:any=[];
adventureMovieResult:any=[];
animationMovieResult:any=[];
comedyMovieResult:any=[];
documentaryMovieResult:any=[];
sciencefictionMovieResult:any=[];
thrillerMovieResult:any=[];

ngOnInit():void{
this.bannerData();
this.trendingData();
this.actionMovie();
this.adventureMovie();
this.animationMovie();
this.comedyMovie();
this.documentaryMovie();
this.scientificMovie();
this.thrillerMovie();
//this.tv();
}

//bannerdata
bannerData(){
  this.service.bannerApiData().subscribe(result=>{
    console.log(result,'bannerResult');
    this.bannerResult=result.results;
  })
}

//trendingdata
trendingData(){
  this.service.trendingMoviesApiData().subscribe(result=>{
    console.log(result,'trendingData#');
    this.trendingMovieResult=result.results;
  })
}

actionMovie(){
  this.service.fetchActionMovies().subscribe(result=>{
    console.log(result,'actionMovies#');
    this.actionMovieResult=result.results;
  })
}

adventureMovie(){
  this.service.fetchAdventureMovies().subscribe(result=>{
    console.log(result,'advMovies#');
    this.adventureMovieResult=result.results;
  })
}

comedyMovie(){
  this.service.fetchComedyMovies().subscribe(result=>{
    console.log(result,'acomedyMovies#');
    this.comedyMovieResult=result.results;
  })
}

animationMovie(){
  this.service.fetchActionMovies().subscribe(result=>{
    console.log(result,'animationMovies#');
    this.animationMovieResult=result.results;
  })
}

documentaryMovie(){
  this.service.fetchDocumentaryMovies().subscribe(result=>{
    console.log(result,'docMovies#');
    this.documentaryMovieResult=result.results;
  })
}

scientificMovie(){
  this.service.fetchScienceFictionMovies().subscribe(result=>{
    console.log(result,'actionMovies#');
    this.sciencefictionMovieResult=result.results;
  })
}

thrillerMovie(){
  this.service.fetchThrillerMovies().subscribe(result=>{
    console.log(result,'athrillerMovies#');
    this.thrillerMovieResult=result.results;
  })
}


}
