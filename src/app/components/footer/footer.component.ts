import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  language: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onChangeTranslate() {
    console.log("deu certooo")
    this.language = !this.language;
  }

}
