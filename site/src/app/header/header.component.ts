import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public copyToClipboard(): void {
    navigator.clipboard.writeText('lucasmonir@hotmail.com')
      .then(() => {
        alert('Email copied to ClipBoard, thank you for visiting!');
      });
  }

  public redirect(event: any): void {
    if (event != null) {
      window.open(`${event.getAttribute('href')}`);
    }
  }
}