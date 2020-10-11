import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-example';

  data : any[] = [{
    name: 'Nirmal Nemade',
    gender: 'Male',
    salary: '100000'
  },
  {
    name: 'Sujata Patil',
    gender: 'Female',
    salary: '20000'
  },
  {
    name: 'Vinod Patil',
    gender: 'Male',
    salary: '25000'
  }]

}
