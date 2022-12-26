import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data;
  constructor(private http: HttpClient) {
    this.getDetails();
  }

  getDetails() {
    this.getdetailsfromhttp().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }

  getdetailsfromhttp() {
    return this.http.get('https://api.npms.io/v2/search?q=scope:angular');
  }
}
