import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(form:NgForm)
  {
    console.log(form.value);

    let username = form.value.username;
    let password = form.value.password;

    if(username == 'admin')
    {
      localStorage.setItem('role','admin');
      localStorage.setItem('username','Admin');
      this.router.navigate(['/dashboard']);

    }
    else
    {
      localStorage.setItem('role','emp');
      localStorage.setItem('username','Employee');
      this.router.navigate(['/dashboard']);
    }
    
  }


}
