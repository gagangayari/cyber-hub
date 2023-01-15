import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  items =['UGC Scholarship', 'NEET Form Fillup',
  'BA 3rd Sem Form Fillup Gauhati University',
  'Assam Direct Recruitment - 2023'
]
  constructor() { }

  ngOnInit(): void {
  }

}
