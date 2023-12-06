import { Injectable } from '@angular/core';
import { log } from 'console';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  userIn: any;
  userInLogedIn:any;
    obser$= new Observable();
    Islogin: boolean = false;

  usersInformation : any []=[
    {
      username:"mahdi",
      password:"1234",
    },
    {
      username:"mohammad",
      password:"4321",
    },
  ]
  
  checkLogin( passwordU: string, usernameU:string ){

    this.userIn= this.usersInformation.filter((check) => usernameU === check.username  && passwordU === check.password  );

    if(this.userIn.length>0){
      this.userInLogedIn = this.userIn[0]
      this.obser$.subscribe ({

        next: (data) =>{
          data = this.userInLogedIn;
        }
        
      })
      this.Islogin = true
      return true;
    }else{
      return false;
    }
  }
}
