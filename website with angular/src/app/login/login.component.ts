import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormsModule,ReactiveFormsModule , FormBuilder} from '@angular/forms';
import { LoginService } from '../login.service';
import { RouterModule , Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule ,RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() enterSubmit= new EventEmitter<FormGroup>();

  form !:FormGroup;
  user:any[] =[];
  isLoginIn:boolean=false;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService, private routernavigate : Router){}


  ngOnInit():void{
    this.form =this.formBuilder.group({
      username:[''],
      password:['']
    });
  }

  loginChecking(){
    this.isLoginIn= this.loginService.checkLogin(this.form.value.password,this.form.value.username )
  }

      onclick() {
        this.enterSubmit.emit(this.form.value);
        let u = {
          username: this.form.value.username,
          password: this.form.value.password,
        }
        console.log(u)
        this.loginChecking()
        if (this.isLoginIn){
          console.log("yes")
          this.routernavigate.navigateByUrl("/profile");
        }

      }




  

}
