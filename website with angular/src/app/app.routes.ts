import { Routes } from '@angular/router';
import { NavarabzarComponent } from './navarabzar/navarabzar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
{
    path:"home",
    component: HomeComponent

},
{ 
    path:"product",
    component: ProductComponent
},
{
    path:"login",
    component:LoginComponent
},
{
    path:"profile",
    loadComponent: () => import("./users-profils/users-profils.component").then((a)=> a.UsersProfilsComponent)
},




];
