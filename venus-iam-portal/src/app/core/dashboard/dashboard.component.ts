import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentChecked {

  public pageTitle: string;
  public currentRoute: string;

  constructor(private dashService: DashboardService, private cdref: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    this.pageTitle = "Default title";
    this.currentRoute = this.router.url;
  }

  ngAfterContentChecked() {
    this.dashService.dashboardTittle.pipe().subscribe(title => this.pageTitle = title);
    this.cdref.detectChanges();
  }

  public routeByUrl(path: string) {
    this.router.navigateByUrl(path);
    this.currentRoute = path;
  }

  public getCurrentDashboardPath() {
    let currentDashPath: string = '';
    this.currentRoute.trim().split("/").forEach(path => {
      if (path) {
        currentDashPath += ' / '
        currentDashPath += path.charAt(0).toUpperCase() + path.slice(1);
      }
    });
    return currentDashPath;
  }

  public getItemMenuStyleClass(currentPath: string) {
    return this.currentRoute.startsWith(currentPath) ? 'menu-item-selected' : '';
  }

  public logout() {
    this.router.navigateByUrl('/');
  }


}
