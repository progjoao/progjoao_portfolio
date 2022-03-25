import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import Swal from 'sweetalert2';

// import { DataForm, dataForm } from 'src/app/interfaces/dataform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  language: boolean = false;
  overviewMode: string = '';

  public dataForm: FormGroup;
  datasLocalStorage!: any;

  projects: any = [
    {
      id: 1,
      name: 'Alphaa io',
      image: '/assets/images/alphaa.io.png',
      likes: 0,
      link: 'https://www.alphaa.io/home',
    },
    {
      id: 2,
      name: 'Alphaa inc',
      image: '/assets/images/alphaainc.png',
      likes: 0,
      link: 'https://www.alphaainc.com/home',
    },
    {
      id: 3,
      name: 'Devseate',
      image: '/assets/images/devseate.png',
      likes: 0,
      link: 'https://www.devseate.com',
    },
    {
      id: 4,
      name: 'Jb Flipflop',
      image:'/assets/images/jchinelos.png',
      likes: 0,
      link: 'http://jchinelos.devseate.com/'},
    {
      id: 5,
      name: 'Ponto Da Alegria',
      image: '/assets/images/pizzaria.png',
      likes: 0,
      link: 'http://pizzaria.devseate.com/',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private LocalStorageService: LocalStorageService
  ) {
    this.dataForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      topic: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.overviewMode = 'study';
    this.saveUser();
    this.clearLocalStorage();
  }

  setOverviewMode(mode: string): void {
    this.overviewMode = mode;
  }

  saveUser() {
    if (this.dataForm.dirty && this.dataForm.valid) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Obrigado pelo contato, retornarei em breve',
        showConfirmButton: false,
        timer: 5000,
      });
      localStorage.setItem('formdata', JSON.stringify(this.dataForm.value));
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
