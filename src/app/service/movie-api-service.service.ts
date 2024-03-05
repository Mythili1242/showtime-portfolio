declare var google:any;
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient,private router:Router) { }
  apikey="909853bbaded53ed5fe65baa705c098c";
  baseUrl="https://api.themoviedb.org/3";

  // bannerapidata
bannerApiData():Observable<any>{
  return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`)
}

//trendingmoviesapidata

trendingMoviesApiData():Observable<any>{
  return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`)
}

//searchmovie

getSearchMovie(data:any):Observable<any>{
  console.log(data,'movie#')
  return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
}

//getMovieDetails
getmovieDetails(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apikey}`)
}


//getMovieVideo
getMovieVideo(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`)
}

//getMovieCast
getMoviecast(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`)
}

//ActionMovies
fetchActionMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
}

//AdeventureMovies
fetchAdventureMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
}

//AnimationMovies
fetchAnimationMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
}

//ComedyMovies
fetchComedyMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
}

//DocumentaryMovies
fetchDocumentaryMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
}

//science fiction Movies
fetchScienceFictionMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
}

//thriller Movies
fetchThrillerMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
}

signOut(){
  google.accounts.id.disableAutoSelect();
  sessionStorage.removeItem("loggedInUser")
this.router.navigate(['/'])
}

}
