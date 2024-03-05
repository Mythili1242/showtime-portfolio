declare var google:any;  //global declaration
// https://developers.google.com/identity/gsi/web/guides/client-library   use this website for reference
// <script src="https://accounts.google.com/gsi/client" async></script> add this in index.html
// https://console.cloud.google.com/ to generate clent id
// new project->netflixclone,no organization->create->select project->quick access->api&services->Oauth consent screen->
//external->create->appname:netflixclone,mythiligalidevara82@gmail.com->appdomain:http://localhost:4200->
//developer contact info:mythiligalidevara82@gmail.com->save&continue->
//add or remove scopes->checklist firest 3 options->update->save &continue->
//testusers->save&continue->back to dashboard->credentials->create credentials->Oauthclient id->app type:webapplication->name:netflixclone->
//authorized javascript origins->add uri->http://localhost:4200->add uri->http://localhost->create->
//copy clent id 481209393873-qsjakm63m7l1hf34udjllfeilqh7g7et.apps.googleusercontent.com and paste it in login.component.ts client id field->ok->refresh your website
//click on signin with google and you can see all your mail ids

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
constructor(private router:Router){}
ngOnInit(): void {
  google.accounts.id.initialize({
    client_id:'481209393873-qsjakm63m7l1hf34udjllfeilqh7g7et.apps.googleusercontent.com',
    callback:(resp:any)=>{
console.log(resp)  //copy the credentials and paste it in jwt.io you can see name,email,picture
this.handleLogin(resp);
    }
  })
  google.accounts.id.renderButton(document.getElementById("google-btn"),{
    theme:'filled_blue',
    size:'large',
    shape:'rectangle',
    width:350,
  })
} 
handleLogin(response:any){
  if(response){
    //decode the token
    const payload=this.decodeToken(response.credential)
    //store in session
    sessionStorage.setItem("loggedInUser",JSON.stringify(payload))
    //navigate to homepage
    this.router.navigate(['profile']);
  }
}

private decodeToken(token:string){
  console.log(token.split(".")[1])
  return JSON.parse(atob(token.split(".")[1]))
  
}
}
