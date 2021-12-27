import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  x1: any;
  v1: any;
  x2: any;
  v2: any;
  toast = ''
  submitted = false;
  data = [{
    x1: 0,
    v1: 0,
    x2: 0,
    v2: 0,
    result: "",
  }]

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  onSubmit(){
  this.submitted= true
  let result = 'NO';
  for (let i = 0; i < 10000 && result == 'NO'; i++) {
      if (this.x1 + this.v1 * i == this.x2 + this.v2 * i) {
          result = 'YES';
      }
  }
  this.toast = result
  this.data.push({
  x1: this.x1,
  v1: this.v1,
  x2: this.x2,
  v2: this.v2,
  result: result,
});
localStorage.setItem("data", JSON.stringify(this.data));
  this.submitted = false
  }

  toTable(){
    this.router.navigate(['/history-table'])
  }
}
