import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  language: boolean = false;

  onChangeTranslate() {
    console.log("deu certooo")
    this.language = !this.language;
  }
}
