import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
data: any

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.data);
  }
  get trueData(){
    var loopedData: any = []
    this.data.forEach((data: any) => {
      if (data.result != ''){
        loopedData.push(data)
      }
    })
    return loopedData
  }
}
