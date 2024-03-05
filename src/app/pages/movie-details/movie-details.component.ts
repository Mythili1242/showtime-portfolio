import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
constructor(private service:MovieApiServiceService,private router:ActivatedRoute,private sanitizer: DomSanitizer){}

getMovieDetailResult:any;
getMovieVideoResult:any;
getMovieCastResult:any;
iframeWidth: number = 800;  // Set your desired width
iframeHeight: number = 600; 
ngOnInit(): void {
  let getParamId=this.router.snapshot.paramMap.get('id');
  console.log(getParamId,'getParamid#')
  this.getMovie(getParamId);
  this.getVideo(getParamId);
  this.getMovieCast(getParamId);
}
  
getMovie(id:any){
  this.service.getmovieDetails(id).subscribe(result=>{console.log(result,'getMovieDetails#');
  this.getMovieDetailResult=result;
  })
}

getVideo(id:any){
  this.service.getMovieVideo(id).subscribe(result=>{console.log(result,'getMovieVideo#');
  result.results.forEach((element:any) => {
    if(element.type=='Trailer'){
      this.getMovieVideoResult=element.key;
    }
  });

  })
}

getMovieCast(id:any){
  this.service.getMoviecast(id).subscribe(result=>{console.log(result,'getMovieCast#');
  this.getMovieCastResult=result.cast;
})
}


showVideo: boolean = false;

get videoUrl(): SafeResourceUrl {
  const url = `https://www.themoviedb.org/video/play?key=${this.getMovieVideoResult}`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

openVideo() {
  this.showVideo = true;
}


}