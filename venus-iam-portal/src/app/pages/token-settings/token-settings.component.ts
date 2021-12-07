import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-settings',
  templateUrl: './token-settings.component.html',
  styleUrls: ['./token-settings.component.scss']
})
export class TokenSettingsComponent implements OnInit {

  public readonly lifeTimeOptions = [
    {
      name: "milliseconds",
      value: 10
    },
    {
      name: "seconds",
      value: 10
    },
    {
      name: "minutes",
      value: 10
    },
    {
      name: "hours",
      value: 10
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
