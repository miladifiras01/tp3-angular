import { Component, NgZone, OnInit } from '@angular/core';
import { User, UsersService } from '../users.service';
import * as ChartJs from 'chart.js/auto';
import { List } from 'immutable';
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css'],
})
export class RhComponent implements OnInit {
  oddUsers: List<User> = List<User>();
  evenUsers: List<User> = List<User>();

  chart: any;
  constructor(private userService: UsersService, private ngZone: NgZone) {
    this.oddUsers = this.userService.getOddOrEven(true);
    this.evenUsers = this.userService.getOddOrEven();
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.createChart();
    });
  }
  addOddUser(newUser: string) {
    this.oddUsers = this.userService.addUser(this.oddUsers, newUser);
    this.chart.data.datasets[0].data[0] = this.oddUsers.size;
    this.chart.update();
  }
  addEvenUser(newUser: string) {
    this.evenUsers = this.userService.addUser(this.evenUsers, newUser);
    this.chart.data.datasets[0].data[1] = this.evenUsers.size;
    this.chart.update();
  }
  createChart() {
    const data = [
      { users: 'Workers', count: this.oddUsers.size },
      { users: 'Boss', count: this.evenUsers.size },
    ];
    this.chart = new ChartJs.Chart('MyChart', {
      type: 'bar',
      data: {
        labels: data.map((row) => row.users),
        datasets: [
          {
            label: 'Entreprise stats',
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  }
}
