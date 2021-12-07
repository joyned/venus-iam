import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { HomeComponent } from './pages/home/home.component';
import { GroupFormComponent } from './pages/groups/group-form/group-form.component';
import { TokenSettingsComponent } from './pages/token-settings/token-settings.component';
import { RoleFormComponent } from './pages/roles/role-form/role-form.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserFormComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'roles/:id', component: RoleFormComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'groups/:id', component: GroupFormComponent },
      { path: 'settings', component: TokenSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
