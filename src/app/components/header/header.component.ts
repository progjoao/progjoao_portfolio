import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() language: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  langTranslate() {
    this.language.emit()
  }

  

}
