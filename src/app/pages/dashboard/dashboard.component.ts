import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user_role : any;
  attendance_list:any; dashboard_data : any;
  constructor(private elementRef: ElementRef,private router: Router) {

    console.log(localStorage.getItem('role'));
    
   }

  ngOnInit(): void {
    this.user_role = localStorage.getItem('role');
    if(this.user_role==null)
    {
      this.router.navigate(['/pages-login']);
    }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.dashboard_data = {
      "total_employee": "145",
      "holidays": "5"
    };    
    this.attendance_list = [
      {
          "id": 1,
          "name": "Mr. Anuvab ", 
          "intime": "9.30am",
          "outtime": "18.30pm",
          "status": "Present",
          "status_color" : 'bg-success'
          
      },
      {
          "id": 2,
          "name": "Mrs. Radha ",
          "intime": "9.32am",
          "outtime": "18.35pm",
          "status": "Present",
          "status_color" : 'bg-success'
      },
      {
          "id": 3,
          "name": "Mr. Dipak ",       
          "intime": "9.35am",
          "outtime": "18.35pm",
          "status": "Present",
          "status_color" : 'bg-success'
      },
      {
        "id": 4,
        "name": "Mr. Arindam ",   
        "intime": "",
        "outtime": "",
        "status": "Absent",
        "status_color" : 'bg-danger'
      },
      {
        "id": 5,
        "name": "Mr. Tanmoy ", 
        "intime": "9.50am",
        "outtime": "18.40pm",
        "status": "Late",
        "status_color" : 'bg-warning'
      }
    ];
  }

}
