import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisory',
  templateUrl: './divisory.component.html',
  styleUrls: ['./divisory.component.css']
})
export class DivisoryComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
