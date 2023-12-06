import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet , Router} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navarabzar',
  standalone: true,
  imports: [CommonModule, RouterOutlet , RouterModule],
  templateUrl: './navarabzar.component.html',
  styleUrl: './navarabzar.component.scss'
})
export class NavarabzarComponent {
onClicicklogin() {
  this.router.navigateByUrl('login');
}
item: any;

  constructor(private router: Router , public loging: LoginService){}
 
  menuItems: any[] =[
    {
      title:"Home" ,
      link:"home" ,
    },
    {
      title:"Product",
      link:"product",
    }
  ]
  onclick(link:string){
  this.router.navigateByUrl(link);
}

}
