import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { AuthTokens } from 'src/app/core/auth/tokens.model';
import { ApplicationMessages } from 'src/app/core/messages/applicationMessages';
import { FormMessages } from 'src/app/core/messages/formMessages';
import { LoadingSpinnerService } from 'src/app/core/spinner/spinner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '';
  error = '';
  recoverPassword = '/recovery';

  passwordVisible = false;
  password?: string;

  aplicationMessages = ApplicationMessages;
  formMessages = FormMessages;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    // public translate: TranslateService,
    // private translations: TranslationsService,
    private loadingSpinner: LoadingSpinnerService,
    private http: HttpClient,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters (or defaults to '/')
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams['returnUrl'] || '';
  }

  // convenience getter for easy access to form fields

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    this.loadingSpinner.show();
    this.http
      .post(environment.loginUrl, {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      })
      .subscribe({
        next: (res: any) => {
          this.authenticationService.login(
            res.access_token,
            res.user,
            true,
            res.permissions,
          );
          this.router.navigate(['/' + this.returnUrl]);
        },
        error: (error: string) => {
          if (error === 'Unauthorized') {
            this.error = 'Usuario o contraseña incorrecta';
          } else {
            this.error = 'Error de conexión con el servidor';
          }

          // this.error = error;
        },
        complete: () => {
          this.loadingSpinner.hide();
        },
      });
  }
}
