import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  public userList: MatTableDataSource<any>;
  public displayedColumns: string[] = ['id', 'name', 'lastname', 'login', 'email', 'creationDate', 'actions'];
  public showDrawer = true;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dashService: DashboardService, private dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer) { }

  ngAfterViewInit(): void {
    this.dashService.setDashboardTitle("Users");
    this.loadSampleDataWithDelay();
  }

  public openDialog() {
    this.dialog.open(UserDialogComponent);
  }

  announceSortChange(sortState: Sort) {
    console.log(this.sort);
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }

  }

  private loadSampleDataWithDelay() {
    setTimeout(() => {
      this.userList = new MatTableDataSource([
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
      ]);
      this.userList.sort = this.sort;
    }, 3000);
  }

}
