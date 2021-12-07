import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  public userList: any[];
  public displayedColumns: string[] = ['id', 'name', 'lastname', 'login', 'email', 'creationDate', 'actions'];

  constructor(private dashService: DashboardService, private router: Router) { }

  ngAfterViewInit(): void {
    this.dashService.setDashboardTitle("Users");
    this.loadSampleDataWithDelay();
  }

  public routeToForm(id: number) {
    this.router.navigateByUrl('/dashboard/users/' + id);
  }


  private loadSampleDataWithDelay() {
    setTimeout(() => {
      this.userList = [
        {
          id: 1,
          name: 'Bruno',
          lastname: 'Bizeray',
          login: 'bruno.bizeray',
          email: 'bruno.bizeray@test.com',
          creationDate: '05/10/2020'
        },
        {
          id: 2,
          name: 'João',
          lastname: 'Carlos',
          login: 'joao.carlos',
          email: 'joao.carlos@test.com',
          creationDate: '24/11/2020'
        },
        {
          id: 3,
          name: 'Ana',
          lastname: 'Maria',
          login: 'ana.maria',
          email: 'ana.maria@test.com',
          creationDate: '04/11/2021'
        },
        {
          id: 4,
          name: 'Joaquim',
          lastname: 'Costa',
          login: 'joaquim.costa',
          email: 'joaquim.costa@test.com',
          creationDate: '10/11/2021'
        },
        {
          id: 5,
          name: 'André',
          lastname: 'Gomes',
          login: 'andre.gomes',
          email: 'andre.gomes@test.com',
          creationDate: '26/04/2020'
        },
      ];
    }, 3000);
  }

}
