import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardTitle$ = new BehaviorSubject<any>(null);
  dashboardTittle: Observable<any> = this.dashboardTitle$.asObservable();

  constructor() { }

  setDashboardTitle(newValue: any) {
    this.dashboardTitle$.next(newValue);
  }
}
