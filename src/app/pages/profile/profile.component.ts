import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(private srv:MovieApiServiceService){}
name=JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
profilepic=JSON.parse(sessionStorage.getItem("loggedInUser")!).picture
email=JSON.parse(sessionStorage.getItem("loggedInUser")!).email
logOut(){
  this.srv.signOut();
}

}
