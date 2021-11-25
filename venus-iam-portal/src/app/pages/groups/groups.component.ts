import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'creationDate', 'actions'];
  public groupList: any[];

  constructor(private dashService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.dashService.setDashboardTitle("Groups");
    this.loadSampleDataWithDelay();
  }


  public routeToForm(groupId: number) {
    this.router.navigateByUrl("/dashboard/groups/" + groupId);
  }

  private loadSampleDataWithDelay() {
    setTimeout(() => {
      this.groupList = [
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
