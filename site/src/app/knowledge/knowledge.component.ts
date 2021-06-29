import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  @Input() name = '';
  @Input() params = '';
  @Input() colors = '';

  style: string[];
  subKnowledges: string[];

  constructor() {
    this.subKnowledges = [];
    this.style = [];
  }

  ngOnInit(): void {
    this.subKnowledges = this.params.split(',');
    this.style = this.colors.split(',');
  }
}
