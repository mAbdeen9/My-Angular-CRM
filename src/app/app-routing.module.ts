import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MsgFromServerComponent } from './components/msg-from-server/msg-from-server.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGGuard } from './services/auth-g.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/Dashboard',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGGuard],
    children: [
      {
        path: 'Customers',
        component: CustomersComponent,
      },
      {
        path: 'Contacts',
        component: ContactsComponent,
      },
      {
        path: 'Dashboard',
        component: DashBoardComponent,
      },
    ],
  },
  {
    path: 'messageFromServer',
    component: MsgFromServerComponent,
    canActivate: [AuthGGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
