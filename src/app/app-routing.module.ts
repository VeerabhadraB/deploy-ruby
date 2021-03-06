import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
export const allRoutes = [LoginComponent];
