import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectLanguagueComponent } from '../../components/select-languague/select-languague.component';
import { I18nPipe } from '../../pipes/i18n.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, I18nPipe, TitleCasePipe, SelectLanguagueComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fgLogin : FormGroup = this._fb.group({
    user: ['ge_call@hotmail.com', Validators.required],
    password: ['123456', Validators.required]
  });

  constructor(private _fb: FormBuilder, private router: Router){
    localStorage.removeItem('isLogged');

  }

  goToHome(){
    localStorage.setItem('isLogged', 'true'); 
    this.router.navigateByUrl('home');
  }

  get validUser() {
    return this.fgLogin.get('user')?.invalid && (this.fgLogin.get('user')?.dirty || this.fgLogin.get('user')?. touched)
  }
  get validPassword() {
    return this.fgLogin.get('password')?.invalid && (this.fgLogin.get('password')?.dirty || this.fgLogin.get('password')?. touched)
  }
}
