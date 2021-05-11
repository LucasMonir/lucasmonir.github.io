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
        alert('Email copiado, obrigado pelo acesso!');
      });
  }

// public hideProject(id): void{
//   let proj = document.getElementById(id);

//   if (proj.style.display == 'block')
//     proj.style.visibility = 'none';
//   else
//     proj.style.visibility = 'block';
// }

}