import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database-i';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  passwordType: string = 'password';
  passwordShow: boolean = false;

  error_messages = {
    'name': [{
      type: 'required',
      message: 'Introduce un nombre de usuario.'
    },],
    'email': [{
      type: 'required',
      message: 'Introduce tu correo electrónico.'
    },],
    'password': [{
      type: 'required',
      message: 'Introduce tu contraseña.'
    },
    {
      type: 'minlength',
      message: 'Longitud de contraseña incorrecto.'
    },
    {
      type: 'maxlength',
      message: 'Longitud de contraseña incorrecto.'
    }
    ],
    'confirmpassword': [{
      type: 'required',
      message: 'Introduce tu contraseña.'
    },
    {
      type: 'minlength',
      message: 'Longitud de contraseña incorrecto.'
    },
    {
      type: 'maxlength',
      message: 'Longitud de contraseña incorrecto.'
    }
    ],
  }
  constructor(public formBuilder: FormBuilder, public database: IDatabase, public router: Router) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  onSubmit() {
    this.database.signUp(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password).then(() => {
      console.log('creado');
      this.router.navigate(['main']);
    }).catch(() => {
      console.log('fallo');
    });

  }

}

