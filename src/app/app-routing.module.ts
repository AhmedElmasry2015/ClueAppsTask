import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
//{path:'',component:LandPageComponent},
// {path:'signup', component: SignUpComponent},
// {path:'signin',component:SignInComponent},
// {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
