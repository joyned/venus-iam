import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public numOfUsers: number;
  public numOfRoles: number;
  public numOfGroups: number;
  public numOfLoginLastHour: number;

  public chartData: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public showYAxisLabel = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dashService: DashboardService) { }

  ngOnInit(): void {
    this.dashService.setDashboardTitle("Dashboard");
    this.loadSampleDataWithDelay();
  }

  private loadSampleDataWithDelay() {
    setTimeout(() => {
      this.numOfUsers = 50;
      this.numOfRoles = 10;
      this.numOfGroups = 5;
      this.numOfLoginLastHour = 12;

      this.chartData = [
        {
          "name": "Monday",
          "value": 53
        },
        {
          "name": "Tuesday",
          "value": 88
        },
        {
          "name": "Wednesday",
          "value": 60
        },
        {
          "name": "Thursday",
          "value": 90
        },
        {
          "name": "Friday",
          "value": 70
        },
        {
          "name": "Saturday",
          "value": 10
        },
        {
          "name": "Sunday",
          "value": 2
        }
      ];
    }, 3000);
  }

}
