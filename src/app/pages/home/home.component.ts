import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language: boolean = false;
  overviewMode: string = '';
  
  projects: any = [
    {id: 1, name: 'Alphaa io', image:'/assets/images/alphaa.io.png', likes: 601, link: 'https://www.alphaa.io/home'},
    {id: 2, name: 'Alphaa inc', image:'/assets/images/alphaainc.png', likes: 734, link: 'https://www.alphaainc.com/home'},
    {id: 3, name: 'Devseate', image:'/assets/images/devseate.png', likes: 457, link: 'https://www.devseate.com'},
    // {id: 4, name: 'Jb Flipflop', image:'/assets/images/jchinelos.png', likes: 983, link: 'http://jchinelos.devseate.com/'},
    {id: 5, name: 'Ponto Da Alegria', image:'/assets/images/pizzaria.png', likes: 552, link: 'http://pizzaria.devseate.com/'},
  ]

  

  constructor() { }

  ngOnInit(): void {
    this.overviewMode = 'study'
  }

  onChangeTranslate(): void {
    this.language = !this.language;
  }  

  setOverviewMode(mode: string): void {
    this.overviewMode = mode;
  }

}
