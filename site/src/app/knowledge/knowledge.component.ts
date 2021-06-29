import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  @Input() name = '';
  @Input() params = '';

  subKnowledges: string[];
  constructor() {
    this.subKnowledges = [];
  }

  ngOnInit(): void {
    this.subKnowledges = this.params.split(',');
    console.log(this.subKnowledges);
  }

}
