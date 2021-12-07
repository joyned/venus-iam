import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'creationDate', 'actions'];
  public roleList: any[];

  constructor(private dashService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.dashService.setDashboardTitle("Roles");
    this.loadSampleDataWithDelay();
  }

  public routeToForm(id: number) {
    this.router.navigateByUrl('/dashboard/roles/' + id);
  }

  private loadSampleDataWithDelay() {
    setTimeout(() => {
      this.roleList = [
        {
          id: 1,
          name: 'manager',
          creationDate: '20/11/2020'
        },
        {
          id: 2,
          name: 'employee',
          creationDate: '20/11/2020'
        },
        {
          id: 3,
          name: 'form-builder',
          creationDate: '20/11/2020'
        },
        {
          id: 4,
          name: 'reviewer',
          creationDate: '20/11/2020'
        },
        {
          id: 5,
          name: 'default',
          creationDate: '20/11/2020'
        }
      ]

    }, 3000);
  }

}
