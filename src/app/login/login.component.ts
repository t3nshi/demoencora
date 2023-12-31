import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CoreService } from '../services/core.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  password = "";
  email = "";
  errorToast = false;
  encoraLogo = "data:image/png;base64,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";
form: FormGroup = new FormGroup({
   username: new FormControl(''),
   password: new FormControl(''),
 });
  error=true;
  constructor(private router:Router,
              private core: CoreService){

  }

  public async login(){



    const authenticated = await this.core.checkValidPassword(this.password,this.email);
    if (authenticated) {
      localStorage.setItem('token', Math.random().toString());
      this.router.navigate(['home']);
    } else {
      this.errorToast = true;
      setTimeout( ()=>{
        this.errorToast = false;
      }, 5000);
    }


  }
}
